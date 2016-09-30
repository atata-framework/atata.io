Represents the whole HTML page. Is the main base class to inherit for the pages. Uses the body tag as a scope.

### Syntax

```cs
[PageObjectDefinition(ComponentTypeName = "page", IgnoreNameEndings = "Page,PageObject")]
public class Page<TOwner> : PageObject<TOwner>
    where TOwner : Page<TOwner>
```

### Example

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    [VerifyTitle("Sample Page")]
    [VerifyContent("Some inner text")]
    [Url("some/page")]
    public class SamplePage : Page<_>
    {
    }
}
```