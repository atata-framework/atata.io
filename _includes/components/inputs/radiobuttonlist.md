Represents the radio button list control (a set of `<input type="radio">`).
Default search is performed by the name.
Specific radio button items can be found by label or value.
By default items are searched by label using `FindItemByLabelAttribute`.
Use `FindItemByValueAttribute` to find items by value.
As a data type supports enum, string, numeric and other types.

{% include inherited.md from="EditableField" %}

Supports attributes: `[FindItemByLabel]`, `[FindItemByValue]`, `[FindItemByParentContent]`,
`[FindItemByPrecedingSiblingContent]`, `[FindItemByFollowingSiblingContent]`,
`[FindItemByRelativeElementContent]`, `[Format]`, `[Culture]`.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='radio']", IgnoreNameEndings = "RadioButtons,RadioButtonList,Radios,RadioGroup,Buttons,ButtonList,Options,OptionGroup", ComponentTypeName = "radio button list")]
[FindByName]
[FindItemByLabel]
public class RadioButtonList<TValue, TOwner> : OptionList<TValue, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">ToggleRandom()</span></h3>
</div>

Sets random unselected value.

#### Example #1: Using Enum

{% capture html %}
<label class="radio-inline">
    <input type="radio" name="options" value="OptionA">
    Option A
</label>
<label class="radio-inline">
    <input type="radio" name="options" value="OptionB">
    Option B
</label>
<label class="radio-inline">
    <input type="radio" name="options" value="OptionC">
    Option C
</label>
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
public enum SomeOption
{
    OptionA,
    OptionB,
    OptionC
}
```

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindByName]
    public RadioButtonList<SomeOption?, _> Options { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .Options.Should.Equal(null)
    .Options.Set(SomeOptions.OptionB)
    .Options.Should.Equal(SomeOptions.OptionB);
```
{:.test}

#### Example #2: Using String

{% include htmlexample.html html=html %}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindByName]
    [FindItemByValue]
    public RadioButtonList<string, _> Options { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .Options.Should.Equal(null)
    .Options.Set("OptionB")
    .Options.Should.Equal("OptionB");
```
{:.test}