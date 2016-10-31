Specifies that a control should be found by the label element. Finds the label element by the specified term(s), then finds the bound control (for example, by label's `for` attribute referencing the element of the control by id). Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
```
```cs
[FindByLabel]
public PasswordInput<_> Password { get; private set; }
```

The example first finds the label element by the content text "Password" (taken from the name of the property), then gets `for` attribute value and finds the control by "exampleInputPassword1" id.