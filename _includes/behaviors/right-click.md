**`RightClickBehaviorAttribute`** - the base behavior class for control right-click implementation.
Responsible for the `Control<TOwner>.RightClick()` method action.

#### Implementations

- <span class="label label-primary">default</span> **`RightClicksUsingActionsAttribute`** -
  the behavior for control right-clicking by using a set of actions:
  `Actions.MoveToElement(IWebElement)` or
  `Actions.MoveToElement(IWebElement, int, int)` and then
  `Actions.ContextClick()`.
- **`RightClicksUsingScriptAttribute`** - the behavior for control right-clicking by executing
  `HTMLElement.dispatchEvent(new Event('contextmenu'))` JavaScript.