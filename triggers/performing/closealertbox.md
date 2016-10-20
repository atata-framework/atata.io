Indicates that the alert box should be closed on the specified event. Be default occurs after the click.

```html
<button onclick="alert('The item is removed!')">Delete</button>
```
```cs
public class SamplePage : Page<_>
{
    [CloseAlertBox]
    public Button<_> Delete { get; private set; }
}
```

The example defines that the alert box should be closed after the click on the `Delete` button.