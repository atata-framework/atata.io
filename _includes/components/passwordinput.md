The password input description.

Simple sign-in page object:

```csharp
using _ = Atata.SampleApp.AutoTests.SignInPage;

namespace Atata.SampleApp.AutoTests
{
    [VerifyTitle]
    [VerifyH1]
    [NavigateTo("signin")]
    public class SignInPage : Page<_>
    {
        public TextInput<_> Email { get; private set; }

        public PasswordInput<_> Password { get; private set; }

        public Button<UsersPage, _> SignIn { get; private set; }
    }
}
```

and usage in the test method:

```csharp
Go.To<SignInPage>().
    Email.Set("example@mail.com").
    Password.Set("password").
    SignIn();
```

###### More documentation coming soon...