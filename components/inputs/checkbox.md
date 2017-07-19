Represents the checkbox control. Default search is performed by the label.

```html
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> Option 1
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox2" value="option1" checked> Option 2
</label>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindByLabel]
        public CheckBox<_> Option1 { get; private set; }

        [FindByLabel]
        public CheckBox<_> Option2 { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Option1.Check().
    Option1.Should.BeChecked().
    Option2.Uncheck().
    Option2.Should.Not.BeChecked();
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

Checks the control. Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Uncheck()</span></h3>
</div>

Unchecks the control. Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.