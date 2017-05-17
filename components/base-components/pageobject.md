Represents the base class for the page objects.

#### Syntax

```cs
public abstract class PageObject<TOwner> : UIComponent<TOwner>, IPageObject<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

Name | Description | Usage Example
---- | ----------- | -------------
`PageTitle` | Gets the DataProvider instance for the title of the current HTML page. | `PageTitle.Should.StartWith("Some Title")`
`PageUrl` | Gets the DataProvider instance for the URL of the current HTML page. | `PageUrl.Should.EndWith("/some-page?id=123987")`
{:.table.table-members}

#### Methods

Name | Description
---- | -----------
`RefreshPage()` | Refreshes the current page.
`GoBack<TOther>(TOther previousPageObject = null)` | Navigates back to the previous page.
`GoForward<TOther>(TOther nextPageObject = null)` | Navigates forward to the next page.
`CloseWindow()` | Closes the current window.
`SwitchToFrame<TFramePageObject>(By frameBy, ...)` | Switches to frame page object using `By` instance that represents the selector for `<iframe>` tag element.
`SwitchToFrame<TFramePageObject>(IWebElement frameElement, ...)` | Switches to frame page object using `IWebElement` instance that represents `<iframe>` tag element.
`SwitchToRoot<TPageObject>(TPageObject rootPageObject = null)` | Switches to the root page using WebDriver's `SwitchTo().DefaultContent()` method.
`Wait(TimeSpan time)` | Waits the specified time.
`Wait(double seconds)` | Waits the specified time in seconds.
{:.table.table-members.table-members-fixed-col-1}

Inherited class supports `[PageObjectDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]`, `[FormatSettings]` and `[Culture]` settings attributes.
{:.info}