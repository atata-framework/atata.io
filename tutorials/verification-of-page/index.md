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

namespace AtataSamples.PageVerification
{
    public class PlanTests : UITestFixture
    {
    }
}
```

### Create Page Object Class

Create "Atata Page Object" class for the sample `Plans` page:

`PlansPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataSamples.PageVerification
{
    using _ = PlansPage;

    [Url("plans")]
    public class PlansPage : Page<_>
    {
    }
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

namespace AtataSamples.PageVerification
{
    using _ = PlansPage;

    [Url("plans")]
    public class PlansPage : Page<_>
    {
        public H1<_> Header { get; private set; }
    }
}
```

Now we can implement test method in `PlanTests` fixture.

```cs
[Test]
public void PrimaryPageDataVerification_InTest()
{
    Go.To<PlansPage>()
        .PageTitle.Should.Equal("Plans - Atata Sample App")
        .Header.Should.Equal("Plans")
        .Content.Should.Contain("Please choose your payment plan");
}
```

### Verify in OnVerify Method

`PageObject<TOwner>` class has virtual `OnVerify` method that can be overridden for inner page object verifications.

`PlansWithOnVerifyPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataSamples.PageVerification
{
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
}
```

And the test will look this way:

```cs
[Test]
public void PrimaryPageDataVerification_OnVerify()
{
    Go.To<PlansWithOnVerifyPage>();
}
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

namespace AtataSamples.PageVerification
{
    using _ = PlansWithStaticTriggersPage;

    [Url("plans")]
    [VerifyTitle("Plans - Atata Sample App")]
    [VerifyH1("Plans")]
    [VerifyContent("Please choose your payment plan")]
    public class PlansWithStaticTriggersPage : Page<_>
    {
    }
}
```

And the test:

```cs
[Test]
public void PrimaryPageDataVerification_StaticTriggers()
{
    Go.To<PlansWithStaticTriggersPage>();
}
```

Atata will execute the specified triggers during the navigation to the page object.

### Verify Using Dynamic Triggers

And finally, you can add verification triggers dynamically.
It is helpful when you need to pass the parameters for the triggers using constructor of page object, or if you need to get them from an external source.

`PlansWithDynamicTriggersPage.cs`
{:.file-name}

```cs
using Atata;

namespace AtataSamples.PageVerification
{
    using _ = PlansWithDynamicTriggersPage;

    [Url("plans")]
    public class PlansWithDynamicTriggersPage : Page<_>
    {
        public PlansWithDynamicTriggersPage()
        {
            Metadata.Add(
                new VerifyTitleAttribute("Plans - Atata Sample App"),
                new VerifyH1Attribute("Plans"),
                new VerifyContentAttribute("Please choose your payment plan"));
        }
    }
}
```

It is possible to add triggers dynamically for the component in constructor or in overridden `OnInit` method.

```cs
[Test]
public void PrimaryPageDataVerification_DynamicTriggers()
{
    Go.To<PlansWithDynamicTriggersPage>();
}
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

namespace AtataSamples.PageVerification
{
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
public void ComplexPageDataVerification()
{
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
}
```

This is it.
If you run this test, it will succeed and generate the following log to NUnit console:

```
2021-02-25 16:18:02.5573  INFO Starting test: ComplexPageDataVerification
2021-02-25 16:18:02.5842 TRACE > Set up AtataContext
2021-02-25 16:18:02.5856 TRACE - Set: BaseUrl=https://demo.atata.io/
2021-02-25 16:18:02.5876 TRACE - Set: ElementFindTimeout=5s; ElementFindRetryInterval=0.5s
2021-02-25 16:18:02.5911 TRACE - Set: WaitingTimeout=5s; WaitingRetryInterval=0.5s
2021-02-25 16:18:02.5913 TRACE - Set: VerificationTimeout=5s; VerificationRetryInterval=0.5s
2021-02-25 16:18:02.5917 TRACE - Set: Culture=en-US
2021-02-25 16:18:02.6019 TRACE - Set: DriverService=ChromeDriverService on port 52385
2021-02-25 16:18:03.5670 TRACE - Set: Driver=ChromeDriver (alias=chrome)
2021-02-25 16:18:03.5689 TRACE < Set up AtataContext (0.984s)
2021-02-25 16:18:03.6471  INFO Go to "Plans" page
2021-02-25 16:18:03.7077  INFO Go to URL "https://demo.atata.io/plans"
2021-02-25 16:18:05.1985  INFO > Aggregate assert "Plans" page
2021-02-25 16:18:05.2236  INFO - > Assert: plan items count should equal "3"
2021-02-25 16:18:05.2739 TRACE - - > Find visible elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver
2021-02-25 16:18:05.3413 TRACE - - < Find visible elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver (0.065s) >> []
2021-02-25 16:18:05.7474 TRACE - - > Find visible elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver
2021-02-25 16:18:05.8637 TRACE - - < Find visible elements by XPath ".//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')]" in ChromeDriver (0.114s) >> [Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }, Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }, Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }]
2021-02-25 16:18:05.8640  INFO - < Assert: plan items count should equal "3" (0.640s)
2021-02-25 16:18:05.8737  INFO - > Assert: "1st" plan item's "Title" <h3> heading content should equal "Basic"
2021-02-25 16:18:05.8803 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Title" <h3> heading
2021-02-25 16:18:05.8885 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2021-02-25 16:18:05.9248 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.036s) >> Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:05.9287 TRACE - - - > Find visible element by XPath ".//h3" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:05.9557 TRACE - - - < Find visible element by XPath ".//h3" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 } (0.026s) >> Element { Id=70a0163e-be95-4be1-8aac-bb2bf8554675 }
2021-02-25 16:18:05.9728 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Title" <h3> heading (0.092s) >> "Basic"
2021-02-25 16:18:05.9764  INFO - < Assert: "1st" plan item's "Title" <h3> heading content should equal "Basic" (0.102s)
2021-02-25 16:18:05.9849  INFO - > Assert: "1st" plan item's "Price" element content should equal "$0.00"
2021-02-25 16:18:05.9871 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Price" element
2021-02-25 16:18:05.9943 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2021-02-25 16:18:06.0131 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.018s) >> Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:06.0180 TRACE - - - > Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:06.0495 TRACE - - - < Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 } (0.031s) >> Element { Id=a108fba5-79f3-41d3-b935-6cf47599e6b1 }
2021-02-25 16:18:06.0667 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Price" element (0.079s) >> "$0"
2021-02-25 16:18:06.0691  INFO - < Assert: "1st" plan item's "Price" element content should equal "$0.00" (0.084s)
2021-02-25 16:18:06.0700  INFO - > Assert: "1st" plan item's "Number of Projects" element content should equal "1"
2021-02-25 16:18:06.0704 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Number of Projects" element
2021-02-25 16:18:06.0711 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2021-02-25 16:18:06.0928 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.021s) >> Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:06.0936 TRACE - - - > Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:06.1242 TRACE - - - < Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 } (0.030s) >> Element { Id=3e273221-8461-4bb2-9f2d-98a10f20f342 }
2021-02-25 16:18:06.1403 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Number of Projects" element (0.069s) >> "1"
2021-02-25 16:18:06.1406  INFO - < Assert: "1st" plan item's "Number of Projects" element content should equal "1" (0.070s)
2021-02-25 16:18:06.1474  INFO - > Assert: "1st" plan item's "Features" unordered list items should equal sequence ["Feature 1", "Feature 2"]
2021-02-25 16:18:06.1539 TRACE - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver
2021-02-25 16:18:06.1720 TRACE - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[1]" in ChromeDriver (0.018s) >> Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:06.1724 TRACE - - > Find visible element by XPath ".//ul" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 }
2021-02-25 16:18:06.2004 TRACE - - < Find visible element by XPath ".//ul" in Element { Id=ec9be602-f8f2-490e-b188-19ba4d4e0343 } (0.027s) >> Element { Id=d44403b3-ecb9-4356-8eea-64a75598d308 }
2021-02-25 16:18:06.2007 TRACE - - > Find visible elements by XPath "./*" in Element { Id=d44403b3-ecb9-4356-8eea-64a75598d308 }
2021-02-25 16:18:06.2458 TRACE - - < Find visible elements by XPath "./*" in Element { Id=d44403b3-ecb9-4356-8eea-64a75598d308 } (0.044s) >> [Element { Id=74a8d829-97f2-4b49-9342-7beea75e8e8f }, Element { Id=f36b5d1a-6e06-4c0d-b06a-ebcf5427a6e4 }]
2021-02-25 16:18:06.2477 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Features" unordered list's "1st" element
2021-02-25 16:18:06.2641 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Features" unordered list's "1st" element (0.016s) >> "Feature 1"
2021-02-25 16:18:06.2645 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Features" unordered list's "2nd" element
2021-02-25 16:18:06.2813 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "1st" plan item's "Features" unordered list's "2nd" element (0.016s) >> "Feature 2"
2021-02-25 16:18:06.2820  INFO - < Assert: "1st" plan item's "Features" unordered list items should equal sequence ["Feature 1", "Feature 2"] (0.134s)
2021-02-25 16:18:06.2831  INFO - > Assert: "2nd" plan item's "Title" <h3> heading content should equal "Plus"
2021-02-25 16:18:06.2833 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Title" <h3> heading
2021-02-25 16:18:06.2839 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2021-02-25 16:18:06.3107 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.026s) >> Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.3111 TRACE - - - > Find visible element by XPath ".//h3" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.3385 TRACE - - - < Find visible element by XPath ".//h3" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 } (0.027s) >> Element { Id=61df269b-df98-4018-93d8-fe59d17fe146 }
2021-02-25 16:18:06.3548 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Title" <h3> heading (0.071s) >> "Plus"
2021-02-25 16:18:06.3552  INFO - < Assert: "2nd" plan item's "Title" <h3> heading content should equal "Plus" (0.072s)
2021-02-25 16:18:06.3566  INFO - > Assert: "2nd" plan item's "Price" element content should equal "$19.99"
2021-02-25 16:18:06.3569 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Price" element
2021-02-25 16:18:06.3581 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2021-02-25 16:18:06.3801 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.021s) >> Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.3805 TRACE - - - > Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.4161 TRACE - - - < Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 } (0.035s) >> Element { Id=4e4f433f-6556-47e5-b844-f684361fc137 }
2021-02-25 16:18:06.4334 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Price" element (0.076s) >> "$19.99"
2021-02-25 16:18:06.4338  INFO - < Assert: "2nd" plan item's "Price" element content should equal "$19.99" (0.077s)
2021-02-25 16:18:06.4354  INFO - > Assert: "2nd" plan item's "Number of Projects" element content should equal "3"
2021-02-25 16:18:06.4356 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Number of Projects" element
2021-02-25 16:18:06.4362 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2021-02-25 16:18:06.4557 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.019s) >> Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.4562 TRACE - - - > Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.4865 TRACE - - - < Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 } (0.030s) >> Element { Id=8a3e80b8-5ba1-4ef3-a72f-314da0f1a8df }
2021-02-25 16:18:06.5050 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Number of Projects" element (0.069s) >> "3"
2021-02-25 16:18:06.5054  INFO - < Assert: "2nd" plan item's "Number of Projects" element content should equal "3" (0.070s)
2021-02-25 16:18:06.5065  INFO - > Assert: "2nd" plan item's "Features" unordered list items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
2021-02-25 16:18:06.5078 TRACE - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver
2021-02-25 16:18:06.5256 TRACE - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[2]" in ChromeDriver (0.017s) >> Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.5261 TRACE - - > Find visible element by XPath ".//ul" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 }
2021-02-25 16:18:06.5573 TRACE - - < Find visible element by XPath ".//ul" in Element { Id=86b9c5f1-a061-4e3f-b074-91ce313e7dc5 } (0.031s) >> Element { Id=2ee573d0-2e79-4569-abf4-2211de02d42f }
2021-02-25 16:18:06.5578 TRACE - - > Find visible elements by XPath "./*" in Element { Id=2ee573d0-2e79-4569-abf4-2211de02d42f }
2021-02-25 16:18:06.6378 TRACE - - < Find visible elements by XPath "./*" in Element { Id=2ee573d0-2e79-4569-abf4-2211de02d42f } (0.079s) >> [Element { Id=1185d54b-441b-41ef-a7f2-9e6c2b7de3d5 }, Element { Id=a4505f4b-66c3-4e6b-8218-a545ca3755b0 }, Element { Id=a04445ff-70c0-4671-a89a-a5ad1f2bb680 }, Element { Id=6c8f67ff-a88b-49a1-9e5c-35fdf90deaa9 }]
2021-02-25 16:18:06.6395 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "1st" element
2021-02-25 16:18:06.6618 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "1st" element (0.022s) >> "Feature 1"
2021-02-25 16:18:06.6621 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "2nd" element
2021-02-25 16:18:06.6842 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "2nd" element (0.022s) >> "Feature 2"
2021-02-25 16:18:06.6847 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "3rd" element
2021-02-25 16:18:06.7064 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "3rd" element (0.021s) >> "Feature 3"
2021-02-25 16:18:06.7069 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "4th" element
2021-02-25 16:18:06.7247 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "2nd" plan item's "Features" unordered list's "4th" element (0.017s) >> "Feature 4"
2021-02-25 16:18:06.7251  INFO - < Assert: "2nd" plan item's "Features" unordered list items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] (0.218s)
2021-02-25 16:18:06.7265  INFO - > Assert: "3rd" plan item's "Title" <h3> heading content should equal "Premium"
2021-02-25 16:18:06.7267 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Title" <h3> heading
2021-02-25 16:18:06.7272 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2021-02-25 16:18:06.7588 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.031s) >> Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:06.7592 TRACE - - - > Find visible element by XPath ".//h3" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:06.7921 TRACE - - - < Find visible element by XPath ".//h3" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 } (0.032s) >> Element { Id=2a7f6aa2-df55-45ab-9df7-dd2d600ee9f2 }
2021-02-25 16:18:06.8109 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Title" <h3> heading (0.084s) >> "Premium"
2021-02-25 16:18:06.8116  INFO - < Assert: "3rd" plan item's "Title" <h3> heading content should equal "Premium" (0.085s)
2021-02-25 16:18:06.8132  INFO - > Assert: "3rd" plan item's "Price" element content should equal "$49.99"
2021-02-25 16:18:06.8135 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Price" element
2021-02-25 16:18:06.8140 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2021-02-25 16:18:06.8315 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.017s) >> Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:06.8319 TRACE - - - > Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:06.8638 TRACE - - - < Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' price ')]/descendant-or-self::*" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 } (0.031s) >> Element { Id=4144717c-de2a-4f8d-b55b-9cb967f7bcbb }
2021-02-25 16:18:06.8817 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Price" element (0.068s) >> "$49.99"
2021-02-25 16:18:06.8821  INFO - < Assert: "3rd" plan item's "Price" element content should equal "$49.99" (0.068s)
2021-02-25 16:18:06.8829  INFO - > Assert: "3rd" plan item's "Number of Projects" element content should equal "10"
2021-02-25 16:18:06.8833 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Number of Projects" element
2021-02-25 16:18:06.8838 TRACE - - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2021-02-25 16:18:06.9027 TRACE - - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.018s) >> Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:06.9032 TRACE - - - > Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:06.9342 TRACE - - - < Find visible element by XPath ".//*[contains(concat(' ', normalize-space(@class), ' '), ' projects-num ')]/descendant-or-self::*" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 } (0.031s) >> Element { Id=efff4759-1cbe-4702-889c-0c89b149471a }
2021-02-25 16:18:06.9540 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Number of Projects" element (0.070s) >> "10"
2021-02-25 16:18:06.9544  INFO - < Assert: "3rd" plan item's "Number of Projects" element content should equal "10" (0.071s)
2021-02-25 16:18:06.9556  INFO - > Assert: "3rd" plan item's "Features" unordered list items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"]
2021-02-25 16:18:06.9581 TRACE - - > Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver
2021-02-25 16:18:06.9764 TRACE - - < Find visible element by XPath "(.//div[contains(concat(' ', normalize-space(@class), ' '), ' plan-item ')])[3]" in ChromeDriver (0.018s) >> Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:06.9767 TRACE - - > Find visible element by XPath ".//ul" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 }
2021-02-25 16:18:07.0097 TRACE - - < Find visible element by XPath ".//ul" in Element { Id=d32ff20d-9bc5-4867-86e8-4e9b977c96f1 } (0.033s) >> Element { Id=ca5a4333-8108-44fa-a011-18525ce7ee49 }
2021-02-25 16:18:07.0101 TRACE - - > Find visible elements by XPath "./*" in Element { Id=ca5a4333-8108-44fa-a011-18525ce7ee49 }
2021-02-25 16:18:07.1304 TRACE - - < Find visible elements by XPath "./*" in Element { Id=ca5a4333-8108-44fa-a011-18525ce7ee49 } (0.120s) >> [Element { Id=7eea1193-2270-43cc-b791-a90ec0e7a670 }, Element { Id=fd6fb3b2-84b2-400e-aa3d-92d50df43460 }, Element { Id=fa91db8d-fad1-443f-814f-0016904aeda9 }, Element { Id=196f5cb5-b30c-4e42-8e86-57463e2a90de }, Element { Id=60452609-5e17-4106-8b4c-5c7d24dc32fa }, Element { Id=5b0d4a37-2810-48da-be03-d650d67fab0e }]
2021-02-25 16:18:07.1316 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "1st" element
2021-02-25 16:18:07.1544 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "1st" element (0.022s) >> "Feature 1"
2021-02-25 16:18:07.1550 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "2nd" element
2021-02-25 16:18:07.1790 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "2nd" element (0.023s) >> "Feature 2"
2021-02-25 16:18:07.1794 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "3rd" element
2021-02-25 16:18:07.1982 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "3rd" element (0.018s) >> "Feature 3"
2021-02-25 16:18:07.1987 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "4th" element
2021-02-25 16:18:07.2168 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "4th" element (0.018s) >> "Feature 4"
2021-02-25 16:18:07.2174 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "5th" element
2021-02-25 16:18:07.2356 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "5th" element (0.018s) >> "Feature 5"
2021-02-25 16:18:07.2363 TRACE - - > Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "6th" element
2021-02-25 16:18:07.2541 TRACE - - < Execute behavior ContentSourceAttribute { Source=Text } against "3rd" plan item's "Features" unordered list's "6th" element (0.017s) >> "Feature 6"
2021-02-25 16:18:07.2545  INFO - < Assert: "3rd" plan item's "Features" unordered list items should equal sequence ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"] (0.298s)
2021-02-25 16:18:07.2547  INFO < Aggregate assert "Plans" page (2.056s)
2021-02-25 16:18:07.2785  INFO > Clean up AtataContext
2021-02-25 16:18:07.4661  INFO < Clean up AtataContext (0.187s)
2021-02-25 16:18:07.4665  INFO Finished test (4.962s)
2021-02-25 16:18:07.4668  INFO Pure test execution time: 3.687s
```

{{ download-section }}