Session configuration can be done using a couple of classes (listed as inheritance hierarchy):

- `AtataSessionBuilderBase<TBuilder>` - a base builder for creating and configuring session providers.
  - `AtataSessionBuilder<TSession, TBuilder>` - a builder for creating and configuring an `AtataSession`.
  - `AtataSessionRequestBuilder<TBuilder>` - a builder of a session request.
    - `AtataSessionBorrowRequestBuilder` - a builder of a session borrow request.
    - `AtataSessionPoolRequestBuilder` - a builder of a session taking from pool request.

#### `AtataSessionBuilderBase<TBuilder>` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">Use</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TBuilder</span>&gt; configure)</span></h3>
</div>

Configures this builder by action delegate.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseName</span><span class="tail">(<span class="keyword">string</span>? name)</span></h3>
</div>

Sets the `Name` value for a session.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartScopes</span><span class="tail">(<span class="type">AtataContextScopes</span> startScopes)</span></h3>
</div>

Sets the `StartScopes` (the scopes for which an `AtataSession` should automatically start) value for a session.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStart</span><span class="tail">(<span class="keyword">bool</span> start = <span class="keyword">true</span>)</span></h3>
</div>

Sets the `StartScopes` value for a session
with either `AtataContextScopes.All` or `AtataContextScopes.None`,
depending on the `start` parameter.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartCondition</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">AtataContext</span>, <span class="keyword">bool</span>&gt; predicate)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartCondition</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">AtataContext</span>, <span class="type">Task</span>&lt;<span class="keyword">bool</span>&gt;&gt; predicate)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartCondition</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">AtataContext</span>, <span class="type">ValueTask</span>&lt;<span class="keyword">bool</span>&gt;&gt; predicate)</span></h3>
</div>

Adds a start condition predicate that determines whether the session should be started for the provided `AtataContext`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartWhenPortIsAvailable</span><span class="tail">(<span class="keyword">int</span> port)</span></h3>
</div>

Adds a start condition that verifies whether the specified TCP `port` is available.
The condition succeeds when the port is available.

#### `AtataSessionBuilder<TSession, TBuilder>` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">AddDependentConfiguration<wbr>&lt;<span class="type">TOtherSession</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TOtherSession</span>&gt; configure)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TOtherSession</span> : <span class="type">AtataSession</span></span>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">AddDependentConfiguration<wbr>&lt;<span class="type">TOtherSession</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TBuilder</span>, <span class="type">TOtherSession</span>&gt; configure)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TOtherSession</span> : <span class="type">AtataSession</span></span>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">AddDependentConfiguration<wbr>&lt;<span class="type">TOtherSession</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? sessionName, <span class="type">Action</span>&lt;<span class="type">TOtherSession</span>&gt; configure)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TOtherSession</span> : <span class="type">AtataSession</span></span>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">AddDependentConfiguration<wbr>&lt;<span class="type">TOtherSession</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? sessionName, <span class="type">Action</span>&lt;<span class="type">TBuilder</span>, <span class="type">TOtherSession</span>&gt; configure)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TOtherSession</span> : <span class="type">AtataSession</span></span>
</div>

Adds the specified dynamic configuration action that depends on a specific session.
This action will be executed when the session is building.
If the dependent session is not found recursively in contexts during session building, an `AtataSessionNotFoundException` will be thrown.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">AddDynamicConfiguration</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TBuilder</span>&gt; configure)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">AddDynamicConfiguration</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TBuilder</span>, <span class="type">AtataContext</span>&gt; configure)</span></h3>
</div>

Adds the specified dynamic configuration action.
This action will be executed when the session is building.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartCount</span><span class="tail">(<span class="keyword">int</span> count)</span></h3>
</div>

Sets the `StartCount` value, the count of sessions to build on startup.
The default value is `1`.
Applies when `Mode` is set to
`AtataSessionMode.Own` or `AtataSessionMode.Shared`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartMultipleInParallel</span><span class="tail">(<span class="keyword">bool</span> enable)</span></h3>
</div>

Sets the `StartMultipleInParallel` value,
a value indicating whether to build multiple sessions in parallel on startup
when `StartCount` is more than `1`;
or in case of pool mode, when `PoolInitialCapacity` is more than `1`.
The default value is `true`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseAsOwn</span><span class="tail">()</span></h3>
</div>

