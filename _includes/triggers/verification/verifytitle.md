Specifies the verification of the page title. By default occurs upon the page object initialization. If no value is specified, it uses the class name as the expected value with the `TermCase.Title` casing applied.

```cs
[VerifyTitle]
public class ProductDetailsPage : Page<_> 
{
}
```

The example verifies that the page title should equal "Product Details".

#### VerifyTitleSettings
Defines the settings to apply for the `VerifyTitleAttribute` trigger.

For example, set the default title format in global Atata configuration:

```cs
AtataContext.GlobalConfiguration
    .Attributes.Global.Add(new VerifyTitleSettingsAttribute { Format = "{0} - Atata Sample App" });
```

Or using assembly attribute:

```cs
[assembly: VerifyTitleSettings(Format = "{0} - Atata Sample App")]
```