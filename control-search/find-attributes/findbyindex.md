Specifies that a control should use the nth occurring element matching the control's definition.

Inherited from {% include clsref.md name="FindAttribute" %}.
{:.info}

```html
<label>
    <input type="radio" name="gender" value="Male" />Male
</label>
<label>
    <input type="radio" name="gender" value="Female" />Female
</label>
```
```cs
[FindByIndex(0)]
public RadioButton<_> MaleGender { get; private set; }

[FindByIndex(1)]
public RadioButton<_> FemaleGender { get; private set; }
```