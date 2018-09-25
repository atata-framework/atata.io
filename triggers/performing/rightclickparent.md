Indicates that the right click on the parent component should occur on the specified event.
By default occurs before any access to the component.
Is useful for the context menu item controls.

```cs
[RightClickParent]
public class SampleControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    public Button<TOwner> SubItem { get; private set; }
}
```