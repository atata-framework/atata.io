---
title: "Presenting Atata.HtmlValidation"
description: "New Atata.HtmlValidation .NET library is released to help you validate HTML of pages."
---

New [Atata.HtmlValidation](https://www.nuget.org/packages/Atata.HtmlValidation/)
.NET library is released to help you validate HTML of pages.
{:.lead}

<!--more-->

## About

**{% include nuget.md name="Atata.HtmlValidation" %}** is a .NET library that adds HTML page validation to
**Atata** using [html-validate](https://www.npmjs.com/package/html-validate) NPM package.

The library depends on:

- {% include nuget.md name="Atata.Cli" %}
- {% include nuget.md name="Atata.Cli.Npm" %}
- {% include nuget.md name="Atata.Cli.HtmlValidate" %}

Find out more information on the library on
[**Atata.HtmlValidation GitHub repository README page**](https://github.com/atata-framework/atata-htmlvalidation).

## Features

- Uses [CLI of html-validate](https://html-validate.org/usage/cli.html) NPM package.
- Validates HTML of Atata page objects.
- Performs validation offline.
- Supports different result formatters.
- Supports custom validation rule sets by configuration files.
- Saves HTML and validation results to artifact files.
- Can produce either error or warning.

## Usage

### Using ValidateHtml Extension Method

The primary way to execute validations is using `ValidateHtml` extension method:

```cs
public static TPageObject ValidateHtml<TPageObject>(
    this TPageObject pageObject,
    HtmlValidationOptions options = null,
    bool asWarning = false)
    where TPageObject : PageObject<TPageObject>;
```

The method validates the HTML of current page.
Relies on `HtmlValidator` class
that uses "html-validate" NPM package to execute HTML validation.

Before the execution of validation, the check of installed "html-validate" package version performs.
The required package version is defined in `HtmlValidatePackageVersion` property of `options`.
The required version will be installed if "html-validate" package is not installed or the installed version differs from the required one.

By default, when validation fails, throws an assertion exception with a message containing a list of HTML errors.
Produces a warning instead of assertion exception if `asWarning` argument is set to `true`.

#### Validate by Default

```cs
Go.To<OrdinaryPage>(url: "some/url")
    .ValidateHtml();
```

#### Validate As Warning

```cs
Go.To<OrdinaryPage>(url: "some/url")
    .ValidateHtml(asWarning: true);
```

#### Validate With Custom Options

```cs
var options = new HtmlValidationOptions
{
    OutputFormatter = HtmlValidateFormatter.Names.Text,
    ResultFileFormatter = HtmlValidateFormatter.Names.Json,
    ConfigPath = "some/config.json"
};

Go.To<OrdinaryPage>(url: "some/url")
    .ValidateHtml(options);
```

#### Validate With Options Based on Default Ones

```cs
Go.To<OrdinaryPage>(url: "some/url")
    .ValidateHtml(HtmlValidationOptions.Default.CloneWith(x => x.ConfigPath = "another/config.json"));
```

### Using ValidateHtmlAttribute Trigger

`ValidateHtmlAttribute` - the trigger attribute that indicates that the page HTML should be validated on the specified event.
By default occurs upon the page object initialization.
Invokes `ValidateHtml` method using `HtmlValidationOptions.Default` options.

Has `public bool AsWarning { get; set; }` property that gets or sets a value indicating whether to produce a warning instead of assertion exception on validation failure.
The default value is `false`.

#### Apply to Certain Page Object

```cs
[ValidateHtml]
public class SomePage : Page<_>
{
}
```

#### Apply to All Page Objects

```cs
AtataContext.GlobalConfiguration
    .Attributes.Global.Add(new ValidateHtmlAttribute { TargetType = typeof(PageObject<>) });
```

### Using HtmlValidator

This approach is a bit low-level one.
Can be used without active `AtataContext`.

`HtmlValidator` - uses "html-validate" NPM package to execute HTML validation.
If required version of "html-validate" package is not installed, installs it.

```cs
HtmlValidator validator = new HtmlValidator(
    new HtmlValidationOptions()); // HtmlValidationOptions are optional here.

string html = "<html>...</html>";
// string html = webDriver.PageSource;

HtmlValidationResult result = validator.Validate(html);

if (!result.IsSuccessful)
{
    string resultMessage = result.Output;

    // TODO: Handle validation failure case.
}
```

## Validation Results

The results of failed validation using `ValidateHtml` method can be found in few places.

Additionally original HTML snapshot, which was validated, is saved to Atata Artifacts directory as a file.

### Exception

An `AssertionException` is thrown with the message similar to:

```
Wrong "<app>" page HTML document, which contains errors:
785a0e99-359a-4905-b490-3a62c61fbf37.html
  69:22  error  <th> is missing required "scope" attribute     element-required-attributes
  70:22  error  <th> is missing required "scope" attribute     element-required-attributes
  71:22  error  <th> is missing required "scope" attribute     element-required-attributes
  72:22  error  <th> is missing required "scope" attribute     element-required-attributes
  81:26  error  <button> is missing required "type" attribute  element-required-attributes
  82:26  error  <button> is missing required "type" attribute  element-required-attributes
  83:26  error  <button> is missing required "type" attribute  element-required-attributes

✖ 7 problems (7 errors, 0 warnings)

More information:
  https://html-validate.org/rules/element-required-attributes.html
```

### Result File

By default, the result file that is saved to Atata Artifacts directory is generated using "codeframe" formatter,
which provides nice detailed report.

```
error: <th> is missing required "scope" attribute (element-required-attributes) at 785a0e99-359a-4905-b490-3a62c61fbf37.html:69:22:
  67 |             <thead>
  68 |                 <tr>
> 69 |                     <th>Name</th>
     |                      ^^
  70 |                     <th>Price</th>
  71 |                     <th>Amount</th>
  72 |                     <th></th>
Details: https://html-validate.org/rules/element-required-attributes.html


error: <th> is missing required "scope" attribute (element-required-attributes) at 785a0e99-359a-4905-b490-3a62c61fbf37.html:70:22:
  68 |                 <tr>
  69 |                     <th>Name</th>
> 70 |                     <th>Price</th>
     |                      ^^
  71 |                     <th>Amount</th>
  72 |                     <th></th>
  73 |                 </tr>
Details: https://html-validate.org/rules/element-required-attributes.html

...
```

### Log

Additional details of validation execution can be found in Atata log.

```
...
2021-07-23 19:06:22.7088  INFO > Validate: "<app>" page HTML document
2021-07-23 19:06:22.7102 TRACE - > Get page source HTML
2021-07-23 19:06:22.7319 TRACE - < Get page source HTML (0.021s)
2021-07-23 19:06:22.7434 TRACE - HTML saved to file "D:\Development\atata-sample-app-tests\test\AtataSampleApp.UITests\bin\Debug\netcoreapp3.1\artifacts\2021-07-23 19_05_57\HtmlPageValidationTests\Validate(products)\785a0e99-359a-4905-b490-3a62c61fbf37.html"
2021-07-23 19:06:23.3315 TRACE - > Execute html-validate CLI command for "785a0e99-359a-4905-b490-3a62c61fbf37.html" with "stylish" formatter
2021-07-23 19:06:24.2595 TRACE - < Execute html-validate CLI command for "785a0e99-359a-4905-b490-3a62c61fbf37.html" with "stylish" formatter (0.927s) >> { IsSuccessful = False }
2021-07-23 19:06:24.2615 TRACE - > Execute html-validate CLI command for "785a0e99-359a-4905-b490-3a62c61fbf37.html" with "codeframe" formatter
2021-07-23 19:06:25.1164 TRACE - < Execute html-validate CLI command for "785a0e99-359a-4905-b490-3a62c61fbf37.html" with "codeframe" formatter (0.854s) >> { IsSuccessful = False }
2021-07-23 19:06:25.1203  INFO - HTML validation report saved to file "D:\Development\atata-sample-app-tests\test\AtataSampleApp.UITests\bin\Debug\netcoreapp3.1\artifacts\2021-07-23 19_05_57\HtmlPageValidationTests\Validate(products)\785a0e99-359a-4905-b490-3a62c61fbf37.txt"
2021-07-23 19:06:31.4848  INFO < Validate: "<app>" page HTML document (8.775s) >> NUnit.Framework.AssertionException: Wrong "<app>" page HTML document, which contains errors...
2021-07-23 19:06:31.5586 ERROR Wrong "<app>" page HTML document, which contains errors:
785a0e99-359a-4905-b490-3a62c61fbf37.html
  69:22  error  <th> is missing required "scope" attribute     element-required-attributes
  70:22  error  <th> is missing required "scope" attribute     element-required-attributes
  71:22  error  <th> is missing required "scope" attribute     element-required-attributes
  72:22  error  <th> is missing required "scope" attribute     element-required-attributes
  81:26  error  <button> is missing required "type" attribute  element-required-attributes
  82:26  error  <button> is missing required "type" attribute  element-required-attributes
  83:26  error  <button> is missing required "type" attribute  element-required-attributes

✖ 7 problems (7 errors, 0 warnings)

More information:
  https://html-validate.org/rules/element-required-attributes.html
...
```

## Sample Project

Check out [atata-framework/atata-sample-app-tests](https://github.com/atata-framework/atata-sample-app-tests) repository, which contains [`HtmlPageValidationTests`](https://github.com/atata-framework/atata-sample-app-tests/blob/master/test/AtataSampleApp.UITests/HtmlPageValidationTests.cs) test class that validates HTML of some pages.
It also contains a sample [`.htmlvalidate.json`](https://github.com/atata-framework/atata-sample-app-tests/blob/master/test/AtataSampleApp.UITests/.htmlvalidate.json) configuration file.