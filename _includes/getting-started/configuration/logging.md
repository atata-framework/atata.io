Atata generates many log entries during execution and send them to log consumers.
The log consumers can be registered through the methods of `LogConsumers` property of `AtataContextBuilder`.

```cs
builder.LogConsumers.AddNLogFile();
```

```cs
builder.LogConsumers.AddNLogFile(x => x
    .WithSectionEnd(LogSectionEndOption.Exclude)
    .WithMinLevel(LogLevel.Info));
```

The list of log configuration methods of `LogConsumersBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Add<wbr>&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TLogConsumer</span> : <span class="type">ILogConsumer</span>, <span class="keyword">new</span>()</span>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Add<wbr>&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">(<span class="type">TLogConsumer</span> consumer, <span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TLogConsumer</span> : <span class="type">ILogConsumer</span></span>
</div>

Adds the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Add</span><span class="tail">(<span class="keyword">string</span> typeNameOrAlias, <span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds the log consumer by its type name or alias.
Predefined aliases are defined in `LogConsumerAliases` static class.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Configure<wbr>&lt;<span class="type">TLogConsumer</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">TLogConsumer</span>&gt;&gt; configure, <span class="type">ConfigurationMode</span> mode = <span class="keyword">default</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TLogConsumer</span> : <span class="type">ILogConsumer</span></span>
</div>

Configures a log consumer builder for existing `TLogConsumer` log consumer.
The `mode` (`ConfigurationMode.ConfigureOrThrow` by default)
parameter specifies the behavior of the fallback logic when the log consumer builder is not found:
- `ConfigurationMode.ConfigureOrThrow` - configures the builder or throws the `LogConsumerNotFoundException` if it is not found.
- `ConfigurationMode.ConfigureIfExists` - configures the builder only if it exists; otherwise, no action is taken.
- `ConfigurationMode.ConfigureOrAdd` - configures the builder if it exists, or adds a new builder if it does not exist.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddTrace</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">TraceLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `TraceLogConsumer` instance that uses `System.Diagnostics.Trace` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddDebug</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">DebugLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `DebugLogConsumer` instance that uses `System.Diagnostics.Debug` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddConsole</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">ConsoleLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `ConsoleLogConsumer` instance that uses `System.Console` class for logging.

#### Extension methods from Atata.NUnit library

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddNUnitTestContext</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">ConsoleLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `NUnitTestContextLogConsumer` instance that uses NUnit's `NUnit.Framework.TestContext` class for logging.

#### Extension methods from Atata.NLog library

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddNLog</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">ConsoleLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `NLogConsumer` instance that uses `NLog.Logger` class for logging.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddNLogFile</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">LogConsumerBuilder</span>&lt;<span class="type">ConsoleLogConsumer</span>&gt;&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds the `NLogFileConsumer` instance that uses `NLog.Logger` class for logging into file.

#### Logging configuration

The list of `LogConsumerBuilder<TLogConsumer>` methods to configure `ILogConsumer`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithSectionEnd</span><span class="tail">(<span class="type">LogSectionEndOption</span> logSectionEnd)</span></h3>
</div>

Sets the output option of log section end.
The default value is `LogSectionEndOption.Include`.
Other options are: `LogSectionEndOption.IncludeForBlocks` and `LogSectionEndOption.Exclude`.

If section end is excluded, instead of
"Starting: {action}" and "Finished: {action} {time elapsed}", just "{action}" is outputted.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithMinLevel</span><span class="tail">(<span class="type">LogLevel</span> level)</span></h3>
</div>

Specifies the minimum level of the log event to write to the log. The default value is `Trace`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithNestingLevelIndent</span><span class="tail">(<span class="keyword">string</span> messageNestingLevelIndent)</span></h3>
</div>

Sets the nesting level indent.
The default value is `"- "`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithSectionStartPrefix</span><span class="tail">(<span class="keyword">string</span> sectionStartPrefix)</span></h3>
</div>

Sets the prefix of section start.
The default value is `"> "`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithSectionEndPrefix</span><span class="tail">(<span class="keyword">string</span> sectionEndPrefix)</span></h3>
</div>

Sets the prefix of section end.
The default value is `"< "`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithEmbedSessionLog</span><span class="tail">(<span class="keyword">bool</span> enable)</span></h3>
</div>

Sets a value indicating whether session log should be embedded
in `AtataContext` log hierarchy or it should follow its own hierarchy.
The default value is `true`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithEmbedSourceLog</span><span class="tail">(<span class="keyword">bool</span> enable)</span></h3>
</div>

Sets a value indicating whether source log should be embedded
in `AtataContext` log hierarchy or it should follow its own hierarchy.
The default value is `false`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithSkipCondition</span><span class="tail">(<span class="type">TestResultStatusCondition</span> skipCondition)</span></h3>
</div>

Sets the condition under which logging should be skipped depending on a test result status.
The default value is `TestResultStatusCondition.None`.
When set to a value other than `TestResultStatusCondition.None`, log entries are postponed
until the end of the test item, when test result status is resolved.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">WithTargetScopes</span><span class="tail">(<span class="type">AtataContextScopes</span> scopes)</span></h3>
</div>

Sets the target scopes for which to apply the log consumer.
The default value is `AtataContextScopes.All`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">LogConsumerBuilder</span>&lt;<span class="type">TTLogConsumer</span>&gt;</span>
    <h3><span class="body">With</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TLogConsumer</span>&gt; configureConsumer)</span></h3>
</div>

Configures a log consumer of the builder.