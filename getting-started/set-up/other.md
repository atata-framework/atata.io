Name | Description
---- | -----------
`UseBaseUrl(string baseUrl)` | Specifies the base URL.
`UseTestName(string name)` | Specifies the name of the test.
`UseNUnitTestName()` | Defines that the name of the test should be taken from the NUnit test.
`OnCleanUp(Action action)` | Adds the action to perform on `AtataContext` clean up.
`LogNUnitError()` | Defines that an error occured during the NUnit test execution should be added to the log upon the clean up.
{:.table.table-members}