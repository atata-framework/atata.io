---
layout: article
title: Navigation to Specific Page After Click
description: How to perform the navigation to specific page after the button/link click.
---

{{ page.description }}
{:.lead}

## Given

There is a page containing link/button that navigates to another page.

## Implementation

`Button`, `Link` and `Clickable` controls support 2 generic arguments.
The first one is the type of page object to navigate to, e.g. `AnotherPage`.
The last one is the type of current page object, typically `_`.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        public Button<AnotherPage, _> ViewAnother { get; private set; }

        // Or using link:
        //public Link<AnotherPage, _> ViewAnother { get; private set; }
    }
}
```
{:.page-object}

```cs
Go.To<SomePage>().
    ViewAnother.ClickAndGo(); // Returns an instance of AnotherPage.
```
{:.test}