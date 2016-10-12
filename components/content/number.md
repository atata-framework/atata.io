Represents any element containing number content. Default search is performed by the label.

```html
<span id="amount">15</span>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public Number<_> Amount { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Amount.Should.Equal(15);
```

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}