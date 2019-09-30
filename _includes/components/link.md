Represents the `<a>` link control. Default search is performed by the content.

```html
<a href="/items/create">Create</a>
```

Supports `[GoTemporarily]` settings attribute.
{:.info}

### Link Control

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public Link<_> Create { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Create.Click();
```

### Link Delegate

It is recommended to use `Link` delegate as it simplifies the usage by refusing `Click` and `ClickAndGo` methods.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public LinkDelegate<_> Create { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Create();
```

As it is a delegate type, the use of `Should`, `Content` and `IsEnabled` properties should be performed like methods (extensions), e.g. `Create.Should().Exist()`.
{:.warning}

### Navigation

It is possible to pass another gereric argument of `PageObject` type, meaning that after the click the navigation to this `PageObject` should be performed. Works the same way for the control and delegate.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = ItemsPage;

    public class ItemsPage : Page<_>
    {
        public LinkDelegate<ItemCreationPage, _> Create { get; private set; }
    }
}
```
```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = ItemCreationPage;

    public class ItemCreationPage : Page<_>
    {
        public Link<ItemsPage, _> GoBack { get; private set; }
    }
}
```
```cs
Go.To<SamplePage1>().
    Create().
        GoBack.ClickAndGo();
```

Note that `Create` delegate property is being used as the method that returns the instance of `ItemCreationPage` class. But for `GoBack` property it is needed to call `ClickAndGo` method as it is a property of `Link` class type.
{:class="info"}

### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">TNavigateTo</span></span>
    <h3><span class="body">ClickAndGo<wbr>&lt;<span class="type">TNavigateTo</span>, <span class="type">TOwner</span>&gt;</span><span class="tail">(<span class="keyword">this</span> <span class="type">INavigable</span><wbr>&lt;<span class="type">TNavigateTo</span>, <span class="type">TOwner</span>&gt; navigableControl)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TNavigateTo</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TNavigateTo</span>&gt;</span>
    <span class="where"><span class="keyword">where</span> <span class="type">TOwner</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
</div>

Clicks the control and performs the navigation to the page object of `TNavigateTo` type.