Represents the local date/time input control (`<input type="datetime-local">`).
Default search is performed by the label.

The default format is `"yyyy-MM-ddTHH:mm"`.

{% include inherited.md from="Input" %}

#### Syntax

```cs
[ControlDefinition("input[@type='datetime-local']", ComponentTypeName = "local date/time input")]
[Format("g")]
[ValueGetFormat("yyyy-MM-ddTHH:mm")]
[ValueSetFormat("yyyy-MM-ddTHH:mm")]
[SetsValueUsingScript]
public class LocalDateTimeInput<TOwner> : Input<DateTime?, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="datetime-local" id="time">
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public DateInput<_> Time { get; private set; }
}
```
{:.page-object}

```cs
DateTime someTime = new DateTime(2023, 7, 9, 17, 59, 0);

Go.To<SamplePage>()
    .Birthday.Set(someTime)
    .Birthday.Should.Equal(someTime);
```
{:.test}