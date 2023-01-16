---
layout: article
title: Navigation to Page by Dynamic URL
description: How to perform the navigation to the page by dynamic/parameterized URL.
---

{{ page.description }}
{:.lead}

## Given

Let's use Google search page as example.
For example we need to get to search results page by passing query text into URL.
To make it work we need to build URL in such format:
<code class="highlighter-rouge"><span>https://</span><span>www.</span><span>google</span><span>.com/search?q={QUERY}</span></code>
.

## Implementation

Assume that
<code class="highlighter-rouge"><span>https://</span><span>www.</span><span>google.</span><span>com/</span></code>
is the `BaseUrl` of `AtataContext`.
{:.info}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = GoogleSearchPage;

    [Url("/search")]
    public class GoogleSearchPage : Page<_>
    {
        public static _ WithQuery(string query) =>
            new _().AppendNavigationUrl($"?q={query}");
    }
}
```
{:.page-object}

### Usage

#### With Query Parameter

```cs
Go.To(GoogleSearchPage.WithQuery("test"));
```
{:.test}

#### Without Query Parameter

```cs
Go.To<GoogleSearchPage>();
```
{:.test}