Atata provides a built-in logging system designed to capture structured test execution details, including component interactions, assertions, custom debug messages, etc.

The logging subsystem is managed primarily via `AtataContext` and configured through builders.

#### Log levels

Atata supports standard severity levels:

- `Trace`
- `Debug`
- `Info`
- `Warn`
- `Error`
- `Fatal`

#### Configuration

Log consumers are added during the `AtataContextBuilder` configuration phase.
The log consumers can be registered through the methods of `LogConsumers` property of `AtataContextBuilder`.

```cs
builder.LogConsumers.AddNLogFile();
```

```cs
builder.LogConsumers.AddNLogFile(x => x
    .WithSectionEnd(LogSectionEndOption.Exclude)
    .WithMinLevel(LogLevel.Info));
```

#### Writing custom log messages

Atata exposes logging methods directly through the public `Log` property of `AtataContext` or `AtataSession`;
or the protected `Log` property of `UIComponent`.

```cs
Context.Log.Debug("...");
Session.Log.Info("...");
```

In UI tests, you can also use the `Report` property of `PageObject<TOwner>`.

```cs
Go.To<SomePageObject>()
    .Report.Info("...")
    .Report.Step(
        "Some step",
        x => x.DoSomeAction());
```

#### Log sections

Atata supports nested log sections - hierarchical log blocks.

```cs
Context.Log.ExecuteSection(
    new LogSection("Set up test data"), 
    () =>
    {
        // Actions executed inside this block are nested in output logs.
        // ...
    });
```

#### Log categories

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

#### Log sources

Use `ForSource` method of `ILogManager` to log messages with a specific external source.

```cs
Context.Log.ForSource("Some source").Debug("Some message");
```
->

```
00:00:00.001 hDrP DEBUG {Some source} Some message
```

For example, browser logs are reported with "Browser" external source:

```
00:00:03.163 fj9J DEBUG {Browser} http://localhost:50549/browserlogs 14:12 "console debug log entry"
00:00:03.164 fj9J ERROR {Browser} http://localhost:50549/browserlogs 17:12 "console error log entry"
```

For large external logs, it might be useful to target external source logs to a separate log file, which is possible to do with NLog.