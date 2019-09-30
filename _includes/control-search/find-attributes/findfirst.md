Indicates that a control should use the first occurring element matching the control's definition.

Inherited from {% include clsref.md name="FindAttribute" %}.
{:.info}

```html
<input type="password">
```
```cs
[FindFirst]
public PasswordInput<_> Password { get; private set; }
```