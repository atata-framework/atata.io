Represents the base attribute class for the triggers.

#### Syntax

```cs
[AttributeUsage(AttributeTargets.Property | AttributeTargets.Class | AttributeTargets.Interface | AttributeTargets.Assembly, AllowMultiple = true)]
public abstract class TriggerAttribute : Attribute
```

#### Properties

Name | Type | Description
---- | ---- | -----------
`On` | [`TriggerEvents`](#triggerevents) | Gets or sets the trigger events.
`Priority` | [`TriggerPriority`](#triggerpriority) | Gets or sets the priority. The default value is `Medium`.
`AppliesTo` | [`TriggerScope`](#triggerscope) | Gets or sets the scope to apply the trigger to. The default value is `Self`.
{:.table.table-members.table-members-with-type}