---
title: "Atata Templates 1.8.0 is Released"
description: "Atata Templates 1.8.0 Visual Studio extension is released with the new Atata NUnit Advanced Test Project (.NET Core) project template."
release_version: "1.8.0"
---

[Atata Templates {{page.release_version}}](https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates)
Visual Studio extension is released with the new "Atata NUnit Advanced Test Project (.NET Core)" project template.
{:.lead}

<!--more-->

## Changelog

### New Features

- &#8203;{% include issue.md repo='tm' id=28 type='mj' %} Add "Atata NUnit Advanced Test Project (.NET Core)" project template
- &#8203;{% include issue.md repo='tm' id=36 type='mj' %} Add `SetUpFixture.cs` to "Atata NUnit Basic Test Project (.NET Core)" project template
- &#8203;{% include issue.md repo='tm' id=37 type='mj' %} Add `SetUpFixture.cs` to "Atata NUnit Basic Test Project (.NET Framework)" project template

### Changes and Enhancements

- &#8203;{% include issue.md repo='tm' id=29 type='mn' %} Add `CopyLocalLockFileAssemblies` project property to "Atata NUnit Test Project (.NET Core)" project template
- &#8203;{% include issue.md repo='tm' id=30 type='mj' %} Rename "Atata NUnit Test Project (.NET Framework)" project template to "Atata NUnit Basic Test Project (.NET Framework)"
- &#8203;{% include issue.md repo='tm' id=31 type='mj' %} Rename "Atata NUnit Test Project (.NET Core)" project template to "Atata NUnit Basic Test Project (.NET Core)"
- &#8203;{% include issue.md repo='tm' id=32 type='mj' %} Update package references to latest versions
  - `Atata` - v1.8.0
  - `Microsoft.NET.Test.Sdk` - v16.8.0
- &#8203;{% include issue.md repo='tm' id=33 type='mn' %} Remove `AtataSettings.cs` from "Atata NUnit Basic Test Project (.NET Core)" project template
- &#8203;{% include issue.md repo='tm' id=34 type='mn' %} Remove `AtataSettings.cs` from "Atata NUnit Basic Test Project (.NET Framework)" project template
- &#8203;{% include issue.md repo='tm' id=35 type='mn' %} Update .NET Framework project templates to reference .NET 4.6 version of Atata and Atata.WebDriverExtras when target project .NET version >= 4.6

{% include download-link.html url="https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates" text="Atata Templates on Visual Studio Marketplace" %}