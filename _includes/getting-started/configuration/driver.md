The list of driver configuration methods of `AtataContextBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ChromeAtataContextBuilder</span></span>
    <h3><span class="body">UseChrome</span>()</h3>
</div>

Creates and returns a new builder for `ChromeDriver`
with default `DriverAliases.Chrome` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">FirefoxAtataContextBuilder</span></span>
    <h3><span class="body">UseFirefox()</span></h3>
</div>

Creates and returns a new builder for `FirefoxDriver`
with default `DriverAliases.Firefox` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">InternetExplorerAtataContextBuilder</span></span>
    <h3><span class="body">UseInternetExplorer()</span></h3>
</div>

Creates and returns a new builder for `InternetExplorerDriver`
with default `DriverAliases.InternetExplorer` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EdgeAtataContextBuilder</span></span>
    <h3><span class="body">UseEdge()</span></h3>
</div>

Creates and returns a new builder for `EdgeDriver`
with default `DriverAliases.Edge` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">SafariAtataContextBuilder</span></span>
    <h3><span class="body">UseSafari()</span></h3>
</div>

Creates and returns a new builder for `SafariDriver`
with default `DriverAliases.Safari` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">RemoteDriverAtataContextBuilder</span></span>
    <h3><span class="body">UseRemoteDriver()</span></h3>
</div>

Creates and returns a new builder for `RemoteWebDriver`
with default `DriverAliases.Remote` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">CustomDriverAtataContextBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="type">IWebDriver</span> driver)</span></h3>
</div>

Use the specified driver instance.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">CustomDriverAtataContextBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">IWebDriver</span>&gt; driverFactory)</span></h3>
</div>

Use the custom driver factory method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TDriverBuilder</span></span>
    <h3><span class="body">UseDriver<wbr>&lt;<span class="type">TDriverBuilder</span>&gt;</span><span class="tail">(<span class="type">TDriverBuilder</span> driverBuilder)</span></h3>
</div>

Use the driver builder.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="keyword">string</span> alias)</span></h3>
</div>

Sets the alias of the driver to use.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ChromeAtataContextBuilder</span></span>
    <h3><span class="body">ConfigureChrome</span><span class="tail">(<span class="keyword">string</span> alias = <span class="type">DriverAliases</span>.Chrome)</span></h3>
</div>

Returns an existing or creates a new builder for `ChromeDriver` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">FirefoxAtataContextBuilder</span></span>
    <h3><span class="body">ConfigureFirefox</span><span class="tail">(<span class="keyword">string</span> alias = <span class="type">DriverAliases</span>.Firefox)</span></h3>
</div>

Returns an existing or creates a new builder for `FirefoxDriver` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">InternetExplorerAtataContextBuilder</span></span>
    <h3><span class="body">ConfigureInternetExplorer</span><span class="tail">(<span class="keyword">string</span> alias = <span class="type">DriverAliases</span>.InternetExplorer)</span></h3>
</div>

Returns an existing or creates a new builder for `InternetExplorerDriver` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EdgeAtataContextBuilder</span></span>
    <h3><span class="body">ConfigureEdge</span><span class="tail">(<span class="keyword">string</span> alias = <span class="type">DriverAliases</span>.Edge)</span></h3>
</div>

Returns an existing or creates a new builder for `EdgeDriver` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">SafariAtataContextBuilder</span></span>
    <h3><span class="body">ConfigureSafari</span><span class="tail">(<span class="keyword">string</span> alias = <span class="type">DriverAliases</span>.Safari)</span></h3>
</div>

Returns an existing or creates a new builder for `SafariDriver` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">RemoteDriverAtataContextBuilder</span></span>
    <h3><span class="body">ConfigureRemoteDriver</span><span class="tail">(<span class="keyword">string</span> alias = <span class="type">DriverAliases</span>.Remote)</span></h3>
</div>

Returns an existing or creates a new builder for `RemoteWebDriver` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TDriverBuilder</span></span>
    <h3><span class="body">ConfigureDriver<wbr>&lt;<span class="type">TDriverBuilder</span>&gt;</span><span class="tail">(<span class="keyword">string</span> alias, <span class="type">Func</span>&lt;<span class="type">TDriverBuilder</span>&gt; driverBuilderCreator)</span></h3>
</div>

Returns an existing or creates a new builder for `TDriverBuilder` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseDisposeDriver</span><span class="tail">(<span class="keyword">bool</span> disposeDriver)</span></h3>
</div>

Sets a value indicating whether to dispose the `AtataContext.Driver` when `AtataContext.Dispose` method is invoked.
The default value is `true`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseDriverInitializationStage</span><span class="tail">(<span class="type">AtataContextDriverInitializationStage</span> stage)</span></h3>
</div>

Sets the driver initialization stage.
The default value is `AtataContextDriverInitializationStage.Build`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">void</span></span>
    <h3><span class="body">AutoSetUpDriverToUse</span>()</h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">async</span> <span class="type">Task</span></span>
    <h3><span class="body">AutoSetUpDriverToUseAsync</span>()</h3>
</div>

Sets up driver with auto version detection for the local browser to use.
Gets the name of the local browser to use from `AtataBuildingContext.LocalBrowserToUseName` property.
Then invokes `Atata.WebDriverSetup.DriverSetup.AutoSetUpSafely(...)` static method
from `Atata.WebDriverSetup` package.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">void</span></span>
    <h3><span class="body">AutoSetUpConfiguredDrivers</span>()</h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">async</span> <span class="type">Task</span></span>
    <h3><span class="body">AutoSetUpConfiguredDriversAsync</span>()</h3>
</div>

Sets up drivers with auto version detection for the local configured browsers.
Gets the names of configured local browsers from `AtataBuildingContext.ConfiguredLocalBrowserNames` property.
Then invokes `Atata.WebDriverSetup.DriverSetup.AutoSetUpSafely(...)` static method
from `Atata.WebDriverSetup` package.

#### Driver Configuration

It is possible to configure the driver using the following methods of driver builders.
The amount of methods vary dependently of the driver builder type,
for example Chrome and Edge builders support the most amount.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithArguments</span><span class="tail">(<span class="keyword">params</span> <span class="keyword">string</span>[] arguments)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithArguments</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="keyword">string</span>&gt; arguments)</span></h3>
</div>

Adds arguments to be appended to the browser executable command line.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithAlias</span><span class="tail">(<span class="keyword">string</span> alias)</span></h3>
</div>

Specifies the driver alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDownloadDirectory</span><span class="tail">(<span class="keyword">string</span> directoryPath)</span></h3>
</div>

Adds the `download.default_directory` user profile preference to options
with the value specified by `directoryPath`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDownloadDirectory</span><span class="tail">(<span class="type">Func</span>&lt;<span class="keyword">string</span>&gt; directoryPathBuilder)</span></h3>
</div>

Adds the `download.default_directory` user profile preference to options
with the value specified by `directoryPathBuilder`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithArtifactsAsDownloadDirectory</span>()</h3>
</div>

Adds the `download.default_directory` user profile preference to options
with the value of Artifacts directory path.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail"><span class="type">{DriverOptions}</span> options)</span></h3>
</div>

Specifies the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">{DriverOptions}</span>&gt; optionsCreator)</span></h3>
</div>

Specifies the driver options factory method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">{DriverOptions}</span>&gt; optionsInitializer)</span></h3>
</div>

Specifies the driver options initialization method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Dictionary</span><wbr>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>&gt; optionsPropertiesMap)</span></h3>
</div>

Specifies the properties map for the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">AddAdditionalOption</span><span class="tail">(<span class="keyword">string</span> optionName, <span class="keyword">object</span> optionValue)</span></h3>
</div>

Adds the additional option to the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">AddAdditionalBrowserOption</span><span class="tail">(<span class="keyword">string</span> optionName, <span class="keyword">object</span> optionValue)</span></h3>
</div>

Adds the additional browser option to the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDriverService</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">{DriverService}</span>&gt; driverServiceCreator)</span></h3>
</div>

Specifies the driver service factory method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDriverService</span><span class="tail">(<span class="type">Action</span><wbr>&lt;<span class="type">{DriverService}</span>&gt; serviceInitializer)</span></h3>
</div>

Specifies the driver service initialization method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDriverService</span><span class="tail">(<span class="type">Dictionary</span><wbr>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>&gt; servicePropertiesMap)</span></h3>
</div>

Specifies the properties map for the driver service.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDriverPath</span><span class="tail">(<span class="keyword">string</span> driverPath)</span></h3>
</div>

Specifies the directory containing the driver executable file.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithLocalDriverPath()</span></h3>
</div>

Specifies that local/current directory should be used as the directory containing the driver executable file.
Uses `AppDomain.CurrentDomain.BaseDirectory` as driver folder path.
This configuration option makes sense for .NET Core 2.0+ project that uses driver as a project package (hosted in the same build directory).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDriverExecutableFileName</span><span class="tail">(<span class="keyword">string</span> driverExecutableFileName)</span></h3>
</div>

Specifies the name of the driver executable file.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithCommandTimeout</span><span class="tail">(<span class="type">TimeSpan</span> commandTimeout)</span></h3>
</div>

Specifies the command timeout (the maximum amount of time to wait for each command).
The default timeout is 60 seconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithHostName</span><span class="tail">(<span class="keyword">string</span> hostName)</span></h3>
</div>

Specifies the host name of the service.
The default value is `localhost`.
Can be set to `"127.0.0.1"`, for example when you experience localhost resolve issues.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithCreateRetries</span><span class="tail">(<span class="keyword">int</span> createRetries)</span></h3>
</div>

Specifies the count of possible driver creation retries in case exceptions occur during creation.
The default value is `2`.
Set `0` to omit retries.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithInitialHealthCheck</span><span class="tail">(<span class="keyword">bool</span> enable = <span class="keyword">true</span>)</span></h3>
</div>

Enables or disables an initial health check.
By default it is disabled.
When enabled, the default health check function requests `IWebDriver.Url`.
The health check function can be changed by using `WithInitialHealthCheckFunction(Func<IWebDriver, bool>)` method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithInitialHealthCheckFunction</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">IWebDriver</span>, <span class="keyword">bool</span>&gt; function)</span></h3>
</div>

Sets the initial health check function.
The default function requests `IWebDriver.Url`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithPortsToIgnore</span><span class="tail">(<span class="keyword">params int</span>[] portsToIgnore)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithPortsToIgnore</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="keyword">int</span>&gt; portsToIgnore)</span></h3>
</div>

Specifies the ports to ignore.

#### Usage

An example of using headless Chrome.

```cs
AtataContext.Configure()
    .UseChrome()
        .WithArguments("headless=new", "window-size=1200,800")
    .Build();
```