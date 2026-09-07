#### `AtataContextBuilder` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataSessionsBuilder</span></span>
    <h3><span class="body">Sessions</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the builder of sessions, which provides the functionality to add/configure/remove sessions and session providers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AttributesBuilder</span></span>
    <h3><span class="body">Attributes</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the builder of context attributes, 
which provides the functionality to add extra attributes to different metadata levels:
global, assembly, component and property.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextEventSubscriptionsBuilder</span></span>
    <h3><span class="body">EventSubscriptions</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the builder of event subscriptions,
which provides the methods to subscribe to Atata and custom events.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumersBuilder</span></span>
    <h3><span class="body">LogConsumers</span><span class="tail"> { <span class="keyword">get</span>; }</span></h3>
</div>

Gets the builder of log consumers, which provides the methods to add log consumers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Use</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">AtataContextBuilder</span>&gt; configure)</span></h3>
</div>

Configures this builder by action delegate.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseParentContext</span><span class="tail">(<span class="type">AtataContext</span>? parentContext)</span></h3>
</div>

Sets the parent context.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVariable</span><span class="tail">(<span class="keyword">string</span> key, <span class="keyword">object</span>? value)</span></h3>
</div>

Sets the variable.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVariables</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="type">KeyValuePair</span>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>?&gt;&gt; variables)</span></h3>
</div>

Sets the variables.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseState<wbr>&lt;<span class="type">TValue</span>&gt;</span><span class="tail">(<span class="type">TValue</span> value)</span></h3>
</div>

Sets the state object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseState</span><span class="tail">(<span class="keyword">string</span> key, <span class="keyword">object</span>? value)</span></h3>
</div>

Sets the state object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseState</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="type">KeyValuePair</span>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>?&gt;&gt; objects)</span></h3>
</div>

Sets the state objects.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddSecretStringToMaskInLog</span><span class="tail">(<span class="keyword">string</span> value, <span class="keyword">string</span> mask = <span class="string">"{*****}"</span>)</span></h3>
</div>

Adds the secret string to mask in log.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestName</span><span class="tail">(<span class="keyword">string</span>? testName)</span></h3>
</div>

Sets the name of the test.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestName</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="keyword">string</span>?&gt; testNameFactory)</span></h3>
</div>

Sets the factory method of the test name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteName</span><span class="tail">(<span class="keyword">string</span>? testSuiteName)</span></h3>
</div>

Sets the name of the test suite (class).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteName</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="keyword">string</span>?&gt; testSuiteNameFactory)</span></h3>
</div>

Sets the factory method of the test suite (class) name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteType</span><span class="tail">(<span class="type">Type</span>? testSuiteType)</span></h3>
</div>

Sets the type of the test suite class.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteType</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="type">Type</span>?&gt; testSuiteTypeFactory)</span></h3>
</div>

Sets the factory method of the test suite class type.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteGroupName</span><span class="tail">(<span class="keyword">string</span>? testSuiteGroupName)</span></h3>
</div>

Sets the name of the test suite group (collection fixture).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteGroupName</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="keyword">string</span>?&gt; testSuiteGroupNameFactory)</span></h3>
</div>

Sets the factory method of the test suite group (collection fixture) name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestTraits</span><span class="tail">(<span class="type">IReadOnlyList&lt;<span class="type">TestTrait</span>&gt;</span>? testTraits)</span></h3>
</div>

Sets the test traits.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestTraits</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">IReadOnlyList&lt;<span class="type">TestTrait</span>&gt;</span>?&gt; testTraitsFactory)</span></h3>
</div>

Sets the factory method of the test traits.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the base retry timeout. The default value is 5 seconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the base retry interval. The default value is 200 milliseconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseWaitingTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the waiting timeout.
The default value is taken from `BaseRetryTimeout`, which is equal to 5 seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseWaitingRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the waiting retry interval.
The default value is taken from `BaseRetryInterval`, which is equal to 200 milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVerificationTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the verification timeout.
The default value is taken from `BaseRetryTimeout`, which is equal to 5 seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVerificationRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the verification retry interval.
The default value is taken from `BaseRetryInterval`, which is equal to 200 milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseDefaultCancellationToken</span><span class="tail">(<span class="type">CancellationToken</span> cancellationToken)</span></h3>
</div>

