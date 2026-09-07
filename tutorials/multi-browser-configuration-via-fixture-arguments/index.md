---
layout: article
title: Multi-browser configuration via fixture arguments
description: How to configure multi-browser tests application using NUnit fixture arguments.
---

{{ page.description }}
{:.lead}

{% capture download-section %}
{% include download-sample.html folder="MultipleBrowsersViaFixtureArguments" %}
{% endcapture %}
{{ download-section }}

This tutorial of multi-browser configuration is an alternative approach to [Multi-Browser Configuration via .runsettings files](https://atata.io/tutorials/multi-browser-configuration-via-runsettings-files/).
It is actually recommended to use `.runsettings` approach.
{:.warning}

## Prerequisites

Create a new Atata NUnit basic test project using the [guide](/getting-started/#installation).

Drivers for Chrome and Edge in this tutorial are setup
using {% include nuget.md name="Atata.WebDriverSetup" %} package.
{:.info}

## Global fixture

Create or update the following class:

`GlobalFixture.cs`
{:.file-name}

```cs
using OpenQA.Selenium.Chrome;

namespace AtataSamples.MultipleBrowsersViaFixtureArguments;

public sealed class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder)
    {
        builder.Sessions.AddWebDriver(x => x
            .UseStartScopes(AtataContextScopes.Test)
            .ConfigureChrome(x => x
                .WithArguments(
                    "start-maximized",
                    "disable-search-engine-choice-screen"))
            .ConfigureEdge(x => x
                .WithArguments(
                    "start-maximized",
                    "disable-search-engine-choice-screen"))
            .ConfigureFirefox()
            .ConfigureRemoteDriver("chrome-remote", x => x
                .WithRemoteAddress("http://127.0.0.1:8888/wd/hub")
                .WithOptions(new ChromeOptions
                {
                    // TODO: Set specific options.
                }))
            .UseBaseUrl("https://demo.atata.io/"));

        builder.LogConsumers.AddNLogFile();
    }

    protected override void ConfigureGlobalAtataContext(AtataContextBuilder builder) =>
        builder.SetUpWebDriversConfigured();
}
```

In `GlobalFixture` you can configure all browser drivers you want to use.
Notice that `builder.SetUpWebDriversConfigured();` will setup all drivers configured in `ConfigureAtataContextBaseConfiguration` method.

## Base test suite

Create a custom `TestSuite` class to use it as a base test suite class instead of standard `AtataTestSuite`.

`TestSuite.cs`
{:.file-name}

```cs
namespace AtataSamples.MultipleBrowsersViaFixtureArguments;

[TestFixture(WebDriverAliases.Chrome)]
[TestFixture(WebDriverAliases.Edge)]
////[TestFixture(WebDriverAliases.Firefox)]
////[TestFixture("chrome-remote")]
[Parallelizable]
public abstract class TestSuite : AtataTestSuite
{
    private readonly string _driverAlias;

    protected TestSuite(string driverAlias) =>
        _driverAlias = driverAlias;

    protected override void ConfigureTestAtataContext(AtataContextBuilder builder) =>
        builder.Sessions.ConfigureWebDriver(x => x
            .UseDriver(_driverAlias));
}
```

Using `[TestFixture(...)]` attribute you can specify any number of drivers you want to use passing driver alias as a parameter.
Driver alias is passed to fixture via constructor argument and then is used in `ConfigureTestAtataContext` method to specify which driver to use for particular test (`UseDriver(driverAlias)`).

Instead of using `[TestFixture]` attribute you can also use `[TestFixtureSource]` attribute.

## Page object

Create a simple page object class:

`HomePage.cs`
{:.file-name}

```cs
namespace AtataSamples.MultipleBrowsersViaFixtureArguments;

using _ = HomePage;

public sealed class HomePage : Page<_>
{
    public H1<_> Header { get; private set; }
}
```

## Test suite

Now we can create a specific test suite class with a single test.
Don't forget to define a constructor and pass the argument to the base `TestSuite` class.

`HomeTests.cs`
{:.file-name}

```cs
namespace AtataSamples.MultipleBrowsersViaFixtureArguments;

public sealed class HomeTests : TestSuite
{
    public HomeTests(string driverAlias)
        : base(driverAlias)
    {
    }

    [Test]
    public void Home() =>
        Go.To<HomePage>()
            .Header.Should.Be("Atata Sample App");
}
```

## Run tests

Build project and open Test Explorer panel in Visual Studio.
For `Home` test you can find 2 items in the Test Explorer panel:

![Test Explorer: tests](test-explorer-tests.png?v2)

Run all tests and check the results.

*Please note that current tutorial requires Chrome and Edge browsers to be installed.*

{{ download-section }}