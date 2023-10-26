Represents the email input control (`input type="email"`).
Default search is performed by the label.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='email']")]
public class EmailInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="email" id="email">
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public EmailInput<_> Email { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .Email.Set("some@mail.com");
```
{:.test}