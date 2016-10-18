Indicates that the hover on the parent component should occur on the specified event. Be default occurs before any action. Is useful for the drop-down menu item controls.

```cs
public class SampleControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    [HoverParent]
    public Button<TOwner> SubItem { get; private set; }
}
```