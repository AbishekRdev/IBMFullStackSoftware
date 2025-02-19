2. Types
Use the following types to categorize your commits:

feat: (Features) New features or functionalities added.
fix: (Bug Fixes) Bug fixes.
docs: Documentation changes or additions.
style: Code style changes (formatting, spacing, etc. that don't affect functionality).
refactor: Refactoring existing code without changing functionality.
test: Adding or modifying tests.
chore: Maintenance tasks like updating dependencies or configuration changes.
ci: Changes related to continuous integration (e.g., configuration changes to build pipelines).
perf: Performance improvements.
3. Scopes
For your MVC structure, you can specify the scope for each commit. This helps keep track of which part of the application was modified, making it easier to understand the change at a glance.

For example:

model: Changes related to models (e.g., Mongoose models in the backend).
view: Changes to the frontend (React components).
controller: Changes to the backend controllers.
router: Changes related to the routes (backend).
api: Changes in API endpoints or related to API calls.
4. Examples
Here are some examples of how your commit messages might look in practice:

feat(controller): add user authentication
fix(model): correct schema validation for user registration
docs(api): update README with API usage instructions
style(view): refactor CSS for login page
refactor(controller): simplify user data handling logic
test(controller): add unit tests for user authentication
chore(router): update route for user registration
ci: add GitHub Actions for CI pipeline
perf(api): optimize response time for user data endpoint
