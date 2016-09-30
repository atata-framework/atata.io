Represents the base class for the page objects.

### Properties

Name | Description | Usage Example
---- | -----------
`PageTitle` | Gets the title of the current HTML page. | `PageTitle.Should.StartWith("Some Title")`
`PageUrl` | Gets the URL of the current HTML page. | `PageUrl.Should.EndWith("/some-page?id=123987")`
{:class="table table-members"}

### Methods

Name | Description
---- | -----------
`RefreshPage()` | Refreshes the current page.
`GoBack<TOther>(TOther previousPageObject = null)` | Navigates back to the previous page.
`GoForward<TOther>(TOther nextPageObject = null)` | Navigates forward to the next page.
`CloseWindow()` | Closes the current window.
{:class="table table-members"}