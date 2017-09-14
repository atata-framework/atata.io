---
layout: regular-page
title: Page Object Inheritance
---

How to implement base page object and inherit it.
{:.lead}

## Base Page Object

```cs
using Atata;

namespace SampleApp.UITests
{
    public class BasePage<TOwner> : Page<TOwner>
        where TOwner : BasePage<TOwner>
    {
        public TextInput<TOwner> SomeInput { get; private set; }

        public TOwner SomeMethod()
        {
            // TODO: Do something.

            return (TOwner)this;
        }
    }
}
```
{:.page-object}

## Inherited Page Object

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = InheritedPage;

    public class InheritedPage : BasePage<_>
    {
        public TextInput<_> SomeOtherInput { get; private set; }
    }
}
```
{:.page-object}

## Inherited Page Object with Extra Triggers

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = InheritedPage;

    [VerifyTitle("Some Title")]
    public class InheritedPage : BasePage<_>
    {
        protected override void OnInit()
        {
            base.OnInit();

            SomeInput.Triggers.Add(new PressEnterAttribute(TriggerEvents.AfterSet));
        }
    }
}

```
{:.page-object}

## Base Page Object with Nested Custom Control

```cs
using Atata;

namespace SampleApp.UITests
{
    public class BasePage<TOwner> : Page<TOwner>
        where TOwner : BasePage<TOwner>
    {
        public FooterSection Footer { get; private set; }

        [ControlDefinition("footer")]
        public class FooterSection : Control<TOwner>
        {
        }
    }
}
```
{:.page-object}

<div class="post-footer">
{% include sharebuttons.html page=page %}
</div>

{% include comments.html %}