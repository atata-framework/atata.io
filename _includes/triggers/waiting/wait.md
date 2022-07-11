Specifies the waiting period in seconds. By default occurs after any action.

```cs
public class SamplePage : Page<_>
{
    [WaitSeconds(2)]
    public Button<_> Save { get; private set; }
}
```

The example waits 2 seconds after the click on the `Save` button.