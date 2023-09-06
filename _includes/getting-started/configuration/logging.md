The list of logging methods of `AtataContextBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;</span>
    <h3><span class="body">AddLogConsumer<wbr>&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">(<span class="type">TLogConsumer</span> consumer)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TLogConsumer</span> : <span class="type">ILogConsumer</span></span>
</div>

Adds the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">ILogConsumer</span>&gt;</span>
    <h3><span class="body">AddLogConsumer</span><span class="tail">(<span class="keyword">string</span> typeNameOrAlias)</span></h3>
</div>

Adds the log consumer.
`typeNameOrAlias` can accept full type name, custom `ILogConsumer` alias (registered via `LogConsumerAliases.Register` method) or one of the predefined aliases:
"trace", "debug", "console", "nunit" and "nlog".

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">TraceLogConsumer</span>&gt;</span>
    <h3><span class="body">AddTraceLogging()</span></h3>
</div>

Adds the `TraceLogConsumer` instance that uses `System.Diagnostics.Trace` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">DebugLogConsumer</span>&gt;</span>
    <h3><span class="body">AddDebugLogging()</span></h3>
</div>

Adds the `DebugLogConsumer` instance that uses `System.Diagnostics.Debug` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">ConsoleLogConsumer</span>&gt;</span>
    <h3><span class="body">AddConsoleLogging()</span></h3>
</div>

Adds the `ConsoleLogConsumer` instance that uses `System.Console` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">NUnitTestContextLogConsumer</span>&gt;</span>
    <h3><span class="body">AddNUnitTestContextLogging()</span></h3>
</div>

Adds the `NUnitTestContextLogConsumer` instance that uses `NUnit.Framework.TestContext` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">NLogConsumer</span>&gt;</span>
    <h3><span class="body">AddNLogLogging</span><span class="tail">(<span class="keyword">string</span> loggerName = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `NLogConsumer` instance that uses `NLog.Logger` class for logging.

#### Logging Configuration

The list of extension methods to configure `ILogConsumer`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithoutSectionFinish<wbr>&lt;<span class="type">TTLogConsumer</span>&gt;()</span></h3>
</div>

Defines that the logging should not use section-like pair messages (not "Starting: {action}" and "Finished: {action} {time elapsed}", but just "{action}").

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithMinLevel<wbr>&lt;<span class="type">TTLogConsumer</span>&gt;</span><span class="tail">(<span class="type">LogLevel</span> level)</span></h3>
</div>

Specifies the minimum level of the log event to write to the log. The default value is `Trace`.

#### Usage

```cs
AtataContext.Configure()
    .UseChrome()
    .LogConsumers.AddNUnitTestContext()
        .WithoutSectionFinish()
        .WithMinLevel(LogLevel.Info)
    .LogConsumers.AddDebug()
        .WithMinLevel(LogLevel.Debug)
    .Build();
```