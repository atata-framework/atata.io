---
layout: article
title: Navigation to Popup And Back
description: How to perform the navigation to popup page object and back.
---

{{ page.description }}
{:.lead}

## Given

There is a page containing button that opens popup dialog.
Let's say confirmation dialog.
You press "Confirm" button, the dialog closes, and test continues on the original host page.

## Implementation

Define a generic page object class of popup window, by inheriting it from `PopupWindow<TOwner>` class.

```cs
using Atata;

namespace SampleApp.UITests
{
    [PageObjectDefinition("div", ContainingClass = "some-dialog-class")]
    public class ConfirmationDialog<TNavigateTo> : PopupWindow<ConfirmationDialog<TNavigateTo>>
        where TNavigateTo : PageObject<TNavigateTo>
    {
        public Button<TNavigateTo, ConfirmationDialog<TNavigateTo>> Confirm { get; private set; }

        public Button<TNavigateTo, ConfirmationDialog<TNavigateTo>> Cancel { get; private set; }
    }
}
```
{:.page-object}

`TNavigateTo` will be used as a type of a page object that is a host page object of this popup.
Therefore, this generic popup page object can be used on different other host page objects.

Now let's use it in another page object as a target of navigation:

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        [GoTemporarily] // Use [GoTemporarily] when you need this page object to preserve its state.
        public Button<ConfirmationDialog<_>, _> Submit { get; private set; }
    }
}
```
{:.page-object}

## Usage

```cs
Go.To<SomePage>()
    .Submit.ClickAndGo() // Gets to ConfirmationDialog<SomePage>.
        .Confirm.ClickAndGo(); // Returns back to SomePage.
```
{:.test}