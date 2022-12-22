<ul class="member-list">
    <li class="member">
        Throw<wbr>&lt;<span class="type">TException</span>&gt;()
    </li>
    <li class="member">
        Not.Throw<wbr>()
    </li>
</ul>

### Usage

```cs
var sut = new SomeClass().ToSutSubject();

sut.Invoking(x => x.GetSomething(null))
    .Should.Throw<ArgumentNullException>();

sut.Invoking(x => x.GetSomething("wrong"))
    .Should.Throw<InvalidOperationException>()
        .ValueOf(x => x.Message).Should.Be("Some error message.");

sut.Invoking(x => x.GetSomething("ok"))
    .Should.Not.Throw();
```

#### Static Methods

```cs
Subject.Invoking(() => SomeStaticClass.GetSomething(null))
    .Should.Throw<ArgumentNullException>();

Subject.Invoking(() => SomeStaticClass.GetSomething("wrong"))
    .Should.Throw<InvalidOperationException>()
        .ValueOf(x => x.Message).Should.Be("Some error message.");

Subject.Invoking(() => SomeStaticClass.GetSomething("ok"))
    .Should.Not.Throw();
```