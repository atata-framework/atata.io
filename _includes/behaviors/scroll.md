**`ScrollBehaviorAttribute`** - the base behavior class for scrolling to control.
Responsible for the `Control<TOwner>.ScrollTo()` method action.

#### Implementations

- <span class="label label-primary">default</span> **`ScrollsUsingScrollToElementActionAttribute`** -
  the behavior for scrolling to control using WebDriver's
  `Actions.ScrollToElement(IWebElement)` action.
- **`ScrollsUsingMoveToElementActionAttribute`** - the behavior for scrolling to control using WebDriver's
  `Actions.MoveToElement(IWebElement)` action.
- **`ScrollsUsingScriptAttribute`** - the behavior for scrolling to control using JavaScript.
  Performs `element.scrollIntoView()` function.