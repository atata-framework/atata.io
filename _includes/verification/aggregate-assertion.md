Aggregate (multiple) assertion functionality allows execution of several `Should.*` assertions,
collect the failed results and produce a single exception containing a set of failed assertions.
Each failed assertion in scope of aggregate assert is also written to log.

There are 2 implemented strategies/approaches of aggregate assertion:
- **Native** - default Atata approach. Should be used when you don't use NUnit with Atata.
- **NUnit** - uses `Assert.Multiple` and other related methods of NUnit to provide a NUnit's assertion handling.

*Custom approach can also be implemented by implementing `IAggregateAssertionStrategy`.*

### Usage

`AggregateAssert` methods are present in `PageObject<TOwner>` and `AtataContext`.

#### Aggregate Assert Page Object

```cs
Go.To<SomeUserPage>()
    .AggregateAssert(x => x
        .ContactDetails.FirstName.Should.Equal("John")
        .ContactDetails.LastName.Should.Equal("Smith"));
```

Or:

```cs
Go.To<SomeUserPage>()
    .AggregateAssert(x =>
    {
        x.ContactDetails.FirstName.Should.Equal("John");
        x.ContactDetails.LastName.Should.Equal("Smith");
    });
```

#### Aggregate Assert Component

```cs
Go.To<SomeUserPage>()
    .AggregateAssert(x => x.ContactDetails, x =>
    {
        x.FirstName.Should.Equal("John");
        x.LastName.Should.Equal("Smith");
    });
```

#### Aggregate Assert Block

```cs
AtataContext.Current.AggregateAssert(() =>
{
    Go.To<SomeUserPage>()
        .ContactDetails.FirstName.Should.Equal("John")
        .ContactDetails.LastName.Should.Equal("Smith");

    // Do other assertions...
});
```

### Configuration

The following `AtataContextBuilder` methods are for configuring an aggregate assertion functionality:

```cs
public AtataContextBuilder UseAggregateAssertionExceptionType(Type exceptionType);

public AtataContextBuilder UseAggregateAssertionExceptionType<TException>()
    where TException : Exception;

public AtataContextBuilder UseAggregateAssertionStrategy(IAggregateAssertionStrategy strategy);

public AtataContextBuilder UseAggregateAssertionStrategy<TAggregateAssertionStrategy>()
    where TAggregateAssertionStrategy : IAggregateAssertionStrategy, new();

public AtataContextBuilder UseNUnitAggregateAssertionStrategy();
```

#### Apply NUnit Aggregate Assertion Strategy

When using NUnit, it is recommended to invoke `UseNUnitAggregateAssertionStrategy()` durin
`AtataContext` configuration in order to enable NUnit's built-in multiple assert functionality.
For other testing frameworks (xUnit, MSTest) the native Atata assertion functionality will work well by default.

```cs
AtataContext.Configure()
    // Do some initialization.
    .UseNUnitAggregateAssertionStrategy()
    .Build();
```