Represents the hidden input control (`<input type="hidden">`).
Default search finds the first occurring `<input type="hidden">` element.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='hidden']", Visibility = Visibility.Hidden)]
[ControlFinding(typeof(FindFirstAttribute))]
public class HiddenInput<T, TOwner> : Input<T, TOwner>
    where TOwner : PageObject<TOwner>
```

```cs
public class HiddenInput<TOwner> : HiddenInput<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="hidden" id="some-hidden" value="somedata">
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    public HiddenInput<_> SomeHidden { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .SomeHidden.Get(out string hiddenValue) // Gets value and sets to variable.
    .SomeHidden.Should.Equal("somedata"); // Verifies value.
```
{:.test}