The list of driver creational methods of `AtataContextBuilder`:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">ChromeAtataContextBuilder</span></span>
    <h3><span class="body">UseChrome</span>()</h3>
</div>

Use the `ChromeDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">FirefoxAtataContextBuilder</span></span>
    <h3><span class="body">UseFirefox()</span></h3>
</div>

Use the `FirefoxDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">InternetExplorerAtataContextBuilder</span></span>
    <h3><span class="body">UseInternetExplorer()</span></h3>
</div>

Use the `InternetExplorerDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">EdgeAtataContextBuilder</span></span>
    <h3><span class="body">UseEdge()</span></h3>
</div>

Use the `EdgeDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">SafariAtataContextBuilder</span></span>
    <h3><span class="body">UseSafari()</span></h3>
</div>

Use the `SafariDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">RemoteDriverAtataContextBuilder</span></span>
    <h3><span class="body">UseRemoteDriver()</span></h3>
</div>

Use the `RemoteWebDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">CustomDriverAtataContextBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">RemoteWebDriver</span>&gt; driverFactory)</span></h3>
</div>

Use custom driver factory method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TDriverFactory</span></span>
    <h3><span class="body">UseDriver<wbr>&lt;<span class="type">TDriverFactory</span>&gt;</span><span class="tail">(<span class="type">TDriverFactory</span> driverFactory)</span></h3>
</div>

Use the driver factory.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="keyword">string</span> alias)</span></h3>
</div>

Sets the alias of the driver to use.

#### Driver Configuration

It is possible to configure the driver using the following methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithArguments</span><span class="tail">(<span class="keyword">params</span> <span class="keyword">string</span>[] arguments)</span></h3>
</div>

Adds arguments to be appended to the browser executable command line.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithAlias</span><span class="tail">(<span class="keyword">string</span> alias)</span></h3>
</div>

Specifies the driver alias.

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
    <h3><span class="body">WithCapability</span><span class="tail">(<span class="keyword">string</span> capabilityName, <span class="keyword">object</span> capabilityValue)</span></h3>
</div>

Adds additional capability to the driver options.

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

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithHostName</span><span class="tail">(<span class="keyword">string</span> hostName)</span></h3>
</div>

Specifies the host name of the service.
The default value is `localhost`.
This configuration option makes sense for .NET Core 2.0 to be set to `127.0.0.1` for IPv4 and `[::1]` for IPv6.
There is a bug (<https://github.com/dotnet/corefx/issues/24104>) in .NET Core 2.0: each WebDriver request takes extra 1 second.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithFixOfCommandExecutionDelay()</span></h3>
</div>

Specifies that the fix of driver's HTTP command execution delay should be applied.
Invokes `WithHostName("127.0.0.1")` method.
This configuration option makes sense for .NET Core 2.0 that works within IPv4.
There is a bug (<https://github.com/dotnet/corefx/issues/24104>) in .NET Core 2.0: each WebDriver request takes extra 1 second.

#### Usage

```cs
AtataContext.Configure()
    .UseChrome()
        .WithArguments("disable-extensions", "start-maximized", "disable-infobars")
    .Build();
```