The static `AtataContext.GlobalProperties` property
contains global properties that should be configured as early as possible,
and not changed later,
because these properties should have the same values for all the contexts within a single execution.

Typically you configure global properties in overridden `ConfigureAtataContextGlobalProperties` method of custom `GlobalFixture` class.

```cs
public sealed class GlobalFixture : AtataGlobalFixture
{
    protected override void ConfigureAtataContextGlobalProperties(AtataContextGlobalProperties globalProperties)
    {
        globalProperties.UseDefaultArtifactsRootPathTemplateExcludingRunStartOnCI();
    }
}
```

Alternatively, you can configure global properties in global setup method before any creation of `AtataContext`.

```cs
AtataContext.GlobalProperties.UseDefaultArtifactsRootPathTemplateExcludingRunStartOnCI();
```

The list of `AtataContextGlobalProperties` configuration methods:

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseArtifactsRootPathTemplate</span><span class="tail">(<span class="keyword">string</span> directoryPathTemplate)</span></h3>
</div>

Sets the path template of the Artifacts Root directory.
The default value is `"{basedir}/artifacts/{run-start:yyyyMMddTHHmmss}"`.

The list of supported variables:
- `{basedir}`
- `{run-start}`
- `{run-start-utc}`

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseDefaultArtifactsRootPathTemplateIncludingRunStart</span><span class="tail">(<span class="keyword">string</span> include)</span></h3>
</div>

Sets the default Artifacts Root path template with optionally
including `"{run-start:yyyyMMddTHHmmss}"` folder in the path.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseDefaultArtifactsRootPathTemplateExcludingRunStartOnCI()</span></h3>
</div>

Sets the default Artifacts Root path template
excluding `"{run-start:yyyyMMddTHHmmss}"` folder in the path on CI environment.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseArtifactsPathFactory</span><span class="tail">(<span class="type">IArtifactsPathFactory</span> artifactsPathFactory)</span></h3>
</div>

Sets the artifacts path factory.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseRootNamespaceOf</span><span class="tail">(<span class="keyword">string</span>? rootNamespace)</span></h3>
</div>

Sets the root namespace.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseRootNamespaceOf<wbr>&lt;<span class="type">T</span>&gt;()</span></h3>
</div>

Sets the root namespace with the namespace of the specified `T` type.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseRootNamespaceOf</span><span class="tail">(<span class="type">Type</span> type)</span></h3>
</div>

Sets the root namespace with the namespace of the specified `type`.

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

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseAssemblyNamePatternToFindTypes</span><span class="tail">(<span class="keyword">string</span> pattern)</span></h3>
</div>

Sets the assembly name regex pattern that is used to filter assemblies to find types in them,
such as events, event handlers, attributes, components, etc.
The default value is
`@"^(?!System($|\..+)|mscorlib$|netstandard$|Microsoft\..+|testhost$|(?i:testcentric\..+)|(?i:nunit)|(?i:xunit))"`,
which excludes system and some well known assemblies.

<div class="member">
    <span class="head"><span class="keyword">public</span> <span class="type">AtataContextGlobalProperties</span></span>
    <h3><span class="body">UseIdGenerator</span><span class="tail">(<span class="type">IAtataIdGenerator</span> idGenerator)</span></h3>
</div>

Sets the identifier generator.
The default value is an instance of `Alphanumeric4AtataIdGenerator`.
