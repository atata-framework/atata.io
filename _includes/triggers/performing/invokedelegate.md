Defines the delegate to invoke on the specified event.

```cs
builder.Attributes.Component(typeof(Page<>)).Add(
    new InvokeDelegateAttribute(
        () =>
        {
            // Do something.
        },
        TriggerEvents.Init));
```

```cs
builder.Attributes.Component<SomePage>().Add(
    new InvokeDelegateAttribute(DoSomething, TriggerEvents.Init));

void DoSomething()
{
}
```