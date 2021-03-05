.NET Core, as well as .NET Framework 4.0+ and .NET 5.0+, is supported and you are able to use Atata package in .NET Core 2.1+ test project.
You can also create .NET Standard 2.0+ library project for Atata components package.
But there are few issues below that may require extra configuration comparing to .NET Framework,
if you feel that you faced one of them.

#### WebDriver .NET Core Performance Issue

There is a bug in Selenium WebDriver since v3.6.0 for .NET Core 2.0+:
each WebDriver request takes extra 1 second.
It makes execution of WebDriver actions very slow.
The fix is added within Atata package.
Use `WithFixOfCommandExecutionDelay` driver configurational method to get around of this bug.

```cs
AtataContext.GlobalConfiguration
    .UseChrome()
        .WithFixOfCommandExecutionDelay();
```

It is equivalent to:

```cs
AtataContext.GlobalConfiguration
    .UseChrome()
        .WithHostName("127.0.0.1");
```

Using `Atata.Configuration.Json`:

```json
{
  "driver": {
    "type": "chrome",
    "service": {
      "hostName": "127.0.0.1"
    }
  }
}
```

Check the fix details: {% include issue.md id=101 %} **Fix command execution delay of WebDriver for .NET Core 2.0**.

#### WebDriver .NET Core Driver Path Issue

If you use specific NuGet package for driver setup, like `Selenium.WebDriver.ChromeDriver`,
WebDriver doesn't look for driver (e.g., "chromedriver.exe") in application build folder in .NET Core 2.1 version.
Use `WithLocalDriverPath` driver configurational method if you use .NET Core 2.1 project
that uses driver as a project package (hosted in the same build directory).

```cs
AtataContext.GlobalConfiguration
    .UseChrome()
        .WithLocalDriverPath();
```

Using `Atata.Configuration.Json`:

```json
{
  "driver": {
    "type": "chrome",
    "service": {
      "driverPath": "{basedir}"
    }
  }
}
```

Check the fix details: {% include issue.md id=102 %} **Add WithLocalDriverPath method to DriverAtataContextBuilder<TBuilder, TService, TOptions>**.

#### Running Tests Using Visual Studio

For test detection in "Test Explorer" VS panel, .NET Core requires {% include nuget.md name='Microsoft.NET.Test.Sdk' %}
package to be added to the project that contains tests (no matter NUnit, xUnit, MSTest, etc.).