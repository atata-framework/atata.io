Represents the search input control (`<input type="search">`).
Default search is performed by the label.

{% include inherited.md from="Input" %}

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='search']", ComponentTypeName = "search input")]
public class SearchInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="search" id="search-query">
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public SearchInput<_> SearchQuery { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .SearchQuery.Set("some text");
```
{:.test}