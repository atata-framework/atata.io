### Define Settings

Global settings are applied via assembly attributes. Add `AtataSettings.cs` file to the project.

```cs
using Atata;

[assembly: Culture("en-us")]
[assembly: VerifyTitleSettings(Format = "{0} - Atata Sample App")]
```

### Define Page Object Class

```cs
using Atata;
using _ = SampleApp.AutoTests.SignInPage;

namespace SampleApp.AutoTests
{
    [VerifyTitle]
    [VerifyH1]
    [NavigateTo("signin")]
    public class SignInPage : Page<_>
    {
        public TextInput<_> Email { get; private set; }

        public PasswordInput<_> Password { get; private set; }

        public Button<_> SignIn { get; private set; }
    }
}
```

### Implement Test

The following sample uses additional [NUnit](https://www.nuget.org/packages/NUnit) and [ChromeDriver](https://www.nuget.org/packages/Selenium.WebDriver.ChromeDriver) NuGet packages.

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