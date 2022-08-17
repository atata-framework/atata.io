Global attributes are spread across all components in scope of a certain `AtataContext`
or all contexts if an attribute is added to `AtataContext.GlobalConfiguration`.
Global attributes can be added though `AtataContextBuilder.Attributes` property
or specified in JSON config file (see [JSON Schema](https://github.com/atata-framework/atata-configuration-json#json-schema)).

```cs
AtataContext.Configure()
    .Attributes.Global.Add(
        new ClicksUsingScriptAttribute())
    .Build();
```

```cs
AtataContext.GlobalConfiguration
    .Attributes.Global.Add(
        new FindByIdAttribute
        {
            TargetTypes = new[] { typeof(Button<>), typeof(TextInput<>) }
        });
```