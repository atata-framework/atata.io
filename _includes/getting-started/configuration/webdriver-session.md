```cs
builder.Sessions.AddWebDriver(x => x
    .UseStartScopes(AtataContextScopes.Test)
    .UseChrome(x => x
        .WithArguments(
            "disable-search-engine-choice-screen",
            "window-size=1200,800",
            "headless=new"))
    .UseBaseUrl(_config!.BaseUrl));
```

The main class for `WebDriverSession` configuration is `WebDriverSessionBuilder`,
which inherits from `WebSessionBuilder<TSession, TBuilder>`,
which in turn inherits from `AtataSessionBuilder<TSession, TBuilder>`.

#### `WebSessionBuilder<TSession, TBuilder>` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseBaseUrl</span><span class="tail">(<span class="keyword">string</span>? baseUrl)</span></h3>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseBaseUrl</span><span class="tail">(<span class="type">Uri</span>? baseUrl)</span></h3>
</div>

Sets the base URL.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseElementFindTimeout</span><span class="tail">(<span class="type">TimeSpan</span>? timeout)</span></h3>
</div>

Sets the element find timeout for session.
The default value is `null`.
When `null`, the value for session will be taken from
`BaseRetryTimeout`  or `AtataContext.BaseRetryTimeout`,
which are equal to `5` seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseElementFindRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span>? interval)</span></h3>
</div>

Sets the element find retry interval for session.
The default value is `null`.
When `null`, the value for session will be taken from
`BaseRetryInterval` or `AtataContext.BaseRetryInterval`,
which are equal to `200` milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseDomTestIdAttributeName</span><span class="tail">(<span class="keyword">string</span> name)</span></h3>
</div>

Sets the name of the DOM test identifier attribute.
The default value is `"data-testid"`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseDomTestIdAttributeDefaultCase</span><span class="tail">(<span class="type">TermCase</span> defaultCase)</span></h3>
</div>

Sets the default case of the DOM test identifier attribute.
The default value is `TermCase.Kebab`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">TBuilder</span></span>
    <h3><span class="body">UseWaitForDomImmutableStateTime</span><span class="tail">(<span class="type">TimeSpan</span> value)</span></h3>
</div>

Sets the waiting time span that is used as a time of immutable/stable DOM state.
The default value is `100` milliseconds.

#### `WebDriverSessionBuilder` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseChrome</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">ChromeDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates and configures a new builder for `ChromeDriver`
with default `WebDriverAliases.Chrome` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseFirefox</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">FirefoxDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates and configures a new builder for `FirefoxDriver`
with default `WebDriverAliases.Firefox` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseInternetExplorer</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">InternetExplorerDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates and configures a new builder for `InternetExplorerDriver`
with default `WebDriverAliases.InternetExplorer` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseEdge</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">EdgeDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates and configures a new builder for `EdgeDriver`
with default `WebDriverAliases.Edge` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseSafari</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">SafariDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates and configures a new builder for `SafariDriver`
with default `WebDriverAliases.Safari` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseRemoteDriver</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">RemoteDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates and configures a new builder for `RemoteWebDriver`
with default `WebDriverAliases.Remote` alias.
Sets this builder as a one to use for a driver creation.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureChrome</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">ChromeDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `ChromeDriver` with default `WebDriverAliases.Chrome` alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureChrome</span><span class="tail">(<span class="keyword">string</span> alias, <span class="type">Action</span>&lt;<span class="type">ChromeDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `ChromeDriver` with the specified `alias`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureFirefox</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">FirefoxDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `FirefoxDriver` with default `WebDriverAliases.Firefox` alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureFirefox</span><span class="tail">(<span class="keyword">string</span> alias, <span class="type">Action</span>&lt;<span class="type">FirefoxDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `FirefoxDriver` with the specified `alias`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureInternetExplorer</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">InternetExplorerDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `InternetExplorerDriver` with default `WebDriverAliases.InternetExplorer` alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureInternetExplorer</span><span class="tail">(<span class="keyword">string</span> alias, <span class="type">Action</span>&lt;<span class="type">InternetExplorerDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `InternetExplorerDriver` with the specified `alias`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureEdge</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">EdgeDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `EdgeDriver` with default `WebDriverAliases.Edge` alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureEdge</span><span class="tail">(<span class="keyword">string</span> alias, <span class="type">Action</span>&lt;<span class="type">EdgeDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `EdgeDriver` with the specified `alias`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureSafari</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">SafariDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `SafariDriver` with default `WebDriverAliases.Safari` alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureSafari</span><span class="tail">(<span class="keyword">string</span> alias, <span class="type">Action</span>&lt;<span class="type">SafariDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `SafariDriver` with the specified `alias`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureRemoteDriver</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">RemoteWebDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `RemoteWebDriver` with default `WebDriverAliases.Remote` alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureRemoteDriver</span><span class="tail">(<span class="keyword">string</span> alias, <span class="type">Action</span>&lt;<span class="type">RemoteWebDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Configures an existing or creates a new builder for `RemoteWebDriver` with the specified `alias`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">ConfigureDriver<wbr>&lt;<span class="type">TDriverBuilder</span>&gt;</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">TDriverBuilder</span>&gt; driverBuilderCreator, <span class="type">Action</span>&lt;<span class="type">TDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TDriverBuilder</span> : <span class="type">WebDriverBuilder</span>&lt;<span class="type">TDriverBuilder</span>&gt;</span>
</div>

Configures an existing or creates a new builder for `TDriverBuilder` by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseDriver<wbr>&lt;<span class="type">TDriverBuilder</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TDriverBuilder</span> : <span class="type">WebDriverBuilder</span>&lt;<span class="type">TDriverBuilder</span>&gt;, <span class="keyword">new</span>()</span>
</div>

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseDriver<wbr>&lt;<span class="type">TDriverBuilder</span>&gt;</span><span class="tail">(<span class="type">TDriverBuilder</span> driverBuilder, <span class="type">Action</span>&lt;<span class="type">TDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TDriverBuilder</span> : <span class="type">WebDriverBuilder</span>&lt;<span class="type">TDriverBuilder</span>&gt;</span>
</div>

Use the driver builder.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="keyword">string</span> alias)</span></h3>
</div>

Sets the driver to use by the specified alias.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="type">IWebDriver</span> driver, <span class="type">Action</span>&lt;<span class="type">CustomWebDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Use the specified driver instance.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseDriver</span><span class="tail">(<span class="type">Func</span>&lt;<span class="type">IWebDriver</span>&gt; driverFactory, <span class="type">Action</span>&lt;<span class="type">CustomWebDriverBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Use the custom driver factory method.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseDisposeDriver</span><span class="tail">(<span class="keyword">bool</span> disposeDriver)</span></h3>
</div>

Sets a value indicating whether to dispose the `WebDriverSession.Driver`
when `AtataSession.DisposeAsync` method is invoked.
The default value is `true`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">WebDriverSessionBuilder</span></span>
    <h3><span class="body">UseDefaultControlVisibility</span><span class="tail">(<span class="type">Visibility</span> visibility)</span></h3>
</div>

Sets the default control visibility.
The default value is `Visibility.Any`.