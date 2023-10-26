Specifies that a control should be found by the `aria-label` attribute.
Finds the control that has the `aria-label` attribute matching the specified term(s).
Uses `TermCase.Sentence` as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<button aria-label="Close">
    ...
</button>
```
```cs
[FindByAriaLabel]
public Button<_> Close { get; private set; }
```