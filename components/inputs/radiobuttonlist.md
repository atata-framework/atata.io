Represents the radio button list control (a set of `<input type="radio">`). Default search is performed by the name.

Specified radio button items can be found by the label or value. By default finds the items by the label. Use `[FindItemByValue]` attribute to find the items by the value.
{:.info}

Supports `[Format]`, `[Culture]`, `[FindItemByLabel]` and `[FindItemByValue]` settings attributes.
{:.info}

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

#### Using Enum

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
    Options.Set(SomeOptions.OptionB).
    Options.Should.Equal(SomeOptions.OptionB);
```

#### Using String

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
    Options.Set("OptionB").
    Options.Should.Equal("OptionB");
```