---
layout: article
title: Finding Hidden Element
description: How to find hidden control/element on a page.
---

{{ page.description }}
{:.lead}

## Given

There is a page containing some hidden element (`type="hidden"`, CSS `opacity: 0`, CSS `display: none`, etc.).

By default, almost all Atata controls during element finding use `Visibility.Visible`, meaning to filter only visible elements.
{:.info}

## Implementation

To find hidden element, set [Visibility](/control-search/#visibility) property of specific [FindAttribute](/control-search/#findattribute).

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [FindById("some-id", Visibility = Visibility.Hidden)] // Or Visibility.Any to find element regardless of visibility.
        public Control<_> HiddenElement { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SomePage>().
    HiddenElement.Should.BePresent(); // Verifies that control/element exists on the DOM of the page.
```
{:.test}