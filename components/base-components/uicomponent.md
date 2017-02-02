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
`Attributes` | Gets the `UIComponentAttributeProvider<TOwner>` instance that provides an access to the scope element's attributes. | `Attributes.Class.Should.Contain("some-class")` or `Attributes["data-value"].Should.Equal("val")`
`Css` | Gets the `UIComponentCssProvider<TOwner>` instance that provides an access to the scope element's CSS properties. | `Css["display"].Should.Equal("block")`
`IsVisible` | Gets the `DataProvider<bool, TOwner>` instance for the value indicating whether the control is visible. | `IsVisible.Should.BeTrue()`
`Content` | Gets the `DataProvider<string, TOwner>` instance for the text content. | `Content.Should.Contain("some value")`
`Should` | Gets the verification provider that gives a set of verification extension methods. | `Should.Exist()`, `Should.BeHidden()` or `Should.BeDisabled()`
{:.table.table-members}

#### Methods

Name | Description
---- | -----------
`Exists(SearchOptions options = null)` | Determines whether the component exists. If `options` is set to null, then it uses `SearchOptions.Safely()`.
`Missing(SearchOptions options = null)` | Determines whether the component is missing. If `options` is set to null, then it uses `SearchOptions.Safely()`.
{:.table.table-members}