### Define Page Object Class

```cs
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

```cs
using NUnit.Framework;

namespace SampleApp.AutoTests
{
    [TestFixture]
    public class SignInTest : AutoTest
    {
        [SetUp]
        public void SetUp()
        {
            AtataContext.Build().
                UseFirefox().
                UseBaseUrl("http://atata-framework.github.io/atata-sample-app/#!/").
                UseNUnitTestName().
                UseNUnitTestContextLogging().
                SetUp();
        }

        [Test]
        public void SignIn()
        {
            Go.To<SignInPage>().
                Email.Set("example@mail.com").
                Password.Set("password").
                SignIn();
        }
    }
}
```