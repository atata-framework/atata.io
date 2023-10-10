This functionality is similar to the meaning of "soft assertions" term and provides warnings.

If the test you are writing is quite complex and you need to do several non-critical assertions
during the test flow without breaking the test with an assertion exception
when the first assertion fails, the expectation functionality is for the help.

An expectation doesn't throw an exception on failure, but it writes a warning assertion result to the log and adds it to `AtataContext.Current.PendingFailureAssertionResults` collection.
When on `TearDown` `AtataContext.Current?.Dispose()` is invoked,
after the actual cleaning it will throw aggregate assertion exception with all found expectation failures.
When using NUnit (`AtataContextBuilder.UseNUnitWarningReportStrategy()`),
it will record every expectation failure as NUnit warning, which is similar.
It is also absolutely valid to use expectations inside `AggregateAssert` sections.

### Usage

The usage is similar to assertions.
Just use `ExpectTo` instead of `Should`:

```cs
Component.ExpectTo.BeVisible()
```

### Configuration

The following `AtataContextBuilder` methods are for configuring an expectation functionality:

```cs
public AtataContextBuilder UseVerificationTimeout(TimeSpan timeout);

public AtataContextBuilder UseVerificationRetryInterval(TimeSpan interval);

public AtataContextBuilder UseWarningReportStrategy(IWarningReportStrategy strategy);

public AtataContextBuilder UseNUnitWarningReportStrategy();
```

When using NUnit, it is available to invoke `UseNUnitWarningReportStrategy()` during `AtataContext` configuration
to record warnings as NUnit's built-in [warnings](https://docs.nunit.org/articles/nunit/writing-tests/Warnings.html).
For other testing frameworks (xUnit, MSTest) the native Atata expectation functionality will work well by default.
