Indicates that the Escape key should be pressed on the specified event. By default occurs after the set.

```cs
public class SamplePage : Page<_>
{
    [PressEscape]
    public TextInput<_> SomeInput { get; private set; }
}
```