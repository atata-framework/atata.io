The following sample uses additional [NUnit](https://www.nuget.org/packages/NUnit) and [ChromeDriver](https://www.nuget.org/packages/Selenium.WebDriver.ChromeDriver) NuGet packages.
{:.warning}

```cs
using Atata;
using NUnit.Framework;

namespace SampleApp.AutoTests
{
    [TestFixture]
    public class SignInTest
    {
        [SetUp]
        public void SetUp()
        {
            AtataContext.Build().
                UseChrome().
                UseBaseUrl("http://atata-framework.github.io/atata-sample-app/#!/").
                UseNUnitTestName().
                UseNUnitTestContextLogging().
                LogNUnitError().
                SetUp();
        }

        [TearDown]
        public void TearDown()
        {
            AtataContext.Current.CleanUp();
        }

        [Test]
        public void SignIn()
        {
            Go.To<SignInPage>().
                Email.Set("admin@mail.com").
                Password.Set("abc123").
                SignIn();
        }
    }
}
```