Atata attributes can divided into the categories:
- **Attributes of control search** - basically, element locators,
like `[FindById]`, `[FindByName]`, `[FindByXPath]`, etc.
- **Trigger attributes** - a functionality that is automatically executed in response to certain events on a particular component.
For example, when a click on button occurs it may be defined that a wait should be executed.
- **Behavior attributes** - change the way how particular actions are executed.
For example, specify the click behavior for a specific button by adding
`[ClickUsingScript]` to perform the click using JavaScript,
instead of default `IWebElement.Click()` way.
- **Settings attributes** - set settings for control finding, culture, value format, etc.