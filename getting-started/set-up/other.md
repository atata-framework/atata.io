<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseUrl</span><span class="tail">(<span class="keyword">string</span> baseUrl)</span></h3>
</div>

Sets the base URL.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestName</span><span class="tail">(<span class="keyword">string</span> name)</span></h3>
</div>

Sets the name of the test.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseNUnitTestName()</span></h3>
</div>

Defines that the name of the test should be taken from the NUnit test.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseRetryTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the retry timeout for a search of element/control. The default value is 10 seconds.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the retry interval for a search of element/control. The default value is 500 milliseconds.

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