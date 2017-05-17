Indicates that the waiting should be performed until the AngularJS (v1.*) AJAX is completed. By default occurs after the click.

```cs
public class SamplePage : Page<_>
{
    [WaitForAngularJSAjaxAttribute]
    public Button<_> Save { get; private set; }
}
```