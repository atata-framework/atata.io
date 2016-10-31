Specifies that a control should be found by the title attribute. Finds the control that has the title attribute matching the value. Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<button title="Add Product">
    <img src="/icon-add.png" width="32" height="32">
</button>
```
```cs
[FindByTitle]
public Button<_> AddProduct { get; private set; }
```