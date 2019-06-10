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

Finding hidden element can be easily changed by adding [Visibility Property](https://atata.io/control-search/#visibility) to any [Find Attributes](https://atata.io/control-search/#find-attributes) attributes.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [FindById("some-id", Visibility = Visibility.Hidden)]
        public Control<_> HiddenElement { get; private set; }

        // Or using Visibility.Any allows to find both states of element: visible and hidden:
        //public Control<_> HiddenElement { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SomePage>().
    HiddenElement.Should.Exist(); // Finds element and verifies that it is presented on the DOM of the page..
```
{:.test}