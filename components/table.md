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

Name | Description | Usage Example
---- | ----------- | -------------
`Rows` | Gets the rows list. | `Rows.Should.HaveCount(2)`
`Headers` | Gets the headers list. | `Headers.Should.ContainHavingContent(TermMatch.Equals, "Name", "Amount")`
{:.table.table-members}

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
using Atata;

namespace SampleApp.Tests
{
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
}
```
{:.page-object}

Default search of the properties of type `Content` and inherited (e.g. `Name` and `Amount`) that are declared in the class inherited from `TableRow` is performed by the column header.
{:.info}

``` cs
Go.To<SamplePage>().
    Products.Rows[x => x.Name == "Item 1"].Amount.Should.Equal(5).
    Products.Rows[x => x.Name == "Item 1"].Delete().
    Products.Rows[x => x.Name == "Item 1"].Should.Not.Exist();
```
{:.test}