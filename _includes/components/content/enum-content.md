The following sample checks the status of `span` element.

```html
<span id="status">Success</span>
```

For example, `span` can contain "Success" or "Failure" status. Available options can be described with `enum`:

```cs
public enum Status
{
    Success,
    Failure
}
```
```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public Content<Status, _> Status { get; private set; }
}
```
```cs
Go.To<SamplePage>()
    .Status.Should.Equal(Status.Success);
```

Supports `[Format]` and `[Culture]` settings attributes.
{:.info}