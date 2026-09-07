Global attributes are spread across all components in scope of a certain `AtataContext`
or all contexts if an attribute is added to `AtataContext.BaseConfiguration`.
Global attributes can be added though `AtataContextBuilder.Attributes` property.

```cs
builder.Attributes.Global.Add(new ClicksUsingScriptAttribute());
```

```cs
builder.Attributes.Global.Add(
    new FindByIdAttribute
    {
        TargetTypes = [typeof(Button<>), typeof(TextInput<>)]
    });
```