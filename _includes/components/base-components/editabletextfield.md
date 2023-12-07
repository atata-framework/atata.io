Represents the editable text field control.

To set a value, executes an associated with the component `ValueSetBehaviorAttribute`
that is `SetsValueUsingClearAndTypeBehaviorsAttribute` by default.
To get a value, executes an associated with the component `ValueGetBehaviorAttribute`
that is `GetsValueFromValueAttribute` by default.

{% include inherited.md from="EditableField" %}

#### Syntax

```cs
[GetsValueFromValue]
[SetsValueUsingClearAndTypeBehaviors]
[ClearsValueUsingClearMethod]
[TypesTextUsingSendKeys]
public class EditableTextField<TValue, TOwner> : EditableField<TValue, TOwner>, IClearable
    where TOwner : PageObject<TOwner>
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Type</span><span class="tail">(<span class="keyword">string</span> value)</span></h3>
</div>

Types (appends) the specified text value.
Executes an associated with the component `TextTypeBehaviorAttribute`
that is `TypesTextUsingSendKeysAttribute` by default.
Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Clear()</span></h3>
</div>

Clears the value.
Executes an associated with the component `ValueClearBehaviorAttribute`
that is `ClearsValueUsingClearMethodAttribute` by default.
Also executes `TriggerEvents.BeforeSet` and `TriggerEvents.AfterSet` triggers.