`SignInPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataDemo.UITests
{
    using _ = SignInPage;

    [Url("signin")]
    [VerifyH1]
    public class SignInPage : Page<_>
    {
        public TextInput<_> Email { get; private set; }

        public PasswordInput<_> Password { get; private set; }

        public Button<_> SignIn { get; private set; }
    }
}
```
{:.page-object}

`SignInPage` is a page object class that is marked with a few attributes:

- `[Url("signin")]` - sets the relative URL of the page to be navigated to.
- `[VerifyH1]` - upon page initialization verifies that the page contains `<h1>` HTML element with "Sign In" text.

Default element search of `Email` and `Password` controls is performed by label.
Default search of `SignIn` button is performed by its text.