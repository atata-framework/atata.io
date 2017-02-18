The list of logging extension methods for `AtataContextBuilder`:

Name | Description
---- | -----------
`AddLogConsumer(ILogConsumer consumer)` | Adds the log consumer.
`AddTraceLogging()` | Adds the `TraceLogConsumer` instance that uses `System.Diagnostics.Trace` class for logging.
`AddDebugLogging()` | Adds the `DebugLogConsumer` instance that uses `System.Diagnostics.Debug` class for logging.
`AddNUnitTestContextLogging()` | Adds the `NUnitTestContextLogConsumer` instance that uses `NUnit.Framework.TestContext` class for logging.
`AddNLogLogging(string loggerName = null)` | Adds the `NLogConsumer` instance that uses `NLog.Logger` class for logging.
{:.table.table-members}

#### Logging Configuration

The list of extension methods to configure `ILogConsumer`:

Name | Description
---- | -----------
`WithoutSectionFinish()` | Defines that the logging should not use section-like messages (not "Starting: {action}" and "Finished: {action} {time elapsed}", but just "{action}").
`WithMinLevel(LogLevel level)` | Specifies the minimum level of the log event to write to the log. The default value is `Trace`.
{:.table.table-members}

#### Usage

```cs
AtataContext.Build().
    UseChrome().
    UseNUnitTestContextLogging().
        WithoutSectionFinish().
        WithMinLevel(LogLevel.Info).
    UseDebugLogging().
        WithMinLevel(LogLevel.Debug).
    SetUp();
```