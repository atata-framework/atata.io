The events functionality allows to subscribe to Atata built-in and custom events as well as publish events.

### EventBus

The core of the functionality is `IEventBus` interface,
which can used to subscribe to and publish events at any time of test cycle.
The `IEventBus` object is accessible through the `EventBus` property of `AtataContext`.

`IEventBus` provides the following methods:

```cs
void Publish<TEvent>(TEvent eventData);

Task PublishAsync<TEvent>(TEvent eventData);

Task PublishAsync<TEvent>(TEvent eventData, CancellationToken cancellationToken);

object Subscribe<TEvent>(Action eventHandler);

object Subscribe<TEvent>(Action<TEvent> eventHandler);

object Subscribe<TEvent>(Action<TEvent, AtataContext> eventHandler);

object Subscribe<TEvent>(Func<CancellationToken, Task> eventHandler);

object Subscribe<TEvent>(Func<TEvent, CancellationToken, Task> eventHandler);

object Subscribe<TEvent>(Func<TEvent, AtataContext, CancellationToken, Task> eventHandler);

object Subscribe<TEvent, TEventHandler>()
    where TEventHandler : class, IEventHandler<TEvent>, new();

object Subscribe<TEvent>(IEventHandler<TEvent> eventHandler);

object Subscribe<TEvent>(IAsyncEventHandler<TEvent> eventHandler);

void Unsubscribe(object subscription);

void UnsubscribeHandler(object eventHandler);

void UnsubscribeAll<TEvent>();

void UnsubscribeAll(Type eventType);

void UnsubscribeAll();
```

### IEventHandler

The event handler interface to implement for event handler classes:

```cs
public interface IEventHandler<in TEvent>
{
    void Handle(TEvent eventData, AtataContext context);
}
```

### IAsyncEventHandler

The event handler interface to implement for async event handler classes:

```cs
public interface IAsyncEventHandler<in TEvent>
{
    Task HandleAsync(TEvent eventData, AtataContext context, CancellationToken cancellationToken);
}
```

### IConditionalEventHandler

The event handler interface to implement for conditional event handler classes:

```cs
public interface IConditionalEventHandler<in TEvent> : IEventHandler<TEvent>
{
    bool CanHandle(TEvent eventData, AtataContext context);
}
```

### IConditionalAsyncEventHandler

The event handler interface to implement for conditional async event handler classes:

```cs
public interface IConditionalAsyncEventHandler<in TEvent> : IAsyncEventHandler<TEvent>
{
    bool CanHandle(TEvent eventData, AtataContext context);
}
```

### EventSubscriptionsBuilder&lt;TRootBuilder&gt;

`EventSubscriptionsBuilder<TRootBuilder>` - a base abstract builder of event subscriptions.
Its inherited classes are:
- `AtataContextEventSubscriptionsBuilder` - available through `EventSubscriptions` property of `AtataContextBuilder`.
- `AtataSessionEventSubscriptionsBuilder<TSessionBuilder>`- available through `EventSubscriptions` property of `AtataSessionBuilder<TSession, TBuilder>`. 

The base builder class provides methods to subscribe to Atata and custom events.

#### Methods

```cs
public TRootBuilder Add<TEvent>(Action eventHandler);

public TRootBuilder Add<TEvent>(Action<TEvent> eventHandler);

public TRootBuilder Add<TEvent>(Action<TEvent, AtataContext> eventHandler);

public TRootBuilder Add<TEvent>(Func<CancellationToken, Task> eventHandler);

public TRootBuilder Add<TEvent>(Func<TEvent, CancellationToken, Task> eventHandler);

public TRootBuilder Add<TEvent>(Func<TEvent, AtataContext, CancellationToken, Task> eventHandler);

public TRootBuilder Add<TEvent, TEventHandler>()
    where TEventHandler : class, new();

public TRootBuilder Add<TEvent>(IEventHandler<TEvent> eventHandler);

public TRootBuilder Add<TEvent>(IAsyncEventHandler<TEvent> eventHandler);

public TRootBuilder Add(Type eventHandlerType);

public TRootBuilder Add(Type eventType, Type eventHandlerType);

public TRootBuilder RemoveAll(Predicate<EventSubscriptionItem> match);
```

`AtataContextEventSubscriptionsBuilder` contains one additional method that give an ability so subscribe on events for specified scopes only:

