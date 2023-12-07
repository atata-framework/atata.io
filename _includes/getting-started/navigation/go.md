A page object navigation starts with `Go` static class, or alternatively with `Go` property of `AtataContext` instance.
Both `Go` approaches provide a set of similar methods for navigation.

#### Methods

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">To&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="type">T</span> pageObject = <span class="keyword">null</span>, <span class="keyword">string</span> url = <span class="keyword">null</span>, <span class="keyword">bool</span> navigate = <span class="keyword">true</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to the specified page object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">On&lt;<span class="type">T</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Continues with the specified page object type.
Firstly, checks whether the current `AtataContext.PageObject`
is `T`, if it is, returns it;
otherwise, creates a new instance of `T` without navigation.
The method is useful in case when in a particular step method (BDD step, for example)
you don't have an instance of current page object but you are sure that a browser is on the needed page.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">OnRefreshed&lt;<span class="type">T</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Continues with the specified page object type with rage refresh.
Firstly, checks whether the current `AtataContext.PageObject`
is `T`, if it is, returns it;
otherwise, creates a new instance of `T` without navigation.
Then a page is refreshed.
The method is useful in case when you reuse a single test suite driver by tests and
want to refresh a page on start of each test to ensure that the page is in clean start state.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">OnOrTo&lt;<span class="type">T</span>&gt;</span><span class="tail">()</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Continues with the specified page object type or navigates to it.
Firstly, checks whether the current `AtataContext.PageObject`
is `T`, if it is, returns it; otherwise, creates a new instance of `T` with navigation.
The method is useful in case when in a particular step method (BDD step, for example)
you don't have an instance of current page object and you are not sure that a browser is on the needed page, but can be.

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

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">ToNewWindow&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="type">T</span> pageObject = <span class="keyword">null</span>, <span class="keyword">string</span> url = <span class="keyword">null</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to a new window with the specified page object.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="keyword">static</span> <span class="type">T</span></span>
    <h3><span class="body">ToNewWindowAsTab&lt;<span class="type">T</span>&gt;</span><span class="tail">(<span class="type">T</span> pageObject = <span class="keyword">null</span>, <span class="keyword">string</span> url = <span class="keyword">null</span>, <span class="keyword">bool</span> temporarily = <span class="keyword">false</span>)</span></h3>
    <span class="where"><span class="keyword">where</span> <span class="type">T</span> : <span class="type">PageObject</span>&lt;<span class="type">T</span>&gt;</span>
</div>

Navigates to a new tab window with the specified page object.

#### Usage

```cs
Go.To<HomePage>()
    .Header.Should.Equal("Home");

Go.To<AboutPage>(url: "/about")
    .Should.Equal("About");
```
{:.test}