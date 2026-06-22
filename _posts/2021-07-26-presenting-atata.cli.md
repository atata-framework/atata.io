---
title: "Presenting Atata.Cli"
description: "New Atata.Cli and Atata.Cli.Npm .NET libraries are released to help you work with CLI programs."
---

New [Atata.Cli](https://www.nuget.org/packages/Atata.Cli/) and
[Atata.Cli.Npm](https://www.nuget.org/packages/Atata.Cli.Npm/)
.NET libraries are released to help you work with CLI programs.
{:.lead}

<!--more-->

## Atata.Cli

[**Atata.Cli**](https://www.nuget.org/packages/Atata.Cli/) is a .NET library that provides an API for CLI.

Find out more information on the library on [**Atata.Cli GitHub repository README page**](https://github.com/atata-framework/atata-cli).

### Features

- Provides an abstraction over `System.Diagnostics.Process` with `CliCommand` and `ProgramCli` classes.
- Has ability to execute CLI through command shell (cmd/bash).
- Provides synchronous and asynchronous API methods.
- Works on Windows, Linux and macOS.

### Usage

#### Execute command to get value

```cs
CliCommandResult result = new ProgramCli("dotnet")
    .Execute("--version");

string version = result.Output;
```

#### Execute command in directory

```cs
new ProgramCli("dotnet")
    .WithWorkingDirectory("some/path")
    .Execute("build -c Release");
```

#### Execute command through command shell

```cs
new ProgramCli("npm", useCommandShell: true)
    .Execute("install -g html-validate");
```

## Atata.Cli.Npm

[**Atata.Cli.Npm**](https://www.nuget.org/packages/Atata.Cli.Npm/) is a .NET library that provides an API for [NPM](https://www.npmjs.com/).

Find out more information on the library on [**Atata.Cli.Npm GitHub repository README page**](https://github.com/atata-framework/atata-cli-npm).

### Features

- Checks whether NPM is installed.
- Checks whether package is installed.
- Gets installed package version.
- Installs package.
- Uninstalls package.

The main class is `NpmCli` located in `Atata.Cli.Npm` namespace.

There is also `GlobalNpmPackageCli<TCli>`, which can be used as a base class of specific NPM package CLI.

### Usage

#### Check NPM is installed

```cs
bool isNpmInstalled = new NpmCli()
    .IsItInstalled();
```

#### Ensure NPM is installed

```cs
new NpmCli()
    .EnsureItIsInstalled();
```

If NPM isn't installed, throws `NpmNotFoundException`.

#### Install package into directory

```cs
NpmCli.InDirectory("some/dir")
    .Install("npm-package-name-1")
    .Install("npm-package-name-2", "1.2.3");
```

#### Install package globally

```cs
new NpmCli()
    .Install("html-validate", global: true);
```

#### Install package if missing

```cs
NpmCli.InBaseDirectory()
    .InstallIfMissing("html-validate", global: true);
```

#### Check package is installed

```cs
bool isPackageInstalled = new NpmCli()
    .IsInstalled("html-validate", global: true);
```

#### Check specific package version is installed

```cs
bool isPackageVersionInstalled = new NpmCli()
    .IsInstalled("html-validate", "5.0.0", global: true);
```

#### Get installed package version

```cs
string packageVersion = new NpmCli()
    .GetInstalledVersion("html-validate", global: true);
```

#### Uninstall package

```cs
new NpmCli()
    .Uninstall("html-validate", global: true);
```