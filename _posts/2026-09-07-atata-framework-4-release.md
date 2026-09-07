---
title: "Atata Framework 4 Release"
description: "Atata Framework 4 introduces a session-based WebDriver separation with configurable AtataContext, session pooling/borrowing, and a simplified modular configuration."
image: "atata-4.png"
release_version: "4.0.0"
---

Atata Framework 4 introduces session-based WebDriver separation, hierarchical AtataContext, session pooling & sharing, new modules, and more - moving Atata toward a universal automation framework.
{:.lead}

<!--more-->

{% include call-to-support.html %}

## Migrating to Atata 4

**There was a lot of breaking changes made in Atata 4.
Please check out information on all breaking changes and migration process in the [Upgrade to Atata 4](/upgrade/to-atata-4/) guide,
which was created specifically to help with upgrade.**
{:.warning}

## AtataContext

The primary change involves a significant update to `AtataContext`,
redefining its concept and configuration by introducing the new `WebDriverSession` and the concept of sessions,
which are now separated from `AtataContext`.

Since v4, `AtataContext` can be bound to the current test, test suite, fixture, namespace, or global scope.

It is possible to have a hierarchy of `AtataContext` instances.
The `ParentContext` and `ChildContexts` properties have been added to `AtataContext` for hierarchical navigation.
The `AtataContext.Global` static property represents the root of the hierarchy.

All WebDriver functionality was moved out of `AtataContext`.
For backward compatibility and smoother migration, the old `AtataContext` properties (like `Driver`)
and methods (like `TakeScreenshot`) remain marked as obsolete and will be removed in v5.
The Atata v5 library itself will be stripped of WebDriver functionality,
which will be extracted into a separate package, likely named Atata.WebDriver.
With v5, Atata will evolve into a universal framework, no longer tightly coupled with WebDriver/UI testing.

