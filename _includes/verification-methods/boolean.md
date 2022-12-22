<ul class="member-list">
    <li class="member">
        BeTrue<wbr>()
    </li>
    <li class="member">
        BeFalse<wbr>()
    </li>
</ul>

### Usage

```cs
var sut = true.ToSutSubject();

sut.Should.BeTrue();
sut.Should.Not.BeFalse();
```