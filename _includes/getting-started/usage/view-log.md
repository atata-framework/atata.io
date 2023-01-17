The above sample `SignIn` test generates the following log to NUnit output:

```
2023-01-17 17:07:06.9954  INFO Starting test: AtataDemo.UITests.SignInTests.SignIn
2023-01-17 17:07:07.0051 TRACE > Set up AtataContext
2023-01-17 17:07:07.0058 TRACE - Set: BaseUrl=https://demo.atata.io/
2023-01-17 17:07:07.0064 TRACE - Set: ElementFindTimeout=5s; ElementFindRetryInterval=0.5s
2023-01-17 17:07:07.0066 TRACE - Set: WaitingTimeout=5s; WaitingRetryInterval=0.5s
2023-01-17 17:07:07.0066 TRACE - Set: VerificationTimeout=5s; VerificationRetryInterval=0.5s
2023-01-17 17:07:07.0069 TRACE - Set: Culture=en-US
2023-01-17 17:07:07.0071 TRACE - Set: Artifacts=D:\dev\AtataDemo.UITests\AtataDemo.UITests\bin\Debug\netcoreapp3.1\artifacts\20230117T170706\SignInTests\SignIn
2023-01-17 17:07:07.0123 TRACE - Set: DriverService=ChromeDriverService on port 60375
2023-01-17 17:07:07.6802 TRACE - Set: Driver=ChromeDriver (alias=chrome)
2023-01-17 17:07:07.6815 TRACE < Set up AtataContext (0.676s)
2023-01-17 17:07:07.7095  INFO > Go to "Sign In" page by URL https://demo.atata.io/signin
2023-01-17 17:07:07.7100 TRACE - > Navigate to URL https://demo.atata.io/signin
2023-01-17 17:07:07.9629 TRACE - < Navigate to URL https://demo.atata.io/signin (0.252s)
2023-01-17 17:07:07.9820  INFO < Go to "Sign In" page by URL https://demo.atata.io/signin (0.272s)
2023-01-17 17:07:07.9908 TRACE > Execute trigger VerifyH1Attribute { Index=-1, Case=Title, Match=Equals, Timeout=5, RetryInterval=0.5 } on Init against "Sign In" page
2023-01-17 17:07:08.0004  INFO - > Assert: "Sign In" <h1> heading should be present
2023-01-17 17:07:08.0181 TRACE - - > Find visible element by XPath ".//h1[normalize-space(.) = 'Sign In']" in ChromeDriver
2023-01-17 17:07:08.5516 TRACE - - < Find visible element by XPath ".//h1[normalize-space(.) = 'Sign In']" in ChromeDriver (0.532s) >> Element { Id=29914dc5-4805-4fc2-b5d2-d64e43923008 }
2023-01-17 17:07:08.5527  INFO - < Assert: "Sign In" <h1> heading should be present (0.552s)
2023-01-17 17:07:08.5529 TRACE < Execute trigger VerifyH1Attribute { Index=-1, Case=Title, Match=Equals, Timeout=5, RetryInterval=0.5 } on Init against "Sign In" page (0.562s)
2023-01-17 17:07:08.5572  INFO > Set "admin@mail.com" to "Email" text input
2023-01-17 17:07:08.5587 TRACE - > Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Email" text input
2023-01-17 17:07:08.5597 TRACE - - > Execute behavior ClearsValueUsingClearMethodAttribute against "Email" text input
2023-01-17 17:07:08.5626 TRACE - - - > Find element by XPath ".//label[normalize-space(.) = 'Email']" in ChromeDriver
2023-01-17 17:07:08.5711 TRACE - - - < Find element by XPath ".//label[normalize-space(.) = 'Email']" in ChromeDriver (0.008s) >> Element { Id=0f551d11-0171-4ed1-ba9f-74675df8e2b4 }
2023-01-17 17:07:08.5815 TRACE - - - > Find element by XPath ".//*[normalize-space(@id) = 'email']/descendant-or-self::input[@type='text' or not(@type)]" in ChromeDriver
2023-01-17 17:07:08.5887 TRACE - - - < Find element by XPath ".//*[normalize-space(@id) = 'email']/descendant-or-self::input[@type='text' or not(@type)]" in ChromeDriver (0.007s) >> Element { Id=a54e919d-11b7-484b-b3f9-6f6822e22c00 }
2023-01-17 17:07:08.5906 TRACE - - - > Clear element { Id=a54e919d-11b7-484b-b3f9-6f6822e22c00 }
2023-01-17 17:07:08.6099 TRACE - - - < Clear element { Id=a54e919d-11b7-484b-b3f9-6f6822e22c00 } (0.019s)
2023-01-17 17:07:08.6102 TRACE - - < Execute behavior ClearsValueUsingClearMethodAttribute against "Email" text input (0.050s)
2023-01-17 17:07:08.6107 TRACE - - > Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input
2023-01-17 17:07:08.6118 TRACE - - - > Send keys "admin@mail.com" to element { Id=a54e919d-11b7-484b-b3f9-6f6822e22c00 }
2023-01-17 17:07:08.6584 TRACE - - - < Send keys "admin@mail.com" to element { Id=a54e919d-11b7-484b-b3f9-6f6822e22c00 } (0.046s)
2023-01-17 17:07:08.6586 TRACE - - < Execute behavior TypesTextUsingSendKeysAttribute against "Email" text input (0.047s)
2023-01-17 17:07:08.6587 TRACE - < Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Email" text input (0.100s)
2023-01-17 17:07:08.6588  INFO < Set "admin@mail.com" to "Email" text input (0.101s)
2023-01-17 17:07:08.6589  INFO > Set "abc123" to "Password" password input
2023-01-17 17:07:08.6591 TRACE - > Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Password" password input
2023-01-17 17:07:08.6592 TRACE - - > Execute behavior ClearsValueUsingClearMethodAttribute against "Password" password input
2023-01-17 17:07:08.6597 TRACE - - - > Find element by XPath ".//label[normalize-space(.) = 'Password']" in ChromeDriver
2023-01-17 17:07:08.6675 TRACE - - - < Find element by XPath ".//label[normalize-space(.) = 'Password']" in ChromeDriver (0.007s) >> Element { Id=13c05021-8bf3-478a-9882-7ee67751ec67 }
2023-01-17 17:07:08.6761 TRACE - - - > Find element by XPath ".//*[normalize-space(@id) = 'password']/descendant-or-self::input[@type='password']" in ChromeDriver
2023-01-17 17:07:08.6841 TRACE - - - < Find element by XPath ".//*[normalize-space(@id) = 'password']/descendant-or-self::input[@type='password']" in ChromeDriver (0.007s) >> Element { Id=197506e3-8870-45d6-a56c-f6e655b98bc3 }
2023-01-17 17:07:08.6846 TRACE - - - > Clear element { Id=197506e3-8870-45d6-a56c-f6e655b98bc3 }
2023-01-17 17:07:08.7047 TRACE - - - < Clear element { Id=197506e3-8870-45d6-a56c-f6e655b98bc3 } (0.020s)
2023-01-17 17:07:08.7050 TRACE - - < Execute behavior ClearsValueUsingClearMethodAttribute against "Password" password input (0.045s)
2023-01-17 17:07:08.7052 TRACE - - > Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input
2023-01-17 17:07:08.7053 TRACE - - - > Send keys "abc123" to element { Id=197506e3-8870-45d6-a56c-f6e655b98bc3 }
2023-01-17 17:07:08.7382 TRACE - - - < Send keys "abc123" to element { Id=197506e3-8870-45d6-a56c-f6e655b98bc3 } (0.032s)
2023-01-17 17:07:08.7385 TRACE - - < Execute behavior TypesTextUsingSendKeysAttribute against "Password" password input (0.033s)
2023-01-17 17:07:08.7386 TRACE - < Execute behavior SetsValueUsingClearAndTypeBehaviorsAttribute against "Password" password input (0.079s)
2023-01-17 17:07:08.7386  INFO < Set "abc123" to "Password" password input (0.079s)
2023-01-17 17:07:08.7390  INFO > Click "Sign In" button
2023-01-17 17:07:08.7396 TRACE - > Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button
2023-01-17 17:07:08.7408 TRACE - - > Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver
2023-01-17 17:07:08.7497 TRACE - - < Find element by XPath ".//*[self::input[@type='button' or @type='submit' or @type='reset'] or self::button][normalize-space(.) = 'Sign In' or normalize-space(@value) = 'Sign In']" in ChromeDriver (0.008s) >> Element { Id=85cbafb1-d8af-4765-b4c0-2bd0e9a820f3 }
2023-01-17 17:07:08.7502 TRACE - - > Click element { Id=85cbafb1-d8af-4765-b4c0-2bd0e9a820f3 }
2023-01-17 17:07:08.7900 TRACE - - < Click element { Id=85cbafb1-d8af-4765-b4c0-2bd0e9a820f3 } (0.039s)
2023-01-17 17:07:08.7903 TRACE - < Execute behavior ClicksUsingClickMethodAttribute against "Sign In" button (0.050s)
2023-01-17 17:07:08.7904  INFO < Click "Sign In" button (0.051s)
2023-01-17 17:07:08.7915 TRACE > Clean up AtataContext
2023-01-17 17:07:08.9005 TRACE < Clean up AtataContext (0.108s)
2023-01-17 17:07:08.9010  INFO Finished test (1.971s)
2023-01-17 17:07:08.9013  INFO Pure test execution time: 1.109s
```