Specifies the verification of the page title when the page object is initialized. If no value is specifed, uses the class name as the expected value with the `TermCase.Title` casing applied.

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    [VerifyTitle]
    public class ProductDetailsPage : Page<_>
    {
    }
}
```

The example verifies that the page title should equal "Product Details".
{:.info}