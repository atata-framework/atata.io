To get started, install [**Atata Templates**]({{ site.links.atata_templates }}) Visual Studio extension.

The extension provides the following templates:

- Project templates:
  - Atata NUnit Basic Test Project (.NET 6)
  - Atata NUnit Basic Test Project (.NET 7)
  - Atata NUnit Advanced Test Project (.NET 6)
  - Atata NUnit Advanced Test Project (.NET 7)
- Item templates:
  - Atata Page Object
  - Atata Base Page Object
  - Atata Control
  - Atata Trigger
  - Atata NUnit Test Fixture
  - Atata NUnit Base Test Fixture

#### Create Project

When extension is installed, you can create a project of one of Atata project types.
In Visual Studio:

1. Go to **File/New/Project...** or **File/Add/New Project...** (to add to existing solution)
1. Type **Atata** into search box or choose **Atata** in "project types" drop-down
1. Choose template (e.g.: **Atata NUnit Advanced Test Project (.NET 6)**) and specify project name and location

![Atata Templates project](/assets/images/atata-templates/new-project-window.png?v4)

#### Project References

The project is created with NuGet package references:

- {% include nuget.md name="Atata" %}
- {% include nuget.md name="Atata.WebDriverSetup" %}
- {% include nuget.md name="Microsoft.NET.Test.Sdk" %}
- {% include nuget.md name="NUnit" %}
- {% include nuget.md name="NUnit3TestAdapter" %}
- {% include nuget.md name="Atata.Configuration.Json" %} (for advanced project)
- {% include nuget.md name="NLog" %} (for advanced project)

#### Configuration

You don't need to configure specific browser driver packages,
as a project is by default configured to automatically download appropriate driver,
by use of {% include nuget.md name="Atata.WebDriverSetup" %} package.

In the created project you can specify your testing site base URL and appropriate driver in
`SetUpFixture.cs` or `Atata.local.json` class, depending on type of project (basic or advanced).

```cs
AtataContext.GlobalConfiguration
    .UseChrome()
        .WithArguments("start-maximized")
    .UseBaseUrl("https://atata.io/")
    //...
```

```js
{
  "baseUrl": "https://atata.io/"
  // Other environment specific configuration properties can be added here.
}
```

Just replace `"https://atata.io/"` string with your URL.

#### Test Fixtures

The created project also contains ready to use `SampleTests.cs` fixture, which can be either modified or removed:

```cs
namespace AtataUITests1;

public class SampleTests : UITestFixture
{
    [Test]
    public void SampleTest() =>
        Go.To<OrdinaryPage>()
            .PageTitle.Should.Contain("Atata");
}
```

Further test fixture classes are recommended to inherit from `UITestFixture`,
or just choose "Atata NUnit Test Fixture" item template in "Add New Item Window".

#### Create Project Targeting Other .NET Version

1. Create a project using one of the project templates: "Atata NUnit Basic Test Project (.NET 6)", "Atata NUnit Advanced Test Project (.NET 6)".
1. Open project `.csproj` file.
1. Change the value of `<TargetFramework>` tag from `net6.0` to the needed version.
   ```xml
   <Project Sdk="Microsoft.NET.Sdk">
   
     <PropertyGroup>
       <TargetFramework>NET_VERSION</TargetFramework>
       <!-- ... -->
     </PropertyGroup>
   
     <!-- ... -->
   
   </Project>
   ```