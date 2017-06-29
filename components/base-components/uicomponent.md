Represents the base class for UI components (page objects and controls).

#### Syntax

There are 2 `UIComponent` classes. The generic one is inherited from the non-generic:

```cs
public abstract class UIComponent
```

and 

```cs
public abstract class UIComponent<TOwner> : UIComponent, IUIComponent<TOwner>
    where TOwner : PageObject<TOwner>
```

`TOwner` is the type of the owner page object. Declaring any control or page object requires specifying `TOwner`.
{:.info}

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Scope` | Gets the `IWebElement` instance that represents the scope HTML element. Also executes `TriggerEvents.BeforeAccess` and `TriggerEvents.AfterAccess` triggers. | `Scope.SendKeys("some text")`
`Attributes` | Gets the `UIComponentAttributeProvider<TOwner>` instance that provides an access to the scope element's attributes. | `Attributes.Class.Should.Contain("some-class")` or `Attributes["data-value"].Should.Equal("val")`
`Css` | Gets the `UIComponentCssProvider<TOwner>` instance that provides an access to the scope element's CSS properties. | `Css["display"].Should.Equal("block")`
`IsVisible` | Gets the `DataProvider<bool, TOwner>` instance for the value indicating whether the control is visible. | `IsVisible.Should.BeTrue()`
`Content` | Gets the `DataProvider<string, TOwner>` instance for the text content. | `Content.Should.Contain("some value")`
`Should` | Gets the verification provider that gives a set of verification extension methods. | `Should.Exist()`, `Should.BeHidden()` or `Should.BeDisabled()`
`Triggers` | Gets the set of triggers. Provides the functionality to get/add/remove triggers dynamically. | `Triggers.Add(new WaitAttribute(2))`
`ComponentLocation` | Gets the `UIComponentLocationProvider<TOwner>` instance that provides an access to the scope element's location (X and Y). | `ComponentLocation.X.Should.BeGreater(10)`
`ComponentSize` | Gets the `UIComponentSizeProvider<TOwner>` instance that provides an access to the scope element's size (Width and Height). | `ComponentSize.Height.Should.BeLessOrEqual(15)`
{:.table.table-members}

#### Methods

Name | Description
---- | -----------
`Exists(SearchOptions options = null)` | Determines whether the component exists. If `options` is set to null, then it uses `SearchOptions.Safely()`.
`Missing(SearchOptions options = null)` | Determines whether the component is missing. If `options` is set to null, then it uses `SearchOptions.Safely()`.
{:.table.table-members}

When accessing any `UIComponent` and inherited type's member that uses `Scope` (actual HTML element) property, executes `TriggerEvents.BeforeAccess` and `TriggerEvents.AfterAccess` triggers. [Find out more on triggers](/triggers/).
{:.info}