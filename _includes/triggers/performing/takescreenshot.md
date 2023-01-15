Indicates that a screenshot should be captured with an optional title.

```cs
[TakeScreenshot(TriggerEvents.Init)]
public class SamplePage : Page<_>
{
    [TakeScreenshot(TriggerEvents.BeforeClick)]
    public Button<_> Save { get; private set; }
}
```