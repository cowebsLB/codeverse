import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { CodeChallenge } from '../../data/lessons'

interface CodeEditorProps {
  challenge: CodeChallenge
  onCodeChange: (code: string) => void
  onValidate: (code: string) => Promise<{ isValid: boolean; error?: string }>
  isCompleted: boolean
}

export default function CodeEditor({ challenge, onCodeChange, onValidate, isCompleted }: CodeEditorProps) {
  const [code, setCode] = useState(challenge.starterCode || '')
  const [isValidating, setIsValidating] = useState(false)
  const [validationResult, setValidationResult] = useState<{ isValid: boolean; error?: string } | null>(null)
  const editorRef = useRef<any>(null)

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleCodeChange = (value: string | undefined) => {
    const newCode = value || ''
    setCode(newCode)
    onCodeChange(newCode)
    // Clear validation result when code changes
    if (validationResult) {
      setValidationResult(null)
    }
  }

  const handleRun = async () => {
    setIsValidating(true)
    setValidationResult(null)

    try {
      const result = await onValidate(code)
      setValidationResult(result)
    } catch (error) {
      setValidationResult({
        isValid: false,
        error: error instanceof Error ? error.message : 'Validation failed',
      })
    } finally {
      setIsValidating(false)
    }
  }

  const getLanguage = () => {
    switch (challenge.language) {
      case 'javascript':
        return 'javascript'
      case 'python':
        return 'python'
      case 'html':
        return 'html'
      case 'css':
        return 'css'
      case 'typescript':
        return 'typescript'
      case 'ruby':
        return 'ruby'
      case 'php':
        return 'php'
      case 'swift':
        return 'swift'
      case 'kotlin':
        return 'kotlin'
      case 'cpp':
      case 'c++':
        return 'cpp'
      case 'go':
        return 'go'
      case 'rust':
        return 'rust'
      case 'c':
        return 'c'
      case 'java':
        return 'java'
      case 'csharp':
      case 'c#':
        return 'csharp'
      default:
        return 'javascript'
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm font-medium text-gray-300 font-code">Code Editor</span>
          <button
            onClick={handleRun}
            disabled={isValidating || isCompleted}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              isCompleted
                ? 'bg-green-600 text-white cursor-not-allowed'
                : isValidating
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {isCompleted ? '✓ Completed' : isValidating ? 'Validating...' : 'Run & Check'}
          </button>
        </div>
        <Editor
          height="400px"
          language={getLanguage()}
          value={code}
          onChange={handleCodeChange}
          onMount={handleEditorDidMount}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: isCompleted,
            automaticLayout: true,
          }}
        />
      </div>

      {/* Validation Result */}
      {validationResult && (
        <div
          className={`p-4 rounded-lg border ${
            validationResult.isValid
              ? 'bg-green-900/30 border-green-700 text-green-400'
              : 'bg-red-900/30 border-red-700 text-red-400'
          }`}
        >
          <div className="flex items-center gap-2">
            {validationResult.isValid ? (
              <>
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold font-heading">Correct!</p>
                  <p className="text-sm font-body">Great job! You can now proceed to the next lesson.</p>
                </div>
              </>
            ) : (
              <>
                <span className="text-2xl">❌</span>
                <div>
                  <p className="font-bold font-heading">Not quite right</p>
                  <p className="text-sm font-body">{validationResult.error || 'Please review the requirements and try again.'}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Expected Output */}
      {challenge.expectedOutput && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-300 font-code mb-2">Expected Output:</p>
          <pre className="text-sm text-green-400 font-code bg-gray-900 rounded p-3 overflow-x-auto">
            {challenge.expectedOutput}
          </pre>
        </div>
      )}
    </div>
  )
}

