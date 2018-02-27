---
layout: regular-page
title: Navigation to Different Pages After Click
---

How to perform the navigation to different pages after the button/link click.
{:.lead}

## Given

Simple sign in form which after 'Sign In' button click can navigate user to different pages. For example, to admin page or regular user profile page, depending on user account.

{% capture html %}
<div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email">
</div>
<div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password">
</div>
<button class="btn btn-primary">Sign In</button>

{% endcapture %}

{% include htmlexample.html html=html %}

## Approach #1

Using `Go.To` navigation in the test method.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SignInPage;

    public class SignInPage : Page<_>
    {
        public TextInput<_> Email { get; private set; }

        public PasswordInput<_> Password { get; private set; }

        public Button<_> SignIn { get; private set; }
    }
}
```
{:.page-object}

### Navigate to Regular User Profile Page

```cs
Go.To<SignInPage>().
    Email.Set("user@mail.com").
    Password.Set("abc123").
    SignIn.Click();

Go.To<UserProfilePage>(navigate: false);
```
{:.test}

### Navigate to Admin Page

```cs
Go.To<SignInPage>().
    Email.Set("admin@mail.com").
    Password.Set("abc123").
    SignIn.Click();

Go.To<AdminPage>(navigate: false);
```
{:.test}

### Conclusions

#### Pros

* Easy to implement.
  
#### Cons

* The fluent call chain breaks.

## Approach #2

Using `Go.To` navigation in the page object methods.

```cs
using Atata;

namespace SampleApp.UITests
{
    using _ = SignInPage;

    public class SignInPage : Page<_>
    {
        public TextInput<_> Email { get; private set; }

        public PasswordInput<_> Password { get; private set; }

        public Button<_> SignInButton { get; private set; }

        public UserProfilePage SignInAsUser()
        {
            SignInButton.Click();
            return Go.To<UserProfilePage>(navigate: false);
        }

        public AdminPage SignInAsAdmin()
        {
            SignInButton.Click();
            return Go.To<AdminPage>(navigate: false);
        }
    }
}
```
{:.page-object}

### Navigate to Regular User Profile Page

```cs
Go.To<SignInPage>().
    Email.Set("user@mail.com").
    Password.Set("abc123").
    SignInAsUser();
```
{:.test}

### Navigate to Admin Page

```cs
Go.To<SignInPage>().
    Email.Set("admin@mail.com").
    Password.Set("abc123").
    SignInAsAdmin();
```
{:.test}

### Conclusions

#### Pros

* Easy to use in the test methods.
* Good test readability.

#### Cons

* Need to implement separate method in the page object for each navigation target page.

<div class="post-footer">
{% include sharebuttons.html page=page %}
</div>
{% include comments.html %}