Sets the session mode to `AtataSessionMode.Own` (the default mode).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseAsShared</span><span class="tail">()</span></h3>
</div>

Sets the session mode to `AtataSessionMode.Shared`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseAsPool</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">AtataSessionPoolBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Sets the session mode to `AtataSessionMode.Pool` and optionally configures the session pool.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseVariable</span><span class="tail">(<span class="keyword">string</span> key, <span class="keyword">object</span> value)</span></h3>
</div>

Sets the variable.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseVariables</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="type">KeyValuePair</span>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>&gt;&gt; variables)</span></h3>
</div>

Sets the variables.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseState<wbr>&lt;<span class="type">TValue</span>&gt;</span><span class="tail">(<span class="type">TValue</span> value)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseState</span><span class="tail">(<span class="keyword">string</span> key, <span class="keyword">object</span> value)</span></h3>
</div>

Sets the state object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseState</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="type">KeyValuePair</span>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>&gt;&gt; variables)</span></h3>
</div>

Sets the state objects.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryTimeout</span><span class="tail">(<span class="type">TimeSpan</span>? timeout)</span></h3>
</div>

Sets the base retry timeout for session.
The default value is `null`.
When `null`, the value for session will be taken from `AtataContext.BaseRetryTimeout`,
which is equal to `5` seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span>? interval)</span></h3>
</div>

Sets the base retry interval for session.
The default value is `null`.
When `null`, the value for session will be taken from `AtataContext.BaseRetryInterval`,
which is equal to `200` milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseWaitingTimeout</span><span class="tail">(<span class="type">TimeSpan</span>? timeout)</span></h3>
</div>

Sets the waiting timeout for session.
The default value is `null`.
When `null`, the value for session will be taken from
`BaseRetryTimeout` or `AtataContext.WaitingTimeout`,
which are equal to `5` seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseWaitingRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span>? interval)</span></h3>
</div>

Sets the waiting retry interval for session.
The default value is `null`.
When `null`, the value for session will be taken from
`BaseRetryTimeout` or `AtataContext.WaitingRetryInterval`,
which are equal to `200` milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVerificationTimeout</span><span class="tail">(<span class="type">TimeSpan</span>? timeout)</span></h3>
</div>

Sets the verification timeout for session.
The default value is `null`.
When `null`, the value for session will be taken from
`BaseRetryTimeout` or `AtataContext.VerificationTimeout`,
which are equal to `5` seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVerificationRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span>? interval)</span></h3>
</div>

Sets the verification retry interval for session.
The default value is `null`.
When `null`, the value for session will be taken from
`BaseRetryTimeout` or `AtataContext.VerificationRetryInterval`,
which are equal to `200` milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseSessionWaitingTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the session waiting timeout,
which is used in session borrowing and getting from pool.
The default value is `5` minutes.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseSessionWaitingRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the session waiting retry interval,
which is used in session borrowing and getting from pool.
The default value is `200` milliseconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Task</span>&lt;<span class="type">TSession</span>&gt;</span>
    <h3><span class="body">BuildAsync</span><span class="tail">(<span class="type">CancellationToken</span> cancellationToken = <span class="keyword">default</span>)</span></h3>
</div>

Builds the session within a target `AtataContext`,
`AtataContext.Current`, or creates a temporary default non-scoped context.

#### `AtataSessionRequestBuilder<TBuilder>` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartCount</span><span class="tail">(<span class="keyword">int</span> count)</span></h3>
</div>

Sets the `StartCount`  value, the count of sessions to request on startup.
The default value is `1`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseStartMultipleInParallel</span><span class="tail">(<span class="keyword">bool</span> enable)</span></h3>
</div>

Sets the `StartMultipleInParallel` value, the count of sessions to request on startup.
The default value is `1`.

#### `AtataSessionPoolRequestBuilder` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataSessionPoolRequestBuilder</span></span>
    <h3><span class="body">UseSharedMode</span><span class="tail">(<span class="keyword">bool</span> enable)</span></h3>
</div>

Sets a value indicating whether to use a shared session mode.
Shared session can be borrowed by child contexts.
The default value is `false`.