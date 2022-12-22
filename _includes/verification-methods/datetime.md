<ul class="member-list">
    <li class="member">
        EqualDate<wbr>(<span class="type">DateTime</span> expected)
    </li>
</ul>

Basic and comparable verification methods also apply to `DateTime` objects.
{:.info}

### Usage

```cs
var sut = DateTime.Now.ToSutSubject();

sut.Should.EqualDate(DateTime.Now.Date);
```