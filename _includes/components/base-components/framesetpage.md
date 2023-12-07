Represents the frameset-based HTML page.
Uses the root `<frameset>` tag as a scope.

{% include inherited.md from="PageObject" %}

Inherited class supports `[PageObjectDefinition]`, `[FindSettings]`, `[TermFindSettings]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[PageObjectDefinition("frameset", ComponentTypeName = "page", IgnoreNameEndings = "Page,PageObject")]
public abstract class FrameSetPage<TOwner> : PageObject<TOwner>
    where TOwner : FrameSetPage<TOwner>
```