Represents the hidden input control. Default search is performed by the id attribute.

```html
<input type="hidden" id="some-hidden" value="somedata">
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public HiddenInput<_> SomeHidden { get; private set; }
    }
}
```
```cs
string hiddenValue;

Go.To<SamplePage>().
    HiddenInput.Get(out hiddenValue).
    HiddenInput.Should.Equal("somedata");
```

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}