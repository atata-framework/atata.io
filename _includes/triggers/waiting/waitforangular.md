Indicates to wait until Angular (v2+) has finished rendering and has no outstanding HTTP calls.
By default occurs after the click.

Apply to button after click:

```cs
[WaitForAngular(TriggerEvents.AfterClick)]
public Button<_> Save { get; private set;}
```

Apply to page object upon initialization:

```cs
[WaitForAngular(TriggerEvents.Init)]
public class SomePage : Page<_>
{
}
```

Apply the trigger globally for all `Init` and `AfterClick` events:

```cs
AtataContext.GlobalConfiguration
    .Attributes.Global.Add(new WaitForAngularAttribute(TriggerEvents.Init | TriggerEvents.AfterClick));
```