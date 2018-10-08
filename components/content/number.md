Represents any element containing number content. Default search finds the first occurring element.

```html
<span id="amount">15</span>
```
```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

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