Represents any HTML element. Default search finds the first occurring element.

```html
<div id="open-button">Open</div>
```

Supports `[GoTemporarily]` settings attribute.
{:class="info"}

### Clickable Control

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById("open-button")]
        public Clickable<_> OpenButton { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    OpenButton.Click();
```

### Clickable Delegate

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById("open-button")]
        public ClickableDelegate<_> Open { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Open();
```

As it is a delegate type, the use of `Should`, `Content` and `IsEnabled` properties should be performed like methods (extensions), e.g. `Open.Should().Exist()`.
{:.warning}

### Navigation

It is possible to pass another gereric argument of `PageObject` type, meaning that after the click the navigation to this `PageObject` should be performed. Works the same way for the control and delegate.

```cs
using Atata;
using _ = SampleApp.ItemsPage;

namespace SampleApp
{
    public class ItemsPage : Page<_>
    {
        public ClickableDelegate<ItemPage, _> Open { get; private set; }
    }
}
```
```cs
using Atata;
using _ = SampleApp.ItemPage;

namespace SampleApp
{
    public class ItemPage : Page<_>
    {
        public Clickable<ItemsPage, _> GoBack { get; private set; }
    }
}
```
```cs
Go.To<SamplePage1>().
    Open().
        GoBack.ClickAndGo();
```

Note that `Open` delegate property is being used as the method that returns the instance of `ItemPage` class. But for `GoBack` property it is needed to call `ClickAndGo` method as it is a property of `Clickable` class type.
{:class="info"}

### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">TNavigateTo</span></span>
    <h3><span class="body">ClickAndGo<wbr>&lt;<span class="type">TNavigateTo</span>, <span class="type">TOwner</span>&gt;</span><span class="tail">(<span class="keyword">this</span> <span class="type">INavigable</span><wbr>&lt;<span class="type">TNavigateTo</span>, <span class="type">TOwner</span>&gt; navigableControl)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TNavigateTo</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span>
    <span class="where"><span class="keyword">where</span> <span class="type">TOwner</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
</div>

Clicks the control and performs the navigation to the page object of `TNavigateTo` type.