Sets the default cancellation token. The default value is `CancellationToken.None`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseCulture</span><span class="tail">(<span class="type">CultureInfo</span> culture)</span></h3>
</div>

Sets the culture. The default value is `CultureInfo.CurrentCulture`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseCulture</span><span class="tail">(<span class="keyword">string</span> cultureName)</span></h3>
</div>

Sets the culture by the name. The default value is `CultureInfo.CurrentCulture`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseAssertionExceptionFactory</span><span class="tail">(<span class="type">IAssertionExceptionFactory</span> factory)</span></h3>
</div>

Sets the assertion exception factory.
The default value is an instance of `AtataAssertionExceptionFactory`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseAggregateAssertionExceptionFactory</span><span class="tail">(<span class="type">IAggregateAssertionExceptionFactory</span> factory)</span></h3>
</div>

Sets the aggregate assertion strategy.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseAggregateAssertionStrategy</span><span class="tail">(<span class="type">IAggregateAssertionStrategy</span> strategy)</span></h3>
</div>

Sets the aggregate assertion strategy.
The default value is an instance of `AtataAggregateAssertionStrategy`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseWarningReportStrategy</span><span class="tail">(<span class="type">IWarningReportStrategy</span> strategy)</span></h3>
</div>

Sets the strategy for warning assertion reporting.
The default value is an instance of `AtataWarningReportStrategy`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseAssertionFailureReportStrategy</span><span class="tail">(<span class="type">IAssertionFailureReportStrategy</span> strategy)</span></h3>
</div>

Sets the strategy for assertion failure reporting.
The default value is an instance of `AtataAssertionFailureReportStrategy`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseCleanUpArtifactsCondition</span><span class="tail">(<span class="type">TestResultStatusCondition</span> condition)</span></h3>
</div>

Sets the condition under which Artifacts directory should be deleted depending on a test result status.
The default value is `TestResultStatusCondition.None`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Clear()</span></h3>
</div>

Creates a new clean `AtataContextBuilder` instance with the same scope arguments.
If this instance is `BaseConfiguration`, sets the new cleared instance into `AtataContext.BaseConfiguration`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Clone()</span></h3>
</div>

Creates a copy of the current builder.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">CloneFor</span><span class="tail">(<span class="type">AtataContextScope</span> scope)</span></h3>
</div>

Creates a copy of the current builder for the specified `scope`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContext</span></span>
    <h3><span class="body">Build</span><span class="tail">(<span class="type">CancellationToken</span> cancellationToken = <span class="keyword">default</span>)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Task</span>&lt;<span class="type">AtataContext</span>&gt;</span>
    <h3><span class="body">BuildAsync</span><span class="tail">(<span class="type">CancellationToken</span> cancellationToken = <span class="keyword">default</span>)</span></h3>
</div>

Builds the `AtataContext` instance and sets it to `AtataContext.Current` property.

#### `AtataContextBuilder` extension methods for WebDriver setup

In order to use the following methods, ensure that `Atata.WebDriverSetup` package is installed.
{:.info}

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">SetUpWebDrivers</span><span class="tail">(<span class="keyword">params</span> <span class="keyword">string</span>[] browserNames)</span></h3>
</div>

Adds `SetUpWebDriversEventHandler` instance to the `AtataContextBuilder.EventSubscriptions` collection.
The `SetUpWebDriversEventHandler` sets up drivers with auto version detection for the specified browsers.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">SetUpWebDriversForUse</span><span class="tail">()</span></h3>
</div>

Adds `SetUpWebDriversForUseEventHandler` instance to the `AtataContextBuilder.EventSubscriptions` collection.
The `SetUpWebDriversForUseEventHandler` sets up drivers with automatic version detection for the local browsers,
which are specified in the preconfigured `WebDriverSessionBuilder` instances as drivers to use.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">SetUpWebDriversConfigured</span><span class="tail">()</span></h3>
</div>

Adds `SetUpWebDriversConfiguredEventHandler` instance to the `AtataContextBuilder.EventSubscriptions` collection.
The `SetUpWebDriversConfiguredEventHandler` sets up drivers with automatic version detection for the local browsers,
which are specified in the preconfigured `WebDriverSessionBuilder` instances as configured drivers.