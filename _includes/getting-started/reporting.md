Reporting in Atata Framework consists of logging and artifact files.
The testing artifacts can be: log files, screenshots, page snapshots, downloaded files, etc.
All artifact files can be placed to the `AtataContext.Artifacts` directory.
By default, as it is recommended to be, `AtataContext.Artifacts` directory is unique per test.

The default Artifacts path follows the template:\
`{working_directory}\artifacts\{tests_run_timestamp}\{namespace_subpath}\{test_suite_name}\{test_name}"`\
For example:\
`{project_directory}\bin\Debug\net10.0\artifacts\20260512T112506\SomeFeature\SomeTests\Test1`

Atata by itself writes a lot of log entries during execution,
but custom log entries and artifact files can be reported as well.

There is also [Reporting to ExtentReports](/tutorials/reporting-to-extentreports/) tutorial,
which describes how to configure Atata reporting to ExtentReports.
{:.info}

### `IReport<TOwner>` interface

The main interface for reporting is `IReport<out TOwner>`.
An instance of `IReport<TOwner>` can be got by `Report` property of either `AtataContext`, `AtataSession`, or `PageObject<TOwner>`.

```cs
AtataContext.ResolveCurrent().Report.Info("Hello world!");

Go.To<SomePage>()
    .Report.Step("Doing some step", x => x
        .SomeInput.Type("some text")
        .SomeButton.Click())
    .Report.Screenshot();
```

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Trace</span><span class="tail">(<span class="keyword">string</span> message)</span></h3>
</div>

Writes a trace log message.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Debug</span><span class="tail">(<span class="keyword">string</span> message)</span></h3>
</div>

Writes a debug log message.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Info</span><span class="tail">(<span class="keyword">string</span> message)</span></h3>
</div>

Writes an informational log message.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Warn</span><span class="tail">(<span class="type">Exception</span> exception)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Warn</span><span class="tail">(<span class="keyword">string</span> message)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Warn</span><span class="tail">(<span class="type">Exception</span> exception, <span class="keyword">string</span> message)</span></h3>
</div>

Writes a warning log message.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Error</span><span class="tail">(<span class="type">Exception</span> exception)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Error</span><span class="tail">(<span class="keyword">string</span> message)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Error</span><span class="tail">(<span class="type">Exception</span> exception, <span class="keyword">string</span> message)</span></h3>
</div>

Writes an error log message.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Fatal</span><span class="tail">(<span class="type">Exception</span> exception)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Fatal</span><span class="tail">(<span class="keyword">string</span> message)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Fatal</span><span class="tail">(<span class="type">Exception</span> exception, <span class="keyword">string</span> message)</span></h3>
</div>

Writes a critical log message.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Setup</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Action</span>&lt;<span class="type">TOwner</span>&gt; action)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Setup&lt;<span class="type">TResult</span>&gt;</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Func</span>&lt;<span class="type">TOwner</span>, <span class="type">TResult</span>&gt; function)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Task</span></span>
    <h3><span class="body">SetupAsync</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Func</span>&lt;<span class="type">TOwner</span>, <span class="type">Task</span>&gt; action)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Task</span>&lt;<span class="type">TResult</span>&gt;</span>
    <h3><span class="body">SetupAsync&lt;<span class="type">TResult</span>&gt;</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Func</span>&lt;<span class="type">TOwner</span>, <span class="type">Task</span>&lt;<span class="type">TResult</span>&gt;&gt; function)</span></h3>
</div>

Executes the specified action/function and represents it in a log as a setup section with the specified message.
The setup action time is not counted as a "Test body" execution time, but counted as "Setup" time.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Step</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Action</span>&lt;<span class="type">TOwner</span>&gt; action)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Step&lt;<span class="type">TResult</span>&gt;</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Func</span>&lt;<span class="type">TOwner</span>, <span class="type">TResult</span>&gt; function)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Task</span></span>
    <h3><span class="body">StepAsync</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Func</span>&lt;<span class="type">TOwner</span>, <span class="type">Task</span>&gt; action)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">Task</span>&lt;<span class="type">TResult</span>&gt;</span>
    <h3><span class="body">StepAsync&lt;<span class="type">TResult</span>&gt;</span><span class="tail">(<span class="keyword">string</span> message, <span class="type">Func</span>&lt;<span class="type">TOwner</span>, <span class="type">Task</span>&lt;<span class="type">TResult</span>&gt;&gt; function)</span></h3>
</div>

Executes the specified action/function and represents it in a log as a section with the specified message.

### `IWebSessionReport<TOwner>` interface

`IWebSessionReport<out TOwner>` interface instance is returned by `Report` property of `WebSession` and `WebDriverSession` classes.
It inherits from `IReport<TOwner>` interface and adds some methods related to web sessions, such as taking screenshots and page snapshots.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Screenshot</span><span class="tail">(<span class="keyword">string</span> title = <span class="keyword">null</span>)</span></h3>
</div>

Takes a screenshot of the current page with an optionally specified title.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Screenshot</span><span class="tail">(<span class="type">ScreenshotKind</span> kind, <span class="keyword">string</span> title = <span class="keyword">null</span>)</span></h3>
</div>

Takes a screenshot of the current page of a certain kind with an optionally specified title.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">PageSnapshot</span><span class="tail">(<span class="keyword">string</span> title = <span class="keyword">null</span>)</span></h3>
</div>

Takes a snapshot (HTML or MHTML file) of the current page with an optionally specified title.

### `PageObjectReportExtensions` class

`PageObjectReportExtensions` class contains an extension method for `IReport<TOwner>` interface, which is related to page objects.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TOwner</span></span>
    <h3><span class="body">Setup&lt;<span class="type">TPageObject</span>&gt;</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">TOwner</span>, <span class="type">TPageObject</span>&gt; function)</span></h3>
</div>

Executes the specified function and represents it in a log as a setup section with the message like `"Set up "<Some>" page"`.
The setup function time is not counted as a "Test body" execution time, but counted as "Setup" time.