Represents any element containing content. By default is being searched by the label (if is declared in the class inherited from `TableRow`, then by column header).

### Using Enum

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
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public Content<Status, _> Status { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Status.Should.Equal(Status.Success);
```

Supports `[Format]` and `[Culture]` settings attributes.
{:class="info"}