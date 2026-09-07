Template variables are allowed in `UrlAttribute` and `Go.To` method's `url` parameter.
The URL can be represented in a template format, like `"/organization/{OrganizationId}/"`.
The template is filled with `AtataContext.Variables` by using `AtataContext.FillUriTemplateString(string)` method.

*In order to output a `{` use `{{ '{{' }}`, and to output a `}` use `}}`.*

Before navigation ensure that a variable is set in AtataContext.

#### Set variable directly into `AtataContext`

```cs
AtataContext.ResolveCurrent().Variables["OrganizationId"] = 42;
```

#### Set variable directly into session

```cs
AtataContext.ResolveCurrent().Sessions.Get<WebDriverSession>().Variables["OrganizationId"] = 42;
```

#### Set variable for `AtataContext` during configuration

```cs
builder.UseVariable("OrganizationId", 42);
```

#### Set variable for session during configuration

```cs
builder.Sessions.AddWebDriver(x => x
    //...
    .UseVariable("OrganizationId", 42));
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

#### Use template in page object's navigation URL

{% raw %}
```cs
[Url("/search")]
public class UserPage : Page<_>
{
    public static _ ById(int id) =>
        new _().SetNavigationUrl($"/organization/{{OrganizationId}}/user/{id}");
}
```
{% endraw %}

Notice that `OrganizationId` is wrapped with `{{ '{{' }}` and `}}` to output `{` and `}` in an interpolated string.
{:.info}

```cs
Go.To(UserPage.ById(42));
```