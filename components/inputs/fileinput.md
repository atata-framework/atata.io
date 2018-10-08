Represents the file input control (`<input type="file">`).
Default search is performed by the label.

{% include inherited.md from="Input" %}

Supports `[Format]` settings attribute.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='file']")]
public class FileInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Example

```html
<input type="file" id="some-file">
```
{:.html}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        [FindById]
        public FileInput<_> SomeFile { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    SomeFile.Set(@"d:\some\file\path.txt");
```
{:.test}