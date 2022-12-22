The methods apply to `IObjectVerificationProvider` of an object implementing `IComparable<T>`,
for example numeric or date/time types like `int`, `decimal`, `double`, `DateTime`, `TimeSpan`, etc.
Also apply to `Nullable<T>` values, like `int?`.

<ul class="member-list">
    <li class="member">
        BeGreater<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        BeGreaterOrEqual<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        BeLess<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        BeLessOrEqual<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        BeInRange<wbr>(<span class="type">TObject</span> from, <span class="type">TObject</span> to)
    </li>
</ul>

### Usage

```cs
var sut = 42.ToSutSubject();

sut.Should.Be(42);
sut.Should.BeGreater(40);
sut.Should.BeGreaterOrEqual(42);
sut.Should.BeLess(50);
sut.Should.BeLessOrEqual(42);
sut.Should.BeInRange(40, 50);
```