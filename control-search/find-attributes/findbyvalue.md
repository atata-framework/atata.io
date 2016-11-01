Specifies that a control should be found by the value attribute. Finds the control that has the value attribute matching the specified term(s). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<input type="button" value="Add Product">
```
```cs
[FindByValue]
public Button<_> AddProduct { get; private set; }
```