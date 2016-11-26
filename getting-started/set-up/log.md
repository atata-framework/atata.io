Name | Description
---- | -----------
`AddLogConsumer(ILogConsumer consumer)` | Adds the log consumer.
`AddTraceLogging()` | Adds the `TraceLogConsumer` instance that uses `System.Diagnostics.Trace` class for logging.
`AddDebugLogging()` | Adds the `DebugLogConsumer` instance that uses `System.Diagnostics.Debug` class for logging.
`AddNUnitTestContextLogging()` | Adds the `NUnitTestContextLogConsumer` instance that uses `NUnit.Framework.TestContext` class for logging.
`AddNLogLogging(string loggerName = null)` | Adds the `NLogConsumer` instance that uses `NLog.Logger` class for logging.
{:.table.table-members}