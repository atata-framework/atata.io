Indicates that the screenshot should be captured with an optional title. By default occurs before the click.

```cs
public class SamplePage : Page<_>
{
    [Screenshot]
    public Button<_> Save { get; private set; }
}
```