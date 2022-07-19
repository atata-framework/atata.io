Demo [atata-framework/atata-sample-app-tests](https://github.com/atata-framework/atata-sample-app-tests) UI tests application demonstrates different testing approaches and features of Atata Framework.
It uses [Atata Sample App](https://demo.atata.io/) ([repository](https://github.com/atata-framework/atata-sample-app)) as a testing website and NUnit 3 as a test engine.

### Features

* Atata test initialization and settings set-up
* Page navigation
* Controls finding
* Data input and verification
* Validation messages verification
* Use of the triggers
* Interaction with the pop-ups (Bootstrap modal) and alerts
* Work with the tables
* Logging

### Sample Test

```cs
[Test]
public void Create()
{
    Login()
        .New()
            .ModalTitle.Should.Be("New User")
            .General.FirstName.SetRandom(out string firstName)
            .General.LastName.SetRandom(out string lastName)
            .General.Email.SetRandom(out string email)
            .General.Office.SetRandom(out Office office)
            .General.Gender.SetRandom(out Gender gender)
            .Save()
        .GetUserRow(email).View()
            .AggregateAssert(x => x
                .Header.Should.Be($"{firstName} {lastName}")
                .Email.Should.Be(email)
                .Office.Should.Be(office)
                .Gender.Should.Be(gender)
                .Birthday.Should.Not.Exist()
                .Notes.Should.Not.Exist());
}
```
{:.test}