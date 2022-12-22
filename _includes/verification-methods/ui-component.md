<ul class="member-list">
    <li class="member">
        BePresent<wbr>()
    </li>
    <li class="member">
        BeVisible<wbr>()
    </li>
    <li class="member">
        BeVisibleInViewPort<wbr>()
    </li>
    <li class="member">
        BeHidden<wbr>()
    </li>
    <li class="member">
        BeEnabled<wbr>()
    </li>
    <li class="member">
        BeDisabled<wbr>()
    </li>
    <li class="member">
        BeFocused<wbr>()
    </li>
    <li class="member">
        BeReadOnly<wbr>()
    </li>
    <li class="member">
        HaveClass<wbr>(<span class="keyword">params string</span>[] classNames)
    </li>
    <li class="member">
        HaveClass<wbr>(<span class="type">IEnumerable</span>&lt;<span class="keyword">string</span>&gt; classNames)
    </li>
    <li>
        <span class="member">
            BeChecked<wbr>()
        </span>
        <em>Applies to <code class="language-plaintext highlighter-rouge">RadioButton&lt;TOwner&gt;</code> and <code class="language-plaintext highlighter-rouge">CheckBox&lt;TOwner&gt;</code>.</em>
    </li>
    <li>
        <span class="member">
            BeUnchecked<wbr>()
        </span>
        <em>Applies to <code class="language-plaintext highlighter-rouge">RadioButton&lt;TOwner&gt;</code> and <code class="language-plaintext highlighter-rouge">CheckBox&lt;TOwner&gt;</code>.</em>
    </li>
    <li>
        <span class="member">
            HaveChecked<wbr>(<span class="type">TValue</span> value)
        </span>
        <em>Applies to <code class="language-plaintext highlighter-rouge">CheckBoxList&lt;TValue, TOwner&gt;</code>.</em>
    </li>
</ul>

### Usage

```cs
var sut = page.SomeInput;

sut.Should.BePresent();
sut.Should.BeVisible();
sut.Should.BeVisibleInViewPort();
sut.Should.Not.BeHidden();
sut.Should.BeEnabled();
sut.Should.Not.BeDisabled();
sut.Should.BeFocused();
sut.Should.Not.BeReadOnly();
sut.Should.HaveClass("some-class");
```