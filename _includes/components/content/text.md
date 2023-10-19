Represents any element containing text content. Default search finds the first occurring element.

```html
<p id="description">Some description text</p>
```
```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public Text<_> Description { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Description.Should.BePresent().
    Description.Should.Contain("description text");
```

Supports `[Format]` settings attribute.
{:.info}