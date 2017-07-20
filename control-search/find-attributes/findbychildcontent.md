Specifies that a control should be found by the child content text. Finds the control having the child with the specified content. Uses {% include tcref.md name="Title" %} as the default term case.

Inherited from {% include clsref.md name="TermFindAttribute" %}.
{:.info}

```html
<a href="/products">
    <span class="icon-products"></span>
    <span class="item-name">Products</span>
    <span class="item-count">15</span>
</a>
```
```cs
[FindByChildContent(ChildIndex = 1)]
public Link<_> Products { get; private set; }
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">int</span></span>
    <h3><span class="body">ChildIndex</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the index of the child element. The default value is `0`.