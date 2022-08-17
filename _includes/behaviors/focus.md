**`FocusBehaviorAttribute`** - the base behavior class for control focus implementation.
Responsible for the `Control<TOwner>.Focus` method action.

#### Implementations

- <span class="label label-primary">default</span> **`FocusesUsingScriptAttribute`** -
  the behavior for control focusing by executing `HTMLElement.focus()` JavaScript.