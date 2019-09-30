Represents the image control (`<img>`).
Default search finds the first occurring `<img>` element..

#### Syntax

```cs
[ControlDefinition("img")]
public class Image<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Source</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `DataProvider<string, TOwner>` instance for the `src` attribute.

```cs
Component.Source.Should.EndWith("/images/300x50.png");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsLoaded</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `DataProvider<bool, TOwner>` instance for the value indicating whether the image file is loaded.

```cs
Component.IsLoaded.Should.BeTrue();
```

#### Example

{% capture html %}
<img id="some-image" src="/assets/images/300x50.png"
     alt="Some Image">
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public Image<_> SomeImage { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    SomeImage.Source.Should.EndWith("/images/300x50.png").
    SomeImage.IsLoaded.Should.BeTrue();
```
{:.test}