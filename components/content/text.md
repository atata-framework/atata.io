Represents any element containing text content. Default search is performed by the label.

```html
<p id="description">Some description text</p>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public Text<_> Description { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Description.Should.Exist().
    Description.Should.Contain("description text");
```

Supports `[Format]` settings attribute.
{:.info}