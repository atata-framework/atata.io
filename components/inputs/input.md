Represents the input control (`<input>`).
Default search is performed by the label.

{% include inherited.md from="EditableField" %}

#### Syntax

```cs
[ControlDefinition("input[@type!='button' and @type!='submit' and @type!='reset']")]
[ControlFinding(FindTermBy.Label)]
public class Input<T, TOwner> : EditableField<T, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Append</span><span class="tail">(<span class="keyword">string</span> value)</span></h3>
</div>

Appends the specified value.
Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Clear()</span></h3>
</div>

Clears the value.
Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.