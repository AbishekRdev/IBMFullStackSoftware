# Commit Message Guidelines

## 1. Types

Use the following types to categorize your commits:

- **<span style="color:#ff6347">feat</span>**: (Features) New features or functionalities added.
- **<span style="color:#ff6347">fix</span>**: (Bug Fixes) Bug fixes.
- **<span style="color:#32cd32">docs</span>**: Documentation changes or additions.
- **<span style="color:#ffd700">style</span>**: Code style changes (formatting, spacing, etc. that don't affect functionality).
- **<span style="color:#ff4500">refactor</span>**: Refactoring existing code without changing functionality.
- **<span style="color:#1e90ff">test</span>**: Adding or modifying tests.
- **<span style="color:#d3d3d3">chore</span>**: Maintenance tasks like updating dependencies or configuration changes.
- **<span style="color:#9932cc">ci</span>**: Changes related to continuous integration (e.g., configuration changes to build pipelines).
- **<span style="color:#ff1493">perf</span>**: Performance improvements.

## 2. Scopes

For your MVC structure, you can specify the scope for each commit. This helps keep track of which part of the application was modified, making it easier to understand the change at a glance.

For example:

- **<span style="color:#32cd32">model</span>**: Changes related to models (e.g., Mongoose models in the backend).
- **<span style="color:#1e90ff">view</span>**: Changes to the frontend (React components).
- **<span style="color:#ff4500">controller</span>**: Changes to the backend controllers.
- **<span style="color:#ffd700">router</span>**: Changes related to the routes (backend).
- **<span style="color:#ff6347">api</span>**: Changes in API endpoints or related to API calls.

## 3. Examples

Here are some examples of how your commit messages might look in practice:

- **<span style="color:#ff6347">feat(controller)</span>**: add user authentication
- **<span style="color:#ff6347">fix(model)</span>**: correct schema validation for user registration
- **<span style="color:#32cd32">docs(api)</span>**: update README with API usage instructions
- **<span style="color:#ffd700">style(view)</span>**: refactor CSS for login page
- **<span style="color:#ff4500">refactor(controller)</span>**: simplify user data handling logic
- **<span style="color:#1e90ff">test(controller)</span>**: add unit tests for user authentication
- **<span style="color:#ffd700">chore(router)</span>**: update route for user registration
- **<span style="color:#9932cc">ci</span>**: add GitHub Actions for CI pipeline
- **<span style="color:#ff1493">perf(api)</span>**: optimize response time for user data endpoint
