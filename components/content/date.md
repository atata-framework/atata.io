Represents any element containing date content. Default search is performed by the label. The default format is `"d"` (short date pattern, e.g. 6/15/2009).

```html
<span id="date">6/15/2009</span>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public Date<_> Date { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Date.Should.Equal(new DateTime(2016, 6, 15));
```

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}