An assertion in Atata is done using `Should` property of UI component or value provider property.

Assertion works with retries until a condition is met or time is out.
`AtataContext.VerificationTimeout` property is used with 5 seconds as the default value.
`AtataContext.VerificationRetryInterval` property is used with 500 milliseconds as the default value.

### Usage

```cs
Go.To<SomePage>()
    .SomeHeader.Should.BeVisible()
    .SomeText.Should.Be("Hello")
    .SomeParagraph.ComponentSize.Height.Should.BeGreater(50);
```

#### Without Retries

To execute an assertion without retries, use `AtOnce`:

```cs
Component.Should.AtOnce.BeVisible();
```

#### With Specific Retry Timeout

To execute an assertion with timeout (and/or retry interval) different from default one, use of one the following methods:

```cs
public TVerificationProvider Within(TimeSpan timeout, TimeSpan? retryInterval = null);

public TVerificationProvider WithinSeconds(double timeoutSeconds, double? retryIntervalSeconds = null);

public TVerificationProvider WithRetryInterval(TimeSpan retryInterval);

public TVerificationProvider WithRetryIntervalSeconds(double retryIntervalSeconds);
```

For example:

```cs
Component.Should.WithinSeconds(30).BeVisible();
```

### Configuration

The following `AtataContextBuilder` methods are for configuring an assertion functionality:

```cs
public AtataContextBuilder UseVerificationTimeout(TimeSpan timeout);

public AtataContextBuilder UseVerificationRetryInterval(TimeSpan interval);

public AtataContextBuilder UseAssertionExceptionType<TException>();

public AtataContextBuilder UseAssertionExceptionType(Type exceptionType);

public AtataContextBuilder UseNUnitAssertionExceptionType();
```