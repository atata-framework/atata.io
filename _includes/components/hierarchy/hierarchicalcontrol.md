Represents the hierarchical control (a control containing structured hierarchy of controls of `TItem` type). Default search finds the first occurring element.

{% include inherited.md from="Control" %}

#### Syntax

```cs
[FindSettings(OuterXPath = "./", TargetName = nameof(Children))]
public class HierarchicalControl<TItem, TOwner> : Control<TOwner>
    where TItem : HierarchicalItem<TItem, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ControlList</span><wbr>&lt;<span class="type">TItem</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Children</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the children `ControlList<TItem, TOwner>` instance.

```cs
Control.Children.Count.Should.Equal(5);
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ControlList</span><wbr>&lt;<span class="type">TItem</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Descendants</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the descendants (all items at any level of hierarchy) `ControlList<TItem, TOwner>` instance.

```cs
Control.Descendants[x => x.Name == "Item 2.2"].Click();
```

#### Indexers

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span> <span class="keyword">this</span></span>
    <h3><span class="body">[<span class="keyword">int</span> index]</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the child item at the specified index.

```cs
Control[0].Should.BePresent();
Control[1].Name.Should.Equal("Item 2");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span> <span class="keyword">this</span></span>
    <h3><span class="body">[<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TItem</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression]</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the child item that matches the conditions defined by the specified predicate expression.

```cs
Control[x => x.Name == "Item 1"].Should.BePresent();
```