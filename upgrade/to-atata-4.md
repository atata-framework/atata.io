---
layout: article
title: Upgrade to Atata 4
description: How to upgrade to Atata 4 considering breaking changes.
---

{{ page.description }}
{:.lead}

{% include call-to-support.html %}

## First steps

The first migration step is to ensure or upgrade your Atata to the latest version 3.x.x.
Then fix all Atata warnings telling that some class/member is obsolete, as those items are removed in v4.

It is also recommended to get familiar with [Atata Framework 4 Release](/blog/2026/09/07/atata-framework-4-release/) blog post to find out what's new and changed in v4.

## AtataContextBuilder

In `AtataContextBuilder` obsolete methods were removed: `UseUtcTimeZone`, `UseTimeZone`.

`AtataBuildingContext` was removed.
Its members were extracted to `AtataContextBuilder` and other builder classes.

In `AtataContextBuilder` the `ArtifactsPathTemplate` property and the `UseArtifactsPathTemplate` method were removed.
Introduced `IArtifactsPathFactory` and its implementations, where `TestInfoBasedHierarchicalArtifactsPathFactory` is the default one.
Added `ArtifactsPathFactory` and `RootNamespace` properties to `AtataContextGlobalProperties`.
For custom path template, create custom class implementing `IArtifactsPathFactory` and register it via `AtataContext.GlobalProperties.UseArtifactsPathFactory(...)` method. 

## JSON configuration

{% include nuget.md name="Atata.Configuration.Json" %} is deprecated with 4th version of Atata Framework.

JSON configuration can be migrated to the built-in runtime configuration with the help of Microsoft.Extensions.Configuration package,
using environment variables, test parameters, or custom configuration files.
Please check out the [Complex configuration](/tutorials/complex-configuration/) tutorial for more details and examples.

## NUnit

All NUnit related functionality was moved from Atata package to the new {% include nuget.md name="Atata.NUnit" %} package.
Methods that were in `AtataContextBuilder` became extension methods in `Atata.NUnit` namespace.
Pay attention to obsolete warnings, as some types and members that were moved are now marked as obsolete and will be removed later.

