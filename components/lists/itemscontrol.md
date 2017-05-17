Represents the items control (a control containing a set of any control of `TItem` type). Default search finds the first occurring element.

```html
<div id="products" class="product-list">
    <div class="product">
        <h4>Product 1</h4>
        <span>Some description</span>
    </div>
    <div class="product">
        <h4>Product 2</h4>
        <span>Some description</span>
    </div>
</div>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById]
        public ItemsControl<ProductItem, _> Products { get; private set; }

        [ControlDefinition("div", ContainingClass = "product", ComponentTypeName = "product item")]
        public class ProductItem : Control<_>
        {
            public H4<_> Title { get; private set; }

            [FindByXPath("span")]
            public Text<_> Description { get; private set; }
        }
    }
}
```
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

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Items` | Gets the items' `ControlList<TItem, TOwner>` instance. | `Items.Should.HaveCount(2)`
{:.table.table-members}