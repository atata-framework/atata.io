**Atata Framework** - C#/.NET web test automation full featured framework based on Selenium WebDriver. It uses fluent page object pattern. [**Atata repository**]({{ site.links.atata_github }}) is open source and hosted on GitHub under the Apache License 2.0.

Framework basically consists of the following concepts:

- **AtataContext**
  - **Configuration** - use fluent builder and/or JSON config.
- **Components**
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
- **Verification functionality**
  - `.Should.*` - an assertion. For example: `UserName.Should.Be("John")`.
  - `.ExpectTo.*` - an expectation, which produces a warning.
  - `.WaitTo.*` - a waiting for a certain condition.