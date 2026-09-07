The screenshots functionality can be configured through the methods of `Screenshots` property of `WebDriverSessionBuilder`.

```cs
builder.Sessions.AddWebDriver(x => x
    //...
    .Screenshots.UseFullPageOrViewportStrategy()
    .Screenshots.UseFileNameTemplate("{screenshot-number:D2}..."));
```

Screenshot strategy is a way how a screenshot should be taken, basically it can either a viewport area or a full-page screenshot.
By default, the viewport taking strategy is used.

The list of `ScreenshotsWebDriverSessionBuilder` methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseWebDriverViewportStrategy()</span></h3>
</div>

Sets the WebDriver viewport (`WebDriverViewportScreenshotStrategy`) strategy for a screenshot taking.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseWebDriverFullPageStrategy()</span></h3>
</div>

Sets the WebDriver full-page (`WebDriverFullPageScreenshotStrategy`) strategy for a screenshot taking.
Works only for `FirefoxDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseCdpFullPageStrategy()</span></h3>
</div>

Sets the CDP full-page (`CdpFullPageScreenshotStrategy`) strategy for a screenshot taking.
Works only for `ChromeDriver` and `EdgeDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseFullPageOrViewportStrategy()</span></h3>
</div>

Sets the "full-page or viewport" (`FullPageOrViewportScreenshotStrategy`) strategy for a screenshot taking.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseStrategy(<span class="type">IScreenshotStrategy</span> strategy)</span></h3>
</div>

Sets the strategy for a screenshot taking.
The default value is an instance of `WebDriverViewportScreenshotStrategy`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseFileNameTemplate(<span class="keyword">string</span> fileNameTemplate)</span></h3>
</div>

Sets the file name template of page screenshots.
The default value is `"{screenshot-number:D2}{screenshot-pageobjectname: *}{screenshot-pageobjecttypename: *}{screenshot-title: - *}"`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseFileNameTemplate(<span class="keyword">string</span> fileNameTemplate)</span></h3>
</div>

Sets the file name template of page screenshots.
The default value is `"{screenshot-pageobjectname}{screenshot-pageobjecttypename:_*}{screenshot-title:-*}"`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseFileNameTemplateWithSessionId()</span></h3>
</div>

Sets the file name template of page screenshots including `{session-id}` variable.
The set value is `"{session-id}-{screenshot-pageobjectname}{screenshot-pageobjecttypename:_*}{screenshot-title:-*}"`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UsePrependArtifactNumberToFileName(<span class="keyword">bool</span> enable)</span></h3>
</div>

Sets a value indicating whether to prepend artifact number to file name in a form of "001-{file name}".
The default value `true`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsWebDriverSessionBuilder</span></span>
    <h3><span class="body">UseTakeOnFailure(<span class="keyword">bool</span> enable)</span></h3>
</div>

Sets a value indicating whether to take a screenshot on failure.
The default value `true`.