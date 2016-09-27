Represents any element containing text content. By default is being searched by the label (if is declared in the class inherited from `TableRow`, then by column header).

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

Supports `[Format]` and `[Culture]` settings attributes.