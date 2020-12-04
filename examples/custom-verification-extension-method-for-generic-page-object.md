---
layout: article
title: Custom Verification Extension Method for Generic Page Object
description: How to implement custom verification extension method for a generic page object.
---

{{ page.description }}
{:.lead}

## Given

There are similar page verifications in tests that are possible to extract to extention methods.

## Implementation

```cs
using Atata;

namespace SampleApp.UITests
{
    public static class IPageObjectVerificationProviderExtensions
    {
        public static TPageObject BeOnEditPage<TPageObject>(this IPageObjectVerificationProvider<TPageObject> should)
            where TPageObject : PageObject<TPageObject>
        {
            return should.Component.PageUrl.Should.WithSettings(should).Contain("/Edit.aspx");
        }
    }
}
```

## Usage

```cs
Go.To<SomePage>()
    .Should.BeOnEditPage();
```
{:.test}