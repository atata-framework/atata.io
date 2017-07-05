The above sample `SignIn` test generates the following log:

```
2016-09-26 15:50:51.7688 INFO Starting test: SignIn
2016-09-26 15:50:51.7858 INFO Starting: Init WebDriver
2016-09-26 15:50:54.3819 INFO Finished: Init WebDriver (2.596s)
2016-09-26 15:50:54.4073 INFO Go to "Sign In" page
2016-09-26 15:50:54.4088 INFO Go to URL "http://atata-framework.github.io/atata-sample-app/#!/signin"
2016-09-26 15:50:55.4865 INFO Starting: Verify title should equal "Sign In - Atata Sample App"
2016-09-26 15:50:55.4975 INFO Finished: Verify title should equal "Sign In - Atata Sample App" (0.010s)
2016-09-26 15:50:55.5035 INFO Starting: Verify "Sign In" <h1> heading content should equal "Sign In"
2016-09-26 15:50:55.5813 INFO Finished: Verify "Sign In" <h1> heading content should equal "Sign In" (0.077s)
2016-09-26 15:50:55.5818 INFO Starting: Set "admin@mail.com" to "Email" text input
2016-09-26 15:50:55.7342 INFO Finished: Set "admin@mail.com" to "Email" text input (0.152s)
2016-09-26 15:50:55.7342 INFO Starting: Set "abc123" to "Password" password input
2016-09-26 15:50:55.8625 INFO Finished: Set "abc123" to "Password" password input (0.128s)
2016-09-26 15:50:55.8630 INFO Starting: Click "Sign In" button
2016-09-26 15:50:55.9568 INFO Finished: Click "Sign In" button (0.093s)
2016-09-26 15:50:55.9578 INFO Starting: Clean up test context
2016-09-26 15:50:56.0173 INFO Finished: Clean up test context (0.059s)
2016-09-26 15:50:56.0178 INFO Finished test (4.249s)
2016-09-26 15:50:56.0178 INFO Pure test execution time:  1.575s
```