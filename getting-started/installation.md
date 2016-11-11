To get started just install the [Atata NuGet package]({{ site.links.atata_nuget }}).
{:.lead}

<code class="language-nugetpm">
PM> Install-Package Atata
</code>

The Atata package depends on the following packages:

* [Selenium.WebDriver](https://www.nuget.org/packages/Selenium.WebDriver)
* [Selenium.Support](https://www.nuget.org/packages/Selenium.Support)
* [Atata.WebDriverExtras]({{ site.links.atata_webdriverextras_nuget }})

You might need also to install a driver package for the specific browser: [Selenium.WebDriver.ChromeDriver](https://www.nuget.org/packages/Selenium.WebDriver.ChromeDriver/), [Selenium.WebDriver.IEDriver](https://www.nuget.org/packages/Selenium.WebDriver.IEDriver/), etc.
{:.info}