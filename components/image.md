Represents the image control.
Default search finds the first occurring.

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

Gets the `<see cref="DataProvider{TData, TOwner}"/>` instance for the `src` attribute.

```cs
LoadedImage.Source.EndWith("/Images/350x150.png");
NotLoadedImage.Source.Should.EndWith("/Images/missing.png");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsLoaded</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `<see cref="DataProvider{TData, TOwner}"/>` instance for the value indicating whether the image file is loaded.

```cs
LoadedImage.IsLoaded.Should.BeTrue();
NotLoadedImage.IsLoaded.Should.BeFalse();
```
