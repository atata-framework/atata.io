Represents the table control (`<table>`). Default search finds the first occurring `<table>` element.

{% include inherited.md from="Control" %}

#### Syntax

```cs
[ControlDefinition("table", IgnoreNameEndings = "Table")]
public class Table<THeader, TRow, TOwner> : Control<TOwner>
    where THeader : TableHeader<TOwner>
    where TRow : TableRow<TOwner>
    where TOwner : PageObject<TOwner>
```
```cs
public class Table<TRow, TOwner> : Table<TableHeader<TOwner>, TRow, TOwner>
    where TRow : TableRow<TOwner>
    where TOwner : PageObject<TOwner>
```
```cs
public class Table<TOwner> : Table<TableHeader<TOwner>, TableRow<TOwner>, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ControlList</span><wbr>&lt;<span class="type">THeader</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Headers</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the headers list.

```cs
Table.Headers.Should.ContainHavingContent(TermMatch.Equals, "Name", "Amount");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TableRowList</span><wbr>&lt;<span class="type">TRow</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Rows</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the rows list.

```cs
Table.Rows.Should.HaveCount(2);
Table.Rows[0].Should.BePresent();
Table.Rows[x => x.Content == "some content"].Click();
```

#### Example

{% capture html %}
<table id="products" class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Item 1</td>
            <td>5</td>
            <td><button>Delete</button></td>
        </tr>
        <tr>
            <td>Item 2</td>
            <td>10</td>
            <td><button>Delete</button></td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public Table<ProductTableRow, _> Products { get; private set; }

    public class ProductTableRow : TableRow<_>
    {
        public Text<_> Name { get; private set; }

        public Number<_> Amount { get; private set; }

        public Button<_> Delete { get; private set; }
    }
}
```
{:.page-object}

Default search of the properties of type `Content` and inherited (e.g. `Name` and `Amount`) that are declared in the class inherited from `TableRow` is performed by the column header.
{:.info}

``` cs
Go.To<SamplePage>()
    .Products.Rows[x => x.Name == "Item 1"].Amount.Should.Equal(5)
    .Products.Rows[x => x.Name == "Item 1"].Delete()
    .Products.Rows[x => x.Name == "Item 1"].Should.Not.BePresent();
```
{:.test}