Atata provides a set of events that are raised during execution.
Event handlers can be subscribed on Atata or custom events through the methods of `EventSubscriptions` property of `AtataContextBuilder`.

The list of Atata events:

- `AtataContextPreInitEvent`
- `AtataContextInitStartedEvent`
- `AtataContextInitCompletedEvent`
- `AtataContextDeInitEvent`
- `AtataContextDeInitCompletedEvent`
- `DriverInitEvent`
- `DriverDeInitEvent`
- `PageObjectInitEvent`
- `PageObjectInitCompletedEvent`
- `PageObjectDeInitEvent`
- `ArtifactAddedEvent`

The list of methods of `EventSubscriptionsAtataContextBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EventSubscriptionsAtataContextBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Action</span> eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EventSubscriptionsAtataContextBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TEvent</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EventSubscriptionsAtataContextBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TEvent</span>, <span class="type">AtataContext</span>&gt; eventHandler)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EventSubscriptionsAtataContextBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">IEventHandler</span>&lt;<span class="type">TEvent</span>&gt; eventHandler)</span></h3>
</div>

Adds the specified event handler as a subscription to the `TEvent`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EventSubscriptionsAtataContextBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>, <span class="type">TEventHandler</span>&gt;<wbr></span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TEventHandler</span> : <span class="keyword">class</span>, <span class="type">IEventHandler</span>&lt;<span class="type">TEvent</span>&gt;, <span class="keyword">new</span>()</span>
</div>

Adds the created instance of `TEventHandler` as a subscription to the `TEvent`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EventSubscriptionsAtataContextBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Type</span> eventType, <span class="type">Type</span> eventHandlerType)</span></h3>
</div>

Adds the created instance of `eventHandlerType` as a subscription to the `eventType`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EventSubscriptionsAtataContextBuilder</span></span>
    <h3><span class="body">Add&lt;<span class="type">TEvent</span>&gt;<wbr></span><span class="tail">(<span class="type">Type</span> eventHandlerType)</span></h3>
</div>

Adds the created instance of `eventHandlerType` as a subscription to the event type
that is read from `IEventHandler<TEvent>` generic argument that `eventHandlerType` should implement.

#### Usage

```cs
AtataContext.GlobalConfiguration
    .EventSubscriptions.Add<DriverInitEvent>(e => e.Driver.Maximize());
```

#### NUnit Event Handlers

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">LogNUnitError()</span></h3>
</div>

Defines that an error occurred during the NUnit test execution should be added to the log during `AtataContext` deinitialization.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeScreenshotOnNUnitError</span><span class="tail">(<span class="keyword">string</span> title = <span class="string">"Failed"</span>)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeScreenshotOnNUnitError</span><span class="tail">(<span class="type">ScreenshotKind</span> kind, <span class="keyword">string</span> title = <span class="string">"Failed"</span>)</span></h3>
</div>

Defines that an error occurred during the NUnit test execution should be captured by a screenshot during `AtataContext` deinitialization.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakePageSnapshotOnNUnitError</span><span class="tail">(<span class="keyword">string</span> title = <span class="string">"Failed"</span>)</span></h3>
</div>

Defines that an error occurred during the NUnit test execution should be captured by a page snapshot during `AtataContext` deinitialization.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddArtifactsToNUnitTestContext</span><span class="tail">()</span></h3>
</div>

Defines that after `AtataContext` deinitialization the files stored in Artifacts directory
should be added to NUnit `TestContext`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddDirectoryFilesToNUnitTestContext</span><span class="tail">(<span class="keyword">string</span> directoryPath)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddDirectoryFilesToNUnitTestContext</span><span class="tail">(<span class="type">Func</span>&lt;<span class="keyword">string</span>&gt; directoryPathBuilder)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddDirectoryFilesToNUnitTestContext</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">AtataContext</span>, <span class="keyword">string</span>&gt; directoryPathBuilder)</span></h3>
</div>

Defines that after `AtataContext` deinitialization the files stored in the
specified directory should be added to NUnit `TestContext`.
Directory path supports template variables.