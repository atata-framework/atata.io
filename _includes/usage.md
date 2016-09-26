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

```cs
[Test]
public void SignIn()
{
    Go.To<SignInPage>().
        Email.Set("admin@mail.com").
        Password.Set("abc123").
        SignIn();
}
```