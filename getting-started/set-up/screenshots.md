The list of screenshot taking extension methods for `AtataContextBuilder`:

Name | Description
---- | -----------
`AddScreenshotConsumer(IScreenshotConsumer consumer)` | Adds the screenshot consumer. Is used for custom screenshot processing.
`AddScreenshotFileSaving()` | Adds the `FileScreenshotConsumer` instance for the screenshot saving to file.
{:.table.table-members}

#### File Screenshots Configuration

By deafault `AddScreenshotFileSaving` method configures `FileScreenshotConsumer` with the following settings:

* Folder path: `$@"Logs\{AtataContext.BuildStart:yyyy-MM-dd HH_mm_ss}\{AtataContext.Current.TestName}"`
* File name format: `$"{screenshotInfo.Number:D2} - {screenshotInfo.PageObjectFullName}{screenshotInfo.Title?.Prepend(" - ")}"`
* Image format: `Png`.

The list of extension methods to configure `FileScreenshotConsumer`:

Name | Description
---- | -----------
`With(ScreenshotImageFormat imageFormat)` | Specifies the image format of the log consumer.
`WithFolderPath(Func<string> folderPathBuilder)` | Specifies the folder path builder of the log consumer.
`WithFileName(Func<ScreenshotInfo, string> fileNameBuilder)` | Specifies the file name builder of the log consumer.
`WithFilePath(Func<ScreenshotInfo, string> filePathBuilder)` | Specifies the file path builder of the log consumer.
{:.table.table-members}

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