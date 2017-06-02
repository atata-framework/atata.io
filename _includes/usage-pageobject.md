```cs
using Atata;

namespace SampleApp.AutoTests
{
    using _ = SignInPage;

    [Url("signin")] // Relative URL of the page.
    [VerifyH1] // Verifies that H1 header text equals "Sign In".
    public class SignInPage : Page<_>
    {
        public TextInput<_> Email { get; private set; }

        public PasswordInput<_> Password { get; private set; }

        public Button<_> SignIn { get; private set; }
    }
}
```