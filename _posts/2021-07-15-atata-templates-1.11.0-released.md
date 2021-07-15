---
title: "Atata Templates 1.11.0 is Released"
description: "Atata Templates 1.11.0 Visual Studio extension is released with features added to test project templates."
release_version: "1.11.0"
---

[Atata Templates {{page.release_version}}](https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates)
Visual Studio extension is released with features added to test project templates.
{:.lead}

<!--more-->

## Changelog

### New Features

- &#8203;{% include issue.md repo='tm' id=47 type='mj' %} Add `FileScreenshotConsumer` to `AtataContext` in test project templates
- &#8203;{% include issue.md repo='tm' id=48 type='mj' %} Set Artifacts as Chrome download directory in `Atata.json` of "Atata NUnit Advanced Test Project (.NET Core)"
- &#8203;{% include issue.md repo='tm' id=49 type='mj' %} Add `nlog-file` log consumer to `Atata.json` in "Atata NUnit Advanced Test Project (.NET Core)"

### Changes and Enhancements

- &#8203;{% include issue.md repo='tm' id=45 type='mj' %} Remove `<CopyLocalLockFileAssemblies>` from .NET Core project templates
- &#8203;{% include issue.md repo='tm' id=46 type='mj' %} Update package references to latest versions
  - `Atata` - v1.11.2
  - `Atata.Configuration.Json` - v1.6.0
  - `NUnit` - v3.13.2
  - `NUnit3TestAdapter` - v4.0.0
  - `Microsoft.NET.Test.Sdk` - v16.10.0
- &#8203;{% include issue.md repo='tm' id=50 type='mj' %} Change target framework from .NET Core 2.1 to .NET Core 3.1 in "Atata NUnit Advanced Test Project (.NET Core)" and "Atata NUnit Basic Test Project (.NET Core)"

{% include download-link.html url="https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates" text="Atata Templates on Visual Studio Marketplace" %}