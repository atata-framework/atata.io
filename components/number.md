Represents any element containing number content. By default is being searched by the label (if is declared in the class inherited from `TableRow`, then by column header).

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
{:class="info"}