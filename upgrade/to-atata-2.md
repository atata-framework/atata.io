---
layout: article
title: Upgrade to Atata 2
description: How to upgrade to Atata 2 considering breaking changes.
redirect_from:
  - /tutorials/migrating-to-atata-v2/
---

{{ page.description }}
{:.lead}

## First steps

The first migration step is to ensure or upgrade your Atata to v1.14.0.
Then fix all Atata warnings telling that some class/member is obsolete, as those items should be removed in v2.

## Atata targeting only .NET Standard 2.0

The Atata package now targets .NET Standard 2.0,
which supports .NET 5+, .NET Framework 4.6.1+ and .NET Core/Standard 2.0+.
Dropped support of .NET 4.0 - .NET 4.6.

Thus, if your project uses the .NET Framework version prior to 4.6.1,
either upgrade the project to the newer version or just stay with Atata v1.

## Upgrade Selenium.WebDriver to v4

The biggest change in Atata 2 is the upgrade of Selenium.WebDriver to v4.
Please check out the [Upgrade to Selenium 4](https://www.selenium.dev/documentation/webdriver/getting_started/upgrade_to_selenium_4/)
to see what changed and make appropriate modifications after the upgrade to Atata v2.
Pay attention to driver configuration changes.
All WebDriver configuration changes are reflected in Atata and Atata.Configuration.Json.
Check out the updated [Atata.Configuration.Json / JSON Schema](https://github.com/atata-framework/atata-configuration-json#json-schema)
if you use Atata JSON configuration files.

## `IWebDriver` is used instead of `RemoteWebDriver`

A usage of `RemoteWebDriver` was everywhere replaced with `IWebDriver`:

- `AtataContext.Driver` property
- `UIComponent.Driver` property
- `TriggerContext<TOwner>.Driver` property
- `AtataContextBuilder.UseDriver` methods
- `IDriverFactory.Create` method
- `DriverAtataContextBuilder<TBuilder>.CreateDriver` method
- `DriverAtataContextBuilder<TBuilder, TService, TOptions>.CreateDriver` method

### Driver usage changes

- `Driver.ExecuteScript(...)` -> `Driver.AsScriptExecutor().ExecuteScript(...)`
- `Driver.GetScreenshot()` -> `Driver.AsScreenshotTaker().GetScreenshot()`

Most other properties and methods of `RemoteWebDriver` are also present in `IWebDriver`.

## Default control `Visibility` is changed from `Visible` to `Any`

In Atata v1 when `Visibility` of control is not specified explicitly, `Visibility.Visible` is used by default to find the control's element, which filters only visible elements. That is useful filtering in a case when you have hidden HTML elements on a page and don't want Atata to find and interact with hidden elements. But a drawback of such filtering is performance decrease, as each element visibility check is a separate WebDriver command request.

Ensure that you want this feature to be enabled for your website under test. If you have a lot of hidden/invisible HTML elements (for example, check grey HTML tags in browser developer tools) and you still want Atata to filter them out, you may consider disabling this feature. Right after the upgrade to Atata v2, run all your tests and check out the test failures. If there are not many failures because of elements visibility, and they can be solved by setting `Visibility.Visible` to particular controls, then you are good to go with this feature. Otherwise, you can consider the ability to disable this feature globally.

### Set `Visible` by default globally

`Visibility.Any` behavior can be easily reverted to the one with `Visibility.Visible` filter that was in Atata v1 by one of the following ways:

1. Using `UseDefaultControlVisibility` configuration method:
   ```cs
   AtataContext.GlobalConfiguration.
       UseDefaultControlVisibility(Visibility.Visible);
   ```
1. In Atata JSON config:
   ```json
   {
     "defaultControlVisibility": "Visible"
   }
   ```

### Set `Visible` to particular controls

#### Set in `FindAttribute`

```cs
[FindBy("some-id")]
```
->
```cs
[FindBy("some-id", Visibility = Visibility.Visible)]
```

#### Set in `ControlDefinitionAttribute`

```cs
[ControlDefinition("li")]
```
->
```cs
[ControlDefinition("li", Visibility = Visibility.Visible)]
```

#### Set in `FindSettingsAttribute`

```cs
[FindSettings(OuterXPath = "./")]
```
 ->
```cs
[FindSettings(OuterXPath = "./", Visibility = Visibility.Visible)]
```

#### Add `FindOnlyVisibleAttribute`

```cs
[FindBy("some-id")]
public TextInput<_> Name { get; private set; }
```
->
```cs
[FindBy("some-id")]
[FindOnlyVisible]
public TextInput<_> Name { get; private set; }
```

You can also declare `[FindOnlyVisible(TargetAllChildren = true)]` on page object or parent control to target it to all child controls.

#### Set for dynamic control

```cs
var input = page.Find<TextInput<SomePage>>(new FindByNameAttribute("name1"));
```
->
```cs
var input = page.Find<TextInput<SomePage>>(new FindByNameAttribute("name1").Visible());
```

## The `""` is returned instead of `null` as value of string-based field component

In Atata v1, when input or content field is empty, `null` is returned as a value.
In Atata v2, an empty string is returned instead.

Take into account to change the assertions like:

```cs
SomeInput.Should.BeNull();
```

to:

```cs
SomeInput.Should.BeEmpty();
```

## Renaming and changes of frequently used classes and members

### Component finding

- `ComponentScopeLocateOptions` -> `ComponentScopeFindOptions`
- `ComponentScopeLocateResult` -> `ComponentScopeFindResult`
- `XPathComponentScopeLocateStrategy` -> `XPathComponentScopeFindStrategy`
- `FindAttribute.CreateStrategy()` -> `FindAttribute.CreateStrategy(UIComponentMetadata metadata)`
- `FindAttribute.BuildComponentName()` -> `FindAttribute.BuildComponentName(UIComponentMetadata metadata)`

### Configuration

- `AddLogConsumer(...)` -> `LogConsumers.Add(...)`
- `AddScreenshotConsumer(...)` -> `ScreenshotConsumers.Add(...)`
- `AddScreenshotFileSaving()` -> `ScreenshotConsumers.AddFile()`
- `LogConsumerInfo` -> `LogConsumerConfiguration`
- `AtataBuildingContext.LogConsumers` -> `AtataBuildingContext.LogConsumerConfigurations`
- `AtataContextInitEvent` -> `AtataContextInitStartedEvent`

### Data/Object provider

- `DataProvider<TData, TOwner>` -> `ValueProvider<TData, TOwner>`
- `IDataProvider<out TData, out TOwner>` -> `IObjectProvider<TData, TOwner>`
- `UIComponent<TOwner>.GetOrCreateDataProvider<TValue>(providerName, valueGetFunction)` -> `UIComponent<TOwner>.CreateValueProvider<TValue>(providerName, valueGetFunction)`
- `UIComponent<TOwner>.CreateDataProvider<TValue>(providerName, valueGetFunction)` -> `UIComponent<TOwner>.CreateValueProvider<TValue>(providerName, valueGetFunction)`
- `IUIComponent<TOwner>.GetOrCreateDataProvider<TValue>(providerName, valueGetFunction)` -> `UIComponent<TOwner>.CreateValueProvider<TValue>(providerName, valueGetFunction)`
- `DataVerificationProvider<TData, TOwner>` -> `ObjectVerificationProvider<TObject, TOwner>`
- `IDataVerificationProvider<TData, TOwner>` -> `IObjectVerificationProvider<TObject, TOwner>`
- `IObjectProvider<TObject>.Value` -> `IObjectProvider<TObject>.Object`
- `IObjectProvider<TObject, TOwner>.IsValueDynamic` -> `IObjectProvider<TObject, TOwner>.IsDynamic`
- `IObjectSource<TObject>.Value` -> `IObjectSource<TObject>.Object`
- `EnumerableProvider<TItem, TOwner>` -> `EnumerableValueProvider<TItem, TOwner>`

### Misc

- `[Wait(...)]` -> `[WaitSeconds(...)]`
- `ExtendedStringFormatter` -> `AtataTemplateStringFormatter`

## All breaking changes

- {% include issue.md id=580 type='mn' %} Change getting of content to skip whitespace text nodes using `ContentSource` values: `FirstChildTextNode`, `LastChildTextNode` and `ChildTextNodesTrimmedAndSpaceJoined`
- {% include issue.md id=581 type='mj' %} Return `""` instead of `null` as value of string-based field component
- {% include issue.md id=582 type='mn' %} Remove obsolete behavior attributes
- {% include issue.md id=583 type='mn' %} Remove obsolete types and members
- {% include issue.md id=585 type='mn' %} Remove `Triggers` property of `UIComponent<TOwner>`
- {% include issue.md id=589 type='mj' %} Rename classes related to component scope finding
- {% include issue.md id=590 type='mn' %} Rename `LogConsumerInfo` to `LogConsumerConfiguration`
- {% include issue.md id=594 type='mn' %} Change type of `DirectorySubject.Directories` property to `SubdirectoriesProvider`
- {% include issue.md id=595 type='mn' %} Change type of `DirectorySubject.Files` property to `DirectoryFilesProvider`
- {% include issue.md id=599 type='mj' %} Set target .NET framework to only .NET Standard 2.0
- {% include issue.md id=600 type='mn' %} Rename `ExtendedStringFormatter` to `AtataTemplateStringFormatter`
- {% include issue.md id=601 type='mn' %} Remove `ApplyMetadata` method from `UIComponent`
- {% include issue.md id=602 type='mn' %} Replace `InitValueTermOptions` method with `GetValueTermOptions` in `Field<T, TOwner>`
- {% include issue.md id=603 type='mn' %} Remove `ValueTermOptions` property from `IDataProvider<out TData, out TOwner>` and all classes implementing it
- {% include issue.md id=604 type='mn' %} Update `TitleTermFormatter` to not lowercase "from" and "with"
- {% include issue.md id=605 type='mn' %} Replace `IPropertySettings` with `IHasOptionalProperties`
- {% include issue.md id=606 type='mn' %} Change `PropertyBag`
- {% include issue.md id=607 type='mn' %} Add `UIComponentMetadata` parameter to `CreateStrategy` and `BuildComponentName` method of `FindAttribute`
- {% include issue.md id=608 type='mn' %} Remove `Properties` property from `MulticastAttribute`
- {% include issue.md id=609 type='mn' %} Replace `RemoteWebDriverLoggingExtensions` with `IJavaScriptExecutorLoggingExtensions`
- {% include issue.md id=610 type='mj' %} Replace `RemoteWebDriver` usage with `IWebDriver`
- {% include issue.md id=611 type='mj' %} Use Selenium.WebDriver package v4.1.1
- {% include issue.md id=613 type='mj' %} Replace `WithCapability` method of `DriverAtataContextBuilder<TBuilder, TService, TOptions>` with `AddAdditionalBrowserOption`
- {% include issue.md id=614 type='mj' %} Replace `WithGlobalCapability` method of driver `AtataContextBuilder`'s with `AddAdditionalOption`
- {% include issue.md id=616 type='mj' %} Change default value of `AtataContext.ModeOfCurrent` property to `AtataContextModeOfCurrent.AsyncLocal`
- {% include issue.md id=617 type='mj' %} Rename `WaitAttribute` to `WaitSecondsAttribute`
- {% include issue.md id=619 type='mn' %} Remove `Component` property from `IDataProvider<out TData, out TOwner>`
- {% include issue.md id=620 type='mn' %} Replace inheritance of `IDataProvider<out TData, out TOwner>` with `IObjectProvider<out TObject, out TOwner>`
- {% include issue.md id=621 type='mn' %} Make obsolete `DataProvider<TData, TOwner>` and `IDataProvider<TData, TOwner>`
- {% include issue.md id=622 type='mn' %} Inherit `ControlList<TItem, TOwner>` from `IEnumerableProvider<TItem, TOwner>` instead of `IDataProvider<TData, TOwner>`
- {% include issue.md id=626 type='mn' %} Rename `DataVerificationProvider<TData, TOwner>` to `ObjectVerificationProvider<TObject, TOwner>`
- {% include issue.md id=627 type='mn' %} Rename `Value` property of `IObjectProvider<out TObject>` to `Object`
- {% include issue.md id=628 type='mn' %} Rename `IsValueDynamic` property of `IObjectProvider<out TObject, out TOwner>` to `IsDynamic`
- {% include issue.md id=629 type='mn' %} Rename `Value` property of `IObjectSource<out TObject>` to `Object`
- {% include issue.md id=630 type='mn' %} Rename `EnumerableProvider<TItem, TOwner>` to `EnumerableValueProvider<TItem, TOwner>`
- {% include issue.md id=633 type='mn' %} Remove `VerificationKind` property from `IVerificationProvider<out TOwner>`
- {% include issue.md id=634 type='mn' %} Change return type of `IVerificationProvider<out TOwner>.GetRetryOptions` method
- {% include issue.md id=635 type='mn' %} Remove `GetShouldText` method from `IVerificationProvider<out TOwner>`
- {% include issue.md id=636 type='mn' %} Remove `ReportFailure` method from `IVerificationProvider<out TOwner>`
- {% include issue.md id=639 type='mn' %} Extract `WithProperties` method of `AtataContextBuilder<TContext>` to extension method
- {% include issue.md id=640 type='mn' %} Extract log consumer methods from `AtataContextBuilder` to new `LogConsumersAtataContextBuilder`
- {% include issue.md id=641 type='mn' %} Extract screenshot consumer methods from `AtataContextBuilder` to new `ScreenshotConsumersAtataContextBuilder`
- {% include issue.md id=645 type='mj' %} Change date/time format of `{build-start}` folder in `AtataContext.Artifacts` directory path to `yyyyMMddTHHmmss`
- {% include issue.md id=647 type='mj' %} Update `FileScreenshotConsumer` and `NLogFileConsumer` to use `AtataContext.Artifacts` as a default `DirectoryPathBuilder`
- {% include issue.md id=650 type='mj' %} Change default control visibility from `Visible` to `Any`
- {% include issue.md id=657 type='mj' %} Rename `AtataContextInitEvent` to `AtataContextInitStartedEvent`
- {% include issue.md id=660 type='mj' %} Use Atata.WebDriverExtras package v2.0.0

## Feedback

Feel free to use any [contact](/contact/) channel if you have problems with migration.