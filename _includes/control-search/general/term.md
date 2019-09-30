The attribute that specifies the term(s) to use for the control search.

#### Example

In the both following examples `some-input` is the term that is used for the control search:

```cs
[FindById("some-input")]
public TextInput<_> FirstName { get; private set; }
```
```cs
[FindById]
[Term("some-input")]
public TextInput<_> FirstName { get; private set; }
```

#### Parameters

<div class="member">
    <span class="head"><a href="#termcase" class="type">TermCase</a></span>
    <h3><span class="body">termCase</span></h3>
</div>

The term case.

<div class="member">
    <span class="head"><a href="#termmatch" class="type">TermMatch</a></span>
    <h3><span class="body">match</span></h3>
</div>

The match.

<div class="member">
    <span class="head"><span class="keyword">params</span> <span class="keyword">string</span>[]</span>
    <h3><span class="body">values</span></h3>
</div>

The term values.

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">string</span></span>
    <h3><span class="body">Format</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the format.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">bool</span></span>
    <h3><span class="body">CutEnding</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets a value indicating whether the name should be cut considering the `IgnoreNameEndings` property value of `[ControlDefinition]` and `[PageObjectDefinition]` attributes. The default value is `true`.