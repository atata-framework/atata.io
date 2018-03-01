---
layout: regular-page
title: Switch Between Browser Windows
---

How to switch to newly opened browser window.
{:.lead}

## Given

Some page has a link which opens new browser window. The test should:
1. Click the link on the primary page.
1. Switch to opened window and perform some actions.
1. Close window and switch back to the primary browser window.

## Implementation

```cs
Go.To<SomePage>().
    // Do some actions.
    LinkThatOpensWindow.Click();

Go.ToNextWindow<SomeOtherPage>(). // Switches to newly opened window.
    // TODO: some actions in scope of new window.
    CloseWindow(); // Closes window and switches back to the previous window.

Go.To<SomePage>(navigate: false).
   // TODO: Continue to work within the primary window.
```
{:.test}

#### Page Object for Primary Window

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    public class SomePage : Page<_>
    {
        public Link<_> LinkThatOpensWindow { get; private set; }

        // Other page object members...
    }
}
```
{:.page-object}

#### Page Object for Opened Window

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomeOtherPage;

    public class SomeOtherPage : Page<_>
    {
        // Page object members...
    }
}
```
{:.page-object}

There is also `Go.ToWindow<TPageObject>(...)` method, which takes the name or the handle of the window and can be used for more specific switching between windows if you have more than 2 of them opened at the same time.
Use `AtataContext.Current.Driver.WindowHandles` and `AtataContext.Current.Driver.CurrentWindowHandle` to get the window handles.
{:.info}

<div class="post-footer">
{% include sharebuttons.html page=page %}
</div>

{% include comments.html %}