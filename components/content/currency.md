Represents any element containing currency content. Default search is performed by the label. The default format is `"C2"` (e.g. $123.45).

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
{:.info}