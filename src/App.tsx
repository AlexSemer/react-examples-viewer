import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import LoginPage from './examples/login/components/LoginPage'
import { LanguageProvider } from './examples/login/i18n/LanguageContext'

// Raw source imports (Vite ?raw)
import loginPageSrc from './examples/login/components/LoginPage.tsx?raw'
import loginFormSrc from './examples/login/components/LoginForm.tsx?raw'
import languageSwitcherSrc from './examples/login/components/LanguageSwitcher.tsx?raw'
import useLoginSrc from './examples/login/hooks/useLogin.ts?raw'
import translationsSrc from './examples/login/i18n/translations.ts?raw'
import languageContextSrc from './examples/login/i18n/LanguageContext.tsx?raw'
import tokensSrc from './theme/tokens.ts?raw'

const files = [
  { name: 'LoginPage.tsx', code: loginPageSrc, lang: 'tsx' },
  { name: 'LoginForm.tsx', code: loginFormSrc, lang: 'tsx' },
  { name: 'LanguageSwitcher.tsx', code: languageSwitcherSrc, lang: 'tsx' },
  { name: 'useLogin.ts', code: useLoginSrc, lang: 'typescript' },
  { name: 'translations.ts', code: translationsSrc, lang: 'typescript' },
  { name: 'LanguageContext.tsx', code: languageContextSrc, lang: 'tsx' },
  { name: 'tokens.ts', code: tokensSrc, lang: 'typescript' },
]

export default function App() {
  const [activeFile, setActiveFile] = useState(0)

  return (
    <div className="app">
      <div className="preview">
        <h2 style={{ marginTop: 0 }}>Live Preview — Login Example</h2>
        <LanguageProvider>
          <LoginPage />
        </LanguageProvider>
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
  )
}
