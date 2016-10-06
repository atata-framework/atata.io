Specifies that a control should be found by name attribute. Finds the descendant or self control in the scope of the element having the specified name. Uses `Kebab` as the default term case.

```html
<input type="text" name="First-Name">
```
```cs
[FindByName(TermCase.PascalKebab)]
public TextInput<_> FirstName { get; private set; }
```