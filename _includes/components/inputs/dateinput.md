Represents the date input control.
Default search is performed by the label.
Handles any `input` element with `type="date"`, `type="text"` or without the defined type attribute.

The default format is `"d"` (short date pattern, e.g. 6/15/2009).

{% include inherited.md from="Input" %}

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='text' or @type='date' or not(@type)]")]
[Format("d")]
public class DateInput<TOwner> : Input<DateTime?, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="date" id="birthday">
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public DateInput<_> Birthday { get; private set; }
}
```
{:.page-object}

```cs
DateTime birthday = new DateTime(1980, 7, 9);

Go.To<SamplePage>()
    .Birthday.Should.BeNull()
    .Birthday.Set(birthday)
    .Birthday.Should.Equal(birthday);
```
{:.test}