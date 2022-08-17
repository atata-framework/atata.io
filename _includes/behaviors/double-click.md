**`DoubleClickBehaviorAttribute`** - the base behavior class for control double-click implementation.
Responsible for the `Control<TOwner>.DoubleClick()` method action.

#### Implementations

- <span class="label label-primary">default</span> **`DoubleClicksUsingActionsAttribute`** -
  the behavior for control double-clicking by using a set of actions:
  `Actions.MoveToElement(IWebElement)` or `Actions.MoveToElement(IWebElement, int, int)` and `Actions.DoubleClick()`.
- **`DoubleClicksUsingScriptAttribute`** - the behavior for control double-clicking by executing
  `HTMLElement.dispatchEvent(new Event('dblclick'))` JavaScript.