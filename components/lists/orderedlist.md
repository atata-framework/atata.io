Represents the ordered list control (`<ol>`). Default search finds the first occurring `<ol>` element.

{% include inherited.md from="ItemsControl" %}

#### Syntax

```cs
[ControlDefinition("ol", ComponentTypeName = "ordered list")]
[FindSettings(OuterXPath = "./")]
public class OrderedList<TItem, TOwner> : ItemsControl<TItem, TOwner>
    where TItem : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

{% capture html %}
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
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp.Tests
{
    using _ = SamplePage;

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
{:.page-object}

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
{:.test}