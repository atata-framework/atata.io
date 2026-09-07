If you use Atata together with Atata.NUnit, Atata.Xunit.v3 or similar Atata integration package,
you will not need to create an instance of `AtataContextBuilder`.
You will rather configure `AtataContextBuilder` argument in one of the methods of `GlobalFixture`, like `ConfigureAtataContextBaseConfiguration`
or in a test suite method like `ConfigureSuiteAtataContext`.

```cs
public sealed class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextBaseConfiguration(AtataContextBuilder builder)
    {
        // TODO: Configure the builder...
    }
}
```

```cs
public sealed class SomeTests : AtataTestSuite
{
    protected override void ConfigureSuiteAtataContext(AtataContextBuilder builder)
    {
        // TODO: Configure the builder...
    }
}
```

Look for all the available virtual methods with `AtataContextBuilder` parameter in the corresponding package repository page, e.g. [Atata.NUnit](https://github.com/atata-framework/atata-nunit).
{:.info}