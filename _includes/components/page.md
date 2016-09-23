Represents the whole HTML page. Uses the body tag as a scope.

```cs
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