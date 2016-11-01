Specifies that a control should be found by the specified attribute. Finds the control that has the specified attribute matching the specified term(s). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<input type="text" data-value="FirstName">
```
```cs
[FindByAttribute("data-value", TermCase.None)]
public TextInput<_> FirstName { get; private set; }
```