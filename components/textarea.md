Represents the text area control. 
Default search is performed by the label.

Supports `[Format]` and `[RandomizeStringSettings]` settings attributes.
{:.info}

#### Syntax

```cs
[ControlDefinition("input[@type='text' or not(@type)]")]
public class TextInput<TOwner> : Input<string, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Append</span><span class="tail">(<span class="keyword">string</span> value)</span></h3>
</div>

Appends the specified value.
Also executes `<see cref="TriggerEvents.BeforeSet" />` and `<see cref="TriggerEvents.AfterSet" />` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Clear()</span></h3>
</div>

Clears the value.
Also executes `<see cref="TriggerEvents.BeforeSet" />` and `<see cref="TriggerEvents.AfterSet" />` triggers.

#### Example

```html
<textarea name="description">
</textarea>
```
{:.html}

```cs
using Atata;
using _ = SampleApp.SamplePage;

namespace SampleApp
{
    public class SamplePage : Page<_>
    {
        [FindByName]
        public TextArea<_> Description { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SamplePage>().
    Description.Set("some").
    Description.Should.Equal("some")
    Description.Append(" text").
    Description.Should.Equal("some text").
    Description.Clear().
    Description.Should.BeNull();
```
{:.test}