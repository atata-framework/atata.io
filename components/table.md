Represents the table control. Default search finds the first occurring table.

```html
<table id="products">
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
```
```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
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

Default search of the properties of the type `Content` and inherited (e.g. `Name` and `Amount`) that are declared in the class inherited from `TableRow` is performed by the column header.
{:.info}

``` cs
Go.To<SamplePage>().
    Products.Rows[x => x.Name == "Item 1"].Amount.Should.Equal(5).
    Products.Rows[x => x.Name == "Item 1"].Delete().
    Products.Rows[x => x.Name == "Item 1"].Should.Not.Exist();
```

### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Rows` | Gets the rows list. | `Rows.Should.HaveCount(2)`
`Headers` | Gets the headers list. | `Headers.Should.ContainHavingContent(TermMatch.Equals, "Name", "Amount")`
{:.table.table-members}