The list of logging extension methods for `AtataContextBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;</span>
    <h3><span class="body">AddLogConsumer&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">(<span class="type">TLogConsumer</span> consumer)</span></h3>
</div>

Adds the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">ILogConsumer</span>&gt;</span>
    <h3><span class="body">AddTraceLogging()</span></h3>
</div>

Adds the `TraceLogConsumer` instance that uses `System.Diagnostics.Trace` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">ILogConsumer</span>&gt;</span>
    <h3><span class="body">AddDebugLogging()</span></h3>
</div>

Adds the `DebugLogConsumer` instance that uses `System.Diagnostics.Debug` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">ILogConsumer</span>&gt;</span>
    <h3><span class="body">AddNUnitTestContextLogging()</span></h3>
</div>

Adds the `NUnitTestContextLogConsumer` instance that uses `NUnit.Framework.TestContext` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">ILogConsumer</span>&gt;</span>
    <h3><span class="body">AddNLogLogging</span><span class="tail">(<span class="keyword">string</span> loggerName = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `NLogConsumer` instance that uses `NLog.Logger` class for logging.

#### Logging Configuration

The list of extension methods to configure `ILogConsumer`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithoutSectionFinish&lt;<span class="type">TTLogConsumer</span>&gt;()</span></h3>
</div>

Defines that the logging should not use section-like messages (not "Starting: {action}" and "Finished: {action} {time elapsed}", but just "{action}").

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithMinLevel&lt;<span class="type">TTLogConsumer</span>&gt;</span><span class="tail">(<span class="type">LogLevel</span> level)</span></h3>
</div>

Specifies the minimum level of the log event to write to the log. The default value is `Trace`.

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