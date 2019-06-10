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

To find hidden element needs to add [Visibility Property](https://atata.io/control-search/#visibility) to any [Find Attributes](https://atata.io/control-search/#find-attributes).

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [FindById("some-id", Visibility = Visibility.Hidden)]
        public Control<_> HiddenElement { get; private set; }

        // Or using Visibility.Any allows finding visible and hidden states of the element at the same time:
        //public Control<_> HiddenElement { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SomePage>().
    HiddenElement.Should.Exist(); // Finds element and verifies that it exists on the DOM of the page.
```
{:.test}