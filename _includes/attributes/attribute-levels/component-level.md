Component-level attributes are defined on a class of component and don't have any target property set.

```cs
[Url("some-page")]
public class SomePage : Page<_>
{
}
```


```cs
[ControlDefinition("div", ContainingClass = "some-class")]
public class SomeControl<TOwner> : Control<_>
    where TOwner : PageObject<TOwner>
{
}
```