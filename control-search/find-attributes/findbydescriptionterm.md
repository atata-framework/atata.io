Specifies that a control should be found by the description list term element. Finds the descendant control of the `<dd>` element in the scope of the `<dl>` element that has the `<dt>` element matching the specified term(s). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<dl>
    <dt>Office</dt>
    <dd>London</dd>
</dl>
```
```cs
[FindByDescriptionTerm]
public Text<_> Office { get; private set; }
```