// Skills inventory for the Dev Standards Hub
// Summaries of the studio / research skills available to bots

export const skills = [
  {
    name: 'company-os',
    category: 'Studio',
    description: 'Shared operating rules for the simulated studio. Pipeline, tickets, handoffs between roles, ship bar, paper plan, pre-dev lock, bubble up, worktree, tester does not fix, artifact format.',
  },
  {
    name: 'studio-orchestrator',
    category: 'Studio',
    description: 'Run the studio pipeline one stage at a time. Triggers on run the studio, next stage, continue the ticket, paper plan, pre-dev lock, bubble up.',
  },
  {
    name: 'ticket',
    category: 'Studio',
    description: 'Create or update a studio ticket with a fixed field set.',
  },
  {
    name: 'role-pm',
    category: 'Studio roles',
    description: 'Project manager role. Scope, milestones, risks, what we are not doing.',
  },
  {
    name: 'role-analyst',
    category: 'Studio roles',
    description: 'Analysis role. Problem framing, options, constraints, and recommendation before any schema or architecture.',
  },
  {
    name: 'virtual-ui',
    category: 'Studio',
    description: 'Dry-run screens first so UX defines the queries and commands the backend must support.',
  },
  {
    name: 'virtual-backend',
    category: 'Studio',
    description: 'Dry-run the backend after virtual-ui. Lock entities, relationships, queries, commands, and call graph.',
  },
  {
    name: 'project-uml',
    category: 'Studio',
    description: 'Required pipeline stage that draws the per-project master UML as five layers.',
  },
  {
    name: 'pre-dev-lock',
    category: 'Studio',
    description: 'Last paper gate before code. Hard-lock L1-L5 and contracts. Dev must not start before this.',
  },
  {
    name: 'role-architect',
    category: 'Studio roles',
    description: 'Architecture role. Module layout, boundaries, storage, and API shape without writing feature code.',
  },
  {
    name: 'frontend-design',
    category: 'Studio',
    description: 'Guidance for distinctive, intentional visual design. Lock aesthetic direction, typography, and layout. Respects Next.js + shadcn/ui + Tailwind.',
  },
  {
    name: 'role-dev',
    category: 'Studio roles',
    description: 'Implementation role. Write code that matches locked queries, commands, and page data. Do not redesign the model.',
  },
  {
    name: 'role-review-a',
    category: 'Studio roles',
    description: 'First review lens. Spec and design-fit review against ticket, analysis, contracts, and architecture.',
  },
  {
    name: 'role-review-b',
    category: 'Studio roles',
    description: 'Second review lens. Implementation quality — correctness, edge cases, auth, tests, naming.',
  },
  {
    name: 'role-qa',
    category: 'Studio roles',
    description: 'QA role. Test pass against acceptance criteria and contracts, including empty, error, and auth cases. Ship or no-ship.',
  },
  {
    name: 'paper-plan',
    category: 'Studio',
    description: 'Project-level paper plan before any ticket or code. Sequencing bets, mapping parallel work.',
  },
  {
    name: 'session-handoff',
    category: 'Studio',
    description: 'Compact current studio or ninja work into a pasteable handoff for a fresh conversation.',
  },
  {
    name: 'research-orchestrator',
    category: 'Research / Ninja',
    description: 'Conductor for the ninja cell. Research, extraction, combining datasets, or other non-build tasks.',
  },
  {
    name: 'research-brief',
    category: 'Research / Ninja',
    description: 'Open a research or data job that is not a build ticket.',
  },
  {
    name: 'role-researcher',
    category: 'Research / Ninja',
    description: 'Finds and extracts sources for a research brief.',
  },
  {
    name: 'role-data-combiner',
    category: 'Research / Ninja',
    description: 'Aligns and merges extracts from multiple sources. Reconciles fields, units, IDs, and conflicts.',
  },
  {
    name: 'role-research-critic',
    category: 'Research / Ninja',
    description: 'Reviews research and merge work. Checks missing sources, bad joins, license issues, weak confidence.',
  },
];
