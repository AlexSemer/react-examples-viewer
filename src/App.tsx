import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import LoginPage from './examples/react/login/components/LoginPage'
import { LanguageProvider } from './examples/react/login/i18n/LanguageContext'
import DocumentationPage from './pages/DocumentationPage'

// Raw imports for React login
import loginPageSrc from './examples/react/login/components/LoginPage.tsx?raw'
import loginFormSrc from './examples/react/login/components/LoginForm.tsx?raw'
import languageSwitcherSrc from './examples/react/login/components/LanguageSwitcher.tsx?raw'
import useLoginSrc from './examples/react/login/hooks/useLogin.ts?raw'
import translationsSrc from './examples/react/login/i18n/translations.ts?raw'
import languageContextSrc from './examples/react/login/i18n/LanguageContext.tsx?raw'
import tokensSrc from './theme/tokens.ts?raw'

// Next.js
import nextLoginSrc from './examples/nextjs/login-page.tsx?raw'
import nextApiSrc from './examples/nextjs/api-route.ts?raw'
import nextMiddlewareSrc from './examples/nextjs/middleware.ts?raw'

// Node.js
import nodeApiSrc from './examples/nodejs/express-api.js?raw'
import nodeRoutesSrc from './examples/nodejs/routes.js?raw'

// Python
import pyMainSrc from './examples/python/main.py?raw'
import pyRoutesSrc from './examples/python/routes.py?raw'

type Stack = 'react' | 'nextjs' | 'nodejs' | 'python';
type Page = 'components' | 'docs';

const stacks: Record<Stack, { label: string; files: { name: string; code: string; lang: string }[] }> = {
  react: {
    label: 'React (login example)',
    files: [
      { name: 'LoginPage.tsx', code: loginPageSrc, lang: 'tsx' },
      { name: 'LoginForm.tsx', code: loginFormSrc, lang: 'tsx' },
      { name: 'LanguageSwitcher.tsx', code: languageSwitcherSrc, lang: 'tsx' },
      { name: 'useLogin.ts', code: useLoginSrc, lang: 'typescript' },
      { name: 'translations.ts', code: translationsSrc, lang: 'typescript' },
      { name: 'LanguageContext.tsx', code: languageContextSrc, lang: 'tsx' },
      { name: 'tokens.ts', code: tokensSrc, lang: 'typescript' },
    ],
  },
  nextjs: {
    label: 'Next.js (App Router)',
    files: [
      { name: 'login-page.tsx', code: nextLoginSrc, lang: 'tsx' },
      { name: 'api-route.ts', code: nextApiSrc, lang: 'typescript' },
      { name: 'middleware.ts', code: nextMiddlewareSrc, lang: 'typescript' },
    ],
  },
  nodejs: {
    label: 'Node.js / Express',
    files: [
      { name: 'express-api.js', code: nodeApiSrc, lang: 'javascript' },
      { name: 'routes.js', code: nodeRoutesSrc, lang: 'javascript' },
    ],
  },
  python: {
    label: 'Python / FastAPI',
    files: [
      { name: 'main.py', code: pyMainSrc, lang: 'python' },
      { name: 'routes.py', code: pyRoutesSrc, lang: 'python' },
    ],
  },
};

export default function App() {
  const [page, setPage] = useState<Page>('components')
  const [stack, setStack] = useState<Stack>('react')
  const [activeFile, setActiveFile] = useState(0)

  const current = stacks[stack]
  const files = current.files

  const handleStackChange = (newStack: Stack) => {
    setStack(newStack)
    setActiveFile(0)
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-title">Examples Viewer</div>
        <nav>
          <button
            className={page === 'components' ? 'nav-item active' : 'nav-item'}
            onClick={() => setPage('components')}
          >
            Components
          </button>
          <button
            className={page === 'docs' ? 'nav-item active' : 'nav-item'}
            onClick={() => setPage('docs')}
          >
            Documentation
          </button>
        </nav>
      </aside>

      <main className="main-content">
        {page === 'docs' ? (
          <DocumentationPage />
        ) : (
          <div className="components-view">
            <div className="preview">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h2 style={{ margin: 0 }}>Components</h2>
                <select
                  value={stack}
                  onChange={(e) => handleStackChange(e.target.value as Stack)}
                  className="language-switcher"
                  aria-label="Select language / framework"
                >
                  {(Object.keys(stacks) as Stack[]).map((key) => (
                    <option key={key} value={key}>
                      {stacks[key].label}
                    </option>
                  ))}
                </select>
              </div>

              {stack === 'react' ? (
                <LanguageProvider>
                  <LoginPage />
                </LanguageProvider>
              ) : (
                <div style={{ padding: 24, color: '#666' }}>
                  <p>Live preview available for React examples.</p>
                  <p>Select a file on the right to view the {current.label} source.</p>
                </div>
              )}
            </div>
            <div className="code">
              <div className="tabs">
                {files.map((f, i) => (
                  <button
                    key={f.name}
                    className={i === activeFile ? 'active' : ''}
                    onClick={() => setActiveFile(i)}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
              <SyntaxHighlighter language={files[activeFile].lang} style={vscDarkPlus} customStyle={{ margin: 0, background: 'transparent' }}>
                {files[activeFile].code}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
