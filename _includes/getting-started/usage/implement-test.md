`SignInTests.cs`
{:.file-name}

```cs
namespace AtataDemo.UITests;

public sealed class SignInTests : AtataTestSuite
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