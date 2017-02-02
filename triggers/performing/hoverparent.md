Indicates that the hover on the parent component should occur on the specified event. By default occurs before any access to the component. Is useful for the drop-down menu item controls.

```cs
public class SampleControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    [HoverParent]
    public Button<TOwner> SubItem { get; private set; }
}
```