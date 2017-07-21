The list of screenshot taking extension methods for `AtataContextBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">TScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">AddScreenshotConsumer<wbr>&lt;<span class="type">TScreenshotConsumer</span>&gt;</span><span class="tail">(<span class="type">TScreenshotConsumer</span> consumer)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TScreenshotConsumer</span> : <span class="type">IScreenshotConsumer</span></span>
</div>

Adds the screenshot consumer. Is used for custom screenshot processing.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">AddScreenshotFileSaving()</span></h3>
</div>

Adds the `FileScreenshotConsumer` instance for the screenshot saving to file.

#### File Screenshots Configuration

By default `AddScreenshotFileSaving` method configures `FileScreenshotConsumer` with the following settings:

* Folder path: `$@"Logs\{AtataContext.BuildStart:yyyy-MM-dd HH_mm_ss}\{AtataContext.Current.TestName}"`
* File name format: `$"{screenshotInfo.Number:D2} - {screenshotInfo.PageObjectFullName}{screenshotInfo.Title?.Prepend(" - ")}"`
* Image format: `Png`.

The list of extension methods to configure `FileScreenshotConsumer`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">With</span><span class="tail">(<span class="type">ScreenshotImageFormat</span> imageFormat)</span></h3>
</div>

Specifies the image format of the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithFolderPath</span><span class="tail">(<span class="type">Func</span>&lt;<span class="keyword">string</span>&gt; folderPathBuilder)</span></h3>
</div>

Specifies the folder path builder of the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithFileName</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">ScreenshotInfo</span>, <span class="keyword">string</span>&gt; fileNameBuilder)</span></h3>
</div>

Specifies the file name builder of the log consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithFilePath</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">ScreenshotInfo</span>, <span class="keyword">string</span>&gt; filePathBuilder)</span></h3>
</div>

Specifies the file path builder of the log consumer.

#### Usage

The below example configures `FileScreenshotConsumer` to use separate folder for each test:

``` cs
AtataContext.Build().
    // Do some initialization.
    AddScreenshotFileSaving().
        WithFolderPath(() => $@"Logs\{AtataContext.BuildStart:yyyy-MM-dd HH_mm_ss}\{AtataContext.Current.TestName}").
        WithFileName(screenshotInfo => $"{screenshotInfo.Number:D2} - {screenshotInfo.PageObjectFullName}{screenshotInfo.Title?.Prepend(" - ")}").
    SetUp();
```

If you need to take a screenshot only on test failure, you may configure `FileScreenshotConsumer` to save all screenshot files to the same folder:

``` cs
AtataContext.Build().
    // Do some initialization.
    TakeScreenshotOnNUnitError().
    AddScreenshotFileSaving().
        WithFolderPath(() => $@"Logs\{AtataContext.BuildStart:yyyy-MM-dd HH_mm_ss}").
        WithFileName(screenshotInfo => $"{AtataContext.Current.TestName} - {screenshotInfo.PageObjectFullName}").
    SetUp();
```