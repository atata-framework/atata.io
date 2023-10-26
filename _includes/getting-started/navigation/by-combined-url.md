`Go.To` method's `url` argument value combines with page object's `NavigationUrl`
if it starts with one of: `?`, `&`, `;`, `#`.
For other cases `url` argument value replaces the `NavigationUrl`.
Basically, you can combine static URL part with dynamic one.

#### Example

```cs
[Url("/some/path?a=1")]
public class SomePage : Page<_>
{
}
```

```cs
Go.To<SomePage>(url: "/another/path?b=2"); // -> "/another/path?b=2"
Go.To<SomePage>(url: "?b=2"); // -> "/some/path?b=2"
Go.To<SomePage>(url: "&b=2"); // -> "/some/path?a=1&b=2"
Go.To<SomePage>(url: ";b=2"); // -> "/some/path?a=1;b=2"
Go.To<SomePage>(url: "#fragment"); // -> "/some/path?a=1#fragment"
```