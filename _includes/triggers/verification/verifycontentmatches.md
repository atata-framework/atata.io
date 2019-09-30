Specifies the verification of the page content. Verifies whether the component content matches any of the specified values. By default occurs upon the page object initialization.

```cs
[VerifyContentMatches(TermMatch.Contains, "Primary", "Secondary")]
public class SamplePage : Page<_>
{
    [VerifyContentMatches(TermMatch.StartsWith, "Start")]
    [VerifyContentMatches(TermMatch.EndsWith, "end")]
    public Link<_> SomeLink { get; private set; }
}
```

The example verifies that the page content should contain the text: "Primary" or "Secondary". Also, verifies that the content of `SomeLink` should start with "Start" text and end with "end".