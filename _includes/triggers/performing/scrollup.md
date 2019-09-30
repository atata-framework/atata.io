Indicates that the scroll up should be performed on the specified event. By default occurs before any access to the component.

```cs
public class SamplePage : Page<_>
{
    [ScrollUp]
    public Button<_> Save { get; private set; }
}
```