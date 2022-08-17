**`ValueSetBehaviorAttribute`** - the base behavior class for an implementation of the `EditableTextField<TValue, TOwner>` value set.

#### Implementations

- <span class="label label-primary">default</span> **`SetsValueUsingClearAndTypeBehaviorsAttribute`** -
  the behavior for control value set by executing `ValueClearBehaviorAttribute` behavior first;
  then, if value to set is not `null` or empty,
  executes `TextTypeBehaviorAttribute` behavior.
- **`SetsValueUsingScriptAttribute`** - the behavior for control value set by executing
  `HTMLElement.value = '{value}'; HTMLElement.dispatchEvent(new Event('change'));` JavaScript.
- **`SetsValueUsingSendKeysAttribute`** - the behavior for control value set by `IWebElement.SendKeys(string)` method.
  `IWebElement.SendKeys(string)` method is invoked only when the value is not null or empty.
- **`SetsValueUsingClearAndSendKeysAttribute`** - the behavior for control value set by invoking
  `IWebElement.Clear()` and `IWebElement.SendKeys(string)` methods.
  `IWebElement.SendKeys(string)` method is invoked only when the value is not null or empty.
- **`SetsValueUsingCharByCharTypingAttribute`** - the behavior for control value set by clicking on the control element
  and then typing the text character by character with interval defined in `TypingIntervalInSeconds` property.