Sessions can be registered or configured through the methods of `Sessions` property of `AtataContextBuilder` during a context configuration.

```cs
builder.Sessions.AddWebDriver(x => x
    .UseStartScopes(AtataContextScopes.Test)
    .UseBaseUrl(baseUrl));
```

```cs
builder.Sessions.Borrow<WebDriverSession>("primary");
```

```cs
builder.Sessions.TakeFromPool<WebDriverSession>(x => x.UseSharedMode(true));
```

Also it is possible to build or request a session directly using methods of `Sessions` property of `AtataContext` instance.
{:.info}

#### `AtataSessionsBuilder` methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Add<wbr>&lt;<span class="type">TSessionBuilder</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TSessionBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSessionBuilder</span> : <span class="type">IAtataSessionBuilder</span>, <span class="keyword">new</span>()</span>
</div>

Creates a new instance of the builder of the specified `TSessionBuilder` type,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Add</span><span class="tail">(<span class="type">IAtataSessionProvider</span> sessionProvider)</span></h3>
</div>

Adds the specified session provider.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Configure<wbr>&lt;<span class="type">TSessionBuilder</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">TSessionBuilder</span>&gt; configure, <span class="type">ConfigurationMode</span> mode = <span class="keyword">default</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSessionBuilder</span> : <span class="type">IAtataSessionBuilder</span></span>
</div>

Configures existing nameless `TSessionBuilder` session builder.
The `mode` (`ConfigurationMode.ConfigureOrThrow` by default)
parameter specifies the behavior of the fallback logic when the session builder is not found:
- `ConfigurationMode.ConfigureOrThrow` - configures the builder or throws the `AtataSessionBuilderNotFoundException` if it is not found.
- `ConfigurationMode.ConfigureIfExists` - configures the builder only if it exists; otherwise, no action is taken.
- `ConfigurationMode.ConfigureOrAdd` - configures the builder if it exists, or adds a new builder if it does not exist.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Configure<wbr>&lt;<span class="type">TSessionBuilder</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? name, <span class="type">Action</span>&lt;<span class="type">TSessionBuilder</span>&gt; configure, <span class="type">ConfigurationMode</span> mode = <span class="keyword">default</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSessionBuilder</span> : <span class="type">IAtataSessionBuilder</span></span>
</div>

Configures existing `TSessionBuilder` session builder that has the specified `name`.
The `mode` (`ConfigurationMode.ConfigureOrThrow` by default)
parameter specifies the behavior of the fallback logic when the session builder is not found:
- `ConfigurationMode.ConfigureOrThrow` - configures the builder or throws the `AtataSessionBuilderNotFoundException` if it is not found.
- `ConfigurationMode.ConfigureIfExists` - configures the builder only if it exists; otherwise, no action is taken.
- `ConfigurationMode.ConfigureOrAdd` - configures the builder if it exists, or adds a new builder if it does not exist.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Configure</span><span class="tail">(<span class="type">Type</span>? sessionType, <span class="keyword">string</span>? name, <span class="type">Action</span>&lt;<span class="type">TSessionBuilder</span>&gt; configure, <span class="type">ConfigurationMode</span> mode = <span class="keyword">default</span>)</span></h3>
</div>

Configures existing `TSessionBuilder` session builder that has the specified `sessionType` and `name`.
The `mode` (`ConfigurationMode.ConfigureOrThrow` by default)
parameter specifies the behavior of the fallback logic when the session builder is not found:
- `ConfigurationMode.ConfigureOrThrow` - configures the builder or throws the `AtataSessionBuilderNotFoundException` if it is not found.
- `ConfigurationMode.ConfigureIfExists` - configures the builder only if it exists; otherwise, no action is taken.
- `ConfigurationMode.ConfigureOrAdd` - configures the builder if it exists, or adds a new builder if it does not exist.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Borrow<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">AtataSessionBorrowRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSession</span> : <span class="type">AtataSession</span></span>
</div>

Creates a request to borrow a session of the specified `TSession` type,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Borrow<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? name, <span class="type">Action</span>&lt;<span class="type">AtataSessionBorrowRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSession</span> : <span class="type">AtataSession</span></span>
</div>

