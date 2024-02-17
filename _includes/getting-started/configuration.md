In `SetUp` method just invoke `AtataContext.Configure()` method that returns `AtataContextBuilder` instance,
then invoke configuration methods and finally invoke `Build()` method:

```cs
[SetUp]
public void SetUp()
{
    AtataContext.Configure()
        // TODO: Use configuration methods.
        .Build();
}
```

To clean up the `AtataContext`, call its `Dispose` method in the `TearDown` method:

```cs
[TearDown]
public void TearDown()
{
    AtataContext.Current?.Dispose();
}
```

The `Dispose` method also, by default, closes a web driver instance as well as a browser.

Also, it is recommended to extract a global setup/configuration to the global setup method:

```cs
[SetUpFixture]
public class SetUpFixture
{
    [OneTimeSetUp]
    public void GlobalSetUp()
    {
        AtataContext.GlobalConfiguration
            // TODO: Use configuration methods.
            .AutoSetUpDriverToUse();
    }
}
```

Consider taking a look at **[Atata.Configuration.Json](https://github.com/atata-framework/atata-configuration-json)**
for configuration through JSON files.
{:.info}