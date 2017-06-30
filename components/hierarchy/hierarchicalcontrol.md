Represents the hierarchical control (a control containing structured hierarchy of controls of `TItem` type). Default search finds the first occurring element.

Inherited from {% include clsref.md name="Control" %}.
{:.info}

#### Syntax

```cs
[FindSettings(OuterXPath = "./", TargetName = nameof(Children))]
public class HierarchicalControl<TItem, TOwner> : Control<TOwner>
    where TItem : HierarchicalItem<TItem, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Children` | Gets the children `ControlList<TItem, TOwner>` instance. | `Children.Count.Should.Equal(5)`
`Descendants` | Gets the descendants (all items at any level of hierarchy) `ControlList<TItem, TOwner>` instance. | `Descendants[x => x.Name == "Item 2.2"].Click()`
{:.table.table-members}

#### Indexers

Name | Description | Usage Example
---- | ----------- | -------------
`[int index]` | Gets the child item at the specified index. | `[0].Should.Exist()` or `[1].Name.Should.Equal("Item 2")`
`[Expression<Func<TItem, bool>> predicateExpression]` | Gets the child item that matches the conditions defined by the specified predicate expression. | `[x => x.Name == "Item 1"].Should.Exist()`
{:.table.table-members.table-members-fixed-col-1}