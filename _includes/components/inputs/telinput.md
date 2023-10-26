Represents the telephone number input control (`<input type="tel">`).
Default search is performed by the label.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='tel']", ComponentTypeName = "telephone input")]
public class TelInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="tel" id="phone">
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public TelInput<_> Phone { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .Phone.Set("+1234567890");
```
{:.test}