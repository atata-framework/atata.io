Atata.Reqnroll.NUnit library is a bridge between Atata and Reqnroll+NUnit framework.
Check out Atata.Reqnroll.NUnit documentation on [Atata.Reqnroll.NUnit GitHub repository page](https://github.com/atata-framework/atata-reqnroll-nunit).

Installation requires prior [installation of Atata package via NuGet](#install-via-nuget).
{:.info}

Add the following packages:

- {% include nuget.md name="Atata.NUnit" %}
- {% include nuget.md name="Atata.Reqnroll.NUnit" %}
- {% include nuget.md name="NUnit" %}
- {% include nuget.md name="NUnit3TestAdapter" %}
- {% include nuget.md name="Reqnroll.NUnit" %}

Add a C# class file `GlobalFixture.cs` for a global Atata configuration.

`GlobalFixture.cs`
{:.file-name}

```cs
using Atata;
using Atata.NUnit;

namespace SampleApp.UITests;

public sealed class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder)
    {
        builder.Sessions.AddWebDriver(x => x
            .UseStartScopes(AtataContextScopes.Test)
            .UseChrome(x => x
                .WithArguments(
                    "disable-search-engine-choice-screen",
                    "window-size=1600,900"))
            .UseBaseUrl("https://atata.io/"));
    }

    protected override void ConfigureGlobalAtataContext(AtataContextBuilder builder)
    {
        builder.SetUpWebDriversForUse();
    }
}
```

Add a C# class file `GlobalHooks.cs` for a Reqnroll global hooks.

```cs
using System.Diagnostics.CodeAnalysis;
using Atata;
using Atata.Reqnroll.NUnit;
using Reqnroll;

namespace SampleApp.UITests;

[Binding]
public sealed class GlobalHooks
{
    [BeforeFeature]
    public static void SetUpFeature(FeatureContext featureContext) =>
        ReqnrollAtataContextSetup.SetUpFeature(featureContext, ConfigureFeatureAtataContext);

    [AfterFeature]
    public static void TearDownFeature(FeatureContext featureContext) =>
        ReqnrollAtataContextSetup.TearDownFeature(featureContext);

    [BeforeScenario]
    [SuppressMessage("Performance", "CA1822:Mark members as static")]
    public void SetUpScenario(FeatureContext featureContext, ScenarioContext scenarioContext) =>
        ReqnrollAtataContextSetup.SetUpScenario(featureContext, scenarioContext, ConfigureScenarioAtataContext);

    [AfterScenario]
    [SuppressMessage("Performance", "CA1822:Mark members as static")]
    public void TearDownScenario(ScenarioContext scenarioContext) =>
        ReqnrollAtataContextSetup.TearDownScenario(scenarioContext);

    private static void ConfigureFeatureAtataContext(
        AtataContextBuilder builder,
        FeatureContext featureContext)
    {
        // Add extra configuration for feature AtataContext
    }

    private static void ConfigureScenarioAtataContext(
        AtataContextBuilder builder,
        FeatureContext featureContext,
        ScenarioContext scenarioContext)
    {
        // Add extra configuration for scenario AtataContext
    }
}
```

Add a C# class file for Reqnroll step definitions.

```cs
using Atata;
using Reqnroll;

namespace SampleApp.UITests;

[Binding]
public sealed class SampleSteps : Steps
{
    [Given(@"I am on the Sample page")]
    public static void GivenIAmOnTheSamplePage() =>
        Go.To<OrdinaryPage>();
}
```

Add a feature file according to Reqnroll documentation.

Check out example project [Atata Samples / Using Reqnroll](https://github.com/atata-framework/atata-samples/tree/main/Reqnroll).