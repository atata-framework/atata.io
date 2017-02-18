The list of driver creational methods for `AtataContextBuilder`:

Name | Description
---- | -----------
`UseChrome()` | Use the `ChromeDriver`.
`UseFirefox()` | Use the `FirefoxDriver`.
`UseInternetExplorer()` | Use the `InternetExplorerDriver`.
`UseEdge()` | Use the `EdgeDriver`.
`UseSafari()` | Use the `SafariDriver`.
`UseOpera()` | Use the `OperaDriver`.
`UsePhantomJS()` | Use the `PhantomJSDriver`.
`UseDriver(Func<RemoteWebDriver> driverCreator)` | Use custom driver creator function.
{:.table.table-members}

#### Driver Configuration

It is possible to configure the driver using the following methods:

Name | Description
---- | -----------
`WithArguments(params string[] arguments)` | Adds arguments to be appended to the Chrome.exe/Opera.exe command line.
`WithOptions(...)` | Specifies the driver options.
`WithCapability(string capabilityName, object capabilityValue)` | Adds additional capability to the driver options.
`WithDriverService(...)` | Specifies the creator function of the driver service.
`WithDriverPath(string driverPath)` | Specifies the directory containing the driver executable file.
`WithDriverExecutableFileName(string driverExecutableFileName)` | Specifies the name of the driver executable file.
`WithCommandTimeout(TimeSpan commandTimeout)` | Specifies the command timeout (the maximum amount of time to wait for each command).
{:.table.table-members.table-members-fixed-col-1}

#### Usage

```cs
AtataContext.Build().
    UseChrome().
        WithArguments("disable-extensions", "no-sandbox", "start-maximized").
    SetUp();
```