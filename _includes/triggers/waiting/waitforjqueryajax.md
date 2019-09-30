Indicates that the waiting should be performed until the jQuery AJAX is completed. 
By default occurs after the click.

```cs
public class SamplePage : Page<_>
{
    [WaitForJQueryAjax]
    public Button<_> Save { get; private set; }
}
```