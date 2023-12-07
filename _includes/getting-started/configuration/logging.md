Atata generates many log entries during execution and send them to log consumers.
The log consumers can be registered through the methods of `LogConsumers` property of `AtataContextBuilder`.

The list of log consumers methods of `LogConsumersAtataContextBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;</span>
    <h3><span class="body">Add<wbr>&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TLogConsumer</span> : <span class="type">ILogConsumer</span>, <span class="keyword">new</span>()</span>
</div>

Adds the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;</span>
    <h3><span class="body">Add<wbr>&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">(<span class="type">TLogConsumer</span> consumer)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TLogConsumer</span> : <span class="type">ILogConsumer</span></span>
</div>

Adds the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">ILogConsumer</span>&gt;</span>
    <h3><span class="body">Add</span><span class="tail">(<span class="keyword">string</span> typeNameOrAlias)</span></h3>
</div>

Adds the log consumer by its type name or alias.
Predefined aliases are defined in `LogConsumerAliases` static class.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;</span>
    <h3><span class="body">Configure<wbr>&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TLogConsumer</span> : <span class="type">ILogConsumer</span>, <span class="keyword">new</span>()</span>
</div>

Returns a log consumer builder for existing `TLogConsumer` log consumer or adds a new one.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TraceLogConsumer</span>&gt;</span>
    <h3><span class="body">AddTrace()</span></h3>
</div>

Adds the `TraceLogConsumer` instance that uses `System.Diagnostics.Trace` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">DebugLogConsumer</span>&gt;</span>
    <h3><span class="body">AddDebug()</span></h3>
</div>

Adds the `DebugLogConsumer` instance that uses `System.Diagnostics.Debug` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">ConsoleLogConsumer</span>&gt;</span>
    <h3><span class="body">AddConsole()</span></h3>
</div>

Adds the `ConsoleLogConsumer` instance that uses `System.Console` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">NUnitTestContextLogConsumer</span>&gt;</span>
    <h3><span class="body">AddNUnitTestContext()</span></h3>
</div>

Adds the `NUnitTestContextLogConsumer` instance that uses `NUnit.Framework.TestContext` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">NLogConsumer</span>&gt;</span>
    <h3><span class="body">AddNLog</span><span class="tail">(<span class="keyword">string</span> loggerName = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `NLogConsumer` instance that uses `NLog.Logger` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">NLogFileConsumer</span>&gt;</span>
    <h3><span class="body">AddNLogFile</span><span class="tail">()</span></h3>
</div>

Adds the `NLogFileConsumer` instance that uses `NLog.Logger` class for logging into file.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">Log4NetConsumer</span>&gt;</span>
    <h3><span class="body">AddLog4Net</span><span class="tail">(<span class="keyword">string</span> loggerName = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `Log4NetConsumer` instance that uses `log4net.ILog` interface for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">Log4NetConsumer</span>&gt;</span>
    <h3><span class="body">AddLog4Net</span><span class="tail">(<span class="keyword">string</span> repositoryName, <span class="keyword">string</span> loggerName = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `Log4NetConsumer` instance that uses `log4net.ILog` interface for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">Log4NetConsumer</span>&gt;</span>
    <h3><span class="body">AddLog4Net</span><span class="tail">(<span class="type">Assembly</span> repositoryAssembly, <span class="keyword">string</span> loggerName = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `Log4NetConsumer` instance that uses `log4net.ILog` interface for logging.

#### Logging Configuration

The list of `LogConsumerAtataContextBuilder<TLogConsumer>` methods to configure `ILogConsumer`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithSectionEnd</span><span class="tail">(<span class="type">LogSectionEndOption</span> logSectionEnd)</span></h3>
</div>

Sets the output option of log section end.
The default value is `LogSectionEndOption.Include`.
Other options are: `LogSectionEndOption.IncludeForBlocks` and `LogSectionEndOption.Exclude`.

If section end is excluded, instead of
"Starting: {action}" and "Finished: {action} {time elapsed}", just "{action}" is outputted.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithMinLevel</span><span class="tail">(<span class="type">LogLevel</span> level)</span></h3>
</div>

Specifies the minimum level of the log event to write to the log. The default value is `Trace`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithMessageNestingLevelIndent</span><span class="tail">(<span class="keyword">string</span> messageNestingLevelIndent)</span></h3>
</div>

Sets the nesting level indent of the log message.
The default value is `"- "`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithMessageStartSectionPrefix</span><span class="tail">(<span class="keyword">string</span> messageStartSectionPrefix)</span></h3>
</div>

Sets the start section prefix of the log message.
The default value is `"> "`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerAtataContextBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithMessageEndSectionPrefix</span><span class="tail">(<span class="keyword">string</span> messageEndSectionPrefix)</span></h3>
</div>

Sets the end section prefix of the log message.
The default value is `"< "`.

#### Usage

```cs
AtataContext.GlobalConfiguration
    .LogConsumers.AddNLogFile()
    .LogConsumers.AddNUnitTestContext()
        .WithSectionEnd(LogSectionEndOption.Exclude)
        .WithMinLevel(LogLevel.Info);
```