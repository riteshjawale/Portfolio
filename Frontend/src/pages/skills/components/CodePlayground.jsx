import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CodePlayground = () => {
  const [activeTab, setActiveTab] = useState('react');
  const [output, setOutput] = useState('Click "Run Code" to see the output');

  const codeExamples = [
    {
      id: 'react',
      name: 'React',
      icon: 'Code2',
      code: `// Interactive React Component
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
      output: 'React component rendered successfully!\nInteractive counter with state management.'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'Braces',
      code: `// Array manipulation and functional programming
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log('Result:', result);`,
      output: 'Result: 12\nFiltered even numbers, doubled them, and calculated sum.'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'FileCode',
      code: `// Type-safe user interface
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}! Role: \${user.role}\`;
}`,
      output: 'Type checking passed!\nType-safe function with interface validation.'
    }
  ];

  const activeExample = codeExamples?.find(ex => ex?.id === activeTab);

  const handleRunCode = () => {
    setOutput(activeExample?.output);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="bg-code-bg p-3 md:p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon name="Terminal" size={20} color="var(--color-code-text)" />
            <span className="text-sm md:text-base font-mono text-code-text">Code Playground</span>
          </div>
          <button
            onClick={handleRunCode}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-accent hover:bg-accent/90 text-white rounded text-xs md:text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <Icon name="Play" size={16} />
            <span className="hidden sm:inline">Run Code</span>
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {codeExamples?.map((example) => (
            <button
              key={example?.id}
              onClick={() => setActiveTab(example?.id)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded text-xs md:text-sm font-medium transition-colors duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                activeTab === example?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/20 text-code-text hover:bg-muted/30'
              }`}
            >
              <Icon name={example?.icon} size={16} />
              <span>{example?.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-code-bg p-4 md:p-6">
        <pre className="text-xs md:text-sm text-code-text overflow-x-auto">
          <code>{activeExample?.code}</code>
        </pre>
      </div>
      <div className="bg-muted/50 p-4 md:p-6 border-t border-border">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Terminal" size={16} className="text-muted-foreground" />
          <span className="text-xs md:text-sm font-medium">Output:</span>
        </div>
        <pre className="text-xs md:text-sm text-muted-foreground whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
};

export default CodePlayground;