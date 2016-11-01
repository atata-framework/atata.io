Specifies that a control should be found by the parent fieldset element. Finds the descendant control in the scope of the `<fieldset>` element that has the `<legend>` element matching the specified term(s). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<fieldset>
    <legend>Gender</legend>
    <input type="radio">Male
    <br>
    <input type="radio">Female
</fieldset>
```
```cs
[FindByFieldSet]
public RadioButtonList<Gender, _> Gender { get; private set; }

public enum Gender
{
    Male,
    Female
}
```