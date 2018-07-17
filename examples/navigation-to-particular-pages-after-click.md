---
layout: article
title: Navigation to Particular Pages After Click
description: How to perform the navigation to one of particular pages after the button/link click.
---

{{ page.description }}
{:.lead}

## Given

Simple sign in form which after 'Sign In' button click can navigate user to different pages.
For example, to admin page or regular user profile page, depending on user account.

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

## Implementation

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

        public UserProfilePage SignInAsUser()
        {
            return SignIn.ClickAndGo<UserProfilePage>();
        }

        public AdminPage SignInAsAdmin()
        {
            return SignIn.ClickAndGo<AdminPage>();
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

<div class="post-footer">
{% include sharebuttons.html page=page %}
</div>
{% include comments.html %}