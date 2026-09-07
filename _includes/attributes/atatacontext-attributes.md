This is the functionality to add extra attributes to components via `AtataContext`.
These added attributes has higher order level and can override the attributes of the same kind (and at the same level) declared in a regular manner,
for example `FindAttribute`s or behavior attributes.

This feature can be quite useful in testing multi-language applications
or applications that have some HTML differences on different environments/version/editions.
So you might need to configure the page objects in a bit different way depending on testing environment.

In case of global configuration, it is recommended to do that in `ConfigureAtataContextBaseConfiguration` method of `GlobalFixture`.

### Examples

#### Apply to control

```cs
builder.Attributes.Component(typeof(Button<>)).Add(new FindByIdAttribute());
```

Sets all buttons to be found by `id` attribute.

#### Apply to several controls

```cs
builder.Attributes.Global.Add(
    new FindByIdAttribute
    {
        TargetTypes = [typeof(Button<>), typeof(TextInput<>)]
    });
```

Sets all buttons and text inputs to be found by `id` attribute.

#### Apply to page object

```cs
builder.Attributes.Component<SomePage>().Add(new WaitForAngularAttribute());
```

Adds `WaitForAngularAttribute` trigger to `SomePage`.

#### Apply to control property of page object

```cs
builder.Attributes.Component<OrdinaryPage>()
    .Configure(x =>
    {
        x.Property(x => x.Save).Add(new FindByContentAttribute("Save"));
        x.Property(x => x.Cancel).Add(new FindByContentAttribute("Cancel"));
    });
```

#### Apply to components within assembly

```cs
builder.Attributes.Assembly("SomeProduct.SomeAtataComponentsLibrary").Add(
    new WaitForAngularAttribute
    {
        TargetType = typeof(Page<>)
    });
```

Adds `WaitForAngularAttribute` trigger to all page classes that are located in "SomeProduct.SomeAtataComponentsLibrary" library (assembly).