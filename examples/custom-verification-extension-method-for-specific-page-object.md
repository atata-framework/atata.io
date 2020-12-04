---
layout: article
title: Custom Verification Extension Method for Specific Page Object
description: How to implement custom verification extension method for a specific page object.
---

{{ page.description }}
{:.lead}

## Given

There is a repeating verification of a specific page in different tests.
In its turn, it is possible to simplify it by extracting to extention method. 

## Implementation

```cs
using Atata;

namespace SampleApp.UITests
{
    public static class IPageObjectVerificationProviderExtensions
    {
        public static SomePage HaveSomething(this IPageObjectVerificationProvider<SomePage> should)
        {
            return should.Component.SomeProperty.Should.WithSettings(should).Equal("...");
        }
    }
}
```

## Usage

```cs
Go.To<SomePage>()
    .Should.HaveSomething();
```
{:.test}