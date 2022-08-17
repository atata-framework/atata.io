In order to apply a needed behavior to a certain control, just apply an appropriate attribute as any other Atata multi-cast attribute.

```cs
[ClicksUsingScript]
public Button<_> Save { get; private set; }
```

### Custom Behavior

In order to create a custom implementation of a specific behavior,
create a new class inherited for behavior's base class and write a behavior implementation inside an overriden `Execute` method.

```cs
public class ClicksUsingCustomWayAttribute : ClickBehaviorAttribute
{
    public override void Execute<TOwner>(IUIComponent<TOwner> component)
    {
        // TODO: Write an implementation.
    }
}
```