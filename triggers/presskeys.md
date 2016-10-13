Defines the keys to press on the specified event. By default occurs after the set.

```cs
public class SamplePage : Page<_>
{
    [PressKeys("end")]
    public TextInput<_> SomeInput { get; private set; }
}
```
```cs
Go.To<SamplePage>().
    SomeInput.Set("start").
    SomeInput.Should.Equal("startend").
```

The example appends "end" text to the end of `SomeInput` each time it is being set.