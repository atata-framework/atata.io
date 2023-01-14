Indicates to wait until Angular (v1) has finished rendering and has no outstanding HTTP calls. 
By default occurs after the click.

```cs
public class SamplePage : Page<_>
{
    [WaitForAngularJS]
    public Button<_> Save { get; private set; }
}
```