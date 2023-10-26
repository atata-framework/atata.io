Specifies that a control should be found by the content text of the preceding sibling.
Uses `TermCase.Title` as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<span>User Name</span>
<input type="text" />
```
```cs
[FindByPrecedingSiblingContent("User Name")]
public TextInput<_> UserName { get; private set; }
```