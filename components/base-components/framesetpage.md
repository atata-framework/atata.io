Represents the frameset-based HTML page.
Uses the root `<frameset>` tag as a scope.

{% include inherited.md from="PageObject" %}

Inherited class supports `[PageObjectDefinition]`, `[ControlFinding]`, `[FindSettings]`, `[TermFindSettings]` and `[Culture]` settings attributes.
{:.info}

#### Syntax

```cs
[PageObjectDefinition("frameset", ComponentTypeName = "page", IgnoreNameEndings = "Page,PageObject")]
public abstract class FrameSetPage<TOwner> : PageObject<TOwner>
    where TOwner : FrameSetPage<TOwner>
```

#### Example

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>FrameSet - Atata</title>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
</head>
<frameset cols="*,*,*">
    <frame src="FrameInner1.html">
    <frame src="FrameInner2.html">
    <frame src="FrameInner1.html">
</frameset>
</html>
```
{:.html}

```cs
namespace Atata.Tests
{
    using _ = FrameSetPage;

    [Url("FrameSet.html")]
    [VerifyTitle(TermCase.Pascal)]
    public class FrameSetPage : FrameSetPage<_>
    {
        [FindByIndex(0)]
        public Frame<FrameInner1Page, _> Frame1 { get; private set; }

        [FindByIndex(1)]
        public Frame<FrameInner2Page, _> Frame2 { get; private set; }

        [FindByIndex(2)]
        public Frame<FrameInner1Page, _> Frame3 { get; private set; }
    }
}
```
{:.page-object}

```cs
using NUnit.Framework;

namespace Atata.Tests
{
    public class FrameSetTests : UITestFixture
    {
        private FrameSetPage page;

        protected override void OnSetUp()
        {
            page = Go.To<FrameSetPage>();
        }

        [Test]
        public void FrameSetPage()
        {
            page.
                Frame1.SwitchTo().
                    Header.Should.Equal("Frame Inner 1").
                    TextInput.Should.Exist().
                    SwitchToRoot<FrameSetPage>().
                Frame2.DoWithin(x => x.
                    Header.Should.Equal("Frame Inner 2").
                    Select.Should.Equal(1)).
                Frame3.SwitchTo().
                    Header.Should.Equal("Frame Inner 1").
                    TextInput.Set("123").
                    TextInput.Should.Equal("123");
        }
    }
}
```
{:.test}