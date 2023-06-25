---
title: "Atata Templates 2.8.0 is Released"
description: "Atata Templates 2.8.0 Visual Studio extension is released with an update of package references."
release_version: "2.8.0"
---

[Atata Templates {{page.release_version}}](https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates)
Visual Studio extension is released with an update of package references.
{:.lead}

<!--more-->

## Changelog

### Changes and enhancements

- &#8203;{% include issue.md repo='tm' id=69 type='mj' %} Change `"headless"` to `"headless=new"` Chrome driver argument
- &#8203;{% include issue.md repo='tm' id=70 type='mn' %} Add ignoring of CS8618 warning to .NET 6 project templates
- &#8203;{% include issue.md repo='tm' id=71 type='mj' %} Update package references to latest versions
  - Atata - v2.8.1
  - Atata.Configuration.Json - v2.3.0
  - Atata.WebDriverSetup - v2.6.0
  - Microsoft.NET.Test.Sdk - v17.6.2
  - NLog - v5.2.0
  - NUnit3TestAdapter - v4.5.0
  - Selenium.WebDriver - v4.10.0

{% include download-link.html url="https://marketplace.visualstudio.com/items?itemName=YevgeniyShunevych.AtataTemplates" text="Atata Templates on Visual Studio Marketplace" %}