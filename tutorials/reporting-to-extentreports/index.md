---
layout: article
title: Reporting to ExtentReports
description: How to configure Atata reporting to ExtentReports.
sources_path: https://github.com/atata-framework/atata-samples/blob/main/ExtentReports/AtataSamples.ExtentReports/
---

How to configure Atata reporting to [ExtentReports](https://extentreports.com/).
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

The functionality for ExtentReports is implemented in 6 class files:

- [**ExtentContext.cs**]({{ page.sources_path }}Infrastructure/ExtentContext.cs) -
  the main static class responsible for an initialization of ExtentReports.
  In this sample it attaches HTML reporter (`ExtentSparkReporter`).
  Saves HTML report to `AtataContext` Artifacts root directory.
  Other Extent reporters can also be attached.
- [**ExtentLogConsumer.cs**]({{ page.sources_path }}Infrastructure/ExtentLogConsumer.cs) -
  is responsible for reporting of log messages.
- [**AddScreenshotToExtentLogEventHandler.cs**]({{ page.sources_path }}Infrastructure/AddScreenshotToExtentLogEventHandler.cs) -
  adds screenshots to report.
- [**AddArtifactListToExtentLogEventHandler.cs**]({{ page.sources_path }}Infrastructure/AddArtifactListToExtentLogEventHandler.cs) -
  adds "Artifacts" list to report. 
  Basically, a list of test artifact files, e.g., screenshots, snapshots, traces, etc.
- [**StartExtentTestItemEventHandler.cs**]({{ page.sources_path }}Infrastructure/StartExtentTestItemEventHandler.cs) -
  creates/starts `ExtentTest` node.
- [**EndExtentTestItemEventHandler.cs**]({{ page.sources_path }}Infrastructure/EndExtentTestItemEventHandler.cs) -
  ends `ExtentTest` node.

You can copy [all those files]({{ page.sources_path }}Infrastructure) to your project and modify according to your project's needs.

Later a separate Atata.ExtentReports NuGet package is planned to be created and published.
{:.info}

## Configuration

In order to connect ExtentReports functionality to Atata,
a configuration of `AtataContext.GlobalConfiguration` can be done in `SetUpFixture.GlobalSetUp`.

### SetUpFixture

1. `ExtentLogConsumer` should be added to `LogConsumers`.
1. `StartExtentTestItemEventHandler`, `AddScreenshotToExtentLogEventHandler`,
   `AddArtifactListToExtentLogEventHandler` and `EndExtentTestItemEventHandler`
   should be added to `EventSubscriptions`.
1. To perform a generation of report file, `ExtentContext.Flush()` method should be executed
   as a final action of a tests run.
   In NUnit a good place for it is `OneTimeTearDown` method of `SetUpFixture`.

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
            .LogConsumers.Add<ExtentLogConsumer>()
                .WithMinLevel(LogLevel.Info)
                .WithSectionEnd(LogSectionEndOption.IncludeForBlocks)
            .EventSubscriptions.Add(new StartExtentTestItemEventHandler())
            .EventSubscriptions.Add(new AddScreenshotToExtentLogEventHandler())
            .EventSubscriptions.Add(new AddArtifactListToExtentLogEventHandler())
            .EventSubscriptions.Add(new EndExtentTestItemEventHandler());

        AtataContext.GlobalConfiguration.AutoSetUpDriverToUse();
    }

    [OneTimeTearDown]
    public void GlobalTearDown() =>
        ExtentContext.Flush();
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
            .Build();

    [OneTimeTearDown]
    public void DisposeFixtureContext() =>
        FixtureContext?.Dispose();

    [SetUp]
    public void SetUp()
    {
        var testContextBuilder = AtataContext.Configure();

        if (UseFixtureDriverForTests)
            testContextBuilder
                .UseDriver(() => FixtureContext.Driver)
                .UseDisposeDriver(false);

        testContextBuilder.Build();
    }

    [TearDown]
    public void TearDown() =>
        AtataContext.Current?.Dispose();
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
        Go.On<SignInPage>()
            .Email.Should.BeVisible();

    [Test]
    public void Password() =>
        Go.On<SignInPage>()
            .Password.Should.BeVisible();
}
```

## Results

After a tests run, the generated Extent HTML report can be found by relative path:
`\AtataSamples.ExtentReports\bin\Debug\net6.0\artifacts\{DATETIME_OF_RUN}\Report.html`.

![Extent Report](report.png?v5)

{{ download-section }}