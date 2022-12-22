The methods apply to `IObjectVerificationProvider` of a `FileInfo` object.

<ul class="member-list">
    <li class="member">
        Exist<wbr>()
    </li>
</ul>

### Usage

```cs
var sut = AtataContext.Current.Artifacts;

sut.Files["some.txt"].Should.Exist();
```