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
Component.Source.Should.EndWith("/Images/300x50.png");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsLoaded</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `DataProvider<bool, TOwner>` instance for the value indicating whether the image file is loaded.

```cs
Component.IsLoaded.Should.BeTrue();
```

{% capture html %}
<img id="LoadedImage" src="/assets/images/300x50.png"
style='margin-bottom:10px' alt="Image Template">
{% endcapture %}

{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public Image<_> LoadedImage { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    LoadedImage.Source.Should.EndWith("/Images/300x50.png").
    LoadedImage.IsLoaded.Should.BeTrue();
```
{:.test}