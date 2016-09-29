Represents the base class for UI components (page objects and controls).

### Properties

Name | Description | Usage Example
---- | -----------
`Attributes` | Gets the scope element's attributes. | `Attributes["value"] == 1`
`Css` | Gets the scope element's CSS properties. | `Css["width"] > 400`
`Content` | Gets the text content. | `Content.Should.Contain("some value")`
`Should` | Gets the verification provider. | `Should.Exist()`
{:class="table table-members"}

### Methods

Name | Description
---- | -----------
`Exists(SearchOptions options = null)` | Determines whether the component exists.
`Missing(SearchOptions options = null)` | Determines whether the component is missing.
{:class="table table-members"}