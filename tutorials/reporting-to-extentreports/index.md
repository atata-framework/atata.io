---
layout: article
title: Reporting to Extent Reports
description: How to configure Atata reporting to Extent Reports.
sources_path: https://github.com/atata-framework/atata-samples/blob/master/ExtentReports/AtataSamples.ExtentReports/
---

How to configure Atata reporting to [Extent Reports](https://extentreports.com/).
{:.lead}

{% capture download-section %}
{% include download-sample.html folder="ExtentReports" %}
{% endcapture %}
{{ download-section }}

## Packages

In addition to {% include nuget.md name="Atata" %} package,
the {% include nuget.md name="ExtentReports" %} package should be added to the project.
It is also recommended to add {% include nuget.md name="NLog" %} package,
as it's used in the sample project.

## Implementation

The functionality for Extent Reports is implemented in 4 class files:

- [**ExtentContext.cs**]({{ page.sources_path }}Infrastructure/ExtentContext.cs) -
  the main static class responsible for an initialization of Extent Reports.
  In this sample it attaches HTML reporter (`ExtentHtmlReporter`).
  Saves HTML report to AtataContext Artifacts root directory.
  Other Extent reporters can also be attached.
- [**ExtentLogConsumer.cs**]({{ page.sources_path }}Infrastructure/ExtentLogConsumer.cs) -
  is responsible for reporting of log messages.
  Also does formatting of message.
- [**ExtentArtifactAddedEventHandler.cs**]({{ page.sources_path }}Infrastructure/ExtentArtifactAddedEventHandler.cs) -
  is responsible for screenshots adding to report.
- [**AddArtifactsToExtentReportOnCleanUpEventHandler.cs**]({{ page.sources_path }}Infrastructure/AddArtifactsToExtentReportOnCleanUpEventHandler.cs) -
  adds "Artifacts" markup to test reports.

You can copy [all those files]({{ page.sources_path }}Infrastructure) to your project and modify according to your project's needs.

Later a separate Atata.ExtentReports NuGet package is planned to be published.
{:.info}

## Configuration

In order to connect Extent Reports functionality to Atata,
`ExtentLogConsumer`, `ExtentArtifactAddedEventHandler` and `AddArtifactsToExtentReportOnCleanUpEventHandler` should be added to `AtataContextBuilder`.

### SetUpFixture

1. `ExtentArtifactAddedEventHandler` can be added to `EventSubscriptions` in `SetUpFixture`.
1. To perform a generation of report file, `ExtentContext.Reports.Flush()` method should be executed
   as a final action of a tests run.
   In NUnit a good place for it is `OneTimeTearDown` method of `SetUpFixture.cs`.

[`SetUpFixture.cs`]({{ page.sources_path }}SetUpFixture.cs)
{:.file-name}

```cs
using Atata;
using Atata.ExtentReports;
using NUnit.Framework;

namespace AtataSamples.ExtentReports;

[SetUpFixture]
public class SetUpFixture
{
    [OneTimeSetUp]
    public void GlobalSetUp()
    {
        AtataContext.GlobalConfiguration
            .UseChrome()
                .WithArguments("headless=new", "window-size=1024,768")
            .UseBaseUrl("https://demo.atata.io/")
            .UseCulture("en-US")
            .UseAllNUnitFeatures()
            .LogConsumers.AddNLogFile()
            .ScreenshotConsumers.AddFile()
            .EventSubscriptions.Add(new ExtentArtifactAddedEventHandler());

        AtataContext.GlobalConfiguration.AutoSetUpDriverToUse();
    }

    [OneTimeTearDown]
    public void GlobalTearDown() =>
        ExtentContext.Reports.Flush();
}
```

### UITestFixture

`UITestFixture` is often used as a base UI test fixture class.
For this sample the implementation is more complicated as usual,
because additionally `AtataContext` for fixture is also added.

[`UITestFixture.cs`]({{ page.sources_path }}UITestFixture.cs)
{:.file-name}

```cs
using Atata;
using Atata.ExtentReports;
using NUnit.Framework;
using NUnit.Framework.Internal;

namespace AtataSamples.ExtentReports;

[TestFixture]
[Parallelizable(ParallelScope.Fixtures)]
public class UITestFixture
{
    protected AtataContext FixtureContext { get; set; }

    protected virtual bool UseFixtureDriverForTests => false;

    [OneTimeSetUp]
    public void InitFixtureContext() =>
        FixtureContext = AtataContext.Configure()
            .UseDriverInitializationStage(AtataContextDriverInitializationStage.OnDemand)
            .LogConsumers.Add<ExtentLogConsumer>()
                .WithMinLevel(LogLevel.Warn)
            .Build();

    [OneTimeTearDown]
    public void DisposeFixtureContext() =>
        FixtureContext?.Dispose();

    [SetUp]
    public void SetUp()
    {
        var testContextBuilder = AtataContext.Configure()
            .LogConsumers.Add<ExtentLogConsumer>()
                .WithMinLevel(LogLevel.Info)
            .EventSubscriptions.Add(new AddArtifactsToExtentReportOnCleanUpEventHandler());

        if (UseFixtureDriverForTests)
            testContextBuilder.UseDriver(FixtureContext.Driver);

        testContextBuilder.Build();
    }

    [TearDown]
    public void TearDown() =>
        AtataContext.Current?.CleanUp(quitDriver: !UseFixtureDriverForTests);

    protected virtual TPageObject BeingOn<TPageObject>()
        where TPageObject : PageObject<TPageObject> =>
        Go.To<TPageObject>(navigate: false);
}
```

## Tests

### Tests Using Own Drivers

[`UsingOwnDriverTests.cs`]({{ page.sources_path }}UsingOwnDriverTests.cs)
{:.file-name}

```cs
using Atata;
using NUnit.Framework;

namespace AtataSamples.ExtentReports;

public class UsingOwnDriverTests : UITestFixture
{
    [Test]
    public void Test1() =>
        Go.To<HomePage>()
            .Report.Screenshot()
            .Header.Should.Contain("Atata");

    [Test]
    public void Test2() =>
        Go.To<HomePage>()
            .Report.Screenshot()
            .AggregateAssert(x => x
                .PageTitle.Should.Contain("Atata")
                .Header.Should.Contain("Atata"));
}
```

For testing purposes, screenshots are captured right after a navigation to the home page.
Also when the test fails at any moment, a screenshot is captured as well.

### Tests Reusing Driver

In this test fixture class we create one shared driver for all class tests,
do navigation once in `SetUpFixture` method,
then every test starts with already navigated page
and does its verification.

```cs
using Atata;
using NUnit.Framework;

namespace AtataSamples.ExtentReports;

public class UsingSameDriverTests : UITestFixture
{
    protected override bool UseFixtureDriverForTests => true;

    [OneTimeSetUp]
    public void SetUpFixture() =>
        Go.To<SignInPage>();

    [Test]
    public void Email() =>
        BeingOn<SignInPage>()
            .Email.Should.BeVisible();

    [Test]
    public void Password() =>
        BeingOn<SignInPage>()
            .Password.Should.BeVisible();
}
```

## Results

After a tests run, the generated Extent HTML report can be found by relative path:
`\AtataSamples.ExtentReports\bin\Debug\net7.0\artifacts\{DATETIME_OF_RUN}\Report.html`.

![Extent Report](report.png?v3)

{{ download-section }}