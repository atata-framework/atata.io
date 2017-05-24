Name | Description
---- | -----------
`UseBaseUrl(string baseUrl)` | Sets the base URL.
`UseTestName(string name)` | Sets the name of the test.
`UseNUnitTestName()` | Defines that the name of the test should be taken from the NUnit test.
`UseRetryTimeout(TimeSpan timeout)` | Sets the retry timeout for a search of element/control. The default value is 10 seconds.
`UseRetryInterval(TimeSpan interval)` | Sets the retry interval for a search of element/control. The default value is 500 milliseconds.
`OnCleanUp(Action action)` | Adds the action to perform during `AtataContext` cleanup.
`LogNUnitError()` | Defines that an error occurred during the NUnit test execution should be added to the log during the cleanup.
`TakeScreenshotOnNUnitError(string title = "Failed")` | Defines that an error occurred during the NUnit test execution should be captured by a screenshot during the cleanup.
{:.table.table-members}