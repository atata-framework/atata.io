Represents the file input control (`<input type="file">`).
Default search is performed by the label.

{% include inherited.md from="Input" %}

Supports `[Format]` settings attribute.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='file']", Visibility = Visibility.Any, ComponentTypeName = "file input")]
[SetsValueUsingSendKeys]
[ClearsValueUsingClearMethodOrScript]
public class FileInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Accept</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<string, TOwner>` of the <c>accept</c> DOM property.

#### Example

```html
<input type="file" id="some-file">
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindById]
    public FileInput<_> SomeFile { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .SomeFile.Set(@"d:\some\file\path.txt");
```
{:.test}