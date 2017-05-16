Represents the list item control (`<li>`). Default search finds the first occurring `<li>` element. Recommended to use with `UnorderedList` and `OrderedList` controls. Can be inherited, if `<li>` element contains separate components.

```html
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
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public UnorderedList<ListItem<_>, _> UnorderedList { get; private set; }

        public OrderedList<ListItem<_>, _> OrderedList { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    UnorderedList.Items.Count.Should.Equal(2).
    UnorderedList.Items[0].Content.Should.Equal("Item 1").

    OrderedList.Items.Should.Not.BeEmpty().
    OrderedList.Items.Contents.Should.EqualSequence("Item 1", "Item 2");
```

See also {% include clsref.md name="UnorderedList" %} and {% include clsref.md name="OrderedList" %} controls for more usage samples.
{:.info}