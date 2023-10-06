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
    <h3><span class="body">UseTestName</span><span class="tail">(<span class="keyword">string</span> testName)</span></h3>
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
    <h3><span class="body">UseTestSuiteName</span><span class="tail">(<span class="keyword">string</span> testSuiteName)</span></h3>
</div>

Sets the name of the test suite (fixture/class).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteName</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="keyword">string</span>&gt; testSuiteNameFactory)</span></h3>
</div>

Sets the factory method of the test suite (fixture/class) name.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteType</span><span class="tail">(<span class="type">Type</span> testSuiteType)</span></h3>
</div>

Sets the type of the test suite (fixture/class).

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTestSuiteType</span><span class="tail">(<span class="type">Func</span><wbr>&lt;<span class="type">Type</span>&gt; testSuiteTypeFactory)</span></h3>
</div>

Sets the factory method of the test suite (fixture/class) type.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryTimeout</span><span class="tail">(<span class="type">TimeSpan</span> timeout)</span></h3>
</div>

Sets the base retry timeout. The default value is 5 seconds

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseBaseRetryInterval</span><span class="tail">(<span class="type">TimeSpan</span> interval)</span></h3>
</div>

Sets the base retry interval. The default value is 500 milliseconds.

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
    <h3><span class="body">OnBuilding</span><span class="tail">(<span class="type">Action</span> action)</span></h3>
</div>

Adds the action to perform during `AtataContext` building. 
It will be executed at the beginning of the build after the log is set up.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">OnBuilt</span><span class="tail">(<span class="type">Action</span> action)</span></h3>
</div>

Adds the action to perform after `AtataContext` building. 
It will be executed at the end of the build after the driver is created.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">OnDriverCreated</span><span class="tail">(<span class="type">Action</span><wbr>&lt;<span class="type">RemoteWebDriver</span>&gt;  action)</span></h3>
</div>

Adds the action to perform after the driver is created.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">OnDriverCreated</span><span class="tail">(<span class="type">Action</span> action)</span></h3>
</div>

Adds the action to perform after the driver is created.

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
    <h3><span class="body">TakeScreenshotOnNUnitError</span><span class="tail">(<span class="keyword">string</span> title = <span class="string">"Failed"</span>)</span></h3>
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
    <h3><span class="body">AddVariable</span><span class="tail">(<span class="keyword">string</span> key, <span class="keyword">object</span> value)</span></h3>
</div>

Adds the variable.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddVariables</span><span class="tail">(<span class="type">IDictionary</span>&lt;<span class="keyword">string</span>, <span class="keyword">object</span>&gt; variables)</span></h3>
</div>

Adds the variables.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">AddSecretStringToMaskInLog</span><span class="tail">(<span class="keyword">string</span> value, <span class="keyword">string</span> mask = <span class="string">"{*****}"</span>)</span></h3>
</div>

Adds the secret string to mask in log.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTimeZone</span><span class="tail">(<span class="type">TimeZoneInfo</span> timeZone)</span></h3>
</div>

Sets the time zone.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseTimeZone</span><span class="tail">(<span class="keyword">string</span> timeZoneId)</span></h3>
</div>

Sets the time zone by identifier, which corresponds to the `TimeZoneInfo.Id` property.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextBuilder</span></span>
    <h3><span class="body">UseUtcTimeZone</span>()</h3>
</div>

Sets the UTC time zone.

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