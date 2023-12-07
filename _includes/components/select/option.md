Represents the option control (`<option>`).
Default search finds the first occurring `<option>` element.

{% include inherited.md from="Field" %}

#### Syntax

```cs
[ControlDefinition("option", IgnoreNameEndings = "Option", ComponentTypeName = "option")]
[FindFirst]
public class Option<TValue, TOwner> : Field<TValue, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsSelected</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<bool, TOwner>` instance for the value indicating whether the component is selected.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Select()</span></h3>
</div>

Selects the option.
Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.