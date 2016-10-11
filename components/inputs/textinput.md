Represents the text input control. Default search is performed by the label. Handles any `input` element with `type="text"` or without the defined type attribute.

```html
<input type="text" id="first-name">
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public TextInput<_> FirstName { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    FirstName.Set("some text").
    FirstName.Should.Equal("some text").
    FirstName.Clear().
    FirstName.Should.BeNull();
```

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:class="info"}