Represents the URL input control (`<input type="url">`).
Default search is performed by the label.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='url']", ComponentTypeName = "URL input")]
public class UrlInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="url" id="some-url">
```
{:.html}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public UrlInput<_> SomeUrl { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    SomeUrl.Set("http://someurl.com");
```
{:.test}