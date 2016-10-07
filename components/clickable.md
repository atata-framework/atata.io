Represents any HTML element. By default is being searched by the id attribute.

```html
<div id="open-button">Open</div>
```

Supports `[GoTemporarily]` settings attribute.
{:class="info"}

### ClickableControl

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindById("open-button")]
        public ClickableControl<_> OpenButton { get; private set; }
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
        public Clickable<_> Open { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Open();
```

As it is a delegate type, the use of `Should`, `Content` and `IsEnabled` properties should be performed like methods (extensions), e.g. `Open.Should().Exist()`.
{:class="warning"}

### Navigation

It is possible to pass another gereric argument of `PageObject` type, meaning that after the click the navigation to this `PageObject` should be performed. Works the same way for the control and delegate.

```cs
using Atata;
using _ = SampleApp.ItemsPage;

namespace SampleApp
{
    public class ItemsPage : Page<_>
    {
        public Clickable<ItemPage, _> Open { get; private set; }
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
        public ClickableControl<ItemsPage, _> GoBack { get; private set; }
    }
}
```
```cs
Go.To<SamplePage1>().
    Open().
        GoBack.ClickAndGo();
```

Note that `Open` delegate property is being used as the method that returns the instance of `ItemPage` class. But for `GoBack` property it is needed to call `ClickAndGo` method as it is a property of `ClickableControl` class type.
{:class="info"}

### Methods

Name | Description
---- | -----------
`ClickAndGo()` | Clicks the control and performs the navigation to the page object of `TNavigateTo` type.
{:class="table table-members"}