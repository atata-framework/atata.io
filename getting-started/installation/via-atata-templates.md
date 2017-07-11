To get started install [**Atata Templates**]({{ site.links.atata_templates }}) Visual Studio extension.

The extension provides the following templates:

- **Atata Test Project** project template
- **Atata Page Object** class template
- **Atata Control** class template
- **Atata Trigger** class template

When extension is installed you can create a project of **Atata Test Project** type. In Visual Studio:

1. Go to **File/New/Project...**
1. Select **Templates/Visual C#/Atata** category
1. Choose **Atata Test Project** and specify project name and location

![Atata Templates project](/assets/images/atata-templates-project.png)

The project is created with NuGet package references:

- {% include nuget.md name="Atata" %}
- {% include nuget.md name="Atata.WebDriverExtras" %}
- {% include nuget.md name="Selenium.WebDriver" %}
- {% include nuget.md name="Selenium.Support" %}
- {% include nuget.md name="NUnit" %}
- {% include nuget.md name="NUnit3TestAdapter" %}

You might also need to install a driver package for specific browser: {% include nuget.md name="WebDriver.ChromeDriver.win32" %}, {% include nuget.md name="WebDriver.IEDriverServer.win32" %}, etc.
{:.warning}

In created project you can specify your testing site base URL and apropriate driver in `UITestFixture.cs` class, e.g.:

```cs
AtataContext.Build().
    UseChrome().
    UseBaseUrl("SITE_URL").
    //...
```

Further test fixture classes are recommended to inherit from `UITestFixture`.