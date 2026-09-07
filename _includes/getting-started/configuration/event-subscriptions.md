Atata provides a set of events that are raised during execution.
Event handlers can be subscribed on Atata or custom events through the methods of `EventSubscriptions` property of `AtataContextBuilder` or `AtataSessionBuilder<TSession, TBuilder>`.

The list of Atata events:

- `AtataContextPreInitEvent`
- `AtataContextInitStartedEvent`
- `AtataContextInitCompletedEvent`
- `AtataContextDeInitStartedEvent`
- `AtataContextDeInitCompletedEvent`
- `AtataSessionAssignedToContextEvent`
- `AtataSessionUnassignedFromContextEvent`
- `AtataSessionInitStartedEvent`
- `AtataSessionInitCompletedEvent`
- `AtataSessionDeInitStartedEvent`
- `AtataSessionDeInitCompletedEvent`
- `ArtifactAddedEvent`
- `PageObjectInitStartedEvent`
- `PageObjectTransitionInCompletedEvent`
- `PageObjectTransitionOutCompletedEvent`
- `PageObjectInitCompletedEvent`
- `PageObjectDeInitCompletedEvent`
- `WebDriverInitCompletedEvent`
- `WebDriverDeInitStartedEvent`

Find more details on events and subscriptions on the [Events](/getting-started/#events) page.

The list of methods of `EventSubscriptionsBuilder<TRootBuilder>`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Action</span> eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TEvent</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TEvent</span>, <span class="type">AtataContext</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">CancellationToken</span>, <span class="type">Task</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">TEvent</span>, <span class="type">CancellationToken</span>, <span class="type">Task</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">TEvent</span>, <span class="type">AtataContext</span>, <span class="type">CancellationToken</span>, <span class="type">Task</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">IEventHandler</span>&lt;<span class="type">TEvent</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">IAsyncEventHandler</span>&lt;<span class="type">TEvent</span>&gt; eventHandler)</span></h3>
</div>

Adds the specified event handler as a subscription to the `TEvent`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>, <span class="type">TEventHandler</span>&gt;<wbr></span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TEventHandler</span> : <span class="keyword">class</span>, <span class="type">IEventHandler</span>&lt;<span class="type">TEvent</span>&gt;, <span class="keyword">new</span>()</span>
</div>

Adds the created instance of `TEventHandler` as a subscription to the `TEvent`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Type</span> eventType, <span class="type">Type</span> eventHandlerType)</span></h3>
</div>

Adds the created instance of `eventHandlerType` as a subscription to the `eventType`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Type</span> eventHandlerType)</span></h3>
</div>

Adds the created instance of `eventHandlerType` as a subscription to the event type
that is read from `IEventHandler<TEvent>` generic argument that `eventHandlerType` should implement.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">RemoveAll<wbr></span><span class="tail">(<span class="type">Predicate</span>&lt;<span class="type">EventSubscriptionItem</span>&gt; match)</span></h3>
</div>

Removes all the subscriptions that match the conditions defined by the specified predicate.

#### Usage

Add handler to `AtataContext` event:

```cs
builder.EventSubscriptions.Add<AtataContextInitCompletedEvent>(x => x.Context.Log.Info("Context created"));
```

Add handler to `AtataSession` event:

```cs
builder.Sessions.AddWebDriver(x => x
    .UseChrome()
    .EventSubscriptions.Add<WebDriverInitCompletedEvent>(x => x.Driver.Maximize()));
```

#### NUnit event handlers

The following event handlers are from Atata.NUnit package.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">AddArtifactsToNUnitTestContext</span><span class="tail">()</span></h3>
</div>

Defines that after `AtataContext` deinitialization the files stored in Artifacts directory
should be added to NUnit `TestContext`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">AddDirectoryFilesToNUnitTestContext</span><span class="tail">(<span class="keyword">string</span> directoryPath)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">AddDirectoryFilesToNUnitTestContext</span><span class="tail">(<span class="type">Func</span>&lt;<span class="keyword">string</span>&gt; directoryPathBuilder)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TRootBuilder</span></span>
    <h3><span class="body">AddDirectoryFilesToNUnitTestContext</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">AtataContext</span>, <span class="keyword">string</span>&gt; directoryPathBuilder)</span></h3>
</div>

Defines that after `AtataContext` deinitialization the files stored in the
specified directory should be added to NUnit `TestContext`.
Directory path supports template variables.