It is a more custom approach to create Atata testing project.
To get started just add [**Atata NuGet package**]({{ site.links.atata_nuget }})
to the project of **Class Library** or a test project type in Visual Studio or other IDE.

<code class="language-nugetpm">
PM> Install-Package Atata
</code>

The **Atata** package depends on the following packages, which are added transiently:

- {% include nuget.md name="Selenium.WebDriver" %}
- {% include nuget.md name="Atata.WebDriverExtras" %}

You might also need to install {% include nuget.md name="Atata.WebDriverSetup" %} package
for auto-setup of browser drivers, e.g. `chromedriver`, `geckodriver`, etc.
This is a recommended option.
Alternatively, you can rely on built-in WebDriver [Selenium Manager](https://www.selenium.dev/documentation/selenium_manager/).
{:.info}

For .NET non-MTP projects it is required also to add {% include nuget.md name='Microsoft.NET.Test.Sdk' %}
package to the project that contains tests (no matter NUnit, xUnit, MSTest, etc.).
{:.warning}

You are free to select any test engine framework:
NUnit, Xunit, MSTest, Reqnroll, etc.