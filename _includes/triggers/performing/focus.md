Indicates that the focusing on the control should be performed on the specified event.
By default occurs before set.

```cs
public class SamplePage : Page<_>
{
    [Focus]
    public TextInput<_> SomeInput { get; private set; }
}
```