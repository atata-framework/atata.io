Represents the items control (a control containing a set of any control of `TItem` type). Default search finds the first occurring element.

#### Syntax

```cs
[ControlDefinition(ComponentTypeName = "items control", IgnoreNameEndings = "ItemsControl,Control")]
public class ItemsControl<TItem, TOwner> : Control<TOwner>
    where TItem : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Items` | Gets the items' `ControlList<TItem, TOwner>` instance. | `Items.Should.HaveCount(2)`
{:.table.table-members}

#### Indexers

Name | Description | Usage Example
---- | ----------- | -------------
`[int index]` | Gets the item at the specified index. | `[0].Should.Exist()`, `[1].Should.Equal(5)` or `[2].Content.Should.Equal("Item 1")`
`[Expression<Func<TItem, bool>> predicateExpression]` | Gets the item that matches the conditions defined by the specified predicate expression. | `[x => x.Title == "Product 1"].Should.Exist()`
{:.table.table-members.table-members-fixed-col-1}

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

namespace SampleApp.Tests
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