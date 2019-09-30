Defines the method to invoke on the specified event.

```cs
public class SamplePage : Page<_>
{
    [InvokeMethod(nameof(OnBeforePerform), TriggerEvents.BeforeClick)]
    [InvokeMethod(nameof(OnAfterPerform), TriggerEvents.AfterClick)]
    public Button<_> Perform { get; private set; }

    private void OnBeforePerform()
    {
    }

    private void OnAfterPerform()
    {
    }
}
```