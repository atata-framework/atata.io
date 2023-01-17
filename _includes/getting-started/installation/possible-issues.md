#### WebDriver .NET Performance Issue

If your Atata testing actions go very slowly, check out this issue.
{:.info}

There is a rare issue using Selenium WebDriver since v3.6.0 for .NET Core 2.0+:
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