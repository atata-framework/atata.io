Represents the base attribute class for the finding attributes.

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">int</span></span>
    <h3><span class="body">Index</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the index of the control. The default value is `-1`, meaning that the index is not used.

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#visibility" class="type">Visibility</a></span>
    <h3><span class="body">Visibility</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the visibility. The default value is `Visibility.Visible`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#scopesource" class="type">ScopeSource</a></span>
    <h3><span class="body">ScopeSource</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the scope source. The default value is `ScopeSource.Parent`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">string</span></span>
    <h3><span class="body">OuterXPath</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the outer XPath. The default value is null, meaning that the control is searchable as descendant (using ".//" XPath) in scope source.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Type</span></span>
    <h3><span class="body">Strategy</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the strategy type for the control search. Strategy type should implement `IComponentScopeLocateStrategy`. The default value is null, meaning that the default strategy of the specific `FindAttribute` should be used.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">Timeout</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the element find timeout in seconds.
The default value is taken from `AtataContext.ElementFindTimeout` property
of `AtataContext.Current`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">double</span></span>
    <h3><span class="body">RetryInterval</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the element find retry interval in seconds.
The default value is taken from `AtataContext.ElementFindRetryInterval` property
of `AtataContext.Current`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <a href="#findas" class="type">FindAs</a></span>
    <h3><span class="body">As</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the way this {% include clsref.md name="FindAttribute" %} should be used.
The default value is {% include enref.md name="FindAs" value="Scope" %}.
Each control can have 1 {% include clsref.md name="FindAttribute" %} with {% include enref.md name="FindAs" value="Scope" %} value
and many other {% include clsref.md name="FindAttribute" %}s with another {% include clsref.md name="FindAs" %} values, which are used as layers.
When several layer attributes are used,
then `Layer` property can be used to specify an order of each attribute.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">int</span></span>
    <h3><span class="body">Layer</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the layer order of find attribute.
It is useful to specify the order of the layer when several layers are used.
This property is used only paired with `As` property set to any value except {% include enref.md name="FindAs" value="Scope" %}.
The default value is `0`.