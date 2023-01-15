Defines the delegate to invoke on the specified event.

```cs
AtataContext.GlobalConfiguration
    .Attributes.Component(typeof(Page<>)).Add(
        new InvokeDelegateAttribute(
            () =>
            {
                // Do something.
            },
            TriggerEvents.Init));
```

```cs
AtataContext.GlobalConfiguration
    .Attributes.Component<SomePage>().Add(
        new InvokeDelegateAttribute(DoSomething, TriggerEvents.Init));

void DoSomething()
{
}
```