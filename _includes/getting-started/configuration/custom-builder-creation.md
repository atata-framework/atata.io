You can also configure `AtataContext` in a custom way, without using Atata integration packages.
There are several static `AtataContext` methods available to create `AtataContextBuilder` instance:

```cs
public static AtataContextBuilder CreateBuilder(AtataContextScope scope);

public static AtataContextBuilder CreateDefaultBuilder(AtataContextScope scope);

public static AtataContextBuilder CreateNonScopedBuilder();

public static AtataContextBuilder CreateDefaultNonScopedBuilder();
```

```cs
AtataContext.CreateBuilder(AtataContextScope.Test)
    // Configure the builder...
    .Build();
```

"Default" methods create a builder with default/blank configuration,
while non-"default" methods create a builder with configuration copied from the `AtataContext.BaseConfiguration`.

`AtataContextScope` is a enumeration containing the following values:
`Test`, `TestSuite`, `TestSuiteGroup`, `Namespace`, and `Global`.