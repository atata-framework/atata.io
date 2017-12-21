Represents the checkbox list control (a set of `<input type="checkbox">`).
Default search is performed by the name.
Specific checkbox items can be found by label or value.
By default items are searched by label using `FindItemByLabelAttribute`.
Use `FindItemByValueAttribute` to find items by value.
Currently as a data type supports only enum (with `[Flags]`) types.

{% include inherited.md from="EditableField" %}

Supports `[FindItemByLabel]`, `[FindItemByValue]`, `[Format]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='checkbox']", ComponentTypeName = "checkbox list", IgnoreNameEndings = "CheckBoxes,CheckBoxList,CheckBoxGroup,Options,OptionGroup")]
[ControlFinding(FindTermBy.Name)]
public class CheckBoxList<T, TOwner> : OptionList<T, TOwner>
    where TOwner : PageObject<TOwner>
```

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

#### Example

{% capture html %}
<label class="checkbox-inline">
    <input type="checkbox" name="options" value="OptionA">
    Option A
</label>
<label class="checkbox-inline">
    <input type="checkbox" name="options" value="OptionB">
    Option B
</label>
<label class="checkbox-inline">
    <input type="checkbox" name="options" value="OptionC">
    Option C
</label>
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
[Flags]
public enum SomeOptions
{
    None = 0,         // C#7: 0b0000
    OptionA = 1,      // C#7: 0b0001
    OptionB = 1 << 1, // C#7: 0b0010
    OptionC = 1 << 2  // C#7: 0b0100
}
```

Don't forget to mark the enumeration with `[Flags]` attribute and specify proper numeric values.
{:.warning}

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindByName]
        public CheckBoxList<SomeOptions, _> Options { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Options.Should.Equal(SomeOptions.None).
    Options.Check(SomeOptions.OptionB | SomeOptions.OptionC).
    Options.Should.Equal(SomeOptions.OptionB | SomeOptions.OptionC).
    Options.Uncheck(SomeOptions.OptionB).
    Options.Should.Equal(SomeOptions.OptionB).
    Options.Should.Not.HaveChecked(SomeOptions.OptionC);
```
{:.test}