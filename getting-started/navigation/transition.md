The transition from one page object to another is implemented via controls: [Button](/components#button), [Link](/components#link) and [Clickable](/components#clickable). Also the transition can be specified via adding `INavigable<,>` interface to the custom control.

#### Example

For example, having 3 simple pages on the site:

* "**Users**" page with users table and "New" link that navigates to the user editor page. Clicking on the user row redirects to the "User Details" page.
* "**User Editor**" page that contains "Name" input field, "Save" and "Cancel" buttons that redirect back to "Users" page.
* "**User Details**" page containing the name of the user.

`UsersPage.cs`
{:.file-name}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = UsersPage;

    [Url("users")]
    public class UsersPage : Page<_>
    {
        public Link<UserEditorPage, _> New { get; private set; }

        public Table<UserTableRow, _> Users { get; private set; }

        public class UserTableRow : TableRow<_>, INavigable<UserDetailsPage, _>
        {
            public Text<_> Name { get; private set; }
        }
    }
}
```
{:.page-object}

`UserEditorPage.cs`
{:.file-name}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = UserEditorPage;

    public class UserEditorPage : Page<_>
    {
        public TextInput<_> Name { get; private set; }

        public Button<UsersPage, _> Save { get; private set; }

        public Button<UsersPage, _> Cancel { get; private set; }
    }
}
```
{:.page-object}

`UserDetailsPage.cs`
{:.file-name}

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = UserDetailsPage;

    public class UserDetailsPage : Page<_>
    {
        public H1<_> Name { get; private set; }
    }
}
```
{:.page-object}

#### Usage

```cs
string userName;

Go.To<UsersPage>().
    New.ClickAndGo(). // Navigates to UserEditorPage.
        Name.SetRandom(out userName). // Sets the random value to Name field and stores it to userName variable.
        Save.ClickAndGo(). // Clicking the Save button navigates back to UsersPage.
    Users.Rows[x => x.Name == userName].ClickAndGo(). // Clicking the row navigates to UserDetailsPage.
        Name.Should.Equal(userName);
```
{:.test}