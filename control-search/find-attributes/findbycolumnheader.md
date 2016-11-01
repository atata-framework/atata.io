Specifies that a control should be found within the table column (`<td>`) that has the header (`<th>`) matching the specified term(s). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price ($)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Some Item</td>
            <td>5</td>
        </tr>
    </tbody>
</table>

```
```cs
public Table<ProductTableRow, _> Products { get; private set; }

public class ProductTableRow : TableRow<_>
{
    [FindByColumnHeader]
    public Text<_> Name { get; private set; }

    [FindByColumnHeader("Price ($)")]
    public Number<_> Price { get; private set; }
}
```