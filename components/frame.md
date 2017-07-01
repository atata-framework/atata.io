Represents the inline frame control (`<iframe>`). Default search finds the first occurring `<iframe>` element.

```html
<div>
    <iframe src="...">
        <html>
            <body>
                <input type="text" id="text-box">
            </body>
        </html>
    </iframe>
</div>
```
{:.html}

Supports `[GoTemporarily]` settings attribute.
{:.info}

### Frame&lt;TOwner>

Recommended to use for the cases when the frame page can be different in parent page.

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public Frame<_> ContentFrame { get; private set; }
    }
}
```
{:.page-object}
```cs
using Atata;
using _ = SampleApp.FramePage;

namespace SampleApp
{
    public class FramePage : Page<_>
    {
        [FindById]
        public TextInput<_> TextBox { get; private set; }
    }
}
```
{:.page-object}
```cs
Go.To<SamplePage>().
    ContentFrame.SwitchTo<FramePage>(temporarily: true).
        TextBox.Set("abc").
        SwitchToRoot<SamplePage>().
    // Or use DoWithin method
    ContentFrame.DoWithin<FramePage>(
        x => x.TextBox.Should.Equal("abc"));
```
{:.test}

#### Methods

Name | Description
---- | -----------
`SwitchTo<TFramePageObject>(TFramePageObject framePageObject = null, bool? temporarily = null)` | Switches to the frame page object represented by the instance of `TFramePageObject` type.
`DoWithin<TFramePageObject>(Action<TFramePageObject> action, bool? temporarily = null)` | Switches to the frame page object, executes action(s) in scope of frame and switches back to the owner page object.
{:.table.table-members.table-members-fixed-col-1}

### Frame<TFramePageObject, TOwner>

Recommended to use for the cases when the frame page is the same in parent page.

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        public Frame<FramePage, _> ContentFrame { get; private set; }
    }
}
```
{:.page-object}
```cs
using Atata;
using _ = SampleApp.FramePage;

namespace SampleApp
{
    public class FramePage : Page<_>
    {
        [FindById]
        public TextInput<_> TextBox { get; private set; }

        public SamplePage SwitchBack()
        {
            return SwitchToRoot<SamplePage>();
        }
    }
}
```
{:.page-object}
```cs
Go.To<SamplePage>().
    ContentFrame.SwitchTo().
        TextBox.Set("abc").
        SwitchBack().
    // Or use DoWithin method
    ContentFrame.DoWithin(
        x => x.TextBox.Should.Equal("abc"));
```
{:.test}

#### Methods

Name | Description
---- | -----------
`SwitchTo(TFramePageObject framePageObject = null, bool? temporarily = null)` | Switches to the frame page object represented by the instance of `TFramePageObject` type.
`DoWithin(Action<TFramePageObject> action, bool? temporarily = null)` | Switches to the frame page object, executes action(s) in scope of frame and switches back to the owner page object.
{:.table.table-members.table-members-fixed-col-1}