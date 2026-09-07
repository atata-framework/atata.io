When a page object's URL is dynamic (contains identifiers in path, query parameters, etc.),
one of the following approaches can be used for assigning a dynamic URL to a page object.

#### Pass URL in `Go.To` method

```cs
Go.To<UserPage>(url: $"/user/{userId}");
```
{:.test}

#### `SetNavigationUrl`/`AppendNavigationUrl` methods

`PageObject<TOwner>` has functionality to set a navigation URL of the page object before navigation.
So you can set a dynamic URL in the constructor of page object or elsewhere before navigation.

Static URL (a value of `UrlAttribute`) can be combined with a dynamic URL part.

##### Example 1

```cs
Go.To(new UserPage().SetNavigationUrl($"/user/{id}"));
```

##### Example 2

```cs
public class UserPage : Page<_>
{
    public UserPage(int? id = null)
    {
        if (id.HasValue)
            SetNavigationUrl($"/user/{id}");
    }
}
```

```cs
Go.To(new UserPage(42));
```

##### Example 3

```cs
public class UserPage : Page<_>
{
    // Default constructor is needed for non-direct navigation, for example via link click.
    public UserPage()
    {
    }

    public UserPage(int id)
    {
        SetNavigationUrl($"/user/{id}");
    }
}
```

```cs
Go.To(new UserPage(42));
```

##### Example 4

```cs
public class UserPage : Page<_>
{
    public static _ ById(int id) =>
        new _().SetNavigationUrl($"/user/{id}");
}
```

```cs
Go.To(UserPage.ById(42));
```

##### Example 5

Use `AppendNavigationUrl` instead of `SetNavigationUrl` to combine static URL with a dynamic part.

```cs
[Url("/search")]
public class GoogleSearchPage : Page<_>
{
    public GoogleSearchPage(string? query = null)
    {
        if (query is not null)
            AppendNavigationUrl($"?q={query}"); // "/search" + $"?q={query}" = "/search?q={query}"
    }
}
```

```cs
Go.To<GoogleSearchPage>();
// Or:
Go.To(new GoogleSearchPage("keyword"));
```


##### Example 6

Similar to the previous example, but uses static method instead of constructor.

```cs
[Url("/search")]
public class GoogleSearchPage : Page<_>
{
    public static _ WithQuery(string query) =>
        new _().AppendNavigationUrl($"?q={query}");
}
```

```cs
Go.To<GoogleSearchPage>();
// Or:
Go.To(GoogleSearchPage.WithQuery("keyword"));
```