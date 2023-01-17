It is a more custom approach to create Atata testing project.
To get started just add [**Atata NuGet package**]({{ site.links.atata_nuget }})
to the project of **Class Library** (.NET Framework, .NET Core or .NET 5+) type in Visual Studio.

<code class="language-nugetpm">
PM> Install-Package Atata
</code>

The **Atata** package depends on the following packages, which are added automatically:

- {% include nuget.md name="Selenium.WebDriver" %}
- {% include nuget.md name="Atata.WebDriverExtras" %}

You might also need to install {% include nuget.md name="Atata.WebDriverSetup" %} package
for auto-setup of browser drivers, e.g. `chromedriver`, `geckodriver`, etc.
This is a recommended option.
Alternatively, you can install a driver package for specific browser:
{% include nuget.md name="Selenium.WebDriver.ChromeDriver" %},
{% include nuget.md name="Selenium.WebDriver.IEDriver" %},
etc.
But be aware to keep version synchronization of browser and driver.
{:.warning}

You are also free to select any test engine framework:
NUnit, Xunit, MSTest, SpecFlow, etc.

For .NET Core and .NET 5+ projects it is required also to add {% include nuget.md name='Microsoft.NET.Test.Sdk' %}
package to the project that contains tests (no matter NUnit, xUnit, MSTest, etc.).
{:.warning}

#### NUnit Project Configuration

In addition to {% include nuget.md name="Atata" %} NuGet package, add the following packages:

- {% include nuget.md name="Atata.WebDriverSetup" %}
- {% include nuget.md name="NUnit" %}
- {% include nuget.md name="NUnit3TestAdapter" %}

Then add 2 C# class files.

The first `SetUpFixture` class sets the global Atata configuration,
like which browser driver to use, basic URL, etc.
Then it sets up an appropriate driver executable for the browser to use.

`SetUpFixture.cs`
{:.file-name}

```cs
using Atata;
using NUnit.Framework;

namespace SampleApp.UITests
{
    [SetUpFixture]
    public class SetUpFixture
    {
        [OneTimeSetUp]
        public void GlobalSetUp()
        {
            AtataContext.GlobalConfiguration
                .UseChrome()
                    .WithArguments("start-maximized")
                .UseBaseUrl("https://atata.io/")
                .UseCulture("en-US")
                .UseAllNUnitFeatures();

            AtataContext.GlobalConfiguration.AutoSetUpDriverToUse();
        }
    }
}
```

The second `UITestFixture` class is the base class for all test fixture classes that have UI tests.
It just starts an Atata session before the test run and closes it after the test is finished.

`SetUpFixture.cs`
{:.file-name}

```cs
using Atata;
using NUnit.Framework;

namespace SampleApp.UITests
{
    [TestFixture]
    [Parallelizable(ParallelScope.Self)]
    public class UITestFixture
    {
        [SetUp]
        public void SetUp()
        {
            AtataContext.Configure().Build();
        }

        [TearDown]
        public void TearDown()
        {
            AtataContext.Current?.CleanUp();
        }
    }
}
```

#### Xunit Project Configuration

Check out [Xunit Atata sample project](https://github.com/atata-framework/atata-samples/tree/master/Xunit).

#### MSTest Project Configuration

Check out [MSTest Atata sample project](https://github.com/atata-framework/atata-samples/tree/master/MSTest).

#### SpecFlow Project Configuration

Check out [SpecFlow Atata sample project](https://github.com/atata-framework/atata-samples/tree/master/SpecFlow).