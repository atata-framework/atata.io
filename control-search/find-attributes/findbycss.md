Specifies that a control should be found by CSS selector. Finds the descendant or self control in the scope of the element found by the specified CSS selector.

Inherited from {% include clsref.md name="FindAttribute" %}.
{:.info}

```html
<div class="first-name-section">
    <input type="text">
</div>
```
```cs
[FindByCss("div.first-name-section")]
public TextInput<_> FirstName { get; private set; }
```