Represents the hidden input control (`<input type="hidden">`) with text data.
Default search finds the first occurring `<input type="hidden">` element.

```html
<input type="hidden" id="some-hidden" value="somedata">
```
```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public HiddenInput<_> SomeHidden { get; private set; }
    }
}
```
```cs
string hiddenValue;

Go.To<SamplePage>().
    HiddenInput.Get(out hiddenValue). // Gets value and sets to variable.
    HiddenInput.Should.Equal("somedata"); // Verifies value.
```

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}