Indicates that the click on the parent component should occur on the specified event. By default occurs before any access to the component. Is useful for the drop-down button/menu controls.

Here is the Bootstrap's dropdown example:

```html
<li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
        Account <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
        <li>
            <a href="#">Settings</a>
        </li>
        <li>
            <a href="#">Sign Out</a>
        </li>
    </ul>
</li>
```

Bootstrap's dropdown control can be defined with the following class:

```cs
[ControlDefinition(ContainingClass = "dropdown", ComponentTypeName = "dropdown")]
[ControlFinding(FindTermBy.ChildContent)]
[ClickParent(AppliesTo = TriggerScope.Children)]
public class BSDropdown<TOwner> : Clickable<TOwner>
    where TOwner : PageObject<TOwner>
{
}
```

The control class is marked with the `[ClickParent(AppliesTo = TriggerScope.Children)]` attribute that means that before the clicking on any of the child component the click on the parent (drop-down) should be performed.

And the specified above account drop-down can be implemented as follows:

```cs
public class AccountDropdown : BSDropdown<_>
{
    public Link<SignInPage, _> SignOut { get; private set; }

    public Link<SettingsPage, _> Settings { get; private set; }
}
```