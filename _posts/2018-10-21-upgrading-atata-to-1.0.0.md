---
title: "Upgrading Atata to 1.0.0"
date: 2018-10-21
description: "How to upgrade Atata to 1.0.0 by resolving breaking changes."
---

{{page.description}}
{:.lead}

<!--more-->

[Atata 1.0.0 has been recently released](/blog/2018/10/15/atata-1.0.0-released/) with several breaking changes.
It is recommended to get familiar with Atata changes first.
This article is to help you to avoid migrating issues if you use Atata 0.17.0 or prior and want to upgrade to 1.0.0.

## Update Other Atata.* Packages

First of all when updating `Atata` package, update all other secondary Atata packages too:
{% include nuget.md name="Atata.Configuration.Json" %},
{% include nuget.md name="Atata.Bootstrap" %},
{% include nuget.md name="Atata.KendoUI" %}.

It is important, as these packages were also updated to 1.0.0 version considering changes of primary Atata package.

## WebDriver and Atata Obsolete Functionality Cleanup

The following 3 issues made cleanup of obsolete and deleted functionality:

- {% include issue.md id=213 type='br' %} Remove `PhantomJSDriver` usage
- {% include issue.md id=218 type='br' %} Remove `WithCapabilities` method of `RemoteDriverAtataContextBuilder`
- {% include issue.md id=221 type='br' %} Remove obsolete types and members inclusive prior v0.15.0

So if after update to v1.0.0 you got complilation errors in Visual Studio, review these issues.

## Changed Behavior of FindSettingsAttribute and TermFindSettingsAttribute

If you use `FindSettingsAttribute` and `TermFindSettingsAttribute` in your project,
you will probably get warnings in Visual Studio because all non-parameterless constructors of these attributes became obsolete.
Also you can get error failures during execution of tests.
So please update your usages of `FindSettingsAttribute` and `TermFindSettingsAttribute` as follows.

### At Assembly Level

Before:

```cs
[assembly: FindSettings(FindTermBy.Label, /*...*/)]
[assembly: TermFindSettings(FindTermBy.Name, /*...*/)]
```

Now:

```cs
[assembly: FindSettings(TargetAttributeType = typeof(FindByLabelAttribute), /*...*/)]
[assembly: TermFindSettings(TargetAttributeType = typeof(FindByNameAttribute), /*...*/)]
```

### At Class Level

Before:

```cs
[FindSettings(FindTermBy.Id, /*...*/)]
[TermFindSettings(FindTermBy.Content, /*...*/)]
public class SomePage : Page<_>
{
    //...
}
```

Now:

```cs
[FindSettings(TargetAttributeType = typeof(FindByIdAttribute), TargetAnyType = true, /*...*/)]
[TermFindSettings(TargetAttributeType = typeof(FindByContentAttribute), TargetAnyType = true, /*...*/)]
public class SomePage : Page<_>
{
    //...
}
```

Note that `TargetAnyType = true` is added to attribute properties.
If no targets specified (as `TargetAnyType = true`), then attribute will apply to current component not children.
You can also filter target components using `TargetNames`, `TargetName`, `TargetTypes`, `TargetType`, `TargetParentTypes` and `TargetParentType` properties of inherited `MulticastAttribute`.
{:.info}

Before:

```cs
[FindSettings(OuterXPath = "./")]
public class SomeControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    //...
}
```

Now:

```cs
[FindSettings(OuterXPath = "./", TargetAnyType = true)]
public class SomeControl<TOwner> : Control<TOwner>
    where TOwner : PageObject<TOwner>
{
    //...
}
```

## Other

If you faced another issue during upgrading, inform it please using any channel from [Contact](/contact/) page.