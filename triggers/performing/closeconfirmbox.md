Indicates that the confirm box should be closed on the specified event. Be default occurs after the click. By default accepts the confirm box.

```html
<button onclick="confirm('Are you sure you want to delete the item?')">Delete</button>
```
```cs
public class SamplePage : Page<_>
{
    [CloseConfirmBox]
    public Button<_> Delete { get; private set; }
}
```

The example defines that the confirm box should be closed with the acceptance after the click on the `Delete` button.