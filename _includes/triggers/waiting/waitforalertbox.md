Indicates to wait for an alert box to be present on the specified event.
Be default occurs after the click.

```cs
public class SamplePage : Page<_>
{
    [WaitForAlertBox]
    public Button<_> Perform { get; private set; }
}
```