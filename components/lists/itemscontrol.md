Represents the items control (a control containing a set of any control of `TItem` type). Default search finds the first occurring element.

{% include inherited.md from="Control" %}

#### Syntax

```cs
[ControlDefinition(ComponentTypeName = "items control", IgnoreNameEndings = "ItemsControl,Control")]
public class ItemsControl<TItem, TOwner> : Control<TOwner>
    where TItem : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ControlList</span><wbr>&lt;<span class="type">TItem</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Items</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the items' `ControlList<TItem, TOwner>` instance.

```cs
ItemsControl.Items.Should.HaveCount(2);
```

#### Indexers

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span> <span class="keyword">this</span></span>
    <h3><span class="body">[<span class="keyword">int</span> index]</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the item at the specified index.

```cs
ItemsControl[0].Should.Exist();
ItemsControl[1].Should.Equal(5);
ItemsControl[2].Content.Should.Equal("Item 1");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span> <span class="keyword">this</span></span>
    <h3><span class="body">[<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TItem</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression]</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the item that matches the conditions defined by the specified predicate expression.

```cs
ItemsControl[x => x.Title == "Product 1"].Should.Exist();
ItemsControl[x => x.Content == "Some content"].Should.Not.Exist();
```

#### Example

{% capture html %}
<div id="products" class="product-list">
    <div class="product">
        <h5>Product 1</h5>
        <span>Some description</span>
    </div>
    <div class="product">
        <h5>Product 2</h5>
        <span>Some description</span>
    </div>
</div>
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public ItemsControl<ProductItem, _> Products { get; private set; }

        [ControlDefinition("div", ContainingClass = "product", ComponentTypeName = "product item")]
        public class ProductItem : Control<_>
        {
            public H5<_> Title { get; private set; }

            [FindByXPath("span")]
            public Text<_> Description { get; private set; }
        }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Products.Attributes.Class.Should.Contain("product-list").
    Products.Items.Count.Should.Equal(2).
    Products.Items[0].Title.Should.Equal("Product 1").
    Do(_ => _.Products.Items[1], x =>
    {
        x.Title.Should.Equal("Product 2");
        x.Description.Should.Equal("Some description");
    });
```
{:.test}