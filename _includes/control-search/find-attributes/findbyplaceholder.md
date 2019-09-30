Specifies that a control should be found by the placeholder attribute. Finds the control that has the placeholder attribute matching the specified term(s). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<input type="text" placeholder="First Name">
```
```cs
[FindByPlaceholder]
public TextInput<_> FirstName { get; private set; }
```