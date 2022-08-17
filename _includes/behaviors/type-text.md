**`TextTypeBehaviorAttribute`** - the base behavior class for an implementation of control text typing.
Responsible for the `EditableTextField<TValue, TOwner>.Type(string)` method action.

#### Implementations

- <span class="label label-primary">default</span> **`TypesTextUsingSendKeysAttribute`** -
  the behavior for control text typing by `IWebElement.SendKeys(string)` method.
  `IWebElement.SendKeys(string)` method is invoked only when the value is not null or empty.
- **`TypesTextUsingSendKeysCharByCharAttribute`** - the behavior for control text typing by invoking
  `IWebElement.SendKeys(string)` method
  for character by character with interval defined in `TypingIntervalInSeconds` property.
- **`TypesTextUsingFocusBehaviorAndSendKeysAttribute`** - the behavior for control text typing by executing
  `FocusBehaviorAttribute` behavior and then invoking `IWebElement.SendKeys(string)` method.
- **`TypesTextUsingFocusBehaviorAndSendKeysCharByCharAttribute`** - the behavior for control text typing by executing
  `FocusBehaviorAttribute` behavior and then invoking `IWebElement.SendKeys(string)` method
  for character by character with interval defined in `TypingIntervalInSeconds` property.
- **`TypesTextUsingScriptAttribute`** - the behavior for control text typing by executing
  `HTMLElement.value += '{value}'; HTMLElement.dispatchEvent(new Event('change'));` JavaScript.