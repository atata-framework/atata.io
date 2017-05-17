Represents the list of controls of `TItem` type.

```html
<div>
    <div class="product">
        <h4>Product 1</h4>
        <span class="amount">5</span>
    </div>
    <div class="product">
        <h4>Product 2</h4>
        <span class="amount">10</span>
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
        public ControlList<ProductItem, _> Products { get; private set; }

        [ControlDefinition("div", ContainingClass = "product", ComponentTypeName = "product item")]
        public class ProductItem : Control<_>
        {
            public H4<_> Title { get; private set; }

            [FindByClass]
            public Number<_> Amount { get; private set; }
        }
    }
}
```
```cs
Go.To<SamplePage>().
    Products.Count.Should.Equal(2).
    Products[0].Title.Should.Equal("Product 1").
    Do(_ => _.Products[1], x =>
    {
        x.Title.Should.Equal("Product 2");
        x.Amount.Should.Equal(10);
    }).
    Products[x => x.Title == "Product 1"].Amount.Should.Equal(5).
    Products[x => x.Title == "Product 3"].Should.Not.Exist().
    Products.IndexOf(x => x.Title == "Product 2").Should.Equal(1).
    SelectData(x => x.Title).Should.EqualSequence("Product 1", "Product 2");
```

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Count` | Gets the `DataProvider<int, TOwner>` instance for the controls count. | `Count.Get()` or `Count.Should.Equal(5)`
`Contents` | Gets the `DataProvider<IEnumerable<string>, TOwner>` instance for the controls contents. | `Contents.Should.EqualSequence("Item 1", "Item 2")` or `Contents.Should.Contain("Item 1")`
`Should` | Gets the verification provider that gives a set of verification extension methods. | `Should.HaveCount(5)`, `Should.BeEmpty()` or `Should.BeEquivalent("Item 1", "Item 2")`
{:.table.table-members}

#### Indexers

Name | Description | Usage Example
---- | ----------- | -------------
`[int index]` | Gets the control at the specified index. | `[0].Should.Exist()`, `[1].Should.Equal(5)` or `[2].Content.Should.Equal("Item 1")`
`[Expression<Func<TItem, bool>> predicateExpression]` | Gets the control that matches the conditions defined by the specified predicate expression. | `[x => x.Title == "Product 1"].Should.Exist()`
{:.table.table-members.table-members-fixed-col-1}

#### Methods

Name | Description
---- | -----------
`IndexOf(Expression<Func<TItem, bool>> predicateExpression)` | Searches for the item that matches the conditions defined by the specified predicate expression and returns the zero-based index of the first occurrence.
`SelectData<TData>(Expression<Func<TItem, TData>> selector)` | Selects the specified data (property) set of each control. Data can be a sub-control, an instance of `DataProvider<TData, TOwner>`, etc.
{:.table.table-members.table-members-fixed-col-1}