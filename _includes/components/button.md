Represents the button control. By default is being searched by the content and value (`button` by content text and `input` by `value` attribute). Handles any `input` element with `type="button"`, `type="submit"`, `type="reset"` or `button` element.

```html
<button>Save</button>
```

### Button Control

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public ButtonControl<_> Save { get; private set; }
    }
}
```
```cs
Go.To<SamplePage>().
    Save.Click();
```

### Button Delegate

It is recommended to use `Button` delegate as it simplifies the usage by refusing `Click` and `ClickAndGo` methods.

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
    Save();
```

As it is a delegate type, the use of `Should`, `Content` and `IsEnabled` properties should be performed like methods (extensions), e.g. `Save.Should().Exist()`.
{:class="warning"}

Supports `[GoTemporarily]` settings attribute.
{:class="info"}