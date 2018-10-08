Represents any element containing time content. Default search finds the first occurring element.

```html
<span id="time-of-day">2:45 PM</span>
```
```cs
using Atata;

namespace SampleApp.UITets
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        [Format("h:mm tt")]
        public Time<_> TimeOfDay { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    TimeOfDay.Should.Equal(new TimeSpan(14, 45, 0));
```

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}