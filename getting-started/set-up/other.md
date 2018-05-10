<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseUrl</span><span class="tail">(<span class="keyword">string</span> baseUrl)</span></h3>
</div>

Sets the base URL.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseCulture</span><span class="tail">(<span class="type">CultureInfo</span> culture)</span></h3>
</div>

Sets the culture. The default value is `CultureInfo.CurrentCulture`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseCulture</span><span class="tail">(<span class="keyword">string</span> cultureName)</span></h3>
</div>

Sets the culture by the name. The default value is `CultureInfo.CurrentCulture`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestName</span><span class="tail">(<span class="keyword">string</span> name)</span></h3>
</div>

Sets the name of the test.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestName</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="keyword">string</span>&gt; testNameFactory)</span></h3>
</div>

Sets the factory method of the test name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseNUnitTestName()</span></h3>
</div>

Defines that the name of the test should be taken from the NUnit test.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the base retry timeout for a search of element/control. The default value is 5 seconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the base retry interval for a search of element/control. The default value is 500 milliseconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseElementFindTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the element find timeout.
The default value is taken from `AtataBuildingContext.BaseRetryTimeout`, which is equal to 5 seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseElementFindRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the element find retry interval.
The default value is taken from `AtataBuildingContext.BaseRetryInterval`, which is equal to 500 milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseWaitingTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the waiting timeout.
The default value is taken from `AtataBuildingContext.BaseRetryTimeout`, which is equal to 5 seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseWaitingRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the waiting retry interval.
The default value is taken from `AtataBuildingContext.BaseRetryInterval`, which is equal to 500 milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVerificationTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the verification timeout.
The default value is taken from `AtataBuildingContext.BaseRetryTimeout`, which is equal to 5 seconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseVerificationRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the verification retry interval.
The default value is taken from `AtataBuildingContext.BaseRetryInterval`, which is equal to 500 milliseconds by default.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">OnCleanUp</span><span class="tail">(<span class="type">Action</span> action)</span></h3>
</div>

Adds the action to perform during `AtataContext` cleanup.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">LogNUnitError()</span></h3>
</div>

Defines that an error occurred during the NUnit test execution should be added to the log during the cleanup.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">TakeScreenshotOnNUnitError</span><span class="tail">(<span class="keyword">string</span> title = <span style="color:#a31515;">&quot;Failed&quot;</span>)</span></h3>
</div>

Defines that an error occurred during the NUnit test execution should be captured by a screenshot during the cleanup.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseAssertionExceptionType</span><span class="tail">(<span class="type">Type</span> exceptionType)</span></h3>
</div>

Sets the type of the assertion exception. The default value is `typeof(Atata.AssertionException)`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseAssertionExceptionType<wbr>&lt;<span class="type">TException</span>&gt;()</span></h3>
</div>

Sets the type of the assertion exception. The default value is `typeof(Atata.AssertionException)`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">Clear()</span></h3>
</div>

Clears the `BuildingContext`.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContext</span></span>
    <h3><span class="body">Build()</span></h3>
</div>

Builds the `AtataContext` instance and sets it to `AtataContext.Current` property.