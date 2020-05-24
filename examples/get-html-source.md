---
layout: article
title: Get HTML Source
description: How to get HTML source of the page last loaded by the browser.
---

{{ page.description }}
{:.lead}

## Implementation

Upon opening any page we can get its source.

```cs
var html = AtataContext.Current.Driver.PageSource; // gets the page source.
```
{:.test}