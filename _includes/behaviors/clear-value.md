**`ValueClearBehaviorAttribute`** - the base behavior class for an implementation of control value clearing.
Responsible for the `EditableTextField<TValue, TOwner>.Clear()` method action.

#### Implementations

- <span class="label label-primary">default</span> **`ClearsValueUsingClearMethodAttribute`** -
  the behavior for control value clearing by `IWebElement.Clear()` method.
- **`ClearsValueUsingClearMethodOrScriptAttribute`** - the behavior for control value clearing by trying to execute`IWebElement.Clear()` method.
  If `InvalidElementStateException` occurs, then clears the value by executing
  `HTMLElement.value = ''; HTMLElement.dispatchEvent(new Event('change'));` JavaScript.
- **`ClearsValueUsingScriptAttribute`** - the behavior for control value clearing by executing
  `HTMLElement.value = ''; HTMLElement.dispatchEvent(new Event('change'));` JavaScript.
- **`ClearsValueUsingCtrlADeleteKeysAttribute`** - the behavior for control value clearing by performing "Ctrl+A, Delete" keyboard shortcut.
- **`ClearsValueUsingHomeShiftEndDeleteKeysAttribute`** - the behavior for control value clearing by performing "Home, Shift+End, Delete" keyboard shortcut.
- **`ClearsValueUsingShiftHomeDeleteKeysAttribute`** - the behavior for control value clearing by performing "Shift+Home, Delete" keyboard shortcut.
  Note that "End" key is not pressed in the beginning of the shortcut, as the caret on element by default goes to the end.