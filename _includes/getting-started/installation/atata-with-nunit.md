Atata.NUnit library is a bridge between Atata and NUnit framework.
Check out Atata.NUnit documentation on [Atata.NUnit GitHub repository page](https://github.com/atata-framework/atata-nunit).

Installation requires prior [installation of Atata package via NuGet](#install-via-nuget).
{:.info}

Add the following packages:

- {% include nuget.md name="Atata.NUnit" %}
- {% include nuget.md name="NUnit" %}
- {% include nuget.md name="NUnit3TestAdapter" %}

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

Add a C# class file for a test suite.

```cs
using Atata;
using Atata.NUnit;

namespace SampleApp.UITests;

public sealed class SampleTests : AtataTestSuite
{
    [Test]
    public void SampleTest()
    {
        // Test method implementation
    }

    protected override void ConfigureSuiteAtataContext(AtataContextBuilder builder)
    {
        // Optional test suite-specific configuration
    }

    protected override void ConfigureTestAtataContext(AtataContextBuilder builder)
    {
        // Optional test method-specific configuration
    }
}
```

Check out example projects:
- [Atata Samples / NUnit / Basic Test Project](https://github.com/atata-framework/atata-samples/tree/main/NUnit.BasicTestProject)
- [Atata Samples / NUnit / Advanced Test Project](https://github.com/atata-framework/atata-samples/tree/main/NUnit.AdvancedTestProject)