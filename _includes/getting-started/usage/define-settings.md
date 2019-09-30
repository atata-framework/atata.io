Global settings are applied via assembly attributes. Add `AtataSettings.cs` file to the project.

`AtataSettings.cs`
{:.file-name}

```cs
using Atata;

[assembly: Culture("en-us")]
[assembly: VerifyTitleSettings(Format = "{0} - Atata Sample App")]
```