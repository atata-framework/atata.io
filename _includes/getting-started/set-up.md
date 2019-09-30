In `SetUp` method just invoke `AtataContext.Configure()` method that returns `AtataContextBuilder` instance, then invoke configuration methods and finally invoke `Build()` method:

```cs
[SetUp]
public void SetUp()
{
    AtataContext.Configure().
        // TODO: Invoke configuration methods.
        Build();
}
```

To clean up the `AtataContext` do the following in the `TearDown` method:

```cs
[TearDown]
public void TearDown()
{
    AtataContext.Current.CleanUp();
}
```

It also closes web driver instance as well as a browser.