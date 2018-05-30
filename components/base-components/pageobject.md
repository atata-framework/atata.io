Represents the base class for the page objects. Also executes `TriggerEvents.Init` and `TriggerEvents.DeInit` triggers.

{% include inherited.md from="UIComponent" %}

Inherited class supports `[PageObjectDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]`, `[FormatSettings]` and `[Culture]` settings attributes.
{:.info}

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

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Control</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">ActiveControl</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the active control.

```cs
PageObject.ActiveControl.Attributes.Value.Should.Equal("123");
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">virtual</span> <span class="type">TOwner</span></span>
    <h3><span class="body">RefreshPage()</span></h3>
</div>

Refreshes the current page.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">virtual</span> <span class="type">TOther</span></span>
    <h3><span class="body">GoBack<wbr>&lt;<span class="type">TOther</span>&gt;</span><span class="tail">(<span class="type">TOther</span> previousPageObject = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TOther</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TOther</span>&gt;</span>
</div>

Navigates back to the previous page.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">virtual</span> <span class="type">TOther</span></span>
    <h3><span class="body">GoForward<wbr>&lt;<span class="type">TOther</span>&gt;</span><span class="tail">(<span class="type">TOther</span> nextPageObject = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TOther</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TOther</span>&gt;</span>
</div>

Navigates forward to the next page.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">virtual</span> <span class="keyword">void</span></span>
    <h3><span class="body">CloseWindow()</span></h3>
</div>

Closes the current window.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TFramePageObject</span></span>
    <h3><span class="body">SwitchToFrame<wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span><span class="tail">(<span class="type">By</span> frameBy, <span class="type">TFramePageObject</span> framePageObject = <span class="keyword">null</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TFramePageObject</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span>
</div>

Switches to frame page object using `By` instance that represents the selector for `<iframe>` tag element.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">virtual</span> <span class="type">TFramePageObject</span></span>
    <h3><span class="body">SwitchToFrame<wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span><span class="tail">(<span class="type">IWebElement</span> frameElement, <span class="type">TFramePageObject</span> framePageObject = <span class="keyword">null</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TFramePageObject</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span>
</div>

Switches to frame page object using `IWebElement` instance that represents `<iframe>` tag element.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">virtual</span> <span class="type">TPageObject</span></span>
    <h3><span class="body">SwitchToRoot<wbr>&lt;<span class="type">TPageObject</span>&gt;</span><span class="tail">(<span class="type">TPageObject</span> rootPageObject = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TPageObject</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TPageObject</span>&gt;</span>
</div>

Switches to the root page using WebDriver's `SwitchTo().DefaultContent()` method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Press</span><span class="tail">(<span class="keyword">string</span> keys)</span></h3>
</div>

Presses the specified keystrokes.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">PerformActions<wbr></span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="type">Actions</span>, <span class="type">Actions</span>&gt; actionsBuilder)</span></h3>
</div>

Performs the specified set of actions.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Wait</span><span class="tail">(<span class="type">TimeSpan</span> time)</span></h3>
</div>

Waits the specified time.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Wait</span><span class="tail">(<span class="keyword">double</span> seconds)</span></h3>
</div>

Waits the specified time in seconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Do<wbr>&lt;<span class="type">TComponent</span>&gt;</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="type">TOwner</span>, <span class="type">TComponent</span>&gt; componentSelector, <span class="type">Action</span><wbr>&lt;<span class="type">TComponent</span>&gt; action)</span></h3>
</div>

Executes the action(s) passing specified parent's component.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TNavigateTo</span></span>
    <h3><span class="body">Do<wbr>&lt;<span class="type">TComponent</span>, <span class="type">TNavigateTo</span>&gt;</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="type">TOwner</span>, <span class="type">TComponent</span>&gt; componentSelector, <span class="type">Func</span><wbr>&lt;<span class="type">TComponent</span>, <span class="type">TNavigateTo</span>&gt; navigationAction)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TNavigateTo</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span>
</div>

Executes the navigation action(s) passing specified parent's component.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Do</span><span class="tail">(<span class="type">Action</span><wbr>&lt;<span class="type">TOwner</span>&gt; action)</span></h3>
</div>

Executes the action(s) passing current page object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TNavigateTo</span></span>
    <h3><span class="body">Do<wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="type">TOwner</span>, <span class="type">TNavigateTo</span>&gt; navigationAction)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TNavigateTo</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span>
</div>

Executes the navigation action(s) passing current page object.