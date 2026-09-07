Currently this functionality is available only for Chrome and Edge, both local and remote.
{:.warning}

The feature brings a monitoring of browser logs, such as warnings and errors, which happen during a test execution.
Browser logs can be transferred to Atata logs and can raise warnings.

In order to enable browser logs monitoring, configure `AtataContext` in the following way:

```cs
builder.Sessions.AddWebDriver(x => x
    //...
    .BrowserLogs.UseLog()
    .BrowserLogs.UseMinLevelOfWarning(LogLevel.Warn));
```

`UseLog(bool enable = true)` - sets a value indicating whether the browser log should be transferred to Atata logging system. The default value is `false`.

`UseMinLevelOfWarning(LogLevel? minLevel)` - sets the minimum log level on which to raise warnings. The default value is `null`, meaning that warning is disabled. For example, setting the `LogLevel.Warn` value will mean to warn on browser log entries with `LogLevel.Warn` level and higher, which are `LogLevel.Error` and `LogLevel.Fatal`.

A log entry in Atata log can look like:

```
00:00:04.059 p0oG TRACE {Browser} http://localhost:54321/browserlogs 17:10 Uncaught Error: Some thrown error.
```

A warning looks this way:

```
Unexpected browser log error on "<ordinary>" page:
http://localhost:54321/browserlogs 17:10 Uncaught Error: Some thrown error.
```