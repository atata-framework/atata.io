Represents the base attribute class for the finding attributes that use terms.

Inherited from {% include clsref.md name="FindAttribute" %}.
{:.info}

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

<div class="member">
    <span class="head"><span class="keyword">protected</span> <span class="keyword">abstract</span> <a href="#termcase" class="type">TermCase</a></span>
    <h3><span class="body">DefaultCase</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the default term case. It is protected abstract property that should be overridden to specify the most suitable value.

<div class="member">
    <span class="head"><span class="keyword">protected</span> <span class="keyword">virtual</span> <a href="#termmatch" class="type">TermMatch</a></span>
    <h3><span class="body">DefaultMatch</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the default match. The default value is `Equals`. It is protected virtual property that can be overridden.