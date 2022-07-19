The page object navigation starts with `Go` static class. It provides a set of static methods for navigation.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">To&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="type">T</span> pageObject = <span class="keyword">null</span>, <span class="keyword">string</span> url = <span class="keyword">null</span>, <span class="keyword">bool</span> navigate = <span class="keyword">true</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to the specified page object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">ToWindow&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="type">T</span> pageObject, <span class="keyword">string</span> windowName, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to the window with the specified page object by name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">ToWindow&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="keyword">string</span> windowName, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to the window by name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">ToNextWindow&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="type">T</span> pageObject = <span class="keyword">null</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to the next window with the specified page object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">ToPreviousWindow&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="type">T</span> pageObject = <span class="keyword">null</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to the previous window with the specified page object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span></span>
    <h3><span class="body">ToUrl</span><span class="tail">(<span class="keyword">string</span> url)</span></h3>
</div>

Navigates to the specified URL.

#### Usage

```cs
Go.To<HomePage>()
    .Header.Should.Equal("Home");

Go.To<AboutPage>(url: "about")
    .Should.Equal("About");
```
{:.test}