Creates a request to borrow a session of the specified `TSession` type with the specified `name`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Borrow</span><span class="tail">(<span class="type">Type</span> sessionType, <span class="type">Action</span>&lt;<span class="type">AtataSessionBorrowRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates a request to borrow a session of the specified `sessionType`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Borrow</span><span class="tail">(<span class="keyword">string</span> name, <span class="type">Action</span>&lt;<span class="type">AtataSessionBorrowRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates a request to borrow a session of the specified `name`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Borrow</span><span class="tail">(<span class="type">Type</span>? sessionType, <span class="keyword">string</span>? name, <span class="type">Action</span>&lt;<span class="type">AtataSessionBorrowRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates a request to borrow a session of the specified `sessionType` and `name`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeFromPool<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">AtataSessionPoolRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSession</span> : <span class="type">AtataSession</span></span>
</div>

Creates a request to take a session from the pool of the specified `TSession` type,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeFromPool<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? name, <span class="type">Action</span>&lt;<span class="type">AtataSessionPoolRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSession</span> : <span class="type">AtataSession</span></span>
</div>

Creates a request to take a session from the pool of the specified `TSession` type with the specified `name`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeFromPool</span><span class="tail">(<span class="type">Type</span> sessionType, <span class="type">Action</span>&lt;<span class="type">AtataSessionPoolRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates a request to take a session from the pool of the specified `sessionType`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeFromPool</span><span class="tail">(<span class="keyword">string</span> name, <span class="type">Action</span>&lt;<span class="type">AtataSessionPoolRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates a request to take a session from the pool of the specified `name`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeFromPool</span><span class="tail">(<span class="type">Type</span>? sessionType, <span class="keyword">string</span>? name, <span class="type">Action</span>&lt;<span class="type">AtataSessionPoolRequestBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Creates a request to take a session from the pool of the specified `sessionType` and `name`,
calls the `configure` delegate,
adds it to the session providers list.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Remove</span><span class="tail">(<span class="type">IAtataSessionProvider</span> sessionProvider)</span></h3>
</div>

Removes the specified session provider.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAll<wbr>&lt;<span class="type">TSessionBuilder</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSessionBuilder</span> : <span class="type">IAtataSessionBuilder</span></span>
</div>

Removes all session providers of the specified `TSessionProvider` type.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAll<wbr>&lt;<span class="type">TSessionBuilder</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? name)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSessionBuilder</span> : <span class="type">IAtataSessionBuilder</span></span>
</div>

Removes all session providers of the specified `TSessionProvider` type and `name`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAll</span><span class="tail">(<span class="type">Type</span>? sessionType, <span class="keyword">string</span>? name)</span></h3>
</div>

Removes all session providers by the specified `sessionType` and `name`.
At least one of the parameters should be not null.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAllBySessionType<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">()</span></h3>
</div>

Removes all session providers of the specified `TSession` session type regardless of name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAllBySessionType<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? name)</span></h3>
</div>

Removes all session providers of the specified `TSession` session type and `name`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAllBySessionType</span><span class="tail">(<span class="type">Type</span> sessionType)</span></h3>
</div>

Removes all session providers of the specified `sessionType` session type regardless of name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAllBySessionType</span><span class="tail">(<span class="type">Type</span> sessionType, <span class="keyword">string</span>? name)</span></h3>
</div>

Removes all session providers of the specified `sessionType` session type and `name`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">RemoveAllBySessionName</span><span class="tail">(<span class="keyword">string</span> name)</span></h3>
</div>

Removes all session providers with the specified `name`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAll<wbr>&lt;<span class="type">TSessionBuilder</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSessionBuilder</span> : <span class="type">IAtataSessionBuilder</span></span>
</div>

Disables all session providers of the specified `TSessionProvider` type.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAll<wbr>&lt;<span class="type">TSessionBuilder</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? name)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">TSessionBuilder</span> : <span class="type">IAtataSessionBuilder</span></span>
</div>

Disables all session providers of the specified `TSessionProvider` type and `name`.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAll</span><span class="tail">(<span class="type">Type</span>? sessionType, <span class="keyword">string</span>? name)</span></h3>
</div>

Disables all session providers by the specified `sessionType` and `name`.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.
At least one of the parameters should be not null.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAllBySessionType<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">()</span></h3>
</div>

Disables all session providers of the specified `TSession` session type regardless of name.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAllBySessionType<wbr>&lt;<span class="type">TSession</span>&gt;</span><span class="tail">(<span class="keyword">string</span>? name)</span></h3>
</div>

Disables all session providers of the specified `TSession` session type and `name`.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAllBySessionType</span><span class="tail">(<span class="type">Type</span> sessionType)</span></h3>
</div>

Disables all session providers of the specified `sessionType` session type regardless of name.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAllBySessionType</span><span class="tail">(<span class="type">Type</span> sessionType, <span class="keyword">string</span>? name)</span></h3>
</div>

Disables all session providers of the specified `sessionType` session type and `name`.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">DisableAllBySessionName</span><span class="tail">(<span class="keyword">string</span> name)</span></h3>
</div>

Disables all session providers with the specified `name`.
Sets their `IAtataSessionProvider.StartScopes` property to `AtataContextScopes.None`,
so that the sessions will not automatically start for any scope.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Clear</span><span class="tail">()</span></h3>
</div>

Clears all session providers.

#### `AtataSessionsBuilder` extension methods for WebDriver sessions

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddWebDriver</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">WebDriverSessionBuilder</span>&gt;? configure = <span class="keyword">null</span>)</span></h3>
</div>

Adds a new instance of `WebDriverSessionBuilder` builder.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">ConfigureWebDriver</span><span class="tail">(<span class="type">Action</span>&lt;<span class="type">WebDriverSessionBuilder</span>&gt; configure, <span class="type">ConfigurationMode</span> mode = <span class="keyword">default</span>)</span></h3>
</div>

Configures existing nameless `WebDriverSessionBuilder` session builder.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">ConfigureWebDriver</span><span class="tail">(<span class="keyword">string</span>? name, <span class="type">Action</span>&lt;<span class="type">WebDriverSessionBuilder</span>&gt; configure, <span class="type">ConfigurationMode</span> mode = <span class="keyword">default</span>)</span></h3>
</div>

Configures existing `WebDriverSessionBuilder` session builder that has the specified `name`.