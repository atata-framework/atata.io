The methods apply to `IObjectVerificationProvider` of a `Size` object.

<ul class="member-list">
    <li class="member">
        BeGreater<wbr>(<span class="keyword">int</span> expectedWidth, <span class="keyword">int</span> expectedHeight)
    </li>
    <li class="member">
        BeGreater<wbr>(<span class="type">Size</span> expected)
    </li>
    <li class="member">
        BeGreaterOrEqual<wbr>(<span class="keyword">int</span> expectedWidth, <span class="keyword">int</span> expectedHeight)
    </li>
    <li class="member">
        BeGreaterOrEqual<wbr>(<span class="type">Size</span> expected)
    </li>
    <li class="member">
        BeLess<wbr>(<span class="keyword">int</span> expectedWidth, <span class="keyword">int</span> expectedHeight)
    </li>
    <li class="member">
        BeLess<wbr>(<span class="type">Size</span> expected)
    </li>
    <li class="member">
        BeLessOrEqual<wbr>(<span class="keyword">int</span> expectedWidth, <span class="keyword">int</span> expectedHeight)
    </li>
    <li class="member">
        BeLessOrEqual<wbr>(<span class="type">Size</span> expected)
    </li>
    <li class="member">
        BeInRange<wbr>(<span class="keyword">int</span> fromWidth, <span class="keyword">int</span> fromHeight, <span class="keyword">int</span> toWidth, <span class="keyword">int</span> toHeight)
    </li>
    <li class="member">
        BeInRange<wbr>(<span class="type">Size</span> from, <span class="type">Size</span> to)
    </li>
</ul>

### Usage

```cs
var sut = page.SomeControl.Size;

sut.Should.BeGreater(50, 50);
sut.Should.BeGreaterOrEqual(50, 50);
sut.Should.BeLess(100, 100);
sut.Should.BeLessOrEqual(100, 100);
sut.Should.BeInRange(50, 50, 100, 100);
```