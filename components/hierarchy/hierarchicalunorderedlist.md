Represents the hierarchical unordered list control (`<ul>`). Default search finds the first occurring `<ul>` element.

Inherited from {% include clsref.md name="HierarchicalControl" %}.
{:.info}

#### Syntax

```cs
[ControlDefinition("ul", ComponentTypeName = "unordered list")]
public class HierarchicalUnorderedList<TItem, TOwner> : HierarchicalControl<TItem, TOwner>
    where TItem : HierarchicalItem<TItem, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

{% capture html %}
<ul id="some-tree">
    <li>
        <span>Item 1</span>
        <ul>
            <li>
                <span>Item 1.1</span>
            </li>
            <li>
                <span>Item 1.2</span>
            </li>
        </ul>
    </li>
    <li>
        <span>Item 2</span>
        <ul>
            <li>
                <span>Item 2.1</span>
                <ul>
                    <li>
                        <span>Item 2.1.1</span>
                    </li>
                    <li>
                        <span>Item 2.1.2</span>
                    </li>
                </ul>
            </li>
            <li>
                <span>Item 2.2</span>
            </li>
        </ul>
    </li>
</ul>
{% endcapture %}

{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp.Tests
{
    using _ = TreePage;

    [Url("TreePage.html")]
    public class TreePage : Page<_>
    {
        [FindById("some-tree")]
        public HierarchicalUnorderedList<TreeItem, _> Tree { get; private set; }

        public class TreeItem : HierarchicalListItem<TreeItem, _>
        {
            [FindByXPath("./span[1]")]
            public Text<_> Name { get; private set; }
        }
    }
}
```
{:.page-object}
```cs
Go.To<TreePage>().
    Tree.Children.Count.Should.Equal(2).
    Tree.Descendants.Count.Should.Equal(8).
    Tree[x => x.Name == "Item 1"][x => x.Name == "Item 1.1"].Should.Exist().
    Tree.Descendants.Should.Contain(x => x.Name == "Item 2.1.1").
    Tree[1][0][1].Name.Should.Equal("Item 2.1.2").
    Tree.Descendants.SelectData(x => x.Name).Should.Contain("Item 1.1", "Item 2.1", "Item 2.2");
```
{:.test}