So if you use NUnit with Atata, add Atata.NUnit package reference and `Atata.NUnit` namespace using.
Also please read documentation of [Atata.NUnit](https://github.com/atata-framework/atata-nunit) library, as there is a new configuration approach.

## NLog

All NLog related functionality was moved from Atata package to the new {% include nuget.md name="Atata.NLog" %} package.

So if you use NLog for Atata logging, add Atata.NLog package reference and `Atata.NLog` namespace using.
Also please read documentation of [Atata.NLog](https://github.com/atata-framework/atata-nlog) library.

## Driver setup methods

In Atata 3, the following methods of `AtataContextBuilder` were used for drivers setup:

- `public void AutoSetUpDriverToUse()`
- `public Task AutoSetUpDriverToUseAsync()`
- `public void AutoSetUpConfiguredDrivers()`
- `public Task AutoSetUpConfiguredDriversAsync()`

In Atata 4, the above methods became obsolete, and the new `AtataContextBuilder` extension methods were introduced:

- `public static AtataContextBuilder SetUpWebDrivers(this AtataContextBuilder builder, params string[] browserNames)`
- `public static AtataContextBuilder SetUpWebDriversForUse(this AtataContextBuilder builder)`
- `public static AtataContextBuilder SetUpWebDriversConfigured(this AtataContextBuilder builder)`

Please notice that the new methods return `AtataContextBuilder`.
In contrast to old methods, the new methods do not execute the drivers setup immediately, they add event subscription handler on `AtataContextInitStartedEvent` and execute during build of `AtataContext`.

The `GlobalFixture.ConfigureGlobalAtataContext` method is a recommended place for a driver setup configuration method call.

```cs
public sealed class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder)
    {
        //builder.Sessions.AddWebDriver(...);
    }

    protected override void ConfigureGlobalAtataContext(AtataContextBuilder builder)
    {
        builder.SetUpWebDriversForUse();
    }
}
```

## `LogConsumersBuilder`

`LogConsumersAtataContextBuilder` was renamed to `LogConsumersBuilder`.
`LogConsumersBuilder` methods and related extension methods were reworked to return `AtataContextBuilder` and use `configure` delegate parameter for consumer configuration.

## `EventSubscriptionsBuilder<TRootBuilder>`

`EventSubscriptionsAtataContextBuilder` class dropped inheritance of `AtataContextBuilder` and became a generic `EventSubscriptionsBuilder<TRootBuilder>` class.
`EventSubscriptions` property is now present in both `AtataContextBuilder` and `AtataSessionBuilder<TSession, TBuilder>` classes, which allows to subscribe on context or session events individually. 
`EventSubscriptionsBuilder` methods and related extension methods were reworked to return `AtataContextBuilder`/`AtataSessionBuilder`.

## Attributes builders

`AtataContext` attributes builders were reworked to return `AtataContextBuilder`.

### `AssemblyNamePatternToFindTypes`

The following methods of `AtataContextBuilder` were removed: `UseDefaultAssemblyNamePatternToFindTypes`, `UseAssemblyNamePatternToFindComponentTypes`,
`UseAssemblyNamePatternToFindAttributeTypes`, `UseAssemblyNamePatternToFindEventTypes`, `UseAssemblyNamePatternToFindEventHandlerTypes`.
Instead use a single common `AtataContext.GlobalProperties.UseAssemblyNamePatternToFindTypes` method in global fixture:

```cs
public sealed class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextGlobalProperties(AtataContextGlobalProperties globalProperties) =>
        globalProperties.UseAssemblyNamePatternToFindTypes("...regex...");
}
```

The default value of `AssemblyNamePatternToFindTypes` property of `AtataContextGlobalProperties` is `@"^(?!System($|\..+)|mscorlib$|netstandard$|Microsoft\..+|testhost$|(?i:testcentric\..+)|(?i:nunit)|(?i:xunit))"`.

## Miscellaneous

- In `AtataContext` the `Variables` property type changed to `VariableHierarchicalDictionary`.
- In `AtataContext` the `AddArtifact` methods were reworked. Introduced `AddArtifactOptions` class with properties: `string? ArtifactType`, `string? ArtifactTitle`, and new `bool PrependArtifactNumberToFileName` property. Now `AddArtifact` methods accept `in AddArtifactOptions options = default` as the last parameter instead of `string? artifactType = null, string? artifactTitle = null`.
- In `AtataContext` and `AtataContextBuilder` the `Type AssertionExceptionType` property was replaced with `IAssertionExceptionFactory AssertionExceptionFactory`. The default value is an instance of `AtataAssertionExceptionFactory`. Also in `AtataContextBuilder` the `UseAssertionExceptionType` methods are replaced with `UseAssertionExceptionFactory`.
- In `AtataContext` and `AtataContextBuilder` the `Type AggregateAssertionExceptionType` property was replaced with `IAggregateAssertionExceptionFactory AggregateAssertionExceptionFactory`. The default value is an instance of `AtataAggregateAssertionExceptionFactory`. Also in `AtataContextBuilder` the `UseAggregateAssertionExceptionType` methods are replaced with `UseAggregateAssertionExceptionFactory`.
- `IScreenshotStrategy` is replaced with `IScreenshotStrategy<in TSession>`. Custom strategy should now implement `IScreenshotStrategy<WebDriverSession>`.
- `IPageSnapshotStrategy` is replaced with `IPageSnapshotStrategy<in TSession>`. Custom strategy should now implement `IPageSnapshotStrategy<WebDriverSession>`.
- Changed screenshot and snapshot failure title from `"Failed"` to `"Failure"`.
- WebDriver-related configuration methods moved to `WebDriverSessionBuilder`/`WebSessionBuilder`.
- `"build-start"` template variable is renamed to `"run-start"`.
- `ILogManager` extension methods `public static void ExecuteSection(this ILogManager logger, string sectionMessage, Action action)` and `public static TResult ExecuteSection<TResult>(this ILogManager logger, string sectionMessage, Func<TResult> function)` were removed. Instead, an implicit cast from `string` operator is added to `LogSection`.
- In `TriggerContext` 2 properties were marked as obsolete: `Driver` and `Log`. Instead of `Driver` use `Component.Session.Driver`. Instead of `Log` use `Component.Session.Log`.
- In `PageObject<TOwner>` the `NavigationUrl` protected property becomes obsolete. Use `SetNavigationUrl(...)`, `SetNavigationUrlVariable(...)`, or `AppendNavigationUrl(...)` instead.
- In `IInitializableLogConsumer` the `AtataContext context` parameter was added to `Initialize` method.
- `LazyInitializableLogConsumer` became obsolete. Use `IInitializableLogConsumer` instead.
- Log4Net logging functionality became obsolete. It will be completely removed with the next major Atata release. Consider migrating to NLog or other.
- In `MethodInfoExtensions` remake `InvokeAsLambda` and `InvokeStaticAsLambda` methods to `CompileToLambda` and `CompileToStaticLambda`.

## Renamed types

- `AtataNavigator` -> `WebDriverSessionNavigator`
- `ScreenshotsWebDriverSessionOptions` -> `ScreenshotsWebDriverSessionBuilder`.
  Its configurational methods now return `WebDriverSessionBuilder`.
- `PageSnapshotsWebDriverSessionOptions` -> `PageSnapshotsWebDriverSessionBuilder`.
  Its configurational methods now return `WebDriverSessionBuilder`.
- `BrowserLogsBuilder` -> `BrowserLogsWebDriverSessionBuilder`.
  Its configurational methods now return `WebDriverSessionBuilder`.
- `RemoteDriverBuilder` -> `RemoteWebDriverBuilder`.
  In `RemoteWebDriverBuilder` the `IWebDriver CreateDriver(...)` protected virtual method was changed to `RemoteWebDriver CreateRemoteWebDriver(...)`.

### Renamed types where old are still available as obsolete

- `AtataContextDeInitEvent` -> `AtataContextDeInitStartedEvent`
- `PageObjectInitEvent` -> `PageObjectInitStartedEvent`
- `PageObjectDeInitEvent` -> `PageObjectDeInitCompletedEvent`
- `DriverInitEvent` -> `WebDriverInitCompletedEvent`
- `DriverDeInitEvent` -> `WebDriverDeInitStartedEvent`

## Moved/renamed members

### `AtataContext`

- `GlobalConfiguration` property becomes `BaseConfiguration`.
- `Go` property becomes obsolete. Use `GetWebDriverSession().Go` instead.
- `ObjectCreator`, `ObjectConverter`, `ObjectMapper` properties moved to `AtataContextGlobalProperties`.
- `Configure` method becomes `CreateBuilder`
- `RaiseError` method becomes `RaiseAssertionError`
- `RaiseWarning` method becomes `RaiseAssertionWarning`
- `FillTemplateString` method becomes `Variables.FillTemplateString`
- `FillPathTemplateString` method becomes `Variables.FillPathTemplateString`
- `FillUriTemplateString` method becomes `Variables.FillUriTemplateString`

### `AtataContextGlobalProperties`

- `DefaultArtifactsRootPathTemplateWithoutBuildStartFolder` property becomes `DefaultArtifactsRootPathTemplateExcludingRunStart`
- `BuildStart` property becomes `RunStart`
- `BuildStartUtc` property becomes `RunStartUtc`
- `UseDefaultArtifactsRootPathTemplateIncludingBuildStart` method becomes `UseDefaultArtifactsRootPathTemplateIncludingRunStart`

### `AtataContextBuilder`

- `AddVariable` method becomes `UseVariables`
- `AddVariables` method becomes `UseVariables`

### `BrowserLogEntry`

- `Timestamp` property becomes `UtcTimestamp`

### `LogConsumerBuilder<TLogConsumer>`

- `WithMessageNestingLevelIndent` method becomes `WithNestingLevelIndent`
- `WithMessageStartSectionPrefix` method becomes `WithSectionStartPrefix`
- `WithMessageEndSectionPrefix` method becomes `WithSectionEndPrefix`

### `LogConsumerConfiguration`

- `MessageNestingLevelIndent` property becomes `NestingLevelIndent`
- `MessageStartSectionPrefix` property becomes `SectionStartPrefix`
- `MessageEndSectionPrefix` property becomes `SectionEndPrefix`

### `IObjectVerificationProviderExtensions`

- `Match` method becomes `MatchRegex`

### `IEnumerableExtensions`

- `ToQuotedValuesListOfString` method becomes `ToQuotedValuesListOfString()` and `ToDoubleQuotedValuesListOfString`

## Feedback

Feel free to use any [contact](/contact/) channel if you have problems with migration.

---
{% include call-to-support.html %}