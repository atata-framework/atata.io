Represents the base class for UI components (page objects and controls).

When accessing any `UIComponent`'s and inherited type's member that uses `Scope` (actual HTML element) property, executes `TriggerEvents.BeforeAccess` and `TriggerEvents.AfterAccess` triggers. [Find out more on triggers](/triggers/).
{:.info}

#### Syntax

There are 2 `UIComponent` classes. The generic one is inherited from the non-generic:

```cs
public abstract class UIComponent
```

and

```cs
[GetsContentFromSource(ContentSource.Text)]
public abstract class UIComponent<TOwner> : UIComponent, IUIComponent<TOwner>
    where TOwner : PageObject<TOwner>
```

`TOwner` is the type of the owner page object.
Declaring any control or page object requires specifying `TOwner`.
{:.info}

#### Properties

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsPresent</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<bool, TOwner>` of a value indicating
whether the component is present considering the `Visibility` of component.

```cs
Component.IsPresent.WaitTo.BeTrue();
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsVisible</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<bool, TOwner>` of a value indicating
whether the component is visible.

```cs
Component.IsVisible.Should.BeTrue();
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">bool</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">IsVisibleInViewport</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<bool, TOwner>` of a value indicating
whether the component is visible in viewport.

```cs
Component.IsVisibleInViewport.Should.BeTrue();
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Content</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<string, TOwner>` of the text content.
Gets a content using `ContentGetBehaviorAttribute` associated with the component,
which by default is `GetsContentFromSourceAttribute` with `ContentSource.Text` argument,
meaning that by default it returns `IWebElement.Text` property value
of component scope's `IWebElement` element.

```cs
Component.Content.Should.Contain("some text");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="keyword">string</span>, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">TagName</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<string, TOwner>` of the scope element tag name.

```cs
string tagName = Component.TagName;
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentLocationProvider</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">ComponentLocation</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `UIComponentLocationProvider<TOwner>` instance that provides an access to the scope element's location (X and Y).

```cs
Component.ComponentLocation.X.Should.BeGreater(10);
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentSizeProvider</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">ComponentSize</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `UIComponentSizeProvider<TOwner>` instance that provides an access to the scope element's size (Width and Height).

```cs
Component.ComponentSize.Height.Should.BeLessOrEqual(15);
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentDomAttributesProvider</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">DomAttributes</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `UIComponentDomAttributesProvider<TOwner>` instance that provides an access to the scope element's DOM attributes.

```cs
Component.DomAttributes["data-value"].Should.Equal("val");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentDomPropertiesProvider</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">DomProperties</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `UIComponentDomPropertiesProvider<TOwner>` instance that provides an access to the scope element's DOM properties.

```cs
Component.DomProperties.Id.Should.Be("some-id");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ValueProvider</span><wbr>&lt;<span class="type">IEnumerable</span><wbr>&lt;<span class="keyword">string</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">DomClasses</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ValueProvider<TValue, TOwner>` instance that provides a list of the scope element's DOM classes.

```cs
Component.DomClasses.Should.Contain("some-class");
bool hasSomeClass = Component.DomClasses.Value.Contains("some-class");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentCssProvider</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Css</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `UIComponentCssProvider<TOwner>` instance that provides an access to the scope element's CSS properties.

```cs
Component.Css["display"].Should.Equal("block");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentScriptExecutor</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Script</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `UIComponentScriptExecutor<TOwner>` instance that provides a set of methods for JavaScript execution.

```cs
Component.Script.Execute("runSomeGenericScript();");
Component.Script.ExecuteAgainst("arguments[0].value = arguments[1];", "new value");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentChildrenList</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Controls</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the list of child controls.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentMetadata</span></span>
    <h3><span class="body">Metadata</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the metadata of the component.
It is possible to query/add/remove attributes in metadata at any moment.

```cs
Component.Metadata.Push(new WaitAttribute(2));
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentVerificationProvider</span><wbr>&lt;<span class="type">UIComponent</span><wbr>&lt;<span class="type">TOwner</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Should</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the assertion verification provider that has a set of verification extension methods.

