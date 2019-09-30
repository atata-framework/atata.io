Represents the radio button control (`<input type="radio">`).
Default search is performed by the label.

{% include inherited.md from="Field" %}

#### Syntax

```cs
[ControlDefinition("input[@type='radio']", IgnoreNameEndings = "RadioButton,Radio,Button,Option")]
[ControlFinding(FindTermBy.Label)]
public class RadioButton<TOwner> : Field<bool, TOwner>, ICheckable<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsChecked</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `DataProvider<bool, TOwner>` instance of the checked state value.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Check()</span></h3>
</div>

Checks the control. Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.

#### Example

{% capture html %}
<label class="radio-inline">
  <input type="radio" name="radios" id="radio1"
         value="option1" checked> Option 1
</label>
<label class="radio-inline">
  <input type="radio" name="radios" id="radio2"
         value="option2"> Option 2
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
        [FindById(TermCase.LowerMerged)]
        public RadioButton<_> Option1 { get; private set; }

        [FindById(TermCase.LowerMerged)]
        public RadioButton<_> Option2 { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Option1.Should.BeChecked().
    Option2.Check().
    Option1.Should.BeUnchecked().
    Option2.Should.BeChecked();
```
{:.test}