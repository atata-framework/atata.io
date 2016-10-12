Represents any element containing currency content. Default search is performed by the label (if is declared in the class inherited from `TableRow`, then by column header).

```html
<span id="price">$1,054.50</span>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public Currency<_> Price { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Price.Should.Equal(1054.50m);
```

Supports `[Format]` and `[Culture]` settings attributes.
{:class="info"}