The methods apply to `IObjectVerificationProvider` of an object implementing `IEnumerable<T>` or `IEnumerable<IObjectProvider<T>>`,
for example `List<int>`, `string[]`, `ControlList<Text<TOwner>, TOwner>`, etc.

<ul class="member-list">
    <li class="member">
        Satisfy<wbr>(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">IEnumerable</span><wbr>&lt;<span class="type">TObject</span>&gt;, <span class="keyword">bool</span>&gt;&gt; predicateExpression)
    </li>
    <li class="member">
        Satisfy<wbr>(<span class="type">Func</span><wbr>&lt;<span class="type">IEnumerable</span><wbr>&lt;<span class="type">TObject</span>&gt;, <span class="keyword">bool</span>&gt; predicate, <span class="keyword">string</span> message)
    </li>
    <li class="member">
        BeEmpty<wbr>()
    </li>
    <li class="member">
        HaveCount<wbr>(<span class="keyword">int</span> expected)
    </li>
    <li class="member">
        BeEquivalent<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        BeEquivalent<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        EqualSequence<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        EqualSequence<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        ContainSingle<wbr>()
    </li>
    <li class="member">
        ContainSingle<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        ContainSingle<wbr>(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression)
    </li>
    <li class="member">
        ContainExactly<wbr>(<span class="keyword">int</span> expectedCount, <span class="type">TObject</span> expectedValue)
    </li>
    <li class="member">
        Contain<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        Contain<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        Contain<wbr>(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression)
    </li>
    <li class="member">
        Contain<wbr>(<span class="type">TermMatch</span> match, <span class="keyword">params</span> <span class="keyword">string</span>[] expected)
    </li>
    <li class="member">
        Contain<wbr>(<span class="type">TermMatch</span> match, <span class="type">IEnumerable</span>&lt;<span class="keyword">string</span>&gt; expected)
    </li>
    <li class="member">
        ContainAny<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        ContainAny<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        StartWith<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        StartWith<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        StartWithAny<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        StartWithAny<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        EndWith<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        EndWith<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        EndWithAny<wbr>(<span class="keyword">params</span> <span class="type">TObject</span>[] expected)
    </li>
    <li class="member">
        EndWithAny<wbr>(<span class="type">IEnumerable</span>&lt;<span class="type">TObject</span>&gt; expected)
    </li>
    <li class="member">
        BeInAscendingOrder<wbr>()
    </li>
    <li class="member">
        BeInDescendingOrder<wbr>()
    </li>
    <li class="member">
        ConsistOf<wbr>(<span class="keyword">params</span> <span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt;&gt;[] predicateExpressions)
    </li>
    <li class="member">
        ConsistOnlyOf<wbr>(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression)
    </li>
    <li class="member">
        ConsistOnlyOf<wbr>(<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt; predicate, <span class="keyword">string</span> message)
    </li>
    <li class="member">
        ConsistOnlyOf<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        ConsistOfSingle<wbr>(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression)
    </li>
    <li class="member">
        ConsistSequentiallyOf<wbr>(<span class="keyword">params</span> <span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt;&gt;[] predicateExpressions)
    </li>
</ul>

### Usage

```cs
var sut = new [] { 1, 2, 3, 4 }.ToSutSubject();

sut.Should.Satisfy(x => x.Contains(3) && x.Count() == 5);
sut.Should.Satisfy(x => x.Contains(3) && x.Count() == 5, "contain 5 items including 3");
sut.Should.Not.BeEmpty();
sut.Should.HaveCount(4);
sut.Should.BeEquivalent(2, 1, 4, 3);
sut.Should.EqualSequence(1, 2, 3, 4);
sut.Should.Not.ContainSingle();
sut.Should.ContainSingle(1);
sut.Should.ContainSingle(x => x == 1);
sut.Should.ContainExactly(1, 3);
sut.Should.Contain(3, 4);
sut.Should.Contain(x => x > 1);
sut.Should.ContainAny(3, 4, 5);
sut.Should.StartWith(1, 2);
sut.Should.StartWithAny(0, 1);
sut.Should.EndWith(3, 4);
sut.Should.EndWithAny(4, 5);
sut.Should.BeInAscendingOrder();
sut.Should.Not.BeInDescendingOrder();
sut.Should.ConsistOf(x => x > 0, x => x == 3, x => x == 1, x => x < 4);
sut.Should.ConsistOnlyOf(x => x > 0 && x < 10);
sut.Should.ConsistOnlyOf(x => x > 0, "are positive");
sut.Should.Not.ConsistOnlyOf(1);
sut.Should.Not.ConsistOfSingle(x => x == 1);
sut.Should.ConsistSequentiallyOf(x => x == 0 || x == 1, x => x == 2, x => x == 3, x => x >= 4);
```

```cs
var sut = new [] { "Hello" }.ToSutSubject();

sut.Should.ContainSingle();
sut.Should.ConsistOfSingle("Hello");
sut.Should.IgnoringCase.ConsistOfSingle("hello");
sut.Should.ConsistOfSingle(x => x == "Hi" || x == "Hello");
sut.Should.Contain(TermMatch.StartsWith, "He");
```