Specifies that a control should be found by name attribute. Finds the descendant or self control in the scope of the element having the specified name. Uses {% include tcref.md name="Kebab" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<input type="text" name="First-Name">
```
```cs
[FindByName(TermCase.PascalKebab)]
public TextInput<_> FirstName { get; private set; }
```