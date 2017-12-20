Represents the text input control (`<input type="text">`).
Default search is performed by the label.
Handles any `input` element with `type="text"` or without the defined type attribute.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:class="info"}

#### Syntax

```cs
[ControlDefinition("input[@type='text' or not(@type)]")]
public class TextInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="text" id="first-name">
```
{:.html}

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public TextInput<_> FirstName { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    FirstName.Set("some text").
    FirstName.Should.Equal("some text").
    FirstName.Clear().
    FirstName.Should.BeNull();
```
{:.test}