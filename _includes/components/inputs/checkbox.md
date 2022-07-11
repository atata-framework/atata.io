Represents the checkbox control (`<input type="checkbox">`).
Default search is performed by the label.

{% include inherited.md from="EditableField" %}

#### Syntax

```cs
[ControlDefinition("input[@type='checkbox']", ComponentTypeName = "checkbox", IgnoreNameEndings = "Checkbox,CheckBox,Option")]
[ControlFinding(FindTermBy.Label)]
public class CheckBox<TOwner> : EditableField<bool, TOwner>, ICheckable<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsChecked</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<bool, TOwner>` instance of the checked state value.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Check()</span></h3>
</div>

Checks the control. Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Uncheck()</span></h3>
</div>

Unchecks the control. Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.

#### Example

{% capture html %}
<label class="checkbox-inline">
  <input type="checkbox" value="option1">Option 1
</label>
<label class="checkbox-inline">
  <input type="checkbox" value="option2" checked>Option 2
</label>
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindByLabel]
        public CheckBox<_> Option1 { get; private set; }

        [FindByLabel]
        public CheckBox<_> Option2 { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Option1.Check().
    Option1.Should.BeChecked().
    Option2.Uncheck().
    Option2.Should.Not.BeChecked();
```
{:.test}