Specifies that a control should be found by the `aria-labelledby` attribute.
Finds the control that has the `aria-labelledby` attribute matching the specified term(s).
Uses `TermCase.Kebab` as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<button aria-labelledby="color">Red</button>
<span id="color">Yellow</span>
```
```cs
[FindByAriaLabelledBy]
public Button<_> Color { get; private set; }
```