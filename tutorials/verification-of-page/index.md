---
layout: article
title: Verification of Page
description: How to verify web page data using different approaches of Atata Framework.
---

{{ page.description }}
{:.lead}

{% capture download-section %}
{% include download-sample.html folder="PageVerification" %}
{% endcapture %}
{{ download-section }}

## Introduction

The purpose of this tutorial is to demonstrate in detail different approaches of web page data verification using Atata framework.
The article describes verification of: page title, headings, text content, numeric content, links and blocks of HTML content.

## Page Under Test

For testing purposes of this tutorial, the following test page is used: <https://demo.atata.io/plans>.
It is just a sample page for the demo containing different kinds of data.

![Plans page](plans-01.png)

## Set Up Test Project

### Create Project

First of all, let's create a project for tests (e.g., named "AtataSamples.PageVerification").
In Visual Studio create a project for Atata automated testing using the [guide](/getting-started/#installation).

### Create Test Fixture Class

Create "Atata NUnit Test Fixture" class:

`PlanTests.cs`
{:.file-name}

```cs
using Atata;
using NUnit.Framework;

namespace AtataSamples.PageVerification;

public class PlanTests : UITestFixture
{
}
```

### Create Page Object Class

Create "Atata Page Object" class for the sample `Plans` page:

`PlansPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataSamples.PageVerification;

using _ = PlansPage;

[Url("plans")]
public class PlansPage : Page<_>
{
}
```

## Verification of Title, Heading and Text Content

Let's start with simple verifications.
To ensure that the current page is the one we need, we can verify its title, header and some text content.

![Plans page with highlighted primary data](plans-02.png)

### Verify in Test

For sure, we can do the verifications in test methods.
The one thing that is needed to be added to `PlansPage` is the `Header` property.

```cs
using Atata;

namespace AtataSamples.PageVerification;

using _ = PlansPage;

[Url("plans")]
public class PlansPage : Page<_>
{
    public H1<_> Header { get; private set; }
}
```

Now we can implement a test method in `PlanTests` fixture.

```cs
[Test]
public void PrimaryPageDataVerification_InTest() =>
    Go.To<PlansPage>()
        .PageTitle.Should.Equal("Plans - Atata Sample App")
        .Header.Should.Equal("Plans")
        .Content.Should.Contain("Please choose your payment plan");
```

### Verify in OnVerify Method

`PageObject<TOwner>` class has virtual `OnVerify` method that can be overridden for inner page object verifications.

`PlansWithOnVerifyPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataSamples.PageVerification;

using _ = PlansWithOnVerifyPage;

[Url("plans")]
public class PlansWithOnVerifyPage : Page<_>
{
    public H1<_> Header { get; private set; }

    protected override void OnVerify()
    {
        base.OnVerify();

        PageTitle.Should.Equal("Plans - Atata Sample App");
        Header.Should.Equal("Plans");
        Content.Should.Contain("Please choose your payment plan");
    }
}
```

And the test will look this way:

```cs
[Test]
public void PrimaryPageDataVerification_OnVerify() =>
    Go.To<PlansWithOnVerifyPage>();
```

`OnVerify` method will be invoked during the navigation to the page object.

### Verify Using Static Triggers

Another approach is quite simple.
You can use a set of [verification trigger attributes](/triggers/#verification)
to mark a page object class or control properties with them.

`PlansWithStaticTriggersPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataSamples.PageVerification;

using _ = PlansWithStaticTriggersPage;

[Url("plans")]
[VerifyTitle("Plans - Atata Sample App")]
[VerifyH1("Plans")]
[VerifyContent("Please choose your payment plan")]
public class PlansWithStaticTriggersPage : Page<_>
{
}
```

And the test:

```cs
[Test]
public void PrimaryPageDataVerification_StaticTriggers() =>
    Go.To<PlansWithStaticTriggersPage>();
```

Atata will execute the specified triggers during the navigation to the page object.

### Verify Using Dynamic Triggers

And finally, you can add verification triggers dynamically.
It is helpful when you need to pass the parameters for the triggers using constructor of page object, or if you need to get them from an external source.

`PlansWithDynamicTriggersPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataSamples.PageVerification;

using _ = PlansWithDynamicTriggersPage;

[Url("plans")]
public class PlansWithDynamicTriggersPage : Page<_>
{
    public PlansWithDynamicTriggersPage() =>
        Metadata.Add(
            new VerifyTitleAttribute("Plans - Atata Sample App"),
            new VerifyH1Attribute("Plans"),
            new VerifyContentAttribute("Please choose your payment plan"));
}
```

It is possible to add triggers dynamically for the component in constructor or in overridden `OnInit` method.

```cs
[Test]
public void PrimaryPageDataVerification_DynamicTriggers() =>
    Go.To<PlansWithDynamicTriggersPage>();
```

## Verification of Complex Blocks

Let's try to verify the plan items.
It's a bit complex, but quite simple.
For each plan we can assert: name, price, number of projects and features.

![Plans page with highlighted complex data](plans-03.png)

Fine, we have a list of 3 plan items.
Let's check the HTML source and try to determine element paths for the needed components.

```html
<div class="row">
    <div class="col-sm-4 plan-item">
        <h3>Basic</h3>
        <b class="price">$0</b> (FREE)
        <p>Number of projects: <b class="projects-num">1</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Cras aliquam pellentesque elit eget varius.</p>
        <ul class="feature-list">
            <li><span class="glyphicon glyphicon-ok"></span>Feature 1</li>
            <li><span class="glyphicon glyphicon-ok"></span>Feature 2</li>
        </ul>
    </div>
    <div class="col-sm-4 plan-item">
        <h3>Plus</h3>
        <b class="price">$19.99</b> /month
        ...
    </div>
    <div class="col-sm-4 plan-item">
        <h3>Premium</h3>
        ...
    </div>
</div>
```

Let's summarize.
First of all, we can extract plan item as a control that is `<div>` element with `plan-item` class. And the control has the following properties:

* **Name** - the first and single `<h3>` element.
* **Price** - currency element with `price` class.
* **Number of projects** - numeric element with `projects-num` class.
* **Features** - a list of `<li>` elements inside `<ul>`.

In Atata we need to define a custom control for such a plan item.
And then, in the page object, we can use property of `ControlList` type to manipulate the items.

```cs
using Atata;

namespace AtataSamples.PageVerification;

using _ = PlansPage;

[Url("plans")]
public class PlansPage : Page<_>
{
    public H1<_> Header { get; private set; }

    public ControlList<PlanItem, _> PlanItems { get; private set; }

    [ControlDefinition("div", ContainingClass = "plan-item", ComponentTypeName = "plan item")]
    public class PlanItem : Control<_>
    {
        public H3<_> Title { get; private set; }

        [FindByClass]
        public Currency<_> Price { get; private set; }

        [FindByClass("projects-num")]
        public Number<_> NumberOfProjects { get; private set; }

        public UnorderedList<Text<_>, _> Features { get; private set; }
    }
}
```

And now, we can implement a test that should verify the data of the plan items.

```cs
private const string Feature1 = "Feature 1";
private const string Feature2 = "Feature 2";
private const string Feature3 = "Feature 3";
private const string Feature4 = "Feature 4";
private const string Feature5 = "Feature 5";
private const string Feature6 = "Feature 6";

[Test]
public void ComplexPageDataVerification() =>
    Go.To<PlansPage>()
        .AggregateAssert(x => x
            .PlanItems.Count.Should.Equal(3)
            .PlanItems[0].Title.Should.Equal("Basic")
            .PlanItems[0].Price.Should.Equal(0)
            .PlanItems[0].NumberOfProjects.Should.Equal(1)
            .PlanItems[0].Features.Items.Should.EqualSequence(Feature1, Feature2)

            .PlanItems[1].Title.Should.Equal("Plus")
            .PlanItems[1].Price.Should.Equal(19.99m)
            .PlanItems[1].NumberOfProjects.Should.Equal(3)
            .PlanItems[1].Features.Items.Should.EqualSequence(Feature1, Feature2, Feature3, Feature4)

            .PlanItems[2].Title.Should.Equal("Premium")
            .PlanItems[2].Price.Should.Equal(49.99m)
            .PlanItems[2].NumberOfProjects.Should.Equal(10)
            .PlanItems[2].Features.Items.Should.EqualSequence(Feature1, Feature2, Feature3, Feature4, Feature5, Feature6));
```

This is it.
If you run this test, it will succeed and generate the following log to NUnit console:

```
2023-10-18 18:52:29.6788  INFO Starting test: AtataSamples.PageVerification.PlanTests.ComplexPageDataVerification
2023-10-18 18:52:29.6911 TRACE > Initialize AtataContext
2023-10-18 18:52:29.6918 TRACE - Set: BaseUrl=https://demo.atata.io/
2023-10-18 18:52:29.6928 TRACE - Set: ElementFindTimeout=5s; ElementFindRetryInterval=0.5s
2023-10-18 18:52:29.6930 TRACE - Set: WaitingTimeout=5s; WaitingRetryInterval=0.5s
2023-10-18 18:52:29.6931 TRACE - Set: VerificationTimeout=5s; VerificationRetryInterval=0.5s
2023-10-18 18:52:29.6934 TRACE - Set: Culture=en-US
2023-10-18 18:52:29.6936 TRACE - Set: Artifacts=D:\dev\atata-samples\PageVerification\AtataSamples.PageVerification\bin\Debug\net6.0\artifacts\20231018T185229\PlanTests\ComplexPageDataVerification
2023-10-18 18:52:29.6943 TRACE - > Initialize Driver
2023-10-18 18:52:29.6983 TRACE - - Created ChromeDriverService { Port=59188, ExecutablePath=D:\dev\atata-samples\PageVerification\AtataSamples.PageVerification\bin\Debug\net6.0\drivers\chrome\118.0.5993.70\chromedriver.exe }
2023-10-18 18:52:31.2293 TRACE - - Created ChromeDriver { Alias=chrome, SessionId=f0a61c3ed0ccb28754dc15f54bfca459 }
2023-10-18 18:52:31.2350 TRACE - < Initialize Driver (1.537s)
2023-10-18 18:52:31.2357 TRACE < Initialize AtataContext (1.544s)
2023-10-18 18:52:31.2679  INFO > Go to "Plans" page by URL https://demo.atata.io/plans
2023-10-18 18:52:31.2684 TRACE - > Navigate to URL https://demo.atata.io/plans
2023-10-18 18:52:31.5626 TRACE - < Navigate to URL https://demo.atata.io/plans (0.294s)
2023-10-18 18:52:31.5775  INFO < Go to "Plans" page by URL https://demo.atata.io/plans (0.309s)
2023-10-18 18:52:31.5837  INFO > Aggregate assert "Plans" page
2023-10-18 18:52:31.5907  INFO - > Assert: plan items count should equal 3
2023-10-18 18:52:31.6093 TRACE - - > Find elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver
2023-10-18 18:52:31.7237 TRACE - - < Find elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver (0.113s) >> []
2023-10-18 18:52:32.1083 TRACE - - > Find elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver
2023-10-18 18:52:32.1180 TRACE - - < Find elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver (0.008s) >> [Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }]
2023-10-18 18:52:32.1182  INFO - < Assert: plan items count should equal 3 (0.527s)
2023-10-18 18:52:32.1215  INFO - > Assert: plan items / 1st item / "Title" <h3> heading content should equal "Basic"
2023-10-18 18:52:32.1236 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Title" <h3> heading
2023-10-18 18:52:32.1269 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2023-10-18 18:52:32.1398 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.012s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.1416 TRACE - - - > Find element by XPath ".//h3" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.1578 TRACE - - - < Find element by XPath ".//h3" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 } (0.016s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_8 }
2023-10-18 18:52:32.1749 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Title" <h3> heading (0.051s) >> "Basic"
2023-10-18 18:52:32.1774  INFO - < Assert: plan items / 1st item / "Title" <h3> heading content should equal "Basic" (0.055s)
2023-10-18 18:52:32.1809  INFO - > Assert: plan items / 1st item / "Price" element content should equal "$0.00"
2023-10-18 18:52:32.1818 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Price" element
2023-10-18 18:52:32.1848 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2023-10-18 18:52:32.1910 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.006s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.1930 TRACE - - - > Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.2044 TRACE - - - < Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 } (0.011s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_33 }
2023-10-18 18:52:32.2101 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Price" element (0.028s) >> "$0"
2023-10-18 18:52:32.2120  INFO - < Assert: plan items / 1st item / "Price" element content should equal "$0.00" (0.031s)
2023-10-18 18:52:32.2126  INFO - > Assert: plan items / 1st item / "Number of Projects" element content should equal "1"
2023-10-18 18:52:32.2128 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Number of Projects" element
2023-10-18 18:52:32.2131 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2023-10-18 18:52:32.2184 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.2187 TRACE - - - > Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.2337 TRACE - - - < Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 } (0.014s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_34 }
2023-10-18 18:52:32.2405 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Number of Projects" element (0.027s) >> "1"
2023-10-18 18:52:32.2409  INFO - < Assert: plan items / 1st item / "Number of Projects" element content should equal "1" (0.028s)
2023-10-18 18:52:32.2429  INFO - > Assert: plan items / 1st item / "Features" unordered list / items should equal sequence ["Feature 1", "Feature 2"]
2023-10-18 18:52:32.2455 TRACE - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2023-10-18 18:52:32.2514 TRACE - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.2518 TRACE - - > Find element by XPath ".//ul" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 }
2023-10-18 18:52:32.2665 TRACE - - < Find element by XPath ".//ul" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_5 } (0.014s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_35 }
2023-10-18 18:52:32.2670 TRACE - - > Find elements by XPath "./*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_35 }
2023-10-18 18:52:32.2786 TRACE - - < Find elements by XPath "./*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_35 } (0.011s) >> [Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_36 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_37 }]
2023-10-18 18:52:32.2810 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Features" unordered list / items / 1st item
2023-10-18 18:52:32.2875 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Features" unordered list / items / 1st item (0.006s) >> "Feature 1"
2023-10-18 18:52:32.2878 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Features" unordered list / items / 2nd item
2023-10-18 18:52:32.2934 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 1st item / "Features" unordered list / items / 2nd item (0.005s) >> "Feature 2"
2023-10-18 18:52:32.2944  INFO - < Assert: plan items / 1st item / "Features" unordered list / items should equal sequence ["Feature 1", "Feature 2"] (0.051s)
2023-10-18 18:52:32.2951  INFO - > Assert: plan items / 2nd item / "Title" <h3> heading content should equal "Plus"
2023-10-18 18:52:32.2952 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Title" <h3> heading
2023-10-18 18:52:32.2955 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2023-10-18 18:52:32.3060 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.010s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3063 TRACE - - - > Find element by XPath ".//h3" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3112 TRACE - - - < Find element by XPath ".//h3" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 } (0.004s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_38 }
2023-10-18 18:52:32.3167 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Title" <h3> heading (0.021s) >> "Plus"
2023-10-18 18:52:32.3170  INFO - < Assert: plan items / 2nd item / "Title" <h3> heading content should equal "Plus" (0.021s)
2023-10-18 18:52:32.3176  INFO - > Assert: plan items / 2nd item / "Price" element content should equal "$19.99"
2023-10-18 18:52:32.3177 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Price" element
2023-10-18 18:52:32.3181 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2023-10-18 18:52:32.3230 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.004s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3232 TRACE - - - > Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3293 TRACE - - - < Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 } (0.006s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_39 }
2023-10-18 18:52:32.3351 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Price" element (0.017s) >> "$19.99"
2023-10-18 18:52:32.3354  INFO - < Assert: plan items / 2nd item / "Price" element content should equal "$19.99" (0.017s)
2023-10-18 18:52:32.3358  INFO - > Assert: plan items / 2nd item / "Number of Projects" element content should equal "3"
2023-10-18 18:52:32.3360 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Number of Projects" element
2023-10-18 18:52:32.3363 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2023-10-18 18:52:32.3413 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.004s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3416 TRACE - - - > Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3465 TRACE - - - < Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 } (0.004s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_40 }
2023-10-18 18:52:32.3519 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Number of Projects" element (0.015s) >> "3"
2023-10-18 18:52:32.3522  INFO - < Assert: plan items / 2nd item / "Number of Projects" element content should equal "3" (0.016s)
2023-10-18 18:52:32.3527  INFO - > Assert: plan items / 2nd item / "Features" unordered list / items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
2023-10-18 18:52:32.3532 TRACE - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2023-10-18 18:52:32.3582 TRACE - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3585 TRACE - - > Find element by XPath ".//ul" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 }
2023-10-18 18:52:32.3636 TRACE - - < Find element by XPath ".//ul" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_6 } (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_41 }
2023-10-18 18:52:32.3639 TRACE - - > Find elements by XPath "./*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_41 }
2023-10-18 18:52:32.3692 TRACE - - < Find elements by XPath "./*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_41 } (0.005s) >> [Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_42 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_3 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_43 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_44 }]
2023-10-18 18:52:32.3697 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 1st item
2023-10-18 18:52:32.3753 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 1st item (0.005s) >> "Feature 1"
2023-10-18 18:52:32.3756 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 2nd item
2023-10-18 18:52:32.3816 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 2nd item (0.005s) >> "Feature 2"
2023-10-18 18:52:32.3820 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 3rd item
2023-10-18 18:52:32.3877 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 3rd item (0.005s) >> "Feature 3"
2023-10-18 18:52:32.3881 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 4th item
2023-10-18 18:52:32.3940 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 2nd item / "Features" unordered list / items / 4th item (0.005s) >> "Feature 4"
2023-10-18 18:52:32.3943  INFO - < Assert: plan items / 2nd item / "Features" unordered list / items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] (0.041s)
2023-10-18 18:52:32.3948  INFO - > Assert: plan items / 3rd item / "Title" <h3> heading content should equal "Premium"
2023-10-18 18:52:32.3949 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Title" <h3> heading
2023-10-18 18:52:32.3953 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2023-10-18 18:52:32.4066 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.011s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4098 TRACE - - - > Find element by XPath ".//h3" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4157 TRACE - - - < Find element by XPath ".//h3" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 } (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_45 }
2023-10-18 18:52:32.4223 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Title" <h3> heading (0.027s) >> "Premium"
2023-10-18 18:52:32.4227  INFO - < Assert: plan items / 3rd item / "Title" <h3> heading content should equal "Premium" (0.027s)
2023-10-18 18:52:32.4239  INFO - > Assert: plan items / 3rd item / "Price" element content should equal "$49.99"
2023-10-18 18:52:32.4241 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Price" element
2023-10-18 18:52:32.4244 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2023-10-18 18:52:32.4305 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.006s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4309 TRACE - - - > Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4364 TRACE - - - < Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 } (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_46 }
2023-10-18 18:52:32.4424 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Price" element (0.018s) >> "$49.99"
2023-10-18 18:52:32.4427  INFO - < Assert: plan items / 3rd item / "Price" element content should equal "$49.99" (0.018s)
2023-10-18 18:52:32.4431  INFO - > Assert: plan items / 3rd item / "Number of Projects" element content should equal "10"
2023-10-18 18:52:32.4432 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Number of Projects" element
2023-10-18 18:52:32.4434 TRACE - - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2023-10-18 18:52:32.4484 TRACE - - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.004s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4486 TRACE - - - > Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4539 TRACE - - - < Find element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 } (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_47 }
2023-10-18 18:52:32.4596 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Number of Projects" element (0.016s) >> "10"
2023-10-18 18:52:32.4599  INFO - < Assert: plan items / 3rd item / "Number of Projects" element content should equal "10" (0.016s)
2023-10-18 18:52:32.4603  INFO - > Assert: plan items / 3rd item / "Features" unordered list / items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"]
2023-10-18 18:52:32.4607 TRACE - - > Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2023-10-18 18:52:32.4666 TRACE - - < Find element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.005s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4669 TRACE - - > Find element by XPath ".//ul" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 }
2023-10-18 18:52:32.4718 TRACE - - < Find element by XPath ".//ul" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_7 } (0.004s) >> Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_48 }
2023-10-18 18:52:32.4721 TRACE - - > Find elements by XPath "./*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_48 }
2023-10-18 18:52:32.4770 TRACE - - < Find elements by XPath "./*" in Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_48 } (0.004s) >> [Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_49 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_50 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_51 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_52 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_53 }, Element { Id=8F44C8CDE3C8B4192DD58288FF46A3FB_element_54 }]
2023-10-18 18:52:32.4775 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 1st item
2023-10-18 18:52:32.4834 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 1st item (0.005s) >> "Feature 1"
2023-10-18 18:52:32.4838 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 2nd item
2023-10-18 18:52:32.4891 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 2nd item (0.005s) >> "Feature 2"
2023-10-18 18:52:32.4894 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 3rd item
2023-10-18 18:52:32.4948 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 3rd item (0.005s) >> "Feature 3"
2023-10-18 18:52:32.4951 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 4th item
2023-10-18 18:52:32.5004 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 4th item (0.005s) >> "Feature 4"
2023-10-18 18:52:32.5006 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 5th item
2023-10-18 18:52:32.5057 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 5th item (0.005s) >> "Feature 5"
2023-10-18 18:52:32.5060 TRACE - - > Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 6th item
2023-10-18 18:52:32.5113 TRACE - - < Execute behavior GetsContentFromSourceAttribute { Source=Text } against plan items / 3rd item / "Features" unordered list / items / 6th item (0.005s) >> "Feature 6"
2023-10-18 18:52:32.5116  INFO - < Assert: plan items / 3rd item / "Features" unordered list / items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"] (0.051s)
2023-10-18 18:52:32.5117  INFO < Aggregate assert "Plans" page (0.927s)
2023-10-18 18:52:32.5126 TRACE > Deinitialize AtataContext
2023-10-18 18:52:32.6410 TRACE < Deinitialize AtataContext (0.128s)
2023-10-18 18:52:32.6428  INFO Finished test
      Total time: 3.041s
  Initialization: 1.635s | 53.8 %
       Test body: 1.276s | 42.0 %
Deinitialization: 0.128s |  4.2 %
```

{{ download-section }}