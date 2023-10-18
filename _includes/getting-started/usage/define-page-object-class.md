`SignInPage.cs`
{:.file-name}

```cs
namespace AtataDemo.UITests;

using _ = SignInPage;

[Url("signin")]
public class SignInPage : Page<_>
{
    public TextInput<_> Email { get; private set; }

    public PasswordInput<_> Password { get; private set; }

    public Button<_> SignIn { get; private set; }
}
```
{:.page-object}

The aspects of the created page object:

- `[Url("signin")]` - sets the relative URL of the page to be navigated to. *Good for pages with static URLs.*
- Default search of `Email` and `Password` controls is performed by label. *Can be changed/configured.*
- Default search of `SignIn` button is performed by its text.