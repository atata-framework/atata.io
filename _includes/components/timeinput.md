Represents the time input control. By default is being searched by the label. Handles any `input` element with `type="time"`, `type="text"` or without the type attribute defined.

```html
<input type="time" id="eventTime">
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById(TermCase.Camel)]
        public TimeInput<_> EventTime { get; private set; }
    }
}
```
```cs
TimeSpan time = TimeSpan.FromHours(11.5);

Go.To<SamplePage>().
    EventTime.Should.BeNull().
    EventTime.Set(time).
    EventTime.Should.Equal(time);
```

Supports `[Format]` and `[Culture]` settings attributes.
{:class="info"}