**`DragAndDropToOffsetBehaviorAttribute`** - the base behavior class for control drag and drop to offset implementation.
Responsible for the `Control<TOwner>.DragAndDropToOffset(int, int)` method action.

#### Implementations

- <span class="label label-primary">default</span> **`DragsAndDropsToOffsetUsingActionsAttribute`** -
  the behavior for control dragging and dropping to offset using WebDriver's `Actions`.
  Performs `Actions.DragAndDropToOffset(IWebElement, int, int)` action.