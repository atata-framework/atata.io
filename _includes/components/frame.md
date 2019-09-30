Represents the frame control (`<iframe>` or `<frame>`).
Default search finds the first occurring `<iframe>` or `<frame>` element.

### Frame&lt;TOwner>

Recommended to use for the cases when the frame page can be different in parent page.

{% include inherited.md from="Control" %}

Supports `[GoTemporarily]` settings attribute.
{:.info}

#### Syntax

```cs
[ControlDefinition("*[self::iframe or self::frame]", ComponentTypeName = "frame")]
public class Frame<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">virtual</span> <span class="type">TFramePageObject</span></span>
    <h3><span class="body">SwitchTo<wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span><span class="tail">(<span class="type">TFramePageObject</span> framePageObject = <span class="keyword">null</span>, <span class="keyword">bool</span>? temporarily = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TFramePageObject</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span>
</div>

Switches to the frame page object represented by the instance of `TFramePageObject` type.
If `temporarily` is to `true`, navigates temporarily preserving current page object state. If `temporarily` is not set, checks `GoTemporarilyAttribute`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">DoWithin<wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span><span class="tail">(<span class="type">Action</span><wbr>&lt;<span class="type">TFramePageObject</span>&gt; action, <span class="keyword">bool</span>? temporarily = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TFramePageObject</span> : <span class="type">PageObject</span><wbr>&lt;<span class="type">TFramePageObject</span>&gt;</span>
</div>

Switches to the frame page object, executes action(s) in scope of frame and switches back to the owner page object.
If `temporarily` is to `true`, navigates temporarily preserving current page object state. If `temporarily` is not set, checks `GoTemporarilyAttribute`.

#### Example

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

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public Frame<_> ContentFrame { get; private set; }
    }
}
```
{:.page-object}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = FramePage;

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

### Frame<wbr><TFramePageObject, TOwner>

Recommended to use for the cases when the frame page is the same in parent page.

{% include inherited.md from="Frame" %}

Supports `[GoTemporarily]` settings attribute.
{:.info}

#### Syntax

```cs
public class Frame<TFramePageObject, TOwner> : Frame<TOwner>
    where TOwner : PageObject<TOwner>
    where TFramePageObject : PageObject<TFramePageObject>
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TFramePageObject</span></span>
    <h3><span class="body">SwitchTo</span><span class="tail">(<span class="type">TFramePageObject</span> framePageObject = <span class="keyword">null</span>, <span class="keyword">bool</span>? temporarily = <span class="keyword">null</span>)</span></h3>
</div>

Switches to the frame page object represented by the instance of `TFramePageObject` type.
If `temporarily` is to `true`, navigates temporarily preserving current page object state. If `temporarily` is not set, checks `GoTemporarilyAttribute`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">DoWithin</span><span class="tail">(<span class="type">Action</span><wbr>&lt;<span class="type">TFramePageObject</span>&gt; action, <span class="keyword">bool</span>? temporarily = <span class="keyword">null</span>)</span></h3>
</div>

Switches to the frame page object, executes action(s) in scope of frame and switches back to the owner page object.
If `temporarily` is to `true`, navigates temporarily preserving current page object state. If `temporarily` is not set, checks `GoTemporarilyAttribute`.

#### Example

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

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public Frame<FramePage, _> ContentFrame { get; private set; }
    }
}
```
{:.page-object}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = FramePage;

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