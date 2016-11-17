Name | Description
---- | -----------
`UseBaseUrl(string baseUrl)` | Sets the base URL.
`UseTestName(string name)` | Sets the name of the test.
`UseNUnitTestName()` | Defines that the name of the test should be taken from the NUnit test.
`UseRetryTimeout(TimeSpan timeout)` | Sets the retry timeout for a search of element/control. The default value is 10 seconds.
`UseRetryInterval(TimeSpan interval)` | Sets the retry interval for a search of element/control. The default value is 500 milliseconds.
`OnCleanUp(Action action)` | Adds the action to perform on `AtataContext` clean up.
`LogNUnitError()` | Defines that an error occured during the NUnit test execution should be added to the log upon the clean up.
{:.table.table-members}