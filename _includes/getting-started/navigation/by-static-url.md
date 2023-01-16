Every page object can have a static URL associated with it by `UrlAttribute`.
This URL is consumed during `Go.To` action to perform a navigation.
The URL can be an absolute, but it's recommended to use a relative URL,
it will be concatenated with `BaseUrl` to form an absolute URL.

#### Example

```cs
[Url("/contact")]
public class ContactPage : Page<_>
{
}
```
{:.page-object}

```cs
Go.To<ContactPage>();
```
{:.test}