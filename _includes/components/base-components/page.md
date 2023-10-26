Represents the whole HTML page and is the main base class to inherit for the pages. Uses the `<body>` tag as a scope.

{% include inherited.md from="PageObject" %}

Inherited class supports `[PageObjectDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[PageObjectDefinition(ComponentTypeName = "page", IgnoreNameEndings = "Page,PageObject")]
public class Page<TOwner> : PageObject<TOwner>
    where TOwner : Page<TOwner>
```

#### Example

```cs
using _ = SamplePage;

[VerifyTitle("Sample Page")]
[VerifyContent("Some inner text")]
[Url("some/page")]
public class SamplePage : Page<_>
{
}
```
{:.page-object}