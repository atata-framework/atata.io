Specifies that a control should be found by id attribute. Finds the descendant or self control in the scope of the element having the specified id. Uses {% include tcref.md name="Kebab" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<input type="text" id="first-name">
```
```cs
[FindById]
public TextInput<_> FirstName { get; private set; }
```

Also can be found inside the element having the specified id:

```html
<div id="first-name-wrapper">
    <input type="text">
</div>
```
```cs
[FindById("first-name-wrapper")]
public TextInput<_> FirstName { get; private set; }
```

In this case the first occurrence of the `input` in the element with `id="first-name-wrapper"` will be found.