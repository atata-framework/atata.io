#### Core

The framework core consists of the following concepts:

- **AtataContext** - the core runtime representation of a test execution context in Atata.
  - **AtataContextBuilder** - a fluent builder for configuring the `AtataContext`.
- **AtataSession** - a session within the `AtataContext`.
- **Verification functionality**
  - **Assertion** - `.Should.*` assertion. For example: `UserName.Should.Be("John")`.
  - **Expectation** - `.ExpectTo.*` expectation, which produces a warning.
  - **Waiting** - `.WaitTo.*` waiting for a certain condition. For example: `Component.WaitTo.BeVisible()`.

#### Web testing

- **Components** - classes that represent the most often used HTML components.
  - **Controls**
  - **Page objects**
  - **Control list**
- **Attributes**
  - **Attributes of control search** - basically, element locators,
    like `[FindById]`, `[FindByName]`, `[FindByXPath]`, etc.
  - **Trigger attributes** - a functionality that is automatically executed in response to certain events on a particular component.
    For example, when a click on button occurs it may be defined that a wait should be executed.
  - **Behavior attributes** - change the way how particular actions are executed.
    For example, specify the click behavior for a specific button by adding
   `[ClickUsingScript]` to perform the click using JavaScript,
    instead of default `IWebElement.Click()` way.
  - **Settings attributes** - set settings for control finding, culture, value format, etc.