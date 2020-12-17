---
title: "Atata Templates 1.9.0 is Released"
description: "Atata Templates 1.9.0 Visual Studio extension is released with update of package references."
release_version: "1.9.0"
---

[Atata Templates {{page.release_version}}](https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates)
Visual Studio extension is released with update of package references.
{:.lead}

<!--more-->

## Changelog

### Changes and Enhancements

- &#8203;{% include issue.md repo='tm' id=38 type='mj' %} Update package references to latest versions
  - `Atata` - v1.9.0
  - `Atata.Configuration.Json` - v1.5.0
  - `Atata.WebDriverExtras` - v1.4.0
  - `Microsoft.NET.Test.Sdk` - v16.8.3
- &#8203;{% include issue.md repo='tm' id=39 type='mj' %} Remove setup functionality from "Atata NUnit Base Test Fixture" item template

### Fixes

- &#8203;{% include issue.md repo='tm' id=40 type='fx' %} Redundant `Build()` call in `SetUpFixture` classes

{% include download-link.html url="https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates" text="Atata Templates on Visual Studio Marketplace" %}