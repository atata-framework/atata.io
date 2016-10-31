Specifies that a control should be found by the child content text. Finds the control having the child with the specified content. Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<a href="/products">
    <span class="icon-products"></span>
    <span class="item-name">Products</span>
    <span class="item-count">15</span>
</a>
```
```cs
[FindByChildContent(ChildIndex = 1)]
public Link<_> Products { get; private set; }
```

#### Properties

Name | Type | Description
---- | ---- | -----------
`ChildIndex` | `int`{:.simple} | Gets or sets the index of the child element. The default value is `0`.
{:.table.table-members.table-members-with-type}
