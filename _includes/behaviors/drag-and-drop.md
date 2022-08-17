**`DragAndDropBehaviorAttribute`** - Represents the base behavior class for control drag and drop implementation
Responsible for the `Control<TOwner>.DragAndDropTo(Control<TOwner>)` and
`Control<TOwner>.DragAndDropTo(Func<TOwner, Control<TOwner>>)` methods action.

#### Implementations

- <span class="label label-primary">default</span> **`DragsAndDropsUsingActionsAttribute`** -
  the behavior for drag and drop using WebDriver's `Actions`.
  Performs `Actions.DragAndDrop(IWebElement, IWebElement)` action.
- **`DragsAndDropsUsingDomEventsAttribute`** - the behavior for drag and drop using JavaScript.
  The script simulates drag and drop by dispatching DOM events: 'dragstart', 'dragenter', 'dragover', 'drop' and 'dragend'.