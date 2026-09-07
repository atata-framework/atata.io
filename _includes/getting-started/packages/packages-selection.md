1. When you create a test project, the core package which you need is **Atata**.
1. You most likely need to add a package that corresponds the testing framework of your choice:
   **Atata.NUnit**, **Atata.Xunit.v3**, **Atata.MSTest**, or **Atata.Reqnroll.NUnit**.
1. **Atata.NLog** is recommended to enable logging to files.
   It is useful for debugging and analyzing test failures, especially on CI pipelines.
1. If you want to run and manage ASP.NET Core web application under test locally during test runs, consider adding **Atata.AspNetCore.v10** (or .v9, .v8).
1. If you want to run and manage Docker containers with web application under test during test runs, consider adding **Atata.Testcontainers**.
   For example, you can use container for DB.
1. In case of local web UI testing, **Atata.WebDriverSetup** is recommended to set up browser drivers locally.
1. If you want to validate HTML pages, consider adding **Atata.HtmlValidation**.