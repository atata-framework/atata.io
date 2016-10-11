Specifies the verification of the page title. By default occurs upon the page object initialization. If no value is specified, it uses the class name as the expected value with the `TermCase.Title` casing applied.

```cs
[VerifyTitle]
public class ProductDetailsPage : Page<_> 
{
}
```

The example verifies that the page title should equal "Product Details".