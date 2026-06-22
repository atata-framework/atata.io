---
layout: article
title: Custom verification extension method for generic page object
description: How to implement custom verification extension method for a generic page object.
---

{{ page.description }}
{:.lead}

## Given

There are similar page verifications in tests that are possible to extract to extension methods.

## Implementation

```cs
using Atata;

namespace SampleApp.UITests;

public static class IPageObjectVerificationProviderExtensions
{
    public static TPageObject BeOnEditPage<TPageObject>(this IPageObjectVerificationProvider<TPageObject> should)
        where TPageObject : PageObject<TPageObject>
    {
        return should.Component.PageUrl.Should.WithSettings(should).Contain("/Edit.aspx");
    }
}
```

## Usage

```cs
Go.To<SomePage>()
    .Should.BeOnEditPage();
```
{:.test}