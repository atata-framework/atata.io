Represents the password input control (`<input type="password">`).
Default search is performed by the label.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='password']")]
public class PasswordInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="password">
```
{:.html}

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindFirst]
        public PasswordInput<_> Password { get; private set; }
    }
}
```
{:.page-object}

```cs
string password;

Go.To<SamplePage>().
    Password.SetRandom(out password).
    Password.Should.Equal(password);
```
{:.test}