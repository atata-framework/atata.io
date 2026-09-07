Atata.MSTest library is a bridge between Atata and MSTest framework.
Check out Atata.MSTest documentation on [Atata.MSTest GitHub repository page](https://github.com/atata-framework/atata-mstest).

Installation requires prior [installation of Atata package via NuGet](#install-via-nuget).
{:.info}

Add the following packages:

- {% include nuget.md name="Atata.MSTest" %}
- {% include nuget.md name="MSTest.TestAdapter" %}
- {% include nuget.md name="MSTest.TestFramework" %}

Add a C# class file `GlobalFixture.cs` for a global Atata configuration.

`GlobalFixture.cs`
{:.file-name}

```cs
using Atata;
using Atata.MSTest;

namespace SampleApp.UITests;

[TestClass]
public static class GlobalFixture
{
    [AssemblyInitialize]
    public static void SetUpAssembly(TestContext testContext)
    {
        ConfigureAtataContextBaseConfiguration(AtataContext.BaseConfiguration);

        MSTestGlobalAtataContextSetup.SetUp(typeof(GlobalFixture), testContext, ConfigureGlobalAtataContext);
    }

    [AssemblyCleanup]
    public static void TearDownAssembly(TestContext testContext)
    {
        MSTestGlobalAtataContextSetup.TearDown(testContext);
    }

    private static void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder)
    {
        builder.Sessions.AddWebDriver(x => x
            .UseStartScopes(AtataContextScopes.Test)
            .UseChrome(x => x
                .WithArguments(
                    "disable-search-engine-choice-screen",
                    "window-size=1600,900"))
            .UseBaseUrl("https://atata.io/"));
    }

    private static void ConfigureGlobalAtataContext(AtataContextBuilder builder)
    {
        builder.SetUpWebDriversForUse();
    }
}
```

Add a C# class file for a test suite.

```cs
using Atata;
using Atata.MSTest;

namespace SampleApp.UITests;

[TestClass]
public sealed class SampleTests : AtataTestSuite
{
    [TestMethod]
    public void SampleTest()
    {
        // Test method implementation
    }

    [ConfiguresSuiteAtataContext]
    public static void ConfigureSuiteAtataContext(AtataContextBuilder builder)
    {
        // Optional test suite-specific configuration
    }

    protected override void ConfigureTestAtataContext(AtataContextBuilder builder)
    {
        // Optional test method-specific configuration
    }
}
```

Check out example project [Atata Samples / Using MSTest](https://github.com/atata-framework/atata-samples/tree/main/MSTest).