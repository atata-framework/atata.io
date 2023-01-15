Indicates that a page snapshot should be captured with an optional title.

```cs
[TakePageSnapshot(TriggerEvents.Init)]
public class SamplePage : Page<_>
{
    [TakePageSnapshot(TriggerEvents.BeforeClick)]
    public Button<_> Save { get; private set; }
}
```