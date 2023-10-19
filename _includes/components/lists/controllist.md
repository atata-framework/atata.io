Represents the list of controls of `TItem` type.

#### Syntax

```cs
public class ControlList<TItem, TOwner> : UIComponentPart<TOwner>, ISupportsMetadata, IEnumerableProvider<TItem, TOwner>, IClearsCache
    where TItem : Control<TOwner>
    where TOwner : PageObject<TOwner>
```

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">int</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Count</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<int, TOwner>` instance for the controls count.

```cs
Items.Count.Get();
Items.Count.Should.Equal(5);
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="type">IEnumerable</span><wbr>&lt;<span class="keyword">string</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Contents</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<IEnumerable<string>, TOwner>` instance for the controls contents.

```cs
Items.Contents.Should.EqualSequence("Item 1", "Item 2");
Items.Contents.Should.Contain("Item 1");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">DataVerificationProvider</span><wbr>&lt;<span class="type">IEnumerable</span><wbr>&lt;<span class="type">TItem</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Should</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the verification provider that gives a set of verification extension methods.

```cs
Items.Should.HaveCount(5);
Items.Should.BeEmpty();
Items.Should.BeEquivalent("Item 1", "Item 2");
```

#### Indexers

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span> <span class="keyword">this</span></span>
    <h3><span class="body">[<span class="keyword">int</span> index]</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the control at the specified index.

```cs
Items[0].Should.BePresent();
Items[1].Should.Equal(5);
Items[2].Content.Should.Equal("Item 1");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span> <span class="keyword">this</span></span>
    <h3><span class="body">[<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TItem</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression]</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the control that matches the conditions defined by the specified predicate expression.

```cs
Items[x => x.Title == "Product 1"].Should.BePresent();
Items[x => x.Content == "Some content"].Should.Not.BePresent();
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">int</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IndexOf</span><span class="tail">(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TItem</span>, <span class="keyword">bool</span>&gt;&gt; predicateExpression)</span></h3>
</div>

Searches for the item that matches the conditions defined by the specified predicate expression and returns the zero-based index of the first occurrence.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TItem</span></span>
    <h3><span class="body">GetByXPathCondition</span><span class="tail">(<span class="keyword">string</span> itemName, <span class="keyword">string</span> xPathCondition)</span></h3>
</div>

Gets the control that matches the specified XPath condition.

```cs
Items.GetByXPathCondition("Having some attribute", "@some-attr='some value'");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="type">IEnumerable</span><wbr>&lt;<span class="type">TData</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">SelectData<wbr>&lt;<span class="type">TData</span>&gt;</span><span class="tail">(<span class="type">Expression</span><wbr>&lt;<span class="type">Func</span><wbr>&lt;<span class="type">TItem</span>, <span class="type">TData</span>&gt;&gt; selector)</span></h3>
</div>

Selects the specified data (property) set of each control. Data can be a sub-control, an instance of `ValueProvider<TData, TOwner>`, etc.

#### Example

{% capture html %}
<div>
    <div class="product">
        <h5>Product 1</h5>
        <span class="amount">5</span>
    </div>
    <div class="product">
        <h5>Product 2</h5>
        <span class="amount">10</span>
    </div>
</div>
{% endcapture %}
{% include htmlexample.html html=html %}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SamplePage;

    public class SamplePage : Page<_>
    {
        public ControlList<ProductItem, _> Products { get; private set; }

        [ControlDefinition("div", ContainingClass = "product")]
        public class ProductItem : Control<_>
        {
            public H5<_> Title { get; private set; }

            [FindByClass]
            public Number<_> Amount { get; private set; }
        }
    }
}
```
{:.page-object}
```cs
Go.To<SamplePage>().
    Products.Count.Should.Equal(2).
    Products[0].Title.Should.Equal("Product 1").
    Do(_ => _.Products[1], x =>
    {
        x.Title.Should.Equal("Product 2");
        x.Amount.Should.Equal(10);
    }).
    Products[x => x.Title == "Product 1"].Amount.Should.Equal(5).
    Products[x => x.Title == "Product 3"].Should.Not.BePresent().
    Products.IndexOf(x => x.Title == "Product 2").Should.Equal(1).
    SelectData(x => x.Title).Should.EqualSequence("Product 1", "Product 2");
```
{:.test}