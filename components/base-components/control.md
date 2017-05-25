Represents the base class for the controls.

#### Syntax

```cs
[ControlDefinition("*", ComponentTypeName = "control")]
public class Control<TOwner> : UIComponent<TOwner>, IControl<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`IsEnabled` | Gets the DataProvider instance for the value indicating whether the control is enabled. | `IsEnabled.Should.BeTrue()`, `IsEnabled == true`
{:.table.table-members}

#### Methods

Name | Description
---- | -----------
`Click()` | Clicks the control. Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.
`Hover()` | Hovers the control. Also executes `TriggerEvents.BeforeHover` and `TriggerEvents.AfterHover` triggers.
`Focus()` | Focuses the control. Also executes `TriggerEvents.BeforeFocus` and `TriggerEvents.AfterFocus` triggers.
`DoubleClick()` | Double-clicks the control. Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.
`RightClick()` | Right-clicks the control. Also executes `TriggerEvents.BeforeClick` and `TriggerEvents.AfterClick` triggers.
{:.table.table-members}

Inherited class supports `[ControlDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]`, `[Format]` and `[Culture]` settings attributes.
{:.info}