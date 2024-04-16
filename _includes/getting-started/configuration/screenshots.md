The screenshots functionality can be configured through the methods of `Screenshots` property of `AtataContextBuilder`.

```cs
AtataContext.GlobalConfiguration
    .Screenshots.UseFullPageOrViewportStrategy()
    .Screenshots.UseFileNameTemplate("{screenshot-number:D2}...");
```

Screenshot strategy is a way how a screenshot should be taken, basically it can either a viewport area or a full-page screenshot.
By default, the viewport taking strategy is used.

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

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ScreenshotsAtataContextBuilder</span></span>
    <h3><span class="body">UseFileNameTemplate(<span class="keyword">string</span> fileNameTemplate)</span></h3>
</div>

Sets the file name template of page screenshots.
The default value is `"{screenshot-number:D2}{screenshot-pageobjectname: *}{screenshot-pageobjecttypename: *}{screenshot-title: - *}"`.