---
title: "What's coming to Atata 4"
description: "..."
image: "atata-4.png"
---

Introducing upcoming Atata 4 key features and improvements.
{:.lead}

<!--more-->

The primary change involves a significant update to `AtataContext`,
redefining its concept and configuration by introducing the new `WebDriverSession` and the concept of sessions,
which are now separated from `AtataContext`.

## AtataContext

Since v4, `AtataContext` can be bound to the current test, test suite, fixture, namespace, or global scope.

It is possible to have a hierarchy of `AtataContext` instances.
The `ParentContext` and `ChildContexts` properties have been added to `AtataContext` for hierarchical navigation.
The `AtataContext.Global` static property represents the root of the hierarchy.

All WebDriver functionality is moving out of `AtataContext`.
For backward compatibility and smoother migration, the old `AtataContext` properties (like `Driver`)
and methods (like `TakeScreenshot`) remain marked as obsolete and will be removed in v5.
The Atata v5 library itself will be stripped of WebDriver functionality,
which will be extracted into a separate package, likely named Atata.WebDriver.
With v5, Atata will evolve into a universal framework, no longer tightly coupled with WebDriver/UI testing.
Additional modules, such as those for HTTP/REST testing, are planned for future releases.

## Integration with test frameworks

There will be separate NuGet packages to simplify integration of Atata with test frameworks:
Atata.NUnit, Atata.Xunit, Atata.XUnit3, Atata.MSTest, and Atata.Reqnroll.NUnit.
These libraries provide base classes like `AtataTestSuite` and `AtataGlobalFixture`.
However, these libraries are optional, and you can configure and use `AtataContext` as needed.

## Sessions

The functionality related to WebDriver has been extracted into `WebDriverSession`, `WebDriverSessionBuilder`, and other related classes.
It is currently still part of the Atata library.

`AtataSession` is a new concept.
`WebDriverSession` is the first implementation of `AtataSession`.
Each `AtataContext` can have any number of sessions it needs, either starting them up during context build or later during execution.
Configure them as needed.
Typically, a session's lifecycle aligns with the context's lifecycle, but there are options to adjust this behavior, as detailed below.

### Session borrowing

You can configure a single session at the test suite level and share it across all child tests,
effectively reusing the same session.
For UI testing, this means a single browser instance will be utilized for all tests in the suite.
However, this approach has a key limitation: tests within such a suite must not run in parallel.

### Session pool

A session pool allows you to manage reusable `AtataSession` instances efficiently.
When a context ends, the session is returned to the pool, making it available for reuse by other contexts.
The pool's initial and maximum capacity are fully configurable.
You can define multiple pools, even for the same session type, by assigning unique names to each pool.
Typically, pools are configured at the global `AtataContext` level for optimal management.

## State

`public StateHierarchicalDictionary State { get; }` property has been added to both `AtataContext` and `AtataSession`.
This property serves as a hierarchical object dictionary, allowing you to store objects at a higher level (e.g., global) and retrieve them at a lower level (e.g., test).
This feature is particularly useful for managing complex test scenarios.

```cs
AtataContext.Global!.State["string key"] = "string value";
AtataContext.Global!.State.Set(new SomeObject(...));
//...
string stringValue = Context.State.Get<string>("string key");
SomeObject someObject = Context.State.Get<SomeObject>();
```

## Page objects

There were no major changes related to UI components.
There might be some minor changes, but breaking changes are not expected in this part.

## Configuration

The configuration was reworked and changed significantly.
Below is an example of `AtataContext` configuration in a global fixture:

```cs
[SetUpFixture]
public class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextGlobalProperties(AtataContextGlobalProperties globalProperties) =>
        globalProperties.UseRootNamespaceOf<GlobalFixture>();

    protected override void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder) =>
        builder
            .UseCulture("en-US")
            .Sessions.AddWebDriver(x => x
                .UseStartScopes(AtataContextScopes.Test)
                .UseBaseUrl("https://demo.atata.io/")
                .UseChrome(x => x
                    .WithArguments("headless=new", "window-size=1024,768", "disable-search-engine-choice-screen")))
            .LogConsumers.AddNLogFile();

    protected override void ConfigureGlobalAtataContext(AtataContextBuilder builder) =>
        builder.EventSubscriptions.Add(SetUpWebDriversForUseEventHandler.Instance);
}
```

## JSON configuration

Atata.Configuration.Json package will not be upgraded to v4 and will continue to support only Atata v3.
The Atata JSON configuration will be deprecated.
With all the new Atata changes and modularity, it is challenging to maintain JSON configuration compatibility.
I hope this will not pose a significant issue for most users.
JSON configuration can be migrated to the built-in runtime configuration with the help of Microsoft.Extensions.Configuration,
using environment variables, test parameters, or custom configuration files.
A documentation page with an example of the JSON configuration migration process will be provided.

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

Here is how the Artifacts file structure looks in v4 for NUnit considering `AtataContext` is used at all levels (global, namespace, test suite, test):

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

Logging was also reworked.
The default timestamp format has been changed.
Session ID is written by default to the log between timestamp and log level.
Category and external source properties have been added to log entry.

### Log timestamp

v3: `2025-04-16 12:34:06.466` - the current local timestamp\
v4: `00:00:00.001` - the time elapsed since the start of the corresponding `AtataContext`.

### Category

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

### External source

Use `ForExternalSource` method of `ILogManager` to log messages with a specific external source.

```cs
Context.Log.ForExternalSource("Some source").Debug("Some message");
```
->

```
00:00:00.001 hDrP DEBUG <Some source> Some message
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

## NLog

NLog-related functionality is extracted from Atata package to a separate Atata.NLog package.

## ExtentReports

Integration with ExtentReports is now streamlined via the new Atata.ExtentReports package.
Previously, you needed to follow the [Reporting to ExtentReports](https://atata.io/tutorials/reporting-to-extentreports/) tutorial.
With v4 you will be able to configure ExtentReports with a single `UseExtentReports()` method call on the base `AtataContextBuilder`.

## C# nullable reference types

Starting with v4, Atata is fully compatible with C# nullable reference types.

## Misc

All types and members marked as obsolete before v4 have been removed, as is customary with major Atata releases.
Before upgrading, ensure all obsolete Atata warnings in your code are resolved.

## P.S.

Any feedback is welcome.
[Contact me](/contact/), if you have any questions or suggestions.
