Specifies that a control should be found by class attribute. Finds the descendant or self control in the scope of the element having the specified class. Uses `Kebab` as the default term case.

```html
<div class="first-name-section some-other-class">
    <input type="text">
</div>
```
```cs
[FindByClass("first-name-section")]
public TextInput<_> FirstName { get; private set; }
```