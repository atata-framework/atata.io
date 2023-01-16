When a page object's URL is dynamic (contains identifiers in path, query parameters, etc.),
one of the following approaches can be used for assigning a dynamic URL to a page object.

#### Pass URL in Go.To Method

```cs
Go.To<UserPage>(url: $"/user/{userId}");
```
{:.test}

#### Set NavigationUrl

`PageObject<TOwner>` has the `NavigationUrl` property which can be assigned in a page object's constructor.
Static URL (a value of `UrlAttribute`) is also written to `NavigationUrl` in a base constructor,
so you can combine static URL part with dynamic part.

##### Example 1

```cs
public class UserPage : Page<_>
{
    public UserPage(int? id = null)
    {
        if (id.HasValue)
            NavigationUrl = $"/user/{id}";
    }
}
```

```cs
Go.To(new UserPage(42));
```

##### Example 2

```cs
public class UserPage : Page<_>
{
    // Default constructor is needed for non-direct navigation, for example via link click.
    public UserPage()
    {
    }

    public UserPage(int id)
    {
        NavigationUrl = $"/user/{id}";
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
    public static _ ById(int id) =>
        new() { NavigationUrl = $"/user/{id}" };
}
```

```cs
Go.To(UserPage.ById(42));
```

##### Example 4

Static URL can be combined with dynamic part.

```cs
[Url("/search")]
public class GoogleSearchPage : Page<_>
{
    public GoogleSearchPage(string query = null)
    {
        if (query != null)
            NavigationUrl += $"?q={query}"; // "/search" + $"?q={query}" = "/search?q={query}"
    }
}
```

```cs
Go.To<GoogleSearchPage>();
// Or:
Go.To(new GoogleSearchPage("keyword"));
```


##### Example 5

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