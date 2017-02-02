Indicates that the scroll down should be performed on the specified event. By default occurs before any access to the component.

```cs
public class SamplePage : Page<_>
{
    [ScrollDown]
    public Button<_> Save { get; private set; }
}
```