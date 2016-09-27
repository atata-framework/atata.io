Represents the date input control. By default is being searched by the label. The default format is `"d"` (short date pattern, e.g. 6/15/2009). Handles any `input` element with `type="date"`, `type="text"` or without the type attribute defined.

```html
<input type="date" id="birthday">
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public DateInput<_> Birthday { get; private set; }
    }
}
```
```cs
DateTime birthday = new DateTime(1980, 7, 9);

Go.To<SamplePage>().
    Birthday.Should.BeNull().
    Birthday.Set(birthday).
    Birthday.Should.Equal(birthday);
```

Supports `[Format]` and `[Culture]` settings attributes.