```cs
public EventSubscriptionsBuilder<AtataContextBuilder> For(AtataContextScopes scopes);
```

### Usage

#### Subscribe action event handler

```cs
builder.EventSubscriptions.Add<WebDriverInitCompletedEvent>(e => e.Driver.Maximize());
```

#### Subscribe action event handler as a method

A method can have no parameters, single event type parameter, or event type parameter with `AtataContext` parameter.

Examples:

```cs
private static void OnWebDriverInitCompleted()
{
}
```

```cs
private static void OnWebDriverInitCompleted(WebDriverInitCompletedEvent eventData)
{
}
```

```cs
private static void OnWebDriverInitCompleted(WebDriverInitCompletedEvent eventData, AtataContext context)
{
}
```

Then subscribe it:

```cs
builder.EventSubscriptions.Add<WebDriverInitCompletedEvent>(OnWebDriverInitCompleted);
```

#### Create and subscribe specific event handler class

Create an event handler class, for example for `WebDriverInitCompletedEvent`:

```cs
public class WebDriverInitCompletedEventHandler : IEventHandler<WebDriverInitCompletedEvent>
{
    public void Handle(WebDriverInitCompletedEvent eventData, AtataContext context)
    {
        // TODO: Implement.
    }
}
```

Subscribe it during `AtataContext` building:

```cs
builder.EventSubscriptions.Add(new WebDriverInitCompletedEventHandler());
```

#### Create and subscribe universal event handler class

Create a universal event handler class, which can be used to subscribe to any event type:

```cs
private class UniversalEventHandler : IEventHandler<object>
{
    public void Handle(object eventData, AtataContext context)
    {
        // TODO: Implement.
    }
}
```

Subscribe it during `AtataContext` building to different events:

```cs
builder
    .EventSubscriptions.Add<WebDriverInitCompletedEvent>(new UniversalEventHandler())
    .EventSubscriptions.Add<AtataContextInitCompletedEvent>(new UniversalEventHandler());
```

### Built-in events

#### AtataContext events

- `AtataContextPreInitEvent` - occurs before `AtataContext` initialization.
- `AtataContextInitStartedEvent` - occurs when `AtataContext` is started to initialize.
- `AtataContextInitCompletedEvent` - occurs when `AtataContext` is initialized.
- `AtataContextDeInitStartedEvent` - occurs when `AtataContext` is started to deinitialize.
- `AtataContextDeInitCompletedEvent` - occurs when `AtataContext` is deinitialized.

#### AtataSession events

- `AtataSessionAssignedToContextEvent` - occurs when `AtataSession` is assigned to `AtataContext`.
- `AtataSessionUnassignedFromContextEvent` - occurs when `AtataSession` is unassigned from `AtataContext`.
- `AtataSessionInitStartedEvent` - occurs when `AtataSession` is started to initialize.
- `AtataSessionInitCompletedEvent` - occurs when `AtataSession` is initialized.
- `AtataSessionDeInitStartedEvent` - occurs when `AtataSession` is started to deinitialize.
- `AtataSessionDeInitCompletedEvent` - occurs when `AtataSession` is deinitialized.

#### Artifact events

- `ArtifactAddedEvent` - occurs when an artifact file is saved.

#### PageObject events

- `PageObjectInitStartedEvent` - occurs when `PageObject<TOwner>` is started to initialize.
- `PageObjectTransitionInCompletedEvent` - occurs when `PageObject<TOwner>` transition in is completed.
  That is, navigation to the current page object occurred in the same browser tab
  by interacting with the previous page object, rather than by directly navigating to a URL.
- `PageObjectTransitionOutCompletedEvent` - occurs when `PageObject<TOwner>` transition out is completed.
  That is, navigation to the next page object occurred in the same browser tab
  by interacting with the current page object, rather than by directly navigating to a URL.
- `PageObjectInitCompletedEvent` - occurs when `PageObject<TOwner>` is initialized.
- `PageObjectDeInitCompletedEvent` - occurs when `PageObject<TOwner>` is deinitialized.

#### WebDriver events

- `WebDriverInitCompletedEvent` - occurs when `WebDriverSession.Driver` is initialized.
- `WebDriverDeInitStartedEvent` - occurs when `WebDriverSession.Driver` is started to deinitialize.