Represents the time input control.
Default search is performed by the label.
Handles any `input` element with `type="time"`, `type="text"` or without the defined type attribute.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='text' or @type='time' or not(@type)]")]
public class TimeInput<TOwner> : Input<TimeSpan?, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="time" id="eventTime">
```
{:.html}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById(TermCase.Camel)]
        public TimeInput<_> EventTime { get; private set; }
    }
}
```
{:.page-object}

```cs
TimeSpan time = TimeSpan.FromHours(11.5);

Go.To<SamplePage>().
    EventTime.Should.BeNull().
    EventTime.Set(time).
    EventTime.Should.Equal(time);
```
{:.test}