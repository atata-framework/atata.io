Specifies that a control should be found by the DOM test identifier attribute, `data-testid` by default.
Finds the control that has the test identifier attribute matching the specified term(s).
Uses `TermCase.Kebab` as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<button data-testid="add-product">
    <img src="/icon-add.png" width="32" height="32">
</button>
```
```cs
[FindByTestId]
public Button<_> AddProduct { get; private set; }
```

#### Configuration

The DOM test identifier attribute can be configuured through
`UseDomTestIdAttributeName` and `UseDomTestIdAttributeDefaultCase` methods of `AtataContextBuilder`.

```cs
AtataContext.GlobalConfiguration
    .UseDomTestIdAttributeName("data-autoid")
    .UseDomTestIdAttributeDefaultCase(TermCase.PascalKebab);
```