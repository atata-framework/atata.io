**`BlurBehaviorAttribute`** - the base behavior class for control blur (removing focus) implementation.
Responsible for the `Control<TOwner>.Hover()` method action.

#### Implementations

- <span class="label label-primary">default</span> **`BlursUsingScriptAttribute`** -
  the behavior for control blurring by executing `HTMLElement.blur()` JavaScript.