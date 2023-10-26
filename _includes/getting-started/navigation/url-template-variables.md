Template variables are allowed in `UrlAttribute` and `Go.To` method's `url` parameter.
The URL can be represented in a template format, like `"/organization/{OrganizationId}/"`.
The template is filled with `AtataContext.Variables` by using `AtataContext.FillUriTemplateString(string)`
method (see [#738](https://github.com/atata-framework/atata/issues/738)).

*In order to output a `{` use `{{ '{{' }}`, and to output a `}` use `}}`.*

Before navigation ensure that a variable is set in AtataContext.

#### Set variable directly into `AtataContext`

```cs
AtataContext.Current.Variables["OrganizationId"] = 42;
```

#### Set variable during `AtataContext` configuration

```cs
AtataContext.Configure().
    AddVariable("OrganizationId", 42);
```

#### Set variable in JSON config

```json
{
  "variables": {
    "OrganizationId": 42
  }
}
```

#### Use template in `UrlAttribute`

```cs
[Url("/organization/{OrganizationId}/")]
public class OrganizationPage : Page<_>
{
}
```

```cs
Go.To<OrganizationPage>();
```

#### Use template within `Go.To`

```cs
Go.To<OrganizationPage>(url: "/organization/{OrganizationId}/");
```