<ul class="member-list">
    <li class="member">
        BeNullOrEmpty<wbr>()
    </li>
    <li class="member">
        BeNullOrWhiteSpace<wbr>()
    </li>
    <li class="member">
        HaveLength<wbr>(<span class="keyword">int</span> expected)
    </li>
    <li class="member">
        EqualIgnoringCase<wbr>(<span class="keyword">string</span> expected)
    </li>
    <li class="member">
        Contain<wbr>(<span class="keyword">string</span> expected)
    </li>
    <li class="member">
        ContainIgnoringCase<wbr>(<span class="keyword">string</span> expected)
    </li>
    <li class="member">
        StartWith<wbr>(<span class="keyword">string</span> expected)
    </li>
    <li class="member">
        StartWithIgnoringCase<wbr>(<span class="keyword">string</span> expected)
    </li>
    <li class="member">
        EndWith<wbr>(<span class="keyword">string</span> expected)
    </li>
    <li class="member">
        EndWithIgnoringCase<wbr>(<span class="keyword">string</span> expected)
    </li>
    <li class="member">
        Match<wbr>(<span class="keyword">string</span> pattern)
    </li>
    <li class="member">
        Match<wbr>(<span class="keyword">string</span> pattern, <span class="type">RegexOptions</span> regexOptions)
    </li>
    <li class="member">
        MatchAny<wbr>(<span class="type">TermMatch</span> match, <span class="keyword">params string</span>[] expected)
    </li>
    <li class="member">
        ContainAll<wbr>(<span class="keyword">params string</span>[] expected)
    </li>
    <li class="member">
        StartWithAny<wbr>(<span class="keyword">params string</span>[] expected)
    </li>
    <li class="member">
        StartWithAny<wbr>(<span class="type">IEnumerable</span>&lt;<span class="keyword">string</span>&gt; expected)
    </li>
    <li class="member">
        EndWithAny<wbr>(<span class="keyword">params string</span>[] expected)
    </li>
    <li class="member">
        EndWithAny<wbr>(<span class="type">IEnumerable</span>&lt;<span class="keyword">string</span>&gt; expected)
    </li>
</ul>

### Usage

```cs
var sut = "Hello World".ToSutSubject();

sut.Should.Not.BeNullOrEmpty();
sut.Should.Not.BeNullOrWhiteSpace();
sut.Should.HaveLength(11);
sut.Should.Equal("Hello World");
sut.Should.EqualIgnoringCase("hello world");
sut.Should.Contain("ello");
sut.Should.ContainIgnoringCase("world");
sut.Should.StartWith("Hello");
sut.Should.StartWithIgnoringCase("hello");
sut.Should.EndWith("World");
sut.Should.EndWithIgnoringCase("world");
sut.Should.Match("^Hello");
sut.Should.Match("^hello", RegexOptions.IgnoreCase);
sut.Should.MatchAny(TermMatch.Contains, "Hi", "Hello");
sut.Should.ContainAll("World", "Hello");
sut.Should.StartWithAny("Hi", "Hello");
sut.Should.EndWithAny("World", "Planet");
```