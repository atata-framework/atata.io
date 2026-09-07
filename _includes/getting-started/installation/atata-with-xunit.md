Atata.Xunit.v3 library is a bridge between Atata and xUnit v3 framework.
Check out Atata.Xunit.v3 documentation on [Atata.Xunit.v3 GitHub repository page](https://github.com/atata-framework/atata-xunit-v3).

Installation requires prior [installation of Atata package via NuGet](#install-via-nuget).
{:.info}

Add the following packages:

- {% include nuget.md name="Atata.Xunit.v3" %}
- {% include nuget.md name="xunit.v3.core.mtp-off" %} for non-MTP project.
  For MTP project consider {% include nuget.md name="xunit.v3.core.mtp-v2" %} package, for example.
  Check out [Microsoft Testing Platform (xUnit.net v3)](https://xunit.net/docs/getting-started/v3/microsoft-testing-platform).
- {% include nuget.md name="xunit.runner.visualstudio" %}

Add a C# class file `GlobalFixture.cs` for a global Atata configuration.

`GlobalFixture.cs`
{:.file-name}

```cs
using Atata;
using Atata.Xunit;

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
using Atata.Xunit;

namespace SampleApp.UITests;

public sealed class SampleTests : AtataTestSuite
{
    [Fact]
    public void SampleTest()
    {
        // Test method implementation
    }

    protected override void ConfigureTestAtataContext(AtataContextBuilder builder)
    {
        // Optional test method-specific configuration
    }
}
```

Check out example project [Atata Samples / Using Xunit](https://github.com/atata-framework/atata-samples/tree/main/Xunit).