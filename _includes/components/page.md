Represents the whole HTML page. Uses the body tag as a scope.

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

### Properties

Name | Description | Usage Example
---- | -----------
`PageTitle` | Gets the title of the current HTML page. | `PageTitle.Should.StartWith("Some Title")`
`PageUrl` | Gets the URL of the current HTML page. | `PageUrl.Should.EndWith("/some-page?id=123987")`
{:class="table table-members"}