The methods apply to `IObjectVerificationProvider` of a `Uri` object.

<ul class="member-list">
    <li class="member">
        Be<wbr>(<span class="keyword">string</span> expected)
    </li>
</ul>

### Usage

```cs
var sut = new Uri("https://example.org").ToSutSubject();

sut.Should.Be("https://example.org");
```