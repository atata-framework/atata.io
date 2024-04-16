---
layout: article
title: Upgrade to Atata 3
description: How to upgrade to Atata 3 considering breaking changes.
---

{{ page.description }}
{:.lead}

## First steps

The first migration step is to ensure or upgrade your Atata to v2.14.1.
Then fix all Atata warnings telling that some class/member is obsolete, as those items should be removed in v3.

You can also take a look at [Atata Framework 3 is Released](/blog/2024/04/16/atata-framework-3-released/) blog post to find out what's new in v3.

## New `AtataContext.GlobalProperties`

Some of the `AtataContext` properties and `AtataContextBuilder` methods were moved to the new `AtataContext.GlobalProperties` static property.
Global properties can be set once before any `AtataContext` creation (in global setup method),
and those properties spread all over the `AtataContext`s.

Check the list of related issues for details:

- {% include issue.md id=822 %} Extract Artifacts Root path out of Artifacts path
- {% include issue.md id=823 %} Move `TimeZone` instance property of `AtataContext` to `AtataContext.GlobalProperties`
- {% include issue.md id=824 %} Move `BuildStart` and `BuildStartUtc` static properties of `AtataContext` to `AtataContext.GlobalProperties`
- {% include issue.md id=825 %} Move `ModeOfCurrent` static property of `AtataContext` to `AtataContext.GlobalProperties`

## Screenshot consumers functionality is removed

Screenshots functionality is simplified and now its configuration is similar to the configuration of page snapshots. Basically, you no longer need to call `ScreenshotConsumers.AddFile()` to enable screenshots saving, it is enabled by default. To change the default screenshot file path template use `Screenshots.UseFileNameTemplate("...")`.

### Removed

- `AtataContextBuilder`'s `ScreenshotConsumers` property is removed together with all the other code related to it.
- The same is valid for JSON configuration, "screenshotConsumers" JSON property is gone. Use `"screenshots"`/`"fileNameTemplate"` JSON property to configure screenshot file path.
- `IScreenshotConsumer` and implementation classes are removed.

## Replaced file path configuration of `NLogFileConsumer` with single `WithFileNameTemplate` method

Added `NLogFileConsumer` property:

```cs
/// <summary>
/// Gets or sets the file name template.
/// The default value is <c>"Trace.log"</c>.
/// </summary>
public string FileNameTemplate { get; set; }
```

Removed `NLogFileConsumer` properties:

- `DirectoryPathBuilder`
- `FileNameBuilder`
- `FilePathBuilder`

Added `LogConsumerAtataContextBuilder<NLogFileConsumer>` configuration extension method:

```cs
public static LogConsumerAtataContextBuilder<NLogFileConsumer> WithFileNameTemplate(
    this LogConsumerAtataContextBuilder<NLogFileConsumer> builder,
    string fileNameTemplate)
```

Removed `LogConsumerAtataContextBuilder<NLogFileConsumer>` configuration extension methods:

- `WithArtifactsDirectoryPath`
- `WithDirectoryPath`
- `WithFilePath`
- `WithFileName`

## `[FindByAlt]` attribute is set as default for `Image<TOwner>` control

Sets the default search strategy by `alt` attribute.
Before, by default `[FindFirst]` was applied.

## Update sanitization approach of `TestInfo` properties `NameSanitized` and `SuiteNameSanitized`

Before v3, invalid characters were just removed from a string.
Now they are replaced with underscore symbol, similarly to sanitization of screenshot and snapshot file names.
This mainly affects the test folder names in Artifacts directory path.

For example:\
`Test("2/1")` as `Name` becomes\
`Test(_2_1_)` as `NameSanitized`

## All breaking changes

- {% include issue.md id=808 type='mn' %} Remove obsolete types and members related to `UIComponent`
- {% include issue.md id=809 type='mn' %} Remove obsolete logging/reporting members
- {% include issue.md id=810 type='mn' %} Remove obsolete event handler types
- {% include issue.md id=811 type='mn' %} Remove obsolete `AtataContextBuilder` methods
- {% include issue.md id=812 type='mn' %} Remove obsolete `AtataContext` members
- {% include issue.md id=813 type='mn' %} Remove obsolete attributes
- {% include issue.md id=814 type='mn' %} Remove obsolete event types
- {% include issue.md id=815 type='mn' %} Remove other obsolete type members
- {% include issue.md id=817 type='mj' %} Remove screenshot consumers functionality
- {% include issue.md id=822 type='mj' %} Extract Artifacts Root path out of Artifacts path
- {% include issue.md id=823 type='mj' %} Move `TimeZone` instance property of `AtataContext` to `AtataContext.GlobalProperties`
- {% include issue.md id=824 type='mn' %} Move `BuildStart` and `BuildStartUtc` static properties of `AtataContext` to `AtataContext.GlobalProperties`
- {% include issue.md id=825 type='mn' %} Move `ModeOfCurrent` static property of `AtataContext` to `AtataContext.GlobalProperties`
- {% include issue.md id=827 type='mn' %} Replace file path configuration of `NLogFileConsumer` with single `WithFileNameTemplate` method
- {% include issue.md id=828 type='mn' %} Update sanitization approach of `TestInfo` properties `NameSanitized` and `SuiteNameSanitized`
- {% include issue.md id=829 type='mn' %} Apply `[FindByAlt]` attribute to `Image<TOwner>` control
- {% include issue.md id=833 type='mn' %} Use Atata.WebDriverExtras package v3.0.0

## Feedback

Feel free to use any [contact](/contact/) channel if you have problems with migration.