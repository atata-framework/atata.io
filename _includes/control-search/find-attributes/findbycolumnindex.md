Specifies that a control should be found within the table column (`<td>`) that has the nth index.

Inherited from {% include clsref.md name="FindAttribute" %}.
{:.info}

```html
<table>
    <tbody>
        <tr>
            <td>Some Item</td>
            <td>50</td>
        </tr>
    </tbody>
</table>
```
```cs
public Table<ProductTableRow, _> Products { get; private set; }

public class ProductTableRow : TableRow<_>
{
    [FindByColumnIndex(0)]
    public Text<_> Name { get; private set; }

    [FindByColumnIndex(1)]
    public Number<_> Price { get; private set; }
}
```