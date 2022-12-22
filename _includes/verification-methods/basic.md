The basic verification methods.

<ul class="member-list">
    <li class="member">
        Satisfy<wbr>(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression)
    </li>
    <li class="member">
        Satisfy<wbr>(<span class="type">Func</span><wbr>&lt;<span class="type">TObject</span>, <span class="keyword">bool</span>&gt; predicate, <span class="keyword">string</span> message)
    </li>
    <li class="member">
        Equal<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        Be<wbr>(<span class="type">TObject</span> expected)
    </li>
    <li class="member">
        BeNull<wbr>()
    </li>
</ul>

### Usage

```cs
var sut = new KeyValuePair<string, int>("a", 1).ToSutSubject();

sut.Should.Satisfy(x => x.Key == "a" && x.Value == 1);
sut.Should.Satisfy(x => x.Key == "a" && x.Value == 1, "have a:1");
```

```cs
var sut = "abc".ToSutSubject();

sut.Should.Be(42);
sut.Should.Not.BeNull();
```