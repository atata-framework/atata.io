`UIComponent<TOwner>` and `IUIComponent<TOwner>` have the following methods that allow a finding of controls dynamically:

```cs
public TControl Find<TControl>(params Attribute[] attributes)
    where TControl : Control<TOwner>;

public TControl Find<TControl>(string name, params Attribute[] attributes)
    where TControl : Control<TOwner>;

public ControlList<TControl, TOwner> FindAll<TControl>(params Attribute[] attributes)
    where TControl : Control<TOwner>;

public ControlList<TControl, TOwner> FindAll<TControl>(string name, params Attribute[] attributes)
    where TControl : Control<TOwner>;
```

**`Find`** - creates a control of the specified `TControl` type,
optionally with name and additional attributes, that is a descendant of the current component.
The control's element will be found using either `FindAttribute` specified in `attributes` parameter,
or the default/applied `FindAttribute` associated with the `TControl` type.

**`FindAll`** - creates a control list of the specified `TControl` type,
optionally with name and additional attributes, that are descendants of the current component.
Use `ControlDefinitionAttribute` to specialize the control element definition, instead of `FindAttribute` that doesn't utilize here.

### Usage

The methods can be used directly in tests:

```cs
Go.To<SomePage>()
    .Find<H1<SomePage>>().Should.Equal("Some Title")
    .FindAll<TextInput<SomePage>>().Should.HaveCount(4);
```

But it is recommended to use them inside page object methods,
because the basic usage purpose of these methods is to allow a search of control by dynamic identifier/parameter.

```cs
public TextInput<_> FindTextInputByLabel(string label) =>
    Find<TextInput<_>>(new FindByLabelAttribute(label));
```