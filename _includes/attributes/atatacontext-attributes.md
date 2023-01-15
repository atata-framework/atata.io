This is the functionality to add extra attributes to components via `AtataContext`.
These added attributes has higher order level and can override the attributes of the same kind (and at the same level) declared in a regular manner,
for example `FindAttribute`s or behavior attributes.

This feature can be quite useful in testing multi-language applications
or applications that have some HTML differences on different environments/version/editions.
So you might need to configure the page objects in a bit different way depending on testing environment.

### Examples

#### Apply to Control

```cs
AtataContext.GlobalConfiguration
    .Attributes.Component(typeof(Button<>)).Add(
        new FindByIdAttribute());
```

Sets all buttons to be found by `id` attribute.

#### Apply to Several Controls

```cs
AtataContext.GlobalConfiguration
    .Attributes.Global.Add(
        new FindByIdAttribute
        {
            TargetTypes = new[] { typeof(Button<>), typeof(TextInput<>) }
        });
```

Sets all buttons and text inputs to be found by `id` attribute.

#### Apply to Page Object

```cs
AtataContext.GlobalConfiguration
    .Attributes.Component<SomePage>().Add(
        new WaitForAngularAttribute());
```

Adds `WaitForAngularAttribute` trigger to `SomePage`.

#### Apply to Control Property of Page Object

```cs
AtataContext.GlobalConfiguration
    .Attributes.Component<SomePage>()
        .Property(x => x.Save).Add(new FindByContentAttribute("Save"))
        .Property(x => x.Cancel).Add(new FindByContentAttribute("Cancel"));
```

#### Apply to Components Within Assembly

```cs
AtataContext.GlobalConfiguration
    .Attributes.Assembly("SomeProduct.SomeAtataComponentsLibrary").Add(
        new WaitForAngularAttribute
        {
            TargetType = typeof(Page<>)
        });
```

Adds `WaitForAngularAttribute` trigger to all page classes that are located in "SomeProduct.SomeAtataComponentsLibrary" library (project).