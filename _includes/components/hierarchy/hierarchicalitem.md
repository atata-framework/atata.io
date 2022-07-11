Represents the hierarchical item control (a control containing structured hierarchy of controls of `TItem` type). Can have parent control of `TItem` type. Default search finds the first occurring element.

{% include inherited.md from="HierarchicalControl" %}

#### Syntax

```cs
public class HierarchicalItem<TItem, TOwner> : HierarchicalControl<TItem, TOwner>
    where TItem : HierarchicalItem<TItem, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">HasParent</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<TData, TOwner>` instance for the value indicating whether the control has parent.

```cs
Item.HasParent.Should.BeTrue();
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span></span>
    <h3><span class="body">Parent</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the parent control of `TItem` type.

```cs
Item.Parent.Name.Should.Equal("Item 1");
```