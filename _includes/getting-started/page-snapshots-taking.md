A page snapshot can be either HTML or MHTML file.

For Chromium-based browsers (Chrome and Edge) a snapshot by default is taken using CDP command
[Page.captureSnapshot](https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-captureSnapshot)
and saved as .MHTML file with styles and images.

Note that `Page.captureSnapshot` command is in experimental state
so the result page snapshot may not 100% be equal to an original page.
{:.warning}

For other browsers a snapshot is taken using `IWebDriver.PageSource` property
and saved as .HTML file without styles.

### Configuration

Take a look at [Getting Started / Configuration / Page Snapshots](/getting-started/#page-snapshots)
on how to configure the functionality.

There are few ways to capture a screenshot depending on place where you need to do it.

### Take in test or page object

Use `Report.PageSnapshot(...)` method:

```cs
Go.To<OrdinaryPage>()
    .Report.PageSnapshot();
    //.Report.PageSnapshot("optional title"); // To specify a title.
```

### Take in any place

```cs
AtataContext.Current.TakePageSnapshot();
```

```cs
AtataContext.Current.Report.PageSnapshot();
```

### Take using trigger

Use [TakePageSnapshot](/triggers/#takepagesnapshot) trigger.
Below are just 2 possible scenarios.

#### Before button click

```cs
[TakePageSnapshot(TriggerEvents.BeforeClick)]
// [TakePageSnapshot("optional title", TriggerEvents.BeforeClick)] // To specify a title.
public Button<_> Save { get; private set; }
```

#### Upon page object initialization

```cs
[TakePageSnapshot(TriggerEvents.Init)]
public class SomePage : Page<_>
{
}
```