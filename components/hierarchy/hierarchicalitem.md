Represents the hierarchical item control (a control containing structured hierarchy of controls of `TItem` type). Can have parent control of `TItem` type. Default search finds the first occurring element.

{% include inherited.md from="HierarchicalControl" %}

#### Syntax

```cs
public class HierarchicalItem<TItem, TOwner> : HierarchicalControl<TItem, TOwner>
    where TItem : HierarchicalItem<TItem, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Parent` | Gets the parent control of `TItem` type. | `Parent.Name.Should.Equal("Item 1")`
`HasParent` | Gets the `DataProvider<TData, TOwner>` instance for the value indicating whether the control has parent. | `HasParent.Should.BeTrue()`
{:.table.table-members}