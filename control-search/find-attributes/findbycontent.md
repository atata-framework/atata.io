Specifies that a control should be found by the content text. Finds the control having the specified content. Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<button>Save</button>
```
```cs
[FindByContent]
public Button<_> Save { get; private set; }
```