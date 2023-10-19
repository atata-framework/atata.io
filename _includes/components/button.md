Represents the button control. Default search is performed by the content and value (`button` by content text and `input` by `value` attribute). Handles any `input` element with `type="button"`, `type="submit"`, `type="reset"` or `button` element.

```html
<button>Save</button>
```

or

```html
<input type="button" value="Save">
```

Supports `[GoTemporarily]` settings attribute.
{:class="info"}

### Button Control

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public Button<_> Save { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Save.Click();
```

### Button Delegate

It is recommended to use `Button` delegate as it simplifies the use by eliminating `Click` and `ClickAndGo` methods.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public ButtonDelegate<_> Save { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Save();
```

As it is a delegate type, the use of `Should`, `Content` and `IsEnabled` properties should be performed like methods (extensions), e.g. `Save.Should().BePresent()`.
{:.warning}

### Navigation

It is possible to pass another generic argument of `PageObject` type, meaning that after the click on the button the navigation to this `PageObject` is performed. It works the same way for the control and delegate.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage1;

    public class SamplePage1 : Page<_>
    {
        public ButtonDelegate<SamplePage2, _> Save { get; private set; }
    }
}
```
```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage2;

    public class SamplePage2 : Page<_>
    {
        public Button<SamplePage1, _> GoBack { get; private set; }
    }
}
```
```cs
Go.To<SamplePage1>().
    Save().
        GoBack.ClickAndGo();
```

Note that `Save` delegate property is used as the method that returns the instance of `SamplePage2` class. But for `GoBack` property it is required to call `ClickAndGo` method as it is a property of `Button` class type.
{:class="info"}

### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">TNavigateTo</span></span>
    <h3><span class="body">ClickAndGo<wbr>&lt;<span class="type">TNavigateTo</span>, <span class="type">TOwner</span>&gt;</span><span class="tail">(<span class="keyword">this</span> <span class="type">INavigable</span><wbr>&lt;<span class="type">TNavigateTo</span>, <span class="type">TOwner</span>&gt; navigableControl)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TNavigateTo</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span>
    <span class="where"><span class="keyword">where</span> <span class="type">TOwner</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
</div>

Clicks the control and performs the navigation to the page object of `TNavigateTo` type.