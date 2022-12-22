The methods apply to `IObjectVerificationProvider` of a `DirectoryInfo` object.

<ul class="member-list">
    <li class="member">
        Exist<wbr>()
    </li>
    <li class="member">
        ContainFile<wbr>(<span class="keyword">string</span> fileName)
    </li>
    <li class="member">
        ContainFiles<wbr>(<span class="keyword">params string</span>[] fileNames)
    </li>
    <li class="member">
        ContainFiles<wbr>(<span class="type">IEnumerable</span><wbr>&lt;<span class="keyword">string</span>&gt; fileNames)
    </li>
    <li class="member">
        ContainDirectory<wbr>(<span class="keyword">string</span> directoryName)
    </li>
    <li class="member">
        ContainDirectories<wbr>(<span class="keyword">params string</span>[] directoryNames)
    </li>
    <li class="member">
        ContainDirectories<wbr>(<span class="type">IEnumerable</span><wbr>&lt;<span class="keyword">string</span>&gt; directoryNames)
    </li>
</ul>

### Usage

```cs
var sut = AtataContext.Current.Artifacts;

sut.Directories["dir1"].Should.Exist();
sut.Should.ContainDirectory("dir1");
sut.Should.ContainDirectories("dir1", "dir2");
sut.Should.ContainFile("1.txt");
sut.Should.ContainFiles("1.txt", "2.txt");
```