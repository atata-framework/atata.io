Another example is to change the settings of `ItemsControl` items.

The following ItemsControl has all descendant elements as items:

```cs
[FindById("some-id")]
public ItemsControl<Control<_>, _> ItemsControlOfDescendantsAsControls { get; private set; }
```

But this one has only child elements as items:

```cs
[FindById("some-id")]
[FindSettings(OuterXPath = "./", TargetName = "Items")]
public ItemsControl<Control<_>, _> ItemsControlOfChildrenAsControls { get; private set; }
```