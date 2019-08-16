---
layout: article
title: "Custom Trigger: Wait for Loading Indicator"
description: How to implement custom trigger that waits for a specific element presence and then absence.
---

{{ page.description }}
{:.lead}

The example shows how to avoid a duplication of trigger declaration in different page objects
by extracting a trigger definition to the custom trigger class.

[Wait Until Element Is Hidden upon Page Initialization](/examples/wait-until-element-is-hidden-upon-page-initialization/) example describes how to do simple element waiting
using [WaitForElement](/triggers/#waitforelement) trigger.
{:.info}

## Given

There are many pages within the site that display the same loading indicator during the loading/saving.
During the navigation to the page, the test has to wait until the loading indicator element is visible,
after that, it has to wait until the loading indicator element is hidden and only then start the interaction with the page.

{% capture html %}
<div class="loading-indicator">
    <span class="glyphicon glyphicon-repeat"></span>
    Please wait...
</div>

{% endcapture %}

{% include htmlexample.html html=html %}

## Implementation

### Trigger Implementation

```cs
using Atata;

namespace SampleApp.UITests
{
    public class WaitForLoadingIndicatorAttribute : WaitForElementAttribute
    {
        public WaitForLoadingIndicatorAttribute(TriggerEvents on = TriggerEvents.Init)
            : base(WaitBy.Class, "loading-indicator", Until.VisibleThenMissingOrHidden, on)
        {
            // On some pages with quick loading the indicator can even not appear.
            // For such case we can decrease the time of element presence and declare that timeout exception should not be thrown.
            // Meaning if within 2 seconds the element will not appear then OK, continue the execution.
            // Note that this settings can differ depending on specific indicator behavior.
            PresenceTimeout = 2; // Sets max waiting time in seconds for the presence of an element.
            ThrowOnPresenceFailure = false; // Do not throw exception if indicator is not found.

            AbsenceTimeout = 10; // Sets max waiting time in seconds for the absence of an element.
        }
    }
}
```

### Using Custom Trigger on Page Object

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SomePage;

    [WaitForLoadingIndicator]
    public class SomePage : Page<_>
    {
        // Applies trigger to the button that activates the loading indicator.
        [WaitForLoadingIndicator(TriggerEvents.AfterClick)]
        public Button<_> SomeButton { get; private set; }
    }
}
```
{:.page-object}

### Test

Waiting for the loading indicator thru trigger will be performed upon `SomePage` page initialization and right after the click on `SomeButton`.

```cs
Go.To<SomePage>().
    SomeButton.Click();
```
{:.test}