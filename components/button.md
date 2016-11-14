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
using _ = SampleApp.SamplePage;

namespace SampleApp
{
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
using _ = SampleApp.SamplePage;

namespace SampleApp
{
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

As it is a delegate type, the use of `Should`, `Content` and `IsEnabled` properties should be performed like methods (extensions), e.g. `Save.Should().Exist()`.
{:.warning}

### Navigation

It is possible to pass another generic argument of `PageObject` type, meaning that after the click on the button the navigation to this `PageObject` is performed. It works the same way for the control and delegate.

```cs
using Atata;
using _ = SampleApp.SamplePage1;

namespace SampleApp
{
    public class SamplePage1 : Page<_>
    {
        public ButtonDelegate<SamplePage2, _> Save { get; private set; }
    }
}
```
```cs
using Atata;
using _ = SampleApp.SamplePage2;

namespace SampleApp
{
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

Note that `Save` delegate property is used as the method that returns the instance of `SamplePage2` class. But for `GoBack` property it is required to call `ClickAndGo` method as it is a property of `ButtonControl` class type.
{:class="info"}

### Methods

Name | Description
---- | -----------
`ClickAndGo()` | Clicks the control and performs the navigation to the page object of `TNavigateTo` type.
{:.table.table-members}