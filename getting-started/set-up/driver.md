The list of driver creational methods for `AtataContextBuilder`:

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
    <span class="head"><span class="keyword">public</span> <span class="type">OperaAtataContextBuilder</span></span>
    <h3><span class="body">UseOpera()</span></h3>
</div>

Use the `OperaDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">PhantomJSAtataContextBuilder</span></span>
    <h3><span class="body">UsePhantomJS()</span></h3>
</div>

Use the `PhantomJSDriver`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">RemoteWebDriver</span>&gt; driverCreator)</span></h3>
</div>

Use custom driver creator function.

#### Driver Configuration

It is possible to configure the driver using the following methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithArguments</span><span class="tail">(<span class="keyword">params</span> <span class="keyword">string</span>[] arguments)</span></h3>
</div>

Adds arguments to be appended to the Chrome.exe/Opera.exe command line.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">{DriverOptions}</span>&gt; optionsCreator)</span></h3>
</div>

Specifies the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithOptions</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">{DriverOptions}</span>&gt; optionsInitializer)</span></h3>
</div>

Specifies the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithCapability</span><span class="tail">(<span class="keyword">string</span> capabilityName, <span class="keyword">object</span> capabilityValue)</span></h3>
</div>

Adds additional capability to the driver options.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDriverService</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">{DriverService}</span>&gt; driverServiceCreator)</span></h3>
</div>

Specifies the creator function of the driver service.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">{DriverAtataContextBuilder}</span></span>
    <h3><span class="body">WithDriverPath</span><span class="tail">(<span class="keyword">string</span> driverPath)</span></h3>
</div>

Specifies the directory containing the driver executable file.

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

#### Usage

```cs
AtataContext.Build().
    UseChrome().
        WithArguments("disable-extensions", "no-sandbox", "start-maximized").
    SetUp();
```