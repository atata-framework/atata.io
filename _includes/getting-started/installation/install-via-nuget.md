It is more custom approach to create Atata testing project.
To get started just add [**Atata NuGet package**]({{ site.links.atata_nuget }}) to the project of **Class Library** type.

<code class="language-nugetpm">
PM> Install-Package Atata
</code>

The **Atata** package depends on the following packages, which are added automatically:

- {% include nuget.md name="Selenium.WebDriver" %}
- {% include nuget.md name="Atata.WebDriverExtras" %}

You might also need to install {% include nuget.md name="Atata.WebDriverSetup" %} package
for auto-setup of browser drivers, e.g. `chromedriver`, `geckodriver`, etc.
This is a recommended option.
Alternatively, you can install a driver package for specific browser:
{% include nuget.md name="Selenium.WebDriver.ChromeDriver" %},
{% include nuget.md name="Selenium.WebDriver.IEDriver" %},
etc.
But be aware to keep version synchronization of browser and driver.
{:.warning}

You are also free to select any test engine framework:
NUnit, Xunit, MSTest, SpecFlow, etc.