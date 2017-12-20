Represents the select control (`<select>`).
Default search is performed by the label.
Option selection is configured via `SelectOptionBehaviorAttribute`.
Possible selection behavior attributes are: `SelectByTextAttribute`, `SelectByValueAttribute`, `SelectByLabelAttribute` and `SelectByAttribute`.
Default option selection is performed by text using `SelectByTextAttribute`.

{% include inherited.md from="EditableField" %}

Supports `[SelectByText]`, `[SelectByValue]`, `[SelectByLabel]`, `[SelectBy]`, `[Format]` and `[Culture]` settings attributes.
{:.info}

### Syntax

```cs
[ControlDefinition("select", IgnoreNameEndings = "Select")]
[ControlFinding(FindTermBy.Label)]
public class Select<T, TOwner> : EditableField<T, TOwner>
    where TOwner : PageObject<TOwner>
```

### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ControlList</span><wbr>&lt;<span class="type">Option</span><wbr>&lt;<span class="type">T</span>, <span class="type">TOwner</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Options</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the options' `ControlList<TItem, TOwner>` instance.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Option</span><wbr>&lt;<span class="type">T</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">SelectedOption</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the selected option.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">int</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">SelectedIndex</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the index of the selected option.

There are different approaches to configure `Select` control using different types of data.
{:.info}

### Example #1: Select Using Enum

{% capture html %}
<select id="brand">
  <option value="">--select--</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> 
{% endcapture %}
{% include htmlexample.html html=html %}

The above select can be described with the following enum:

```cs
public enum CarBrand
{
    [Term("--select--")]
    None,
    Volvo,
    Saab,
    Mercedes,
    Audi
}
```

#### Select By Text

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public Select<CarBrand, _> Brand { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Brand.Should.Equal(CarBrand.None).
    Brand.Set(CarBrand.Audi).
    Brand.Should.Equal(CarBrand.Audi);
```
{:.test}

#### Select By Value

You just need to mark the select property with `[SelectByValue]` attribute and optionally set settings like `Case` and `Format`.

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        [SelectByValue(TermCase.Lower)]
        public Select<CarBrand, _> Brand { get; private set; }
    }
}
```
{:.page-object}

`TermCase.Lower` is defined in `SelectByValueAttribute` because option values are lowercase in this example (e.g. "volvo").

### Example #2: Select Using String

{% include htmlexample.html html=html %}

Don't pass data generic type argument to use string variant of control, simply use `Select<_>` (or alternatively `Select<string, _>`).

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public Select<_> Brand { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Brand.Set("Audi").
    Brand.Should.Equal("Audi");
```
{:.test}

### Example #3: Select Using Int

It is also possible to select an option by `int` and other types.
The following sample shows how to select using `int` type together with the formatting.

{% capture html %}
<select id="priority">
  <option value="1">Priority 1</option>
  <option value="2">Priority 2</option>
  <option value="3">Priority 3</option>
  <option value="4">Priority 4</option>
  <option value="5">Priority 5</option>
</select> 
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        [Format("Priority {0}")]
        public Select<int, _> Priority { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Priority.Set(3).
    Priority.Should.Equal(3);
```
{:.test}