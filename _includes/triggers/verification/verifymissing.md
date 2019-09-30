Indicates that the component should be verified whether it is missing on the specified event. By default occurs upon the page object initialization.

```cs
public class SamplePage : Page<_>
{
    [VerifyMissing]
    public Button<_> Delete { get; private set; }
}
```