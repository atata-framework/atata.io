```cs
[Test]
public void SignIn()
{
    Go.To<SignInPage>().
        Email.Set("admin@mail.com").
        Password.Set("abc123").
        SignIn.Click();
}

[SetUp]
public void SetUp()
{
    AtataContext.Build().
        UseChrome().
        UseBaseUrl("http://atata-framework.github.io/atata-sample-app/#!/").
        SetUp();
}
```