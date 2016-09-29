Represents the radio button list control (a set of `<input type="radio">`). By default is being searched by the name.

Concrete radio button items can be found by label or value. By default finds the items by the label. Use `[FindItemByValue]` attribute to find the items by the value.
{:class="info"}

```html
<label>
    <input type="radio" name="options" value="OptionA" />Option A
</label>
<label>
    <input type="radio" name="options" value="OptionB" />Option B
</label>
<label>
    <input type="radio" name="options" value="OptionC" />Option C
</label>
```

### Using Enum

```cs
public enum SomeOption
{
    OptionA,
    OptionB,
    OptionC
}
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindByName]
        public RadioButtonList<SomeOption?, _> Options { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Options.Should.Equal(null).
    Options.Check(SomeOptions.OptionB).
    Options.Should.Equal(SomeOptions.OptionB);
```

### Using String

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindByName]
        [FindItemByValue]
        public RadioButtonList<string, _> Options { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Options.Should.Equal(null).
    Options.Check("OptionB").
    Options.Should.Equal("OptionB");
```

Supports `[Format]`, `[Culture]`, `[FindItemByLabel]` and `[FindItemByValue]` settings attributes.
{:class="info"}