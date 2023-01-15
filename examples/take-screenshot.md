---
layout: article
title: Take Screenshot
description: How to take/capture screenshot.
---

{{ page.description }}
{:.lead}

## Configuration

First of all, the `AtataContext` should be configured to store screenshots.
Take a look at [Getting Started/Set Up/Screenshots](/getting-started/#screenshots).

For example:

```cs
AtataContext.GlobalConfiguration
    .ScreenshotConsumers.AddFile();
```

There are few ways to capture a screenshot depending on place where you need to do it.

## In Test or Page Object

Use `Report.Screenshot(...)` method:

```cs
Go.To<OrdinaryPage>()
    .Report.Screenshot();
    // Report.Screenshot("optional title"); // To pass a title.
```

## In Any Place

```cs
AtataContext.Current.TakeScreenshot("optional title");
```

## As a Trigger

Use [TakeScreenshot](/triggers/#takescreenshot) trigger.
Below are just 2 possible scenarios.

### Before Button Click

```cs
[TakeScreenshot(TriggerEvents.BeforeClick)]
// [TakeScreenshot("optional title", TriggerEvents.BeforeClick)] // To pass a title.
public Button<_> Save { get; private set; }
```

### Upon Page Object Initialization

```cs
[TakeScreenshot(TriggerEvents.Init)]
public class SomePage : Page<_>
{
}
```