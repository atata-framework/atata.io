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
the {% include nuget.md name="Atata.ExtentReports" %} package should be added to the project.
It is also recommended to add {% include nuget.md name="Atata.NLog" %} package,
as it's used in the sample project.

## Configuration

In order to connect ExtentReports functionality to Atata,
you need to call `builder.UseExtentReports()` in `ConfigureAtataContextBaseConfiguration` method of `GlobalFixture` class.

Here is the full code of `GlobalFixture` class for this tutorial:

[`GlobalFixture.cs`]({{ page.sources_path }}GlobalFixture.cs)
{:.file-name}

```cs
namespace AtataSamples.ExtentReports;

public sealed class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder)
    {
        builder.Sessions.AddWebDriver(x => x
            .UseStartScopes(AtataContextScopes.Test)
            .UseChrome(x => x
                .WithArguments(
                    "headless=new",
                    "window-size=1024,768",
                    "disable-search-engine-choice-screen"))
            .UseBaseUrl("https://demo.atata.io/"));

        builder.LogConsumers.AddNLogFile();
        builder.UseExtentReports();
    }

    protected override void ConfigureGlobalAtataContext(AtataContextBuilder builder) =>
        builder.SetUpWebDriversForUse();
}
```

## Tests

### Tests using own drivers

[`UsingOwnDriverTests.cs`]({{ page.sources_path }}UsingOwnDriverTests.cs)
{:.file-name}

```cs
namespace AtataSamples.ExtentReports;

public sealed class UsingOwnDriverTests : AtataTestSuite
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

### Tests using same driver

In this test suite class we create one shared driver session via `[StartSessionAndShare(typeof(WebDriverSession))]`
attribute for all class tests,
do navigation once in `SetUpFixture` method,
then every test starts with already navigated page
and does its verification.

[`UsingOwnDriverTests.cs`]({{ page.sources_path }}UsingOwnDriverTests.cs)
{:.file-name}

```cs
namespace AtataSamples.ExtentReports;

[Parallelizable(ParallelScope.Self)]
[StartSessionAndShare(typeof(WebDriverSession))]
public sealed class UsingSameDriverTests : AtataTestSuite
{
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
`\AtataSamples.ExtentReports\bin\Debug\net10.0\artifacts\{DATETIME_OF_RUN}\Report.html`.

![Extent Report](report.png?v6)

{{ download-section }}