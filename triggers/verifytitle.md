Specifies the verification of the page title. By default occurs during the page object initialization. If no value is specifed, uses the class name as the expected value with the `TermCase.Title` casing applied.

```cs
[VerifyTitle]
public class ProductDetailsPage : Page<_> 
{
}
```

The example verifies that the page title should equal "Product Details".
{:.info}