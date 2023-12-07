Represents the text area control (`<textarea>`).
Default search is performed by the label.

{% include inherited.md from="EditableTextField" %}

#### Syntax

```cs
[ControlDefinition("textarea", IgnoreNameEndings = "TextArea", ComponentTypeName = "text area")]
[FindByLabel]
public class TextArea<TOwner> : EditableTextField<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Placeholder</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<string, TOwner>` of the `placeholder` DOM property.

#### Example

```html
<textarea name="description">
</textarea>
```
{:.html}

```cs
using _ = SamplePage;

public class SamplePage : Page<_>
{
    [FindByName]
    public TextArea<_> Description { get; private set; }
}
```
{:.page-object}

```cs
Go.To<SamplePage>()
    .Description.Set("some")
    .Description.Type(" text")
    .Description.Should.Equal("some text")
    .Description.Clear()
    .Description.Should.BeEmpty();
```
{:.test}