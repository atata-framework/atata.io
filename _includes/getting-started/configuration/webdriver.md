It is possible to configure the driver using the following methods of driver builders.
The amount of methods vary dependently of the driver builder type,
for example `ChromeDriverBuilder` and `EdgeDriverBuilder` support the most amount.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithArguments</span><span class="tail">(<span class="keyword">params</span> <span class="keyword">string</span>[] arguments)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithArguments</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="keyword">string</span>&gt; arguments)</span></h3>
</div>

Adds arguments to be appended to the browser executable command line.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithAlias</span><span class="tail">(<span class="keyword">string</span> alias)</span></h3>
</div>

Specifies the driver alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithDownloadDirectory</span><span class="tail">(<span class="keyword">string</span> directoryPath)</span></h3>
</div>

Adds the `download.default_directory` user profile preference to options
with the value specified by `directoryPath`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithDownloadDirectory</span><span class="tail">(<span class="type">Func</span>&lt;<span class="keyword">string</span>&gt; directoryPathBuilder)</span></h3>
</div>

Adds the `download.default_directory` user profile preference to options
with the value specified by `directoryPathBuilder`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithArtifactsAsDownloadDirectory</span>()</h3>
</div>

Adds the `download.default_directory` user profile preference to options
with the value of Artifacts directory path.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail"><span class="type">{DriverOptions}</span> options)</span></h3>
</div>

Specifies the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">{DriverOptions}</span>&gt; optionsCreator)</span></h3>
</div>

Specifies the driver options factory method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">{DriverOptions}</span>&gt; optionsInitializer)</span></h3>
</div>

Specifies the driver options initialization method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Dictionary</span><wbr>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>&gt; optionsPropertiesMap)</span></h3>
</div>

Specifies the properties map for the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">AddAdditionalOption</span><span class="tail">(<span class="keyword">string</span> optionName, <span class="keyword">object</span> optionValue)</span></h3>
</div>

Adds the additional option to the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">AddAdditionalBrowserOption</span><span class="tail">(<span class="keyword">string</span> optionName, <span class="keyword">object</span> optionValue)</span></h3>
</div>

Adds the additional browser option to the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithDriverService</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">{DriverService}</span>&gt; driverServiceCreator)</span></h3>
</div>

Specifies the driver service factory method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithDriverService</span><span class="tail">(<span class="type">Action</span><wbr>&lt;<span class="type">{DriverService}</span>&gt; serviceInitializer)</span></h3>
</div>

Specifies the driver service initialization method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithDriverService</span><span class="tail">(<span class="type">Dictionary</span><wbr>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>&gt; servicePropertiesMap)</span></h3>
</div>

Specifies the properties map for the driver service.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithDriverPath</span><span class="tail">(<span class="keyword">string</span> driverPath)</span></h3>
</div>

Specifies the directory containing the driver executable file.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithLocalDriverPath()</span></h3>
</div>

Specifies that local/current directory should be used as the directory containing the driver executable file.
Uses `AppDomain.CurrentDomain.BaseDirectory` as driver folder path.
This configuration option makes sense for .NET Core 2.0+ project that uses driver as a project package (hosted in the same build directory).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithDriverExecutableFileName</span><span class="tail">(<span class="keyword">string</span> driverExecutableFileName)</span></h3>
</div>

Specifies the name of the driver executable file.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithCommandTimeout</span><span class="tail">(<span class="type">TimeSpan</span> commandTimeout)</span></h3>
</div>

Specifies the command timeout (the maximum amount of time to wait for each command).
The default timeout is 60 seconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithHostName</span><span class="tail">(<span class="keyword">string</span> hostName)</span></h3>
</div>

Specifies the host name of the service.
The default value is `localhost`.
Can be set to `"127.0.0.1"`, for example when you experience localhost resolve issues.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithCreateRetries</span><span class="tail">(<span class="keyword">int</span> createRetries)</span></h3>
</div>

Specifies the count of possible driver creation retries in case exceptions occur during creation.
The default value is `2`.
Set `0` to omit retries.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithInitialHealthCheck</span><span class="tail">(<span class="keyword">bool</span> enable = <span class="keyword">true</span>)</span></h3>
</div>

Enables or disables an initial health check.
By default it is disabled.
When enabled, the default health check function requests `IWebDriver.Url`.
The health check function can be changed by using `WithInitialHealthCheckFunction(Func<IWebDriver, bool>)` method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithInitialHealthCheckFunction</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">IWebDriver</span>, <span class="keyword">bool</span>&gt; function)</span></h3>
</div>

Sets the initial health check function.
The default function requests `IWebDriver.Url`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithPortsToIgnore</span><span class="tail">(<span class="keyword">params int</span>[] portsToIgnore)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverBuilder}</span></span>
    <h3><span class="body">WithPortsToIgnore</span><span class="tail">(<span class="type">IEnumerable</span>&lt;<span class="keyword">int</span>&gt; portsToIgnore)</span></h3>
</div>

Specifies the ports to ignore.