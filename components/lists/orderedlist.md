Represents the ordered list control (`<ol>`). Default search finds the first occurring `<ol>` element.

```html
<div>
    <ol id="simple">
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
    <ol id="product-list">
        <li>
            <strong>Phone</strong>
            <span>5%</span>
            <button>Delete</button>
        </li>
        <li>
            <strong>Book</strong>
            <span>10%</span>
            <button>Delete</button>
        </li>
        <li>
            <strong>Table</strong>
            <span>15%</span>
            <button>Delete</button>
        </li>
    </ol>
</div>
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById("simple")]
        public OrderedList<ListItem<_>, _> SimpleOrderedList { get; private set; }

        [FindById]
        public OrderedList<ProductItem, _> ProductList { get; private set; }

        public class ProductItem : ListItem<_>
        {
            [FindByXPath("strong")]
            public Text<_> Name { get; private set; }

            [FindByIndex(1)]
            [Format("p")]
            public Number<_> Percent { get; private set; }

            public Button<_> Delete { get; private set; }
        }
    }
}
```
```cs
Go.To<SamplePage>().
    SimpleOrderedList.Items.Count.Should.Equal(2).
    SimpleOrderedList.Items[0].Content.Should.Equal("Item 1").
    SimpleOrderedList.Items.Contents.Should.EqualSequence("Item 1", "Item 2").

    ProductList.Items.Count.Should.Equal(3).
    ProductList.Items[0].Name.Should.Equal("Phone").
    ProductList.Items[0].Percent.Should.Equal(0.05m).
    ProductList.Items[x => x.Name == "Book"].Percent.Should.Equal(0.10m).
    ProductList.Items.SelectData(x => x.Name).Should.EqualSequence("Phone", "Book", "Table").
    ProductList.Items[x => x.Name == "Table"].Delete.Click().
    ProductList.Items[x => x.Name == "Table"].Should.Not.Exist().
    ProductList.Items.Count.Should.Equal(2);
```