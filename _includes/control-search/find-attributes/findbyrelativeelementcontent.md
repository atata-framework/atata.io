Specifies that a control should be found by the content text of the relative element using its XPath.
Uses `TermCase.Title` as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<input type="text" />
<label>User Name</label>
```
```cs
[FindByRelativeElementContent("following-sibling::*[1]", "User Name")]
public TextInput<_> UserName { get; private set; }
```