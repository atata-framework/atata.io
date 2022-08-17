**`HoverBehaviorAttribute`** - the base behavior class for control hover implementation.
Responsible for the <see cref="Control{TOwner}.Hover"/> method action.

#### Implementations

- <span class="label label-primary">default</span> **`HoversUsingActionsAttribute`** -
  the behavior for control hovering by using one of actions:
`Actions.MoveToElement(IWebElement)` or `Actions.MoveToElement(IWebElement, int, int)`.