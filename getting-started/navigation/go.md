The page object navigation starts with `Go` class. It provides a set of static generic methods for navigation.

#### Methods

Name | Description
---- | -----------
`To<T>(T pageObject = null, string url = null, bool navigate = true, bool temporarily = false)` | Navigates to the specified page object.
`ToWindow<T>(T pageObject, string windowName, bool temporarily = false)` | Navigates to the window with the specified page object by name.
`ToWindow<T>(string windowName, bool temporarily = false)` | Navigates to the window by name.
`ToNextWindow<T>(T pageObject = null, bool temporarily = false)` | Navigates to the next window with the specified page object.
`ToPreviousWindow<T>(T pageObject = null, bool temporarily = false)` | Navigates to the previous window with the specified page object.
`ToUrl(string url)` | Navigates to the specified URL.
{:.table.table-members.table-members-fixed-col-1}

#### Usage

```cs
Go.To<HomePage>().
    Header.Should.Equal("Home");

Go.To<AboutPage>(url: "about").
    Header.Should.Equal("About");
```
{:.test}