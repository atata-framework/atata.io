Represents the unordered list control (`<ul>`). Default search finds the first occurring `<ul>` element.

{% include inherited.md from="ItemsControl" %}

#### Syntax

```cs
[ControlDefinition("ul", ComponentTypeName = "unordered list")]
[FindSettings(OuterXPath = "./")]
public class UnorderedList<TItem, TOwner> : ItemsControl<TItem, TOwner>
    where TItem : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

{% capture html %}
<div>
    <ul id="simple">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <ul id="product-list">
        <li>
            <span>Phone</span> - <span>20</span>
        </li>
        <li>
            <span>Book</span> - <span>30</span>
        </li>
        <li>
            <span>Table</span> - <span>40</span>
        </li>
    </ul>
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
        [FindById("simple")]
        public UnorderedList<ListItem<_>, _> SimpleUnorderedList { get; private set; }

        [FindById]
        public UnorderedList<ProductItem, _> ProductList { get; private set; }

        public class ProductItem : ListItem<_>
        {
            [FindByIndex(0)]
            public Text<_> Name { get; private set; }

            [FindByIndex(1)]
            public Number<_> Amount { get; private set; }
        }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    SimpleUnorderedList.Items.Count.Should.Equal(2).
    SimpleUnorderedList.Items[0].Content.Should.Equal("Item 1").
    SimpleUnorderedList.Items.Contents.Should.EqualSequence("Item 1", "Item 2").

    ProductList.Items.Count.Should.Equal(3).
    ProductList.Items[0].Name.Should.Equal("Phone").
    ProductList.Items[0].Amount.Should.Equal(20).
    ProductList.Items[x => x.Name == "Book"].Amount.Should.Equal(30).
    ProductList.Items.SelectData(x => x.Name).Should.EqualSequence("Phone", "Book", "Table");
```
{:.test}