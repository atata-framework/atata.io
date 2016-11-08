In the `SetUp` method just invoke `AtataContext.Build()` method, invoke configuration methods and finally invoke `SetUp()` method:

```cs
[SetUp]
public void SetUp()
{
    AtataContext.Build().
        // TODO: Invoke configuration methods.
        SetUp();
}
```

To clean up the `AtataContext` do the following on the `TearDown` method:

```cs
[TearDown]
public void TearDown()
{
    AtataContext.Current.CleanUp();
}
```