```cs
Component.Should.BePresent();
Component.Should.Not.BeHidden();
Component.Should.BeDisabled();
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentVerificationProvider</span><wbr>&lt;<span class="type">UIComponent</span><wbr>&lt;<span class="type">TOwner</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">ExpectTo</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the expectation verification provider that has a set of verification extension methods.

```cs
Component.ExpectTo.BeVisibleInViewport();
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponentVerificationProvider</span><wbr>&lt;<span class="type">UIComponent</span><wbr>&lt;<span class="type">TOwner</span>&gt;, <span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">WaitTo</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the waiting verification provider that has a set of verification extension methods.
Uses `WaitingTimeout` and `WaitingRetryInterval` of `AtataContext.Current` for timeout and retry interval.

```cs
Component.WaitTo.BeVisible();
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScopeSource</span></span>
    <h3><span class="body">ScopeSource</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the source of the scope, e.g., `ScopeSource.Parent`, `ScopeSource.Page`, etc.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">IWebElement</span></span>
    <h3><span class="body">Scope</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `IWebElement` instance that represents the scope HTML element associated with this component.
Also executes `TriggerEvents.BeforeAccess` and `TriggerEvents.AfterAccess` triggers.

```cs
Component.Scope.SendKeys("some text");
```

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ISearchContext</span></span>
    <h3><span class="body">ScopeContext</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `ISearchContext` instance that represents the scope search context
(where to find the children of this component).
By default is the same as `Scope`.
Also can execute `TriggerEvents.BeforeAccess` and `TriggerEvents.AfterAccess` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">UIComponent</span><wbr>&lt;<span class="type">TOwner</span>&gt;</span>
    <h3><span class="body">Parent</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the parent component.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Owner</span></span>
    <h3><span class="body">Owner</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the owner page object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContext</span></span>
    <h3><span class="body">Context</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the `AtataContext` instance with which this component is associated.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">string</span></span>
    <h3><span class="body">ComponentName</span><span class="tail"> { <span class="keyword">get</span>; <span class="keyword">set</span>; }</span></h3>
</div>

Gets or sets the name of the component.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">string</span></span>
    <h3><span class="body">ComponentTypeName</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the name of the component type.
Returns the value of `ComponentTypeName` property for control from `ControlDefinitionAttribute`
and for page object from `PageObjectDefinitionAttribute`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">string</span></span>
    <h3><span class="body">ComponentFullName</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the full name of the component including parent component full name, own component name and own component type name.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">IWebElement</span></span>
    <h3><span class="body">GetScope</span><span class="tail">(<span class="type">SearchOptions</span> options = <span class="keyword">null</span>)</span></h3>
</div>

Gets the `IWebElement` instance that represents the scope HTML element. Also executes `TriggerEvents.BeforeAccess` and `TriggerEvents.AfterAccess` triggers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">bool</span></span>
    <h3><span class="body">Exists</span><span class="tail">(<span class="type">SearchOptions</span> options = <span class="keyword">null</span>)</span></h3>
</div>

Determines whether the component exists. If `options` is set to null, then it uses `SearchOptions.Safely()`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">bool</span></span>
    <h3><span class="body">Missing</span><span class="tail">(<span class="type">SearchOptions</span> options = <span class="keyword">null</span>)</span></h3>
</div>

Determines whether the component is missing. If `options` is set to null, then it uses `SearchOptions.Safely()`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Wait</span><span class="tail">(<span class="type">Until</span> until, <span class="type">WaitOptions</span> options = <span class="keyword">null</span>)</span></h3>
</div>

Waits until the specified component condition is met.

```cs
LoadingBlock.Wait(Until.Hidden);
// Or
ContentBlock.Wait(Until.Visible);
```