Read more about the updated `AtataContext` in the [Getting Started / Concepts / AtataContext](/getting-started/#atatacontext) section.

## Integration with test frameworks

There were created separate NuGet packages to simplify integration of Atata with test frameworks:
Atata.NUnit, Atata.Xunit.v3, Atata.MSTest, and Atata.Reqnroll.NUnit.
See [Getting Started / Packages](/getting-started/#packages).
These libraries are recommended for use along with the main Atata library.
They provide base classes like `AtataTestSuite` and `AtataGlobalFixture`.
However, these libraries are optional, and you can configure and use `AtataContext` as needed.

## Sessions

The functionality related to WebDriver was extracted into `WebDriverSession`, `WebDriverSessionBuilder`, and other related classes.
It is currently still part of the Atata library.

`AtataSession` is a new concept.
`WebDriverSession` is one of the first implementations of `AtataSession`.
Each `AtataContext` can have any number of sessions it needs, either starting them up during context build or later during execution.
Configure them as needed.
Typically, a session's lifecycle aligns with the context's lifecycle, but there are options to adjust this behavior, as detailed below.

### Session borrowing

You can configure a single session at the test suite level and share it across all child tests,
effectively reusing the same session.
For UI testing, this means a single browser instance will be utilized for all tests in the suite.
However, this approach has a key limitation: tests within such a suite must not run in parallel,
but still can run in parallel with tests from other suites.

### Session pool

A session pool allows you to manage reusable `AtataSession` instances efficiently.
When a context ends, the session is returned to the pool, making it available for reuse by other contexts.
The pool's initial and maximum capacity are fully configurable.
You can define multiple pools, even for the same session type, by assigning unique names to each pool.
Typically, pools are configured at the global `AtataContext` level for optimal management.

## State

`public StateHierarchicalDictionary State { get; }` property was added to both `AtataContext` and `AtataSession`.
This property serves as a hierarchical object dictionary, allowing you to store objects at a higher level (e.g., global)
and retrieve them at a lower level (e.g., test).
This feature is particularly useful for managing complex test scenarios.

```cs
AtataContext.Global!.State["string key"] = "string value";
AtataContext.Global!.State.Set(new SomeObject(...));
//...
string stringValue = Context.State.Get<string>("string key");
SomeObject someObject = Context.State.Get<SomeObject>();
```

## UI Components

There were no valuable changes related to UI components.

## Default retry interval

`AtataContext.DefaultRetryInterval` was changed from 500 to 200 milliseconds.

If you want to keep the old default retry interval:

```cs
builder.UseBaseRetryInterval(TimeSpan.FromMicroseconds(500));
```

## Configuration

The configuration was reworked and changed significantly.
Below is an example of a new `AtataContext` configuration in a global fixture:

```cs
[SetUpFixture]
public class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder) =>
        builder
            .UseCulture("en-US")
            .LogConsumers.AddNLogFile()
            .Sessions.AddWebDriver(x => x
                .UseStartScopes(AtataContextScopes.Test)
                .UseBaseUrl("https://demo.atata.io/")
                .UseChrome(x => x
                    .WithArguments("headless=new", "window-size=1024,768", "disable-search-engine-choice-screen")));

    protected override void ConfigureGlobalAtataContext(AtataContextBuilder builder) =>
        builder.SetUpWebDriversForUse();
}
```

## JSON configuration

Atata.Configuration.Json package is not upgraded to version 4 and will continue to support only Atata v3.
The Atata JSON configuration is basically deprecated.
With all the new Atata changes and modularity, it is challenging to maintain JSON configuration compatibility.

JSON configuration can be migrated to the built-in runtime configuration with the help of Microsoft.Extensions.Configuration package,
using environment variables, test parameters, or custom configuration files.
Please check out the [Complex configuration](/tutorials/complex-configuration/) tutorial for more details and examples.

## Artifacts

There was an improvement of `AtataContext` Artifacts relative path.
Staring v4, namespace of test suite class also participates in the Artifacts path.
There was a problem in v3, when you had test suite classes with the same name under different namespaces,
their results were merged into the same test suite directory.

For example, if you have a test `Test1` in a suite class `SomeProject.UITests.SomeFeature.SomeTests` of `SomeProject.UITests` project,
here is what the relative Artifacts path will be:

v3: `/SomeTests/Test1`\
v4: `/SomeFeature/SomeTests/Test1`

### Artifacts structure

Here is how the Artifacts file structure looks in v4 for NUnit
considering `AtataContext` is used at all levels (global, namespace, test suite, test):

&#128193; SubNamespace\
&nbsp;&#9642; &#128193; Suite1Tests\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128193; Test1\
&nbsp;&#9642;&nbsp;&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128193; Test2\
&nbsp;&#9642;&nbsp;&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log *(test suite log)*\
&nbsp;&#9642; &#128196; Trace.log *(namespace log)*\
&#128193; Suite2Tests\
&nbsp;&#9642; &#128193; Test1\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642; &#128193; Test2\
&nbsp;&#9642;&nbsp;&nbsp;&#9642; &#128196; Trace.log\
&nbsp;&#9642; &#128196; Trace.log *(test suite log)*\
&#128196; Trace.log *(global log)*

## Logging

A logging was reworked.
The default timestamp format has been changed.
Session ID is written by default to the log between timestamp and log level.
Category and external source properties have been added to log entry.

### Log timestamp

v3: `2025-04-16 12:34:06.466` - the current local timestamp\
v4: `00:00:00.001` - the time elapsed since the start of the corresponding `AtataContext`.

### Categories

Use `ForCategory` method of `ILogManager` to log messages with a specific category.

```cs
Context.Log.ForCategory("Custom category").Debug("Some message");
Context.Log.ForCategory<SomeClass>().Info("Some other message");
```

->

```
00:00:00.001 hDrP DEBUG [Custom category] Some message
00:00:00.001 hDrP  INFO [SomeProject.UITests.SomeClass] Some other message
```

Category, at the moment, is not consumed in Atata itself, but it is available for custom purposes.

### Log sources

Use `ForSource` method of `ILogManager` to log messages with a specific external source.

```cs
Context.Log.ForSource("Some source").Debug("Some message");
```
->

```
00:00:00.001 hDrP DEBUG {Some source} Some message
```

For example, browser logs are now reported with "Browser" external source:

v3:

```
2025-04-16 12:34:06.466 TRACE - Browser log: 12:34:06.375 DEBUG http://localhost:50549/browserlogs 14:12 "console debug log entry"
2025-04-16 12:34:06.468 TRACE - Browser log: 12:34:06.376 ERROR http://localhost:50549/browserlogs 17:12 "console error log entry"
```

v4:

```
00:00:03.163 fj9J DEBUG {Browser} http://localhost:50549/browserlogs 14:12 "console debug log entry"
00:00:03.164 fj9J ERROR {Browser} http://localhost:50549/browserlogs 17:12 "console error log entry"
```

For large external logs, it might be useful to target external source logs to a separate log file, which is possible to do with NLog.

### Test result status

Test result status is now added to the "finished" log entry;

```
00:00:04.703 6pa0 DEBUG Finished test with passed status at 2026-03-21 13:57:32.585
```

## NLog

NLog-related functionality is extracted from Atata package to a separate [Atata.NLog](https://www.nuget.org/packages/Atata.NLog) package.

## ExtentReports

Integration with ExtentReports is now streamlined via the new [Atata.ExtentReports](https://www.nuget.org/packages/Atata.ExtentReports) package.
With v4 you can configure ExtentReports much easier, with a single `UseExtentReports()` method call on the base `AtataContextBuilder`.
Check out the updated [Reporting to ExtentReports](/tutorials/reporting-to-extentreports/) tutorial.

## C# nullable reference types

Starting with v4, Atata is fully compatible with C# nullable reference types.

## AtataContextBuilder

`AtataBuildingContext` was removed.
Its members were extracted to `AtataContextBuilder` and other builder classes.

In `AtataContextBuilder` the `ArtifactsPathTemplate` property and the `UseArtifactsPathTemplate` method were removed.
Introduced `IArtifactsPathFactory` and its implementations, where `TestInfoBasedHierarchicalArtifactsPathFactory` is the default one.
Added `ArtifactsPathFactory` and `RootNamespace` properties to `AtataContextGlobalProperties`.
For custom path template, create custom class implementing `IArtifactsPathFactory` and register it via `AtataContext.GlobalProperties.UseArtifactsPathFactory(...)` method. 

## Attributes builders

`AtataContext` attributes builders were reworked to return `AtataContextBuilder`.

## Event subscriptions

An event subscription mechanism was reworked and improved:

- Async event handlers support was added together with `IAsyncEventHandler<in TEvent>`.
- `EventSubscriptions` property is present in both `AtataContextBuilder` and `AtataSessionBuilder<TSession, TBuilder>`
  allowing to separately subscribe on events of context and session.
- New event types were added and some existing events were renamed.

See details on the [Getting Started / Events](/getting-started/#events) page.

## Behaviors attributes using scripts now firstly set focus to element

Some behavior attributes were slightly updated: `TypesTextUsingScriptAttribute`, `SetsValueUsingScriptAttribute`, `ClearsValueUsingScriptAttribute`, `ClearsValueUsingClearMethodOrScriptAttribute`.
Now, before setting a value, they call `HTMLElement.focus()` function.

For most cases it should not have side effects.
But if needed, there is `bool IncludeFocusScript` property, present in all 4 attributes, to set it to `false`.

## New trigger events

There were added new `TriggerEvents` enum values:
- `PageObjectTransitionIn`. Occurs when a page object transition in is completed.
  That is, navigation to the current page object occurred in the same browser tab
  by interacting with the previous page object, rather than by directly navigating to a URL.
- `PageObjectTransitionOut`. Occurs when a page object transition out is completed.
  That is, navigation to the next page object occurred in the same browser tab
  by interacting with the current page object, rather than by directly navigating to a URL.

Also new event types were added: `PageObjectTransitionInCompletedEvent` and `PageObjectTransitionOutCompletedEvent`.

## Other existing Atata.* packages releases notes

- [Atata.WebDriverExtras 4.0.0](https://github.com/atata-framework/atata-webdriverextras/releases/tag/v4.0.0)
- [Atata.WebDriverSetup 4.0.0](https://github.com/atata-framework/atata-webdriversetup/releases/tag/v4.0.0)
- [Atata.HtmlValidation 4.0.0](https://github.com/atata-framework/atata-htmlvalidation/releases/tag/v4.0.0)
- [Atata.Cli 4.0.0](https://github.com/atata-framework/atata-cli/releases/tag/v4.0.0)

## New Atata.* packages

- [Atata.NUnit](https://github.com/atata-framework/atata-nunit)
- [Atata.Xunit.v3](https://github.com/atata-framework/atata-xunit-v3)
- [Atata.MSTest](https://github.com/atata-framework/atata-mstest)
- [Atata.Reqnroll.NUnit](https://github.com/atata-framework/atata-reqnroll-nunit)
- [Atata.NLog](https://github.com/atata-framework/atata-nlog)
- [Atata.ExtentReports](https://github.com/atata-framework/atata-extentreports)
- [Atata.Testcontainers](https://github.com/atata-framework/atata-testcontainers)
- [Atata.AspNetCore.v10 (.v9, .v8)](https://github.com/atata-framework/atata-aspnetcore)

## New types

- `IAtataIdGenerator` and `Alphanumeric4AtataIdGenerator`
- `AtataSession`, `WebSession`, `WebDriverSession`
- `AtataSessionCollection`
- `AtataSessionBuilder<TSession, TBuilder>`, `WebSessionBuilder<TSession, TBuilder>`, `WebDriverSessionBuilder`, and `IAtataSessionBuilder`
- `WebSessionReport<TOwner>` class inherited from `Report<TOwner>` and contains `Screenshot` and `PageSnapshot` methods
- `IWebSessionReport<out TOwner>` interface inherited from `IReport<TOwner>`
- `RetryWait`
- `WildcardPattern`
- `IInitializableLogConsumer`
- `IAsyncEventHandler<in TEvent>`, `IConditionalAsyncEventHandler<in TEvent>`, `ActionAsyncEventHandler<TEvent>`
- `SetUpWebDriversEventHandler`, `SetUpWebDriversForUseEventHandler`, `SetUpWebDriversConfiguredEventHandler`
- `AtataContextConfigurationAttribute`, `ConfigureAtataContextAttribute`, `DisableAllSessionsAttribute`, `DisableAllSessionsAttribute<TSession>`, `DisableSessionAttribute`, `DisableSessionAttribute<TSession>`, `SetStateAttribute`, `SetVariableAttribute`, `StartSessionAndShareAttribute`, `StartSessionAndShareAttribute<TSession>`, `StartSessionAttribute`, `StartSessionAttribute<TSession>`, `TakeSessionFromPoolAndShareAttribute`, `TakeSessionFromPoolAndShareAttribute<TSession>`, `TakeSessionFromPoolAttribute`, `TakeSessionFromPoolAttribute<TSession>`, `TestAtataContextMetadata`, `TestSuiteAtataContextConfigurationAttribute`, `TestSuiteAtataContextMetadata`
- `MethodFinder`
- `ProcessFilesOnAtataContextDeInitCompletedEventHandlerBase`, `ProcessFilesOnAtataContextDeInitCompletedEventHandler`
- `AddArtifactOptions`
- `TestTrait`
- `CIDetector`
- `HierarchicalDictionary<TKey, TValue>`, `ObjectHierarchicalDictionary<TKey>`, `StateHierarchicalDictionary`, `VariableHierarchicalDictionary`

### New enum types

- `AtataContextScope`: `Test`, `TestSuite`, `TestSuiteGroup`, `Namespace`, `Global`
- `AtataContextScopes`: `None`, `Test`, `TestSuite`, `TestSuiteGroup`, `Namespace`, `Global`, `All`
- `AtataSessionMode`: `Own`, `Shared`, `Pool`
- `TestResultStatus`: `None`, `Inconclusive`, `Passed`, `Warning`, `Failed`
- `TestResultStatusCondition`: `None`, `Passed`, `PassedOrInconclusive`, `PassedOrInconclusiveOrWarning`
- `ConfigurationMode`: `ConfigureOrThrow`, `ConfigureIfExists`, `ConfigureOrAdd`

### New event types

- `AtataSessionAssignedToContextEvent`
- `AtataSessionUnassignedFromContextEvent`
- `AtataSessionInitStartedEvent`
- `AtataSessionInitCompletedEvent`
- `AtataSessionDeInitStartedEvent`
- `AtataSessionDeInitCompletedEvent`
- `PageObjectTransitionInCompletedEvent`
- `PageObjectTransitionOutCompletedEvent`

## New members

### `AtataContext`

- `public static AtataContext ResolveCurrent()`
- `public static AtataContext Global { get; }`

- `public string Id { get; }`
- `public AtataContextScope? Scope { get; }`
- `public AtataContext ParentContext { get; }`
- `public AtataSessionCollection Sessions { get; }`
- `public string ArtifactsRelativePath { get; }`
- `public TestResultStatus ResultStatus { get; }`
- `public IReadOnlyList<AtataContext> ChildContexts { get; }`
- `public CancellationToken DefaultCancellationToken { get; }`

- `public static AtataContextBuilder CreateBuilder(AtataContextScope scope)`
- `public static AtataContextBuilder CreateDefaultBuilder(AtataContextScope scope)`
- `public static AtataContextBuilder CreateNonScopedBuilder()`
- `public static AtataContextBuilder CreateDefaultNonScopedBuilder()`
- `public static bool TryGetCurrent([NotNullWhen(true)] out AtataContext? context)`
- `public static void PresetCurrentAsyncLocalBox()`

- `public void SetInconclusiveTestResult(string? message = null)`
- `public void HandleTestResultException(Exception exception)`
- `public void HandleTestResultException(string message, string stackTrace)`
- `public void SetToDefaultCancellationTokenWhenDefault(ref CancellationToken cancellationToken)`
- `public ValueTask DisposeAsync()`

### `AtataContextBuilder`

- `public AtataContext ParentContext { get; }`
- `public CancellationToken DefaultCancellationToken { get; set; }`
- `public Func<string?>? TestSuiteGroupNameFactory { get; set; }`
- `public Func<IReadOnlyList<TestTrait>?>? TestTraitsFactory { get; set; }`
- `public TestResultStatusCondition CleanUpArtifactsCondition { get; set; }`

- `public AtataContextBuilder UseParentContext(AtataContext parentContext)`
- `public AtataContextBuilder UseDefaultCancellationToken(CancellationToken cancellationToken)`
- `public AtataContextBuilder UseTestSuiteGroupName(Func<string> testSuiteGroupNameFactory)`
- `public AtataContextBuilder UseTestSuiteGroupName(string testSuiteGroupName)`
- `public AtataContextBuilder UseTestTraits(Func<IReadOnlyList<TestTrait>?> testTraitsFactory)`
- `public AtataContextBuilder UseTestTraits(IReadOnlyList<TestTrait>? testTraits)`
- `public AtataContextBuilder UseCleanUpArtifactsCondition(TestResultStatusCondition condition)`
- `public AtataContextBuilder Use(Action<AtataContextBuilder> configure)`
- `public AtataContext Build(CancellationToken cancellationToken = default)`
- `public Task<AtataContext> BuildAsync(CancellationToken cancellationToken = default)`

### `AtataContextGlobalProperties`

- `public string? RootNamespace { get; set; }`
- `public IArtifactsPathFactory ArtifactsPathFactory { get; set; }`
- `public IAtataIdGenerator IdGenerator { get; set; }`
- `public AtataContextGlobalProperties UseRootNamespaceOf<T>()`
- `public AtataContextGlobalProperties UseRootNamespaceOf(Type type)`
- `public AtataContextGlobalProperties UseRootNamespace(string? rootNamespace)`
- `public AtataContextGlobalProperties UseDefaultArtifactsRootPathTemplateExcludingRunStartOnCI()`
- `public AtataContextGlobalProperties UseArtifactsPathFactory(IArtifactsPathFactory artifactsPathFactory)`

### `AtataContextModeOfCurrent` enum

- `AsyncLocalBoxed` value

### `TriggerEvents` enum

- `PageObjectTransitionIn` value
- `PageObjectTransitionOut` value

### `TestInfo`

- `public string SuiteGroupName { get; }`
- `public string Namespace { get; }`
- `public bool IsEmpty { get; }`
- `public IReadOnlyList<TestTrait> Traits { get; }`

### `LogEventInfo`

- `public AtataSession Session { get; }`
- `public string ExecutionUnitId { get; }`
- `public string Category { get; }`
- `public string Source { get; }`
- `public TimeSpan TimeElapsed { get; }`
- `public string NestingText { get; }`

### `LogConsumerBuilder<TLogConsumer>`

- `public LogConsumerBuilder<TLogConsumer> WithEmbedSessionLog(bool enable)`
- `public LogConsumerBuilder<TLogConsumer> WithEmbedSourceLog(bool enable)`
- `public LogConsumerBuilder<TLogConsumer> WithSkipCondition(TestResultStatusCondition skipCondition)`
- `public LogConsumerBuilder<TLogConsumer> WithTargetScopes(AtataContextScopes scopes)`
- `public LogConsumerBuilder<TLogConsumer> With(Action<TLogConsumer> configureConsumer)`

### `LogConsumersBuilder`

- `public AtataContextBuilder Add<TLogConsumer>(Action<LogConsumerBuilder<TLogConsumer>>? configure = null)`
- `public AtataContextBuilder Add(string typeNameOrAlias, Action<LogConsumerBuilder<ILogConsumer>>? configure = null)`
- `public AtataContextBuilder Add<TLogConsumer>(TLogConsumer consumer, Action<LogConsumerBuilder<TLogConsumer>>? configure = null)`
- `public AtataContextBuilder Configure<TLogConsumer>(Action<LogConsumerBuilder<TLogConsumer>> configure, ConfigurationMode mode = default)`
- `public AtataContextBuilder AddTrace(Action<LogConsumerBuilder<TraceLogConsumer>>? configure = null)`
- `public AtataContextBuilder AddDebug(Action<LogConsumerBuilder<DebugLogConsumer>>? configure = null)`
- `public AtataContextBuilder AddConsole(Action<LogConsumerBuilder<ConsoleLogConsumer>>? configure = null)`
- `public AtataContextBuilder Remove(ILogConsumer logConsumer)`
- `public AtataContextBuilder Remove(LogConsumerConfiguration logConsumerConfiguration)`
- `public AtataContextBuilder RemoveAll<TLogConsumer>()`
- `public AtataContextBuilder Clear()`

### `TextOutputLogConsumer`

- `public string TimeElapsedFormat { get; set; }`
- `public bool OutputTimestamp { get; set; }`

### `ILogManager`

- `void Log(LogLevel level, string message, Exception exception = null)`
- `void Log(DateTime utcTimestamp, LogLevel level, string message, Exception exception = null)`
- `ILogManager CreateSubLog()`
- `ILogManager CreateSubLogForCategory(string category)`

### `LogSection`

- `public bool LogResult { get; protected set; }`
- `public static implicit operator LogSection(string sectionMessage)`

### `IEventBus`

- `Task PublishAsync<TEvent>(TEvent eventData)`
- `Task PublishAsync<TEvent>(TEvent eventData, CancellationToken cancellationToken)`
- `object Subscribe<TEvent>(Func<CancellationToken, Task> eventHandler)`
- `object Subscribe<TEvent>(Func<TEvent, CancellationToken, Task> eventHandler)`
- `object Subscribe<TEvent>(Func<TEvent, AtataContext, CancellationToken, Task> eventHandler)`
- `object Subscribe<TEvent>(IAsyncEventHandler<TEvent> eventHandler)`
- `void UnsubscribeAll()`

### `EventSubscriptionsBuilder`

- `public EventSubscriptionsBuilder Add<TEvent>(Func<CancellationToken, Task> eventHandler)`
- `public EventSubscriptionsBuilder Add<TEvent>(Func<TEvent, CancellationToken, Task> eventHandler)`
- `public EventSubscriptionsBuilder Add<TEvent>(Func<TEvent, AtataContext, CancellationToken, Task> eventHandler)`
- `public EventSubscriptionsBuilder Add<TEvent>(IAsyncEventHandler<TEvent> eventHandler)`

### `PageObject<TOwner>`

- `public TOwner SetNavigationUrlVariable(object value, [CallerArgumentExpression(nameof(value))] string? key = null)`
- `protected virtual void OnTransitionIn()`
- `protected virtual void OnTransitionOut()`

### `UIComponentScriptExecutor<TOwner>`

- `public TOwner FocusSetValueAndDispatchChangeEvent(string value)`
- `public TOwner FocusAddValueAndDispatchChangeEvent(string value)`

### `EditableTextField<TValue, TOwner>`

- `public TOwner TypeRandom()`
- `public TOwner TypeRandom(Action<TValue> callback)`
- `public TOwner TypeRandom([NotNull] out TValue value)`

### `EditableFieldExtensions`

- `public static TOwner TypeRandom<TValue, TOwner>(this EditableTextField<TValue?, TOwner> field, out TValue value)`

### `IObjectProvider<out TObject>`

- `IAtataExecutionUnit? ExecutionUnit { get; }`

### `ObjectProvider<TObject, TOwner>`

- `protected AtataContext? GetAtataContextOrNull()`
- `protected bool TryGetAtataContext([NotNullWhen(true)] out AtataContext? context)`
- `protected bool TryGetLog([NotNullWhen(true)] out ILogManager? logManager)`

### `IEnumerableProviderExtensions`

- `public static EnumerableValueProvider<TSource, TOwner> SkipLast<TSource, TOwner>(this IEnumerableProvider<TSource, TOwner> source, int count)`

### `ObjectVerificationProvider<TObject, TOwner>`

- `public Subject<TException> Throw<TException>(string messageWildcardPattern)`
- `public Subject<TException> ThrowExactly<TException>()`
- `public Subject<TException> ThrowExactly<TException>(string messageWildcardPattern)`

### `IObjectVerificationProviderExtensions`

- `public static TOwner ConsistOfSingle<TItem, TOwner>(this IObjectVerificationProvider<IEnumerable<TItem>, TOwner> verifier, TItem expected)`
- `public static TOwner ConsistOfSingle<TObject, TOwner>(this IObjectVerificationProvider<IEnumerable<IObjectProvider<TObject>>, TOwner> verifier, TObject expected)`
- `public static TOwner MatchWildcardPattern<TOwner>(this IObjectVerificationProvider<string, TOwner> verifier, string pattern)`
- `public static TOwner BeDefault<TObject, TOwner>(this IObjectVerificationProvider<TObject, TOwner> verifier)`
- `public static TOwner BeNullOrDefault<TObject, TOwner>(this IObjectVerificationProvider<TObject?, TOwner> verifier)`
- `public static TOwner Be<TOwner>(this IObjectVerificationProvider<Uri, TOwner> verifier, string expected)`

### `SubjectBase<TObject, TSubject>`

- `public TSubject Arrange(Action<TObject> action)`
- `public ActionProvider<TSubject> Invoking(Expression<Func<TObject, ValueTask>> functionExpression)`
- `public ActionProvider<TSubject> Invoking(Func<TObject, ValueTask> function, string functionName)`
- `public ActionProvider<TSubject> Invoking<TResult>(Expression<Func<TObject, ValueTask<TResult>>> functionExpression)`
- `public ActionProvider<TSubject> Invoking<TResult>(Func<TObject, ValueTask<TResult>> function, string functionName)`
- `public ActionProvider<TSubject> Invoking(Expression<Func<TObject, Task>> functionExpression)`
- `public ActionProvider<TSubject> Invoking(Func<TObject, Task> function, string functionName)`
- `public ActionProvider<TSubject> Invoking<TResult>(Expression<Func<TObject, Task<TResult>>> functionExpression)`
- `public ActionProvider<TSubject> Invoking<TResult>(Func<TObject, Task<TResult>> function, string functionName)`
- `public ActionProvider<TSubject> DynamicInvoking(Expression<Func<TObject, ValueTask>> functionExpression)`
- `public ActionProvider<TSubject> DynamicInvoking(Func<TObject, ValueTask> function, string functionName)`
- `public ActionProvider<TSubject> DynamicInvoking<TResult>(Expression<Func<TObject, ValueTask<TResult>>> functionExpression)`
- `public ActionProvider<TSubject> DynamicInvoking<TResult>(Func<TObject, ValueTask<TResult>> function, string functionName)`
- `public ActionProvider<TSubject> DynamicInvoking(Expression<Func<TObject, Task>> functionExpression)`
- `public ActionProvider<TSubject> DynamicInvoking(Func<TObject, Task> function, string functionName)`
- `public ActionProvider<TSubject> DynamicInvoking<TResult>(Expression<Func<TObject, Task<TResult>>> functionExpression)`
- `public ActionProvider<TSubject> DynamicInvoking<TResult>(Func<TObject, Task<TResult>> function, string functionName)`
- `public Subject<TResult> ResultOf<TResult>(Expression<Func<TObject, ValueTask<TResult>>> functionExpression)`
- `public Subject<TResult> ResultOf<TResult>(Func<TObject, ValueTask<TResult>> function, string functionName)`
- `public Subject<TResult> ResultOf<TResult>(Expression<Func<TObject, Task<TResult>>> functionExpression)`
- `public Subject<TResult> ResultOf<TResult>(Func<TObject, Task<TResult>> function, string functionName)`
- `public Subject<TResult> DynamicResultOf<TResult>(Expression<Func<TObject, ValueTask<TResult>>> functionExpression)`
- `public Subject<TResult> DynamicResultOf<TResult>(Func<TObject, ValueTask<TResult>> function, string functionName)`
- `public Subject<TResult> DynamicResultOf<TResult>(Expression<Func<TObject, Task<TResult>>> functionExpression)`
- `public Subject<TResult> DynamicResultOf<TResult>(Func<TObject, Task<TResult>> function, string functionName)`
- `public Subject<TResult> SubjectOf<TResult>(Expression<Func<TObject, ValueTask<TResult>>> functionExpression)`
- `public Subject<TResult> SubjectOf<TResult>(Func<TObject, ValueTask<TResult>> function, string functionName)`
- `public Subject<TResult> SubjectOf<TResult>(Expression<Func<TObject, Task<TResult>>> functionExpression)`
- `public Subject<TResult> SubjectOf<TResult>(Func<TObject, Task<TResult>> function, string functionName)`
- `public Subject<TResult> DynamicSubjectOf<TResult>(Expression<Func<TObject, ValueTask<TResult>>> functionExpression)`
- `public Subject<TResult> DynamicSubjectOf<TResult>(Func<TObject, ValueTask<TResult>> function, string functionName)`
- `public Subject<TResult> DynamicSubjectOf<TResult>(Expression<Func<TObject, Task<TResult>>> functionExpression)`
- `public Subject<TResult> DynamicSubjectOf<TResult>(Func<TObject, Task<TResult>> function, string functionName)`
- `public TSubject Act(Expression<Func<TObject, ValueTask>> actionExpression)`
- `public TSubject Act(Func<TObject, ValueTask> action, string actionName)`
- `public TSubject Act(Expression<Func<TObject, Task>> actionExpression)`
- `public TSubject Act(Func<TObject, Task> action, string actionName)`

### `Subject`

- `public static ActionProvider Invoking(Expression<Func<ValueTask>> functionExpression)`
- `public static ActionProvider Invoking(Func<ValueTask> function, string functionName)`
- `public static ActionProvider Invoking<TResult>(Expression<Func<ValueTask<TResult>>> functionExpression)`
- `public static ActionProvider Invoking<TResult>(Func<ValueTask<TResult>> function, string functionName)`
- `public static ActionProvider Invoking(Expression<Func<Task>> functionExpression)`
- `public static ActionProvider Invoking(Func<Task> function, string functionName)`
- `public static ActionProvider Invoking<TResult>(Expression<Func<Task<TResult>>> functionExpression)`
- `public static ActionProvider Invoking<TResult>(Func<Task<TResult>> function, string functionName)`
- `public static ActionProvider DynamicInvoking(Expression<Func<ValueTask>> functionExpression)`
- `public static ActionProvider DynamicInvoking(Func<ValueTask> function, string functionName)`
- `public static ActionProvider DynamicInvoking<TResult>(Expression<Func<ValueTask<TResult>>> functionExpression)`
- `public static ActionProvider DynamicInvoking<TResult>(Func<ValueTask<TResult>> function, string functionName)`
- `public static ActionProvider DynamicInvoking(Expression<Func<Task>> functionExpression)`
- `public static ActionProvider DynamicInvoking(Func<Task> function, string functionName)`
- `public static ActionProvider DynamicInvoking<TResult>(Expression<Func<Task<TResult>>> functionExpression)`
- `public static ActionProvider DynamicInvoking<TResult>(Func<Task<TResult>> function, string functionName)`
- `public static Subject<TResult> ResultOf<TResult>(Expression<Func<ValueTask<TResult>>> functionExpression)`
- `public static Subject<TResult> ResultOf<TResult>(Func<ValueTask<TResult>> function, string functionName)`
- `public static Subject<TResult> ResultOf<TResult>(Expression<Func<Task<TResult>>> functionExpression)`
- `public static Subject<TResult> ResultOf<TResult>(Func<Task<TResult>> function, string functionName)`
- `public static Subject<TResult> DynamicResultOf<TResult>(Expression<Func<ValueTask<TResult>>> functionExpression)`
- `public static Subject<TResult> DynamicResultOf<TResult>(Func<ValueTask<TResult>> function, string functionName)`
- `public static Subject<TResult> DynamicResultOf<TResult>(Expression<Func<Task<TResult>>> functionExpression)`
- `public static Subject<TResult> DynamicResultOf<TResult>(Func<Task<TResult>> function, string functionName)`
- `public static Subject<TResult> SubjectOf<TResult>(Expression<Func<ValueTask<TResult>>> functionExpression)`
- `public static Subject<TResult> SubjectOf<TResult>(Func<ValueTask<TResult>> function, string functionName)`
- `public static Subject<TResult> SubjectOf<TResult>(Expression<Func<Task<TResult>>> functionExpression)`
- `public static Subject<TResult> SubjectOf<TResult>(Func<Task<TResult>> function, string functionName)`
- `public static Subject<TResult> DynamicSubjectOf<TResult>(Expression<Func<ValueTask<TResult>>> functionExpression)`
- `public static Subject<TResult> DynamicSubjectOf<TResult>(Func<ValueTask<TResult>> function, string functionName)`
- `public static Subject<TResult> DynamicSubjectOf<TResult>(Expression<Func<Task<TResult>>> functionExpression)`
- `public static Subject<TResult> DynamicSubjectOf<TResult>(Func<Task<TResult>> function, string functionName)`

### `Stringifier`

- `public static string ToStringInShortForm(Type? type)`

### `TypeExtensions`

- `public static string ToStringInShortForm(this Type type)`

### `ArtifactTypes`

- `Log`

### `MethodInfoExtensions`

- `public static object? InvokeWithExceptionUnwrapping(this MethodInfo method, object? instance, params object?[] args)`

{% include download-package-link.html name="Atata" version=page.release_version %}
