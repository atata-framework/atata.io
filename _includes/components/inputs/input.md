Represents the input control (`<input>`).
Default search is performed by the label.

{% include inherited.md from="EditableTextField" %}

#### Syntax

```cs
[ControlDefinition("input[not(@type) or (@type!='button' and @type!='submit' and @type!='reset')]", ComponentTypeName = "input")]
[FindByLabel]
public class Input<TValue, TOwner> : EditableTextField<TValue, TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Placeholder</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<string, TOwner>` of the `placeholder` DOM property.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Pattern</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<string, TOwner>` of the `pattern` DOM property.