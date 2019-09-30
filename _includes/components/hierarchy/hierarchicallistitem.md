Represents the hierarchical list item control (`<li>`). Default search finds the first occurring `<li>` element. It is recommended to use with `HierarchicalUnorderedList<TItem, TOwner>` and `HierarchicalOrderedList<TItem, TOwner>`.

{% include inherited.md from="HierarchicalItem" %}

#### Syntax

```cs
[ControlDefinition("li", ComponentTypeName = "list item")]
[FindSettings(OuterXPath = "(./ul | ./ol)/", TargetName = nameof(Children))]
public class HierarchicalListItem<TItem, TOwner> : HierarchicalItem<TItem, TOwner>
    where TItem : HierarchicalListItem<TItem, TOwner>
    where TOwner : PageObject<TOwner>
```