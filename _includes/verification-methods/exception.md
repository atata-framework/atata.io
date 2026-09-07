<ul class="member-list">
    <li class="member">
        Throw<wbr>&lt;<span class="type">TException</span>&gt;()
    </li>
    <li class="member">
        Throw<wbr>&lt;<span class="type">TException</span>&gt;(<span class="keyword">string</span> messageWildcardPattern)
    </li>
    <li class="member">
        ThrowExactly<wbr>&lt;<span class="type">TException</span>&gt;()
    </li>
    <li class="member">
        ThrowExactly<wbr>&lt;<span class="type">TException</span>&gt;(<span class="keyword">string</span> messageWildcardPattern)
    </li>
    <li class="member">
        Not.Throw<wbr>()
    </li>
</ul>

### Usage

```cs
var sut = new SomeClass().ToSutSubject();

sut.Invoking(x => x.GetSomething(""))
    .Should.Throw<ArgumentException>();

sut.Invoking(x => x.GetSomething(null))
    .Should.ThrowExactly<ArgumentNullException>();

sut.Invoking(x => x.GetSomething("wrong"))
    .Should.ThrowExactly<InvalidOperationException>()
        .ValueOf(x => x.Message).Should.Be("Some error message.");

sut.Invoking(x => x.GetSomething(null))
    .Should.ThrowExactly<ArgumentNullException>("Some error *");

sut.Invoking(x => x.GetSomething("ok"))
    .Should.Not.Throw();
```

#### Static methods

```cs
Subject.Invoking(() => SomeStaticClass.GetSomething(null))
    .Should.ThrowExactly<ArgumentNullException>();

Subject.Invoking(() => SomeStaticClass.GetSomething("wrong"))
    .Should.ThrowExactly<InvalidOperationException>()
        .ValueOf(x => x.Message).Should.Be("Some error message.");

Subject.Invoking(() => SomeStaticClass.GetSomething("ok"))
    .Should.Not.Throw();
```