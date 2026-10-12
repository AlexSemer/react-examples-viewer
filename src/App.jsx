import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import LoginPage from './examples/login/components/LoginPage'
import { LanguageProvider } from './examples/login/i18n/LanguageContext'

// Raw source imports (Vite ?raw)
import loginPageSrc from './examples/login/components/LoginPage.jsx?raw'
import loginFormSrc from './examples/login/components/LoginForm.jsx?raw'
import languageSwitcherSrc from './examples/login/components/LanguageSwitcher.jsx?raw'
import useLoginSrc from './examples/login/hooks/useLogin.js?raw'
import translationsSrc from './examples/login/i18n/translations.js?raw'
import languageContextSrc from './examples/login/i18n/LanguageContext.jsx?raw'

const files = [
  { name: 'LoginPage.jsx', code: loginPageSrc, lang: 'jsx' },
  { name: 'LoginForm.jsx', code: loginFormSrc, lang: 'jsx' },
  { name: 'LanguageSwitcher.jsx', code: languageSwitcherSrc, lang: 'jsx' },
  { name: 'useLogin.js', code: useLoginSrc, lang: 'javascript' },
  { name: 'translations.js', code: translationsSrc, lang: 'javascript' },
  { name: 'LanguageContext.jsx', code: languageContextSrc, lang: 'jsx' },
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
