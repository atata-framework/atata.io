Indicates that the control blurring (removing focus) should be performed on the specified event.
By default occurs after set.
     
```cs
public class SamplePage : Page<_>
{
    [Blur]
    public TextInput<_> SomeInput { get; private set; }
}
```