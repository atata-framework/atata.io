Name | Description
---- | -----------
`WithoutSectionFinish()` | Defines that the logging should not use section-like messages (not "Starting: {action}" and "Finished: {action}", but just "{action}").
`WithMinLevel(LogLevel level)` | Specifies the minimum level of the log event to write to the log.
{:.table.table-members}

For example:

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