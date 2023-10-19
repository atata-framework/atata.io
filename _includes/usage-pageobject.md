```cs
using Atata;

namespace SampleApp.UITests;

using _ = SignInPage;

[Url("signin")] // Relative URL of the page.
public class SignInPage : Page<_>
{
    [FindById] // Finds text input by "email" id.
    public TextInput<_> Email { get; private set; }

    [FindById] // Finds password input by "password" id.
    public PasswordInput<_> Password { get; private set; }

    [FindByContent] // Finds button by "Sign In" text content.
    public Button<_> SignIn { get; private set; }
}
```