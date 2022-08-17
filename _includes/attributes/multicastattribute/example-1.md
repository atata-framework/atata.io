Assume that we have a control class that contains `Select` button property:

```cs
[ControlDefinition(ContainingClass = "some-class")]
public class SomeControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    [FindFirst]
    public TextInput<TOwner> Input { get; private set; }

    [FindByContent("Select...")]
    public Button<TOwner> Select { get; private set; }
}
```

In most cases this button has text "Select..." that is used to identify the control.
Regularly this control can be defined this way in page objects:

```cs
public SomeControl<_> Control1 { get; private set; }
```

Let's also assume that in some particular page the text of this button can be different, for example "...".
So we need to change the locator of that button
from `[FindByContent("Select...")]` to `[FindByContent("...")]` only for that page.

It can be done using targeting mechanics of `MulticastAttribute`.

```cs
[FindByContent("...", TargetName = nameof(SomeControl<_>.Select))]
public SomeControl<_> Control1 { get; private set; }
```