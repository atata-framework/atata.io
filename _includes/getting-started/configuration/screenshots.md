#### Screenshot Strategy

Screenshot strategy is a way how a screenshot should be taken, basically it can either a viewport area or a full-page screenshot.
By default viewport taking strategy is used.

The screenshot strategy can be registered through the methods of `Screenshots` property of `AtataContextBuilder`.

```cs
AtataContext.GlobalConfiguration
    .Screenshots.UseFullPageOrViewportStrategy();
```

The list of `ScreenshotsAtataContextBuilder` methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseWebDriverViewportStrategy()</span></h3>
</div>

Sets the WebDriver viewport (`WebDriverViewportScreenshotStrategy`) strategy for a screenshot taking.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseWebDriverFullPageStrategy()</span></h3>
</div>

Sets the WebDriver full-page (`WebDriverFullPageScreenshotStrategy`) strategy for a screenshot taking.
Works only for `FirefoxDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseCdpFullPageStrategy()</span></h3>
</div>

Sets the CDP full-page (`CdpFullPageScreenshotStrategy`) strategy for a screenshot taking.
Works only for `ChromeDriver` and `EdgeDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseFullPageOrViewportStrategy()</span></h3>
</div>

Sets the "full-page or viewport" (`FullPageOrViewportScreenshotStrategy`) strategy for a screenshot taking.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseStrategy(<span class="type">IScreenshotStrategy</span> strategy)</span></h3>
</div>

Sets the strategy for a screenshot taking.
The default value is an instance of `WebDriverViewportScreenshotStrategy`.

#### Screenshot Consumers

Screenshots saving should be configured by adding screenshot consumer during build of `AtataContext`.
It is recommended to use `AddFile` method:

```cs
AtataContext.GlobalConfiguration
    .ScreenshotConsumers.AddFile()
```

The screenshot consumers can be registered through the methods of `ScreenshotConsumers` property of `AtataContextBuilder`.

The list of `ScreenshotConsumersAtataContextBuilder` methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">TScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">Add<wbr>&lt;<span class="type">TScreenshotConsumer</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TScreenshotConsumer</span> : <span class="type">IScreenshotConsumer</span>, <span class="keyword">new</span>()</span>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">TScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">Add<wbr>&lt;<span class="type">TScreenshotConsumer</span>&gt;</span><span class="tail">(<span class="type">TScreenshotConsumer</span> consumer)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TScreenshotConsumer</span> : <span class="type">IScreenshotConsumer</span></span>
</div>

Adds the screenshot consumer. Is used for custom screenshot processing.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span><wbr>&lt;<span class="type">IScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">Add</span><span class="tail">(<span class="keyword">string</span> typeNameOrAlias)</span></h3>
</div>

Adds the screenshot consumer. `typeNameOrAlias` can accept full type name, custom `IScreenshotConsumer` alias (registered via `ScreenshotConsumerAliases.Register` method) or predefined "file" alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">AddFile()</span></h3>
</div>

Adds the `FileScreenshotConsumer` instance for the screenshot saving to file.

#### File Screenshots Configuration

By default `AddFile` method configures `FileScreenshotConsumer` with the following settings:

* Folder path: `AtataContext.Artifacts`
* File name format: `"{screenshot-number:D2}{screenshot-pageobjectname: - *}{screenshot-pageobjecttypename: *}{screenshot-title: - *}"`

The list of `FileScreenshotConsumer` configuration extension methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithDirectoryPath</span><span class="tail">(<span class="type">Func</span>&lt;<span class="keyword">string</span>&gt; directoryPathBuilder)</span></h3>
</div>

Specifies the directory path builder of the file screenshot consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithDirectoryPath</span><span class="tail">(<span class="keyword">string</span> directoryPath)</span></h3>
</div>

Specifies the directory path of the file screenshot consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithFileName</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">ScreenshotInfo</span>, <span class="keyword">string</span>&gt; fileNameBuilder)</span></h3>
</div>

Specifies the file name builder of the file screenshot consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithFileName</span><span class="tail">(<span class="keyword">string</span> fileName)</span></h3>
</div>

Specifies the file name of the file screenshot consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithFilePath</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">ScreenshotInfo</span>, <span class="keyword">string</span>&gt; filePathBuilder)</span></h3>
</div>

Specifies the file path builder of the file screenshot consumer.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotConsumerAtataContextBuilder</span><wbr>&lt;<span class="type">FileScreenshotConsumer</span>&gt;</span>
    <h3><span class="body">WithFilePath</span><span class="tail">(<span class="keyword">string</span> filePath)</span></h3>
</div>

Specifies the file path of the file screenshot consumer.

#### Usage

The below example configures `FileScreenshotConsumer` to use separate folder for each test:

``` cs
AtataContext.GlobalConfiguration
    .ScreenshotConsumers.AddFile()
        .WithFolderPath(() => $@"{AtataContext.Current.Artifacts.FullName}\{AtataContext.BuildStart:yyyy-MM-dd HH_mm_ss}\{AtataContext.Current.TestName}")
        .WithFileName(screenshotInfo => $"{screenshotInfo.Number:D2} - {screenshotInfo.PageObjectFullName}{screenshotInfo.Title?.Prepend(" - ")}");
```

If you need to take a screenshot only on test failure, you may configure `FileScreenshotConsumer` to save all screenshot files to the same folder:

``` cs
AtataContext.GlobalConfiguration
    .EventSubscriptions.TakeScreenshotOnNUnitError()
    .ScreenshotConsumers.AddFile()
        .WithFolderPath(() => $@"{AtataContext.Current.Artifacts.FullName}\{AtataContext.BuildStart:yyyy-MM-dd HH_mm_ss}")
        .WithFileName(screenshotInfo => $"{AtataContext.Current.TestName} - {screenshotInfo.PageObjectFullName}");
```