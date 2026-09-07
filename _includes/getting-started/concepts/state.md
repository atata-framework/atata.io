`public StateHierarchicalDictionary State { get; }` property is present in both `AtataContext` and `AtataSession`.
This property serves as a hierarchical object dictionary, allowing you to store objects at a higher level (e.g., global)
and retrieve them at a lower level (e.g., test).
This feature is particularly useful for managing complex test scenarios.

```cs
AtataContext.Global!.State["string key"] = "string value";
AtataContext.Global!.State.Set(new SomeObject(...));
//...
string stringValue = Context.State.Get<string>("string key");
SomeObject someObject = Context.State.Get<SomeObject>();
```
