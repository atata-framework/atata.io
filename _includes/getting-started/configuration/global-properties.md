The static `AtataContext.GlobalProperties` property
contains global properties that should be configured as early as possible,
typically in global setup method before any creation of `AtataContext`, and not changed later,
because these properties should have the same values for all the contexts within an execution.

```cs
AtataContext.GlobalProperties
    .UseUtcTimeZone()
    .UseArtifactsRootPathTemplate("{basedir}/artifacts");
```

The list of `AtataContextGlobalProperties` configuration methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseArtifactsRootPathTemplate</span><span class="tail">(<span class="keyword">string</span> directoryPathTemplate)</span></h3>
</div>

Sets the path template of the Artifacts Root directory.
The default value is `"{basedir}/artifacts/{build-start:yyyyMMddTHHmmss}"`.

The list of supported variables:
- `{basedir}`
- `{build-start}`
- `{build-start-utc}`

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseDefaultArtifactsRootPathTemplateIncludingBuildStart</span><span class="tail">(<span class="keyword">string</span> include)</span></h3>
</div>

Sets the default Artifacts Root path template with optionally
including `"{build-start:yyyyMMddTHHmmss}"` folder in the path.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseTimeZone</span><span class="tail">(<span class="type">TimeZoneInfo</span> timeZone)</span></h3>
</div>

Sets the time zone.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseTimeZone</span><span class="tail">(<span class="keyword">string</span> timeZoneId)</span></h3>
</div>

Sets the time zone by identifier, which corresponds to the `TimeZoneInfo.Id` property.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseUtcTimeZone</span>()</h3>
</div>

Sets the UTC time zone.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseModeOfCurrent</span><span class="tail">(<span class="type">AtataContextModeOfCurrent</span> mode)</span></h3>
</div>

Sets the mode of `AtataContext.Current` property.
The default value is `AtataContextModeOfCurrent.AsyncLocal`.