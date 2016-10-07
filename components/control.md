Represents the base class for controls.

### Syntax

```cs
[ControlDefinition("*", ComponentTypeName = "control")]
public class Control<TOwner> : UIComponent<TOwner>, IControl<TOwner>
    where TOwner : PageObject<TOwner>
```

### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`IsEnabled` | Gets the DataProvider instance for the value indicating whether the control is enabled. | `IsEnabled.Should.BeTrue()`, `IsEnabled == true`
{:.table.table-members}

### Methods

Name | Description
---- | -----------
`Click()` | Clicks the control.
`Hover()` | Hovers the control.
`Focus()` | Focuses the control.
`DoubleClick()` | Double-clicks the control.
`RightClick()` | Right-clicks the control.
{:.table.table-members}