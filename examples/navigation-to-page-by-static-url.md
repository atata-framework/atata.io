---
layout: article
title: Navigation to Page by Static URL
description: How to perform the navigation to the page by static URL.
---

{{ page.description }}
{:.lead}

## Given

Let's use Atata blog URL (`https://atata.io/blog/`) for example.

## Implementation

All you need is to add `Url` attribute to the page object class and pass it either relative or absoulte URL.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = BlogPage;

    [Url("/blog/")]
    public class BlogPage : Page<_>
    {
    }
}
```
{:.page-object}

Assume that
<code class="highlighter-rouge"><span>https://</span><span>atata.</span><span>io/</span></code>
is the `BaseUrl` of `AtataContext`.
{:.info}

### Usage

Just use `Go.To` to get to the page.

```cs
Go.To<BlogPage>();
```

Atata will combine base URL with relative URL of the page object and perform the navigation.