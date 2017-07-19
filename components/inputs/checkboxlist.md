Represents the checkbox list control (a set of `<input type="checkbox">`). Default search is performed by the name.

Specified checkbox items can be found by the label or value. By default finds the items by the name. Use `[FindItemByValue]` attribute to find the items by the value.
{:class="info"}

```html
<label class="checkbox-inline">
    <input type="checkbox" name="options" value="OptionA" />Option A
</label>
<label class="checkbox-inline">
    <input type="checkbox" name="options" value="OptionB" />Option B
</label>
<label class="checkbox-inline">
    <input type="checkbox" name="options" value="OptionC" />Option C
</label>
```
```cs
[Flags]
public enum SomeOptions
{
    None = 0,
    OptionA = 1 << 0,
    OptionB = 1 << 1,
    OptionC = 1 << 2
}
```

Do not forget to mark the enumeration with the `[Flags]` attribute.
{:.warning}

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindByName]
        public CheckBoxList<SomeOptions, _> Options { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Options.Should.Equal(SomeOptions.None).
    Options.Check(SomeOptions.OptionB | SomeOptions.OptionC).
    Options.Should.Equal(SomeOptions.OptionB | SomeOptions.OptionC).
    Options.Uncheck(SomeOptions.OptionB).
    Options.Should.Equal(SomeOptions.OptionB).
    Options.Should.Not.HaveChecked(SomeOptions.OptionC);
```

Supports `[Format]`, `[Culture]`, `[FindItemByLabel]` and `[FindItemByValue]` settings attributes.
{:.info}

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Check</span><span class="tail">(<span class="type">T</span> value)</span></h3>
</div>

Checks the checkbox by specified value. Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Uncheck</span><span class="tail">(<span class="type">T</span> value)</span></h3>
</div>

Unchecks the checkbox by specified value. Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.