Specifies that a control should be found by the content text or value attribute. Finds the control that has the content or value attribute matching the specified term(s). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<input type="button" value="Save">
<button>Cancel</button>
```
```cs
[FindByContentOrValue]
public Button<_> Save { get; private set; }

[FindByContentOrValue]
public Button<_> Cancel { get; private set; }
```