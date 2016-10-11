Specifies the information message to be logged on the defined event.

```cs
[LogInfo("Opening product editor", TriggerEvents.OnPageObjectInit)]
public class ProductEditPage : Page<_>
{
    [LogInfo("Product is saved", TriggerEvents.AfterClick)]
    public Button<_> Save { get; private set; }
}
```

The example writes "Opening product editor" message to the log during the page initialization. Then, after the `Save` button click, the "Product is saved" message writes to the log.