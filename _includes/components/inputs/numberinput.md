Represents the number input control.
Default search is performed by the label.
Handles any `input` element with `type="number"`, `type="text"` or without the defined type attribute.

{% include inherited.md from="Input" %}

Supports `[Format]`, `[Culture]` and `[RandomizeNumberSettings]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='number' or @type='text' or not(@type)]")]
public class NumberInput<TOwner> : Input<decimal?, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="number" id="amount">
```
{:.html}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public NumberInput<_> Amount { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Amount.Should.BeNull().
    Amount.Set(25).
    Amount.Should.Equal(25).
    Amount.Should.BeInRange(20, 30);
```
{:.test}