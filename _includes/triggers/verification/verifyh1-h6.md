Specifies the verification of `h1-h6` elements content. By default occurs upon the page object initialization. If no value is specified, it uses the class name as the expected value with the `TermCase.Title` casing applied.

```cs
[VerifyH1]
[VerifyH2("General")]
[VerifyH2("Additional", Index = 1)]
public class ProductDetailsPage : Page<_> 
{
}
```

The example verifies that the page's `h1` element should have content "Product Details", first `h2` should be "General" and second `h2` should be "Additional".