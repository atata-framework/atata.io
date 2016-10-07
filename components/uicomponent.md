Represents the base class for UI components (page objects and controls).

### Syntax

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

### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`Attributes` | Gets the scope element's attributes. | `Attributes["value"] == 1`
`Css` | Gets the scope element's CSS properties. | `Css["width"] > 400`
`Content` | Gets the DataProvider instance for the text content. | `Content.Should.Contain("some value")`
`Should` | Gets the verification provider that gives a set of verification extension methods.  | `Should.Exist()`
{:.table.table-members}

### Methods

Name | Description
---- | -----------
`Exists(SearchOptions options = null)` | Determines whether the component exists. If `options` is set to null, uses SearchOptions.Safely().
`Missing(SearchOptions options = null)` | Determines whether the component is missing. If `options` is set to null, uses SearchOptions.Safely().
{:.table.table-members}