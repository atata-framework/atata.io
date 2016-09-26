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

PageTitle
: Gets the title of the current HTML page.

```cs
Go.To<SamplePage>().
    PageTitle.Should.StartWith("Some Title");
```

PageUrl
: Gets the URL of the current HTML page.

```cs
Go.To<SamplePage>().
    PageUrl.Should.EndWith("/some-page?id=123987");
```