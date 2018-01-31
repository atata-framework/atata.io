.NET Core is supported and you are able to use Atata package in .NET Core 2.0 test project.
You can also create .NET Standard 2.0 library project for Atata components package.
But there are few issues below that require extra configuration comparing to .NET Framework.

#### WebDriver .NET Core Issues

There is a bug in Selenium WebDriver since v3.6.0 for .NET Core 2.0: each WebDriver request takes extra 1 second. It makes execution of WebDriver actions very slow.
The fix is added within Atata package.
Use `WithFixOfCommandExecutionDelay` driver configurational method to get round of this bug.
Check the fix details: {% include issue.md id=101 %} **Fix command execution delay of WebDriver for .NET Core 2.0**.
{:.warning}

WebDriver doesn't look for driver (e.g., "chromedriver.exe") in local folder in .NET Standard 2.0 version.
Use `WithLocalDriverPath` driver configurational method if you use .NET Core 2.0 project that uses driver as a project package (hosted in the same build directory).
Check the fix details: {% include issue.md id=102 %} **Add WithLocalDriverPath method to DriverAtataContextBuilder<TBuilder, TService, TOptions>**.
{:.warning}

Summarizing, the configuration should look like:

```cs
AtataContext.Configure().
    UseChrome().
        WithFixOfCommandExecutionDelay().
        WithLocalDriverPath().
    // Other configuration.
    Build();
```

#### NUnit .NET Core Issues

Current {% include nuget.md name='NUnit3TestAdapter' %} package v3.9.0 doesn't support parallel test execution on .NET Core 2.0 yet.
Fortunately it should should appear in v3.10.0 ([NUnit issue #2542](https://github.com/nunit/nunit/issues/2542)).
{:.warning}

Current {% include nuget.md name='NUnit' %} package v3.9.0 doesn't support `SetCulture` and `SetUICulture` attributes.
Please check {% include issue.md id=103 %} for **Culture configuration** using `UseCulture` configurational method.
{:.warning}

#### Running Tests with Visual Studio

For test detection in "Test Explorer" VS panel, .NET Core requires {% include nuget.md name='Microsoft.NET.Test.Sdk' %} package to be added to the project containing tests (no matter NUnit, xUnit, MSTest, etc.).
{:.warning}