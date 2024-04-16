---
layout: article
title: Take Screenshot
description: How to take/capture screenshot.
---

{{ page.description }}
{:.lead}

There are few ways to capture a screenshot depending on place where you need to do it.

## In test or page object

Use `Report.Screenshot(...)` method:

```cs
Go.To<OrdinaryPage>()
    .Report.Screenshot();
    //.Report.Screenshot("optional title"); // To specify a title.
    //.Report.Screenshot(ScreenshotKind.FullPage); // To specify a kind (FullPage/Viewport).
```

## In any place

```cs
AtataContext.Current.TakeScreenshot();
```

```cs
AtataContext.Current.Report.Screenshot();
```

## Using trigger

Use [TakeScreenshot](/triggers/#takescreenshot) trigger.
Below are just 2 possible scenarios.

### Before button click

```cs
[TakeScreenshot(TriggerEvents.BeforeClick)]
// [TakeScreenshot("optional title", TriggerEvents.BeforeClick)] // To specify a title.
// [TakeScreenshot(ScreenshotKind.FullPage, TriggerEvents.BeforeClick)] // To specify a kind.
public Button<_> Save { get; private set; }
```

### Upon page object initialization

```cs
[TakeScreenshot(TriggerEvents.Init)]
public class SomePage : Page<_>
{
}
```