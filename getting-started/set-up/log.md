Name | Description
---- | -----------
`UseLogConsumer(ILogConsumer consumer)` | Adds the log consumer.
`UseTraceLogging()` | Adds the `TraceLogConsumer` instance that uses `System.Diagnostics.Trace` class for logging.
`UseDebugLogging()` | Adds the `DebugLogConsumer` instance that uses `System.Diagnostics.Debug` class for logging.
`UseNUnitTestContextLogging()` | Adds the `NUnitTestContextLogConsumer` instance that uses `NUnit.Framework.TestContext` class for logging.
`UseNLogLogging(string loggerName = null)` | Adds the `NLogConsumer` instance that uses `NLog.Logger` class for logging.
{:.table.table-members}