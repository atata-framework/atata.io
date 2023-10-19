`SignInTests.cs`
{:.file-name}

```cs
namespace AtataDemo.UITests;

[TestFixture]
public class SignInTests : UITestFixture
{
    [Test]
    public void SignIn() =>
        Go.To<SignInPage>()
            .Email.Type("admin@mail.com")
            .Password.Type("abc123")
            .SignIn.Click();
}
```
{:.test}