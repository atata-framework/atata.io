The events functionality allows to subscribe to Atata built-in and custom events as well as publish events.

### EventBus

The core of the functionality is `IEventBus` interface,
which can used to subscribe to and publish events at any time of test cycle.
The `IEventBus` object is accessible through the `EventBus` property of `AtataContext`.

`IEventBus` provides the following methods:

```cs
void Publish<TEvent>(TEvent eventData);

object Subscribe<TEvent>(Action eventHandler);

object Subscribe<TEvent>(Action<TEvent> eventHandler);

object Subscribe<TEvent>(Action<TEvent, AtataContext> eventHandler);

object Subscribe<TEvent, TEventHandler>()
    where TEventHandler : class, IEventHandler<TEvent>, new();

object Subscribe<TEvent>(IEventHandler<TEvent> eventHandler);

void Unsubscribe(object subscription);

void UnsubscribeHandler(object eventHandler);

void UnsubscribeAll<TEvent>();

void UnsubscribeAll(Type eventType);
```

### IEventHandler

The event handler interface to implement for event handler classes:

```cs
public interface IEventHandler<in TEvent>
{
    void Handle(TEvent eventData, AtataContext context);
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

### EventSubscriptionsAtataContextBuilder

`EventSubscriptionsAtataContextBuilder` - the builder of event subscriptions, which is available through `EventSubscriptions` property of `AtataContextBuilder`.
It provides the methods to subscribe to Atata and custom events during `AtataContext` building.

The list of its methods:

```cs
public EventSubscriptionsAtataContextBuilder Add<TEvent>(Action eventHandler);

public EventSubscriptionsAtataContextBuilder Add<TEvent>(Action<TEvent> eventHandler);

public EventSubscriptionsAtataContextBuilder Add<TEvent>(Action<TEvent, AtataContext> eventHandler);

public EventSubscriptionsAtataContextBuilder Add<TEvent, TEventHandler>()
    where TEventHandler : class, IEventHandler<TEvent>, new();

public EventSubscriptionsAtataContextBuilder Add<TEvent>(IEventHandler<TEvent> eventHandler);

public EventSubscriptionsAtataContextBuilder Add(Type eventHandlerType);

public EventSubscriptionsAtataContextBuilder Add(Type eventType, Type eventHandlerType);
```

### Usage

#### Subscribe Action Event Handler

```cs
AtataContext.GlobalConfiguration
    .EventSubscriptions.Add<DriverInitEvent>(e => e.Driver.Maximize());
```

#### Subscribe Action Event Handler as a Method

Method can have no parameters, single event type parameter, or event type parameter with `AtataContext` parameter.

Examples:

```cs
private static void OnDriverInit()
{
}
```

```cs
private static void OnDriverInit(DriverInitEvent eventData)
{
}
```

```cs
private static void OnDriverInit(DriverInitEvent eventData, AtataContext context)
{
}
```

Then subscribe it:

```cs
AtataContext.GlobalConfiguration
    .EventSubscriptions.Add<DriverInitEvent>(OnDriverInit);
```

#### Create and Subscribe Specific Event Handler Class

Create an event handler class, for example for `DriverInitEvent`:

```cs
public class DriverInitEventHandler : IEventHandler<DriverInitEvent>
{
    public void Handle(DriverInitEvent eventData, AtataContext context)
    {
        // TODO: Implement.
    }
}
```

Subscribe it during `AtataContext` building:

```cs
AtataContext.GlobalConfiguration
    .EventSubscriptions.Add(new DriverInitEventHandler());
```

#### Create and Subscribe Universal Event Handler Class

Create a univeral event handler class, which can be used to subscribe to any event type:

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
AtataContext.GlobalConfiguration
    .EventSubscriptions.Add<DriverInitEvent>(new UniversalEventHandler())
    .EventSubscriptions.Add<AtataContextDeInitEvent>(new UniversalEventHandler());
```

### Built-in Events

#### AtataContext Events

- `AtataContextPreInitEvent` - occurs before `AtataContext` initialization.
- `AtataContextInitStartedEvent` - occurs when `AtataContext` is started to initialize.
- `AtataContextInitCompletedEvent` - occurs when `AtataContext` is initialized.
- `AtataContextDeInitEvent` - occurs when `AtataContext` is deinitializing.
- `AtataContextDeInitCompletedEvent` - occurs when `AtataContext` is deinitialized.

#### Driver Events

- `DriverInitEvent` - occurs when `AtataContext` driver is initializing.
- `DriverDeInitEvent` - occurs when `AtataContext` driver is deinitializing.

#### PageObject Events

- `PageObjectInitEvent` - occurs when `PageObject<TOwner>` is started to initialize.
- `PageObjectInitCompletedEvent` - occurs when `PageObject<TOwner>` is initialized.
- `PageObjectDeInitEvent` - occurs when `PageObject<TOwner>` is deinitialized.

#### Artifact Events

- `ArtifactAddedEvent` - occurs when an artifact file is saved.