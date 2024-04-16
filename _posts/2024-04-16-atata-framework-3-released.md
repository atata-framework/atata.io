---
title: "Atata Framework 3 is Released"
description: "Atata Framework 3 is released with a set of improvements and removal of deprecated functionality."
image: "atata-3.0.0-released.png"
release_version: "3.0.0"
---

Atata Framework 3
is released with a set of improvements and removal of deprecated functionality.
{:.lead}

<!--more-->

## Migrating to Atata 3

**There was a lot of breaking changes made in Atata 3.
Please check out information on all breaking changes and migration process in the [Upgrade to Atata 3](/upgrade/to-atata-3/) guide,
which was created specifically to help with upgrade.**
{:.warning}

## New `AtataContext.GlobalProperties`

Some of the `AtataContext` properties and `AtataContextBuilder` methods were moved to the new `AtataContext.GlobalProperties` static property.
Global properties can be set once before any `AtataContext` creation (in global setup method),
and those properties spread all over the `AtataContext`s.

### Members of `AtataContextGlobalProperties`

```cs
public AtataContextModeOfCurrent ModeOfCurrent { get; set; }

public DateTime BuildStartUtc { get; }

public DateTime BuildStart { get; }

public TimeZoneInfo TimeZone { get; set; }

public string ArtifactsRootPathTemplate { get; set; }

public DirectorySubject ArtifactsRoot { get; }

public string ArtifactsRootPath { get; }

public AtataContextGlobalProperties UseDefaultArtifactsRootPathTemplateIncludingBuildStart(bool include);

public AtataContextGlobalProperties UseArtifactsRootPathTemplate(string directoryPathTemplate);

public AtataContextGlobalProperties UseUtcTimeZone();

public AtataContextGlobalProperties UseTimeZone(string timeZoneId);

public AtataContextGlobalProperties UseTimeZone(TimeZoneInfo timeZone);

public AtataContextGlobalProperties UseModeOfCurrent(AtataContextModeOfCurrent mode);
```

## `ArtifactsRoot` extracted from `Artifacts`

Before the v3, `Artifacts` path was an absolute path to `AtataContext` artifacts.
Now `Artifacts` path is split into 2 parts, basically it becomes a path relative to Artifacts Root.

Default `ArtifactsRoot` path is `"{basedir}/artifacts/{build-start:yyyyMMddTHHmmss}"`.\
Default `Artifacts` path is `"{test-suite-name-sanitized:/*}{test-name-sanitized:/*}"`.

`ArtifactsRoot` properties and methods are located in `AtataContext.GlobalProperties`.

## Logging changes

### Changed default log date/time format by cutting ten thousandths of a second

Updated date/time format in `TextOutputLogConsumer`, `NLogFileConsumer` and `LoggingBrowserLogHandler`.

`2024-02-07 14:03:46.1234`\
->\
`2024-02-07 14:03:46.123`

### Removed navigation trace log entries

The navigation trace logs, basically, duplicated the wrapping informational logs.

```
2024-02-17 20:50:46.792  INFO > Go to "Test" page by URL http://localhost:50549
2024-02-17 20:50:46.793 TRACE - > Navigate to URL http://localhost:50549/
2024-02-17 20:50:46.954 TRACE - < Navigate to URL http://localhost:50549/ (0.160s)
2024-02-17 20:50:46.961  INFO < Go to "Test" page by URL http://localhost:50549 (0.169s)
```

->

```
2024-02-17 20:50:46.792  INFO > Go to "Test" page by URL http://localhost:50549
2024-02-17 20:50:46.961  INFO < Go to "Test" page by URL http://localhost:50549 (0.169s)
```

### Changed log level of "Starting" and "Finished" test log messages from `Info` to `Debug`

```
2024-04-15 21:01:07.321  INFO Starting test: AtataSampleApp.UITests.SignInTests.SignIn
2024-04-15 21:01:07.466 TRACE > Initialize AtataContext
...
2024-04-15 21:01:09.368  INFO Finished test
      Total time: 2.109s
...
```

->

```
2024-04-15 21:01:07.321 DEBUG Starting test: AtataSampleApp.UITests.SignInTests.SignIn
2024-04-15 21:01:07.466 TRACE > Initialize AtataContext
...
2024-04-15 21:01:09.368 DEBUG Finished test
      Total time: 2.109s
...
```

## Atata 3 changelog

### Breaking changes

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

### New features

- {% include issue.md id=826 type='mn' %} Add `ArtifactsPath` property to `AtataContext`
- {% include issue.md id=830 type='mn' %} `TableHeaderList<TItem, TOwner>` with string indexer

### Changes and enhancements

- {% include issue.md id=816 type='mn' %} Change `additionalVariables` parameter type in `AtataContext.Fill*TemplateString` methods
- {% include issue.md id=818 type='mn' %} Update default page snapshot file name template
- {% include issue.md id=819 type='mn' %} Change `TakePageSnapshotLogSection` log level from `Info` to `Trace`
- {% include issue.md id=820 type='mn' %} Change log level of "Starting" and "Finished" test log messages from `Info` to `Debug`
- {% include issue.md id=821 type='mn' %} Change default log date/time format by cutting ten thousandths of a second
- {% include issue.md id=831 type='mn' %} Remove navigation trace log entries
- {% include issue.md id=832 type='mn' %} Use Selenium.WebDriver package v4.19.0

## Atata.Configuration.Json 3 changelog

### Breaking changes

- {% include issue.md repo='cj' id=111 type='mj' %} Use Atata package v3.0.0
- {% include issue.md repo='cj' id=112 type='mj' %} Remove screenshot consumers configuration
- {% include issue.md repo='cj' id=113 type='mj' %} Replace `"artifactsPath"` configuration property with `"artifactsPathTemplate"`
- {% include issue.md repo='cj' id=114 type='mj' %} Remove `"timeZone"` configuration property
- {% include issue.md repo='cj' id=115 type='mj' %} Replace file path configuration of `"nlog-file"` log consumer with single `"fileNameTemplate"` configuration property
- {% include issue.md repo='cj' id=116 type='mn' %} Remove obsolete configuration properties: `"logNUnitError"`, `"takeScreenshotOnNUnitError"`, `"takePageSnapshotOnNUnitError"`, `"onCleanUpAddArtifactsToNUnitTestContext"`, `"onCleanUpAddDirectoryFilesToNUnitTestContext"`
- {% include issue.md repo='cj' id=117 type='mn' %} Remove obsolete configuration properties: `"retryTimeout"` and `"retryInterval"`
- {% include issue.md repo='cj' id=118 type='mn' %} Remove obsolete log consumer configuration property `"sectionFinish"`

## Other Atata packages releases

- [Atata.WebDriverExtras 3.0.0](https://github.com/atata-framework/atata-webdriverextras/releases/tag/v3.0.0)
<!--- [Atata.HtmlValidation 3.0.0](https://github.com/atata-framework/atata-htmlvalidation/releases/tag/v3.0.0)-->
- [Atata.Bootstrap 3.0.0](https://github.com/atata-framework/atata-bootstrap/releases/tag/v3.0.0)
- [Atata.KendoUI 3.0.0](https://github.com/atata-framework/atata-kendoui/releases/tag/v3.0.0)
- [Atata.Templates 3.0.0](https://github.com/atata-framework/atata-templates/releases/tag/v3.0.0)


{% include download-package-link.html name="Atata" version=page.release_version %}