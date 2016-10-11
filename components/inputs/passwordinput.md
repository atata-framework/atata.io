Represents the password input control. Default search is performed by the label.

```html
<input type="password">
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindFirst]
        public PasswordInput<_> Password { get; private set; }
    }
}
```
```cs
string password;

Go.To<SamplePage>().
    Password.SetRandom(out password).
    Password.Should.Equal(password);
```

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:class="info"}