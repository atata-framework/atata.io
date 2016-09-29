Represents the `<a>` link control. By default is being searched by the content.

```html
<a href="/items/create">Create</a>
```

Supports `[GoTemporarily]` settings attribute.
{:class="info"}

### Link Control

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public LinkControl<_> Create { get; private set; }
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
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public Link<_> Create { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Create();
```

As it is a delegate type, the use of `Should`, `Content` and `IsEnabled` properties should be performed like methods (extensions), e.g. `Create.Should().Exist()`.
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
        public Link<ItemCreationPage, _> Create { get; private set; }
    }
}
```
```cs
using Atata;
using _ = SampleApp.ItemCreationPage;

namespace SampleApp
{
    public class ItemCreationPage : Page<_>
    {
        public LinkControl<ItemsPage, _> GoBack { get; private set; }
    }
}
```
```cs
Go.To<SamplePage1>().
    Create().
        GoBack.ClickAndGo();
```

Note that `Create` delegate property is being used as the method that returns the instance of `ItemCreationPage` class. But for `GoBack` property it is needed to call `ClickAndGo` method as it is a property of `LinkControl` class type.
{:class="info"}

### Methods

Name | Description
---- | -----------
`ClickAndGo()` | Clicks the control and performs the navigation to the page object of `TNavigateTo` type.
{:class="table table-members"}