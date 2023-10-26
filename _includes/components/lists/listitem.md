Represents the list item control (`<li>`). Default search finds the first occurring `<li>` element. Recommended to use with `UnorderedList` and `OrderedList` controls. Can be inherited, if `<li>` element contains separate components.

{% include inherited.md from="Control" %}

#### Syntax

```cs
[ControlDefinition("li", ComponentTypeName = "list item")]
public class ListItem<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

{% capture html %}
<div>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
</div>
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    public UnorderedList<ListItem<_>, _> UnorderedList { get; private set; }

    public OrderedList<ListItem<_>, _> OrderedList { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .UnorderedList.Items.Count.Should.Equal(2)
    .UnorderedList.Items[0].Content.Should.Equal("Item 1")

    .OrderedList.Items.Should.Not.BeEmpty()
    .OrderedList.Items.Contents.Should.EqualSequence("Item 1", "Item 2");
```
{:.test}

See also {% include clsref.md name="UnorderedList" %} and {% include clsref.md name="OrderedList" %} controls for more usage samples.
{:.info}