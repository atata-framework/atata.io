---
layout: article
title: Finding Hidden Element
description: How to find hidden element on page object or popup.
---

{{ page.description }}
{:.lead}

## Given

There is a page containing some hidden element (type="hidden", CSS opacity: 0, etc.).

## Implementation

Any .

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [FindById("some-id", Visibility = Visibility.Hidden)]
        public Control<_> HiddenElement { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SomePage>().
    HiddenElement.Should.Exist(); // Returns an instance of AnotherPage.
```
{:.test}