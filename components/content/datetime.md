Represents any element containing date and time content. Default search finds the first occurring element. The default format is `"g"` (general date/time pattern (short time), e.g. 6/15/2009 1:45 PM).

```html
<span id="date-time">5/15/2016 1:45 PM</span>
```
```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public DateTime<_> DateTime { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    DateTime.Should.Equal(new DateTime(2016, 5, 15, 13, 45, 0));
```

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}