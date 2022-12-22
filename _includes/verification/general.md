The verification in Atata consists of assertion, expectation and waiting.
In order to verify a component or a value property, use the following properties:
- `.Should.*` - an assertion.
  For example: `UserName.Should.Be("John")`.
  If an assertion fails, throws an assertion exception.
- `.ExpectTo.*` - an expectation, which produces a warning in the end of a test.
  Many warnings can be collected together.
- `.WaitTo.*` - a waiting for a certain condition.
  For example: `Header.WaitTo.BeVisible()`.
  If a waiting fails, throws a timeout exception.

### Retries

A verification works with retries until a condition is met or time is out.
`AtataContext.VerificationTimeout` property is used with 5 seconds as the default value.
`AtataContext.VerificationRetryInterval` property is used with 500 milliseconds as the default value.

#### Without Retries

To execute an assertion without retries, use `AtOnce` property:

```cs
page.SomeInput.Should.AtOnce.BeVisible();
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
page.Component.Should.WithinSeconds(30).BeVisible();
```

### Negative Verification

In order to execute negative verification, use `Not`:

```cs
page.TextInput.Should.Not.BeEmpty();
page.SomeLost.Should.Not.Contain("some item");
```

### Ignore String Case

In order to ignore string case during verification, use `IgnoringCase` property:

```cs
page.SomeInput.Should.IgnoringCase.Equal("some value");
page.SomeStringList.Should.IgnoringCase.EqualSequence("a", "b", "c");
```

### Equality Comparison

It is possible to customize the comparison of objects, mostly complex objects.
Also this can be used for approximate comparison of values.

The base `VerificationProvider<TVerificationProvider, TOwner>` provides the following method:

```cs
public TVerificationProvider Using<T>(IEqualityComparer<T> equalityComparer);
```

#### Usage

```cs
page.SomeNumberInput.Should.Using(new CustomNumberEqualityComparer()).Equal(10.5);
```