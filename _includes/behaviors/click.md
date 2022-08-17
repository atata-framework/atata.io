**`ClickBehaviorAttribute`** - the base behavior class for control click implementation.
Responsible for the `Control<TOwner>.Click()` method action.

#### Implementations

- <span class="label label-primary">default</span> **`ClicksUsingClickMethodAttribute`** -
  the behavior for control clicking by `IWebElement.Click()` method.
- **`ClicksUsingActionsAttribute`** - the behavior for control clicking by using a set of actions:
  `Actions.MoveToElement(IWebElement)` or `Actions.MoveToElement(IWebElement, int, int)` and `Actions.Click()`.
- **`ClicksUsingScriptAttribute`** - the behavior for control clicking by executing `HTMLElement.click()` JavaScript method.
- **`ClicksOnCellByIndexAttribute`** - the behavior for control clicking by actually clicking the nth `<td>` cell.
  There is a sense to apply this behavior to classes inherited from `TableRow<TOwner>`.