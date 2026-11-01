// Documentation content for the Examples Viewer
// Standards that bots and developers should follow across projects

export const docs = {
  title: 'Coding Standards & Practices',
  sections: [
    {
      heading: 'Core Principles',
      content: `
- **DRY** (Don't Repeat Yourself): Extract repeated logic into shared functions, hooks, or modules.
- **KISS** (Keep It Simple): Prefer the simplest solution that works. Avoid premature abstraction.
- **YAGNI** (You Aren't Gonna Need It): Don't build features or flexibility until they are actually required.
- **SOLID**:
  - **S**ingle Responsibility: One module/component/function should have one reason to change.
  - **O**pen/Closed: Open for extension, closed for modification.
  - **L**iskov Substitution: Subtypes must be substitutable for their base types.
  - **I**nterface Segregation: Prefer small, focused interfaces over large ones.
  - **D**ependency Inversion: Depend on abstractions, not concrete implementations.
- Prefer composition over inheritance.
- Make illegal states unrepresentable (use union types, discriminated unions).
      `.trim(),
    },
    {
      heading: 'Naming & Structure',
      content: `
- Use descriptive, intention-revealing names. Avoid abbreviations and single-letter names (except loop indices).
- **React/TS/JS**: camelCase for variables, functions, hooks; PascalCase for components, types, interfaces; UPPER_SNAKE_CASE for constants.
- **Python**: snake_case for functions/variables; PascalCase for classes.
- Files and folders: kebab-case or camelCase consistently. Prefer one component/hook per file.
- Keep files focused. Split when a file exceeds ~200–300 lines or has multiple responsibilities.
- Group by feature or domain when possible, not only by technical type (components/, hooks/, utils/).
- No magic numbers or strings. Extract to named constants or design tokens.
      `.trim(),
    },
    {
      heading: 'Feature / Domain Folder Structure',
      content: `
- Prefer feature folders: `features/auth/`, `features/billing/` containing their own components, hooks, api, types, and tests.
- Shared code lives in `shared/` or `lib/` — only promote when used by 2+ features.
- Avoid deep nesting. Keep feature internals flat when possible.
- UI components that are truly generic go in `components/ui/` (or design system package).
- Data access and business logic stay inside the feature or a dedicated domain layer.
- This structure prevents “utils god file” and makes later extraction or reuse straightforward.
      `.trim(),
    },
    {
      heading: 'Error & Result Patterns',
      content: `
- Prefer a Result type over throwing or returning null/undefined for expected failures:
  `{ ok: true; data: T } | { ok: false; error: { code: string; message: string; details?: unknown } }`
- Use this for API responses, form validation, domain operations, and any fallible step.
- Throw only for truly unexpected/programmer errors (or let them bubble to a global handler).
- Discriminated unions make error handling exhaustive and type-safe.
- Consistent error shape across frontend and backend reduces mapping code later.
      `.trim(),
    },
    {
      heading: 'Validation & Schemas',
      content: `
- Use Zod (or equivalent) for all external input: API bodies, query params, forms, env vars, config.
- Infer types from schemas: `type User = z.infer<typeof userSchema>`.
- Co-locate schema + type with the feature that owns it.
- Validate at the boundary (API route, form submit, env load). Trust internal data after that.
- Never trust client data. Fail fast with clear error messages.
- Adding validation later is expensive; do it from the start.
      `.trim(),
    },
    {
      heading: 'Configuration & Environment',
      content: `
- Centralize config in one module (`config.ts` / `settings.py`) that reads and validates env vars at startup.
- Export a typed config object. No scattered `process.env.FOO` or `os.getenv` in business logic.
- Validate required variables and fail fast if missing or invalid.
- Support different environments via env files or secrets manager, not code branches.
- Makes swapping environments, adding settings, or testing configuration trivial.
      `.trim(),
    },
    {
      heading: 'Data Fetching & Caching',
      content: `
- Pick one pattern and stick to it (TanStack Query / React Query preferred for React).
- Query keys live in a central place or co-located with the feature.
- Handle loading, error, and empty states explicitly in UI.
- Use optimistic updates sparingly and with rollback.
- Invalidate or update cache deliberately after mutations.
- Abstract the fetch client so the rest of the app does not depend on the HTTP library.
      `.trim(),
    },
    {
      heading: 'Accessibility & i18n',
      content: `
- All interactive elements have accessible names (labels, aria-label).
- Keyboard navigable and visible focus states.
- Sufficient color contrast.
- Strings live in translation catalogs / message files, never hardcoded in components.
- Use a simple i18n setup from day one (even if only one language initially).
- Retrofitting a11y or i18n is costly; design for them early.
      `.trim(),
    },
    {
      heading: 'Logging & Observability',
      content: `
- Structured logging (JSON) with levels: debug, info, warn, error.
- Include a request/trace ID on every log that crosses a boundary.
- Never log PII, secrets, or full request bodies by default.
- Log errors with context (user id if safe, operation, input summary) at the boundary.
- Frontend: log unexpected errors to a service; avoid console.log in production paths.
- Makes debugging production issues without adding logging later.
      `.trim(),
    },
    {
      heading: 'Dependency Rules (Architecture)',
      content: `
- Features may import from `shared/` and `lib/`, but not from each other.
- UI layer does not import directly from data access or external APIs.
- Domain/business logic has no UI or framework dependencies.
- Enforce with lint rules or folder conventions so violations are caught early.
- Clear layer boundaries prevent circular dependencies and big refactors when extracting or testing.
      `.trim(),
    },
    {
      heading: 'Formatting & Style',
      content: `
- Enforce formatting with Prettier (or equivalent). Never debate tabs vs spaces in reviews.
- Indentation: 2 spaces (JS/TS/React) or follow language convention (4 for Python).
- Line length: soft limit ~100 characters, hard limit ~120.
- Consistent import order: external → internal → relative, with blank lines between groups.
- Remove unused imports, variables, and dead code.
- Prefer explicit types over inference when it improves readability or catches errors.
      `.trim(),
    },
    {
      heading: 'React + TypeScript',
      content: `
- Enable **strict** mode in tsconfig. Prefer noUncheckedIndexedAccess where practical.
- Type props, state, and event handlers explicitly. Avoid \`any\`; use \`unknown\` + type guards.
- Prefer function components with explicit props type (not React.FC unless children are needed).
- Custom hooks for logic; keep components focused on rendering.
- Use discriminated unions for complex state (loading | error | success).
- Co-locate related types, styles, and tests with the component when small.
- Design tokens / CSS variables for colors, spacing, typography — never hardcode values in components.
- Prefer CSS modules, styled-components, or Tailwind over large inline style objects for non-trivial UIs.
      `.trim(),
    },
    {
      heading: 'API Design',
      content: `
- Resources as nouns, plural for collections: \`GET /users\`, \`GET /users/:id\`, \`POST /users\`.
- Use correct HTTP methods and status codes (200, 201, 400, 401, 403, 404, 409, 422, 500).
- Consistent error shape: \`{ error: { code, message, details?, requestId? } }\`.
- Prefer RFC 9457 Problem Details (\`application/problem+json\`) for richer errors.
- Version APIs (\`/v1/...\`) or use header versioning. Prefer additive, non-breaking changes.
- Paginate large collections (cursor preferred for large/changing datasets).
- Validate all inputs. Never trust client data.
- Document with OpenAPI (REST) or schema (GraphQL).
      `.trim(),
    },
    {
      heading: 'Comments, Docs & Version Control',
      content: `
- Comments explain *why*, not *what*. Prefer self-documenting code.
- Public functions/hooks should have JSDoc or equivalent describing parameters, return, and side effects.
- Keep a clear README with setup, scripts, and architecture overview.
- Commit messages: imperative mood, concise subject, body explaining why when non-obvious.
- Feature branches + pull requests. Require at least one review.
- Never commit secrets, .env files, or generated artifacts.
      `.trim(),
    },
    {
      heading: 'Testing, Errors & Security',
      content: `
- Write tests for business logic and critical paths. Prefer unit + integration over pure snapshot tests.
- Handle errors explicitly. Prefer typed errors or Result types over silent failures.
- Validate and sanitize all external input (API, forms, query params).
- Use parameterized queries / ORM to prevent injection.
- Principle of least privilege for permissions and secrets.
- Log structured data (no PII in plain logs). Include request IDs for tracing.
      `.trim(),
    },
    {
      heading: 'For AI / Bot Contributors',
      content: `
- Follow the same standards as human developers. Consistency matters more than individual style.
- Prefer small, focused changes. One concern per file/commit when possible.
- When adding features, extract styles, strings, and logic so future changes stay localized.
- Do not introduce new patterns without a clear reason. Match existing project conventions.
- Always type new TypeScript code strictly. Run the type checker before considering work done.
- Keep examples modular and reusable — this viewer exists so future projects can copy clean patterns.
- Reference this Dev Standards Hub for patterns before inventing new ones.
      `.trim(),
    },
  ],
};
