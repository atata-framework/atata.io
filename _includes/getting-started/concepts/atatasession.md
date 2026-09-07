`AtataSession` is the framework-level abstraction for a running session (e.g., a browser/WebDriver session, ASP.NET Core web application session, or any test session)
that encapsulates session-specific state, logging, events and lifecycle within an `AtataContext`.
A session can be associated with a context, shared, borrowed, or managed from a pool, and it provides lifecycle support for initialization, disposal, and returning to its source context.

Typically, a session's lifecycle aligns with the context's lifecycle, but there are options to adjust this behavior, as detailed below.

#### Session borrowing

You can configure a single session at the test suite level and share it across all child tests,
effectively reusing the same session.
For UI testing, this means a single browser instance will be utilized for all tests in the suite.
However, this approach has a key limitation: tests within such a suite must not run in parallel,
but still can run in parallel with tests from other suites.

#### Session pool

A session pool allows you to manage reusable `AtataSession` instances efficiently.
When a context ends, the session is returned to the pool, making it available for reuse by other contexts.
The pool's initial and maximum capacity are fully configurable.
You can define multiple pools, even for the same session type, by assigning unique names to each pool.
Typically, pools are configured at the global `AtataContext` level for optimal management.

#### Key properties

- `Id` — unique session identifier.
- `Name` — optional session name.
- `IsActive` — whether the session is still active.
- `Mode` — the session mode.
- `Context` — the context the session is currently associated with.
- `OwnerContext` — the context in which the session was created.
- `Log` — session-specific logging.
- `Report` — session-specific reporting interface.
- `EventBus` — event subscription/publish mechanism.
- `Variables` — session variables hierarchical dictionary.
- `State` — session state hierarchical dictionary.
