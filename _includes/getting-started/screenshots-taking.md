Take a look at [Getting Started / Configuration / Screenshots](/getting-started/#screenshots)
on how to configure the functionality.

There are few ways to capture a screenshot depending on place where you need to do it.

### Take in test or page object

Use `Report.Screenshot(...)` method:

```cs
Go.To<OrdinaryPage>()
    .Report.Screenshot();
    //.Report.Screenshot("optional title"); // To specify a title.
    //.Report.Screenshot(ScreenshotKind.FullPage); // To specify a kind (FullPage/Viewport).
```

### Take in any place

```cs
WebDriverSession.Current!.TakeScreenshot();
```

```cs
WebDriverSession.Current!.Report.Screenshot();
```

### Take using trigger

Use [TakeScreenshot](/triggers/#takescreenshot) trigger.
Below are just 2 possible scenarios.

#### Before button click

```cs
[TakeScreenshot(TriggerEvents.BeforeClick)]
// [TakeScreenshot("optional title", TriggerEvents.BeforeClick)] // To specify a title.
// [TakeScreenshot(ScreenshotKind.FullPage, TriggerEvents.BeforeClick)] // To specify a kind.
public Button<_> Save { get; private set; }
```

#### Upon page object initialization

```cs
[TakeScreenshot(TriggerEvents.Init)]
public class SomePage : Page<_>
{
}
```

### Full-page screenshots

There is a possibility to take full-page screenshots.
The functionality is not enabled by default.
Also, currently it works only for Chrome, Edge and Firefox, so enable it carefully.

#### Enable full-page screenshots by default

Full-page screenshots can be enabled to be taken by default instead of viewport screenshots.

##### Configuration

Use `Screenshots` property of `WebDriverSessionBuilder`:

```cs
public ScreenshotsWebDriverSessionBuilder Screenshots { get; }
```

`ScreenshotsWebDriverSessionBuilder` contains the following methods:

```cs
// Used by default.
public WebDriverSessionBuilder UseWebDriverViewportStrategy();

// Works only for Firefox.
public WebDriverSessionBuilder UseWebDriverFullPageStrategy();

// Works only for Chrome and Edge.
public WebDriverSessionBuilder UseCdpFullPageStrategy();

// *** Recommended to use for full-page screenshots, regardless of browser/driver.
public WebDriverSessionBuilder UseFullPageOrViewportStrategy();

// To use custom strategy.
public WebDriverSessionBuilder UseStrategy(IScreenshotStrategy strategy);
```

###### Usage

```cs
builder.Sessions.AddWebDriver(x => x
    //...
    .Screenshots.UseFullPageOrViewportStrategy());
```

#### Explicitly take full-page screenshots

It is also possible to take full-page screenshots only at certain points.
It is allowed to explicitly specify `ScreenshotKind` enum value depending whether you need a viewport or a full-page screenshot.

`ScreenshotKind` enum provides 3 values: `Default`, `Viewport` and `FullPage`.

##### Examples

```cs
WebDriverSession.Current!.TakeScreenshot(ScreenshotKind.FullPage);
```

```cs
Go.To<SomePage>()
    .Report.Screenshot(ScreenshotKind.FullPage);
```

```cs
[TakeScreenshot(ScreenshotKind.FullPage, TriggerEvents.Init)]
```