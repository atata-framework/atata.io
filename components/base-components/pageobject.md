Represents the base class for the page objects. Also executes `TriggerEvents.Init` and `TriggerEvents.DeInit` triggers.

#### Syntax

```cs
public abstract class PageObject<TOwner> : UIComponent<TOwner>, IPageObject<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">PageTitle</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the DataProvider instance for the title of the current HTML page.

```cs
PageObject.PageTitle.Should.StartWith("Some Title");
string title = PageObject.PageTitle;
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">PageUrl</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the DataProvider instance for the URL of the current HTML page.

```cs
PageObject.PageUrl.Should.EndWith("/some-page?id=123987");
```

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
`Press(string keys)` | Presses the specified keystrokes.
`Wait(TimeSpan time)` | Waits the specified time.
`Wait(double seconds)` | Waits the specified time in seconds.
`Do<TComponent>(Func<TOwner, TComponent> componentSelector, Action<TComponent> action)` | Executes the action(s) passing specified parent's component.
`Do<TComponent, TNavigateTo>(Func<TOwner, TComponent> componentSelector, Func<TComponent, TNavigateTo> navigationAction)` | Executes the navigation action(s) passing specified parent's component.
`Do(Action<TOwner> action)` | Executes the action(s) passing current page object.
`Do<TNavigateTo>(Func<TOwner, TNavigateTo> navigationAction)` | Executes the navigation action(s) passing current page object.
{:.table.table-members.table-members-fixed-col-1}

Inherited class supports `[PageObjectDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]`, `[FormatSettings]` and `[Culture]` settings attributes.
{:.info}