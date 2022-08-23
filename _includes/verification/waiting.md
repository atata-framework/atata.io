The waiting functionality basically does the same as assertion does,
but it uses `WaitingTimeout` and `WaitingRetryInterval` property values of `AtataContext`,
and when a waiting fails, it throws a `TimeoutException`.

### Usage

The usage is similar to assertions.
Just use `WaitTo` instead of `Should`:

```cs
Component.WaitTo.BeEnabled()
```

```cs
Component.Content.WaitTo.Be("...")
```

If a condition is not met during the waiting time, which is taken from `AtataContext`
by default (`AtataContext.Current.WaitingTimeout` and `AtataContext.Current.WaitingRetryInterval`),
then `TimeoutException` is thrown.

### Configuration

The following `AtataContextBuilder` methods are for configuring a waiting functionality:

```cs
public AtataContextBuilder UseWaitingTimeout(TimeSpan timeout);

public AtataContextBuilder UseWaitingRetryInterval(TimeSpan interval);
```