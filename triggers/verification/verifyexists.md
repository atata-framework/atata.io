Indicates that the component should be verified whether it exists on the specified event. By default occurs upon the page object initialization.

```cs
public class SamplePage : Page<_>
{
    [VerifyExists]
    public Button<_> Add { get; private set; }
}
```