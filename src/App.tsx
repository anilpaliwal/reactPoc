import { useCallback, useState } from 'react'
import * as stylex from '@stylexjs/stylex';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import ProjectName from './componets/ProjectName'
import InputField from './componets/InputField';
import CodeMirror from '@uiw/react-codemirror';
import { languages } from '@codemirror/language-data';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import TextAreaInput from './componets/TextAreaInput';

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState({})
  const onChange = useCallback((val: string) => {
    setQuery(val);
  }, []);


  const executeQuery = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log({ data })
        setResult(data)
      })
      .catch(error => console.error(error));
  }
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.inputContainer)}>
        <ProjectName />
        <InputField label='Mantis ID' />
        <TextAreaInput label='Reason' />
      </div>
      <div {...stylex.props(styles.main)}>
        <div {...stylex.props(styles.queryContainer)} >
          <CodeMirror style={{ marginTop: '10px' }} value={query} height="40vh" extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} onChange={onChange} />
          <div {...stylex.props(styles.runbtnContainer)}>
            <button type="button" {...stylex.props(styles.clearBtn)} onClick={() => { setQuery(""); setResult({}) }} >Clear</button>
            <button type="button" {...stylex.props(styles.runBtn)} onClick={executeQuery}>Run Query</button>
          </div>
        </div>
        <div {...stylex.props(styles.resultContainer)}>
          <p>Result : </p>
          <JsonView data={result} shouldExpandNode={allExpanded} style={defaultStyles} />

        </div>
      </div>
    </div>
  )
}

export default App

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh',
    background: '#fff'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  main: {
    width: '75%',
    height: '100vh',
    background: '#f5f5f5',
  },
  queryContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  clearBtn: {
    backgroundColor: '#fff',
    color: '#3e450f',
    width: '150px',
    marginRight: '10px',
    borderRadius: ' 2px',
    fontSize: '16px',
    fontWeight: '600',
    border: '1px solid #3e450f'
  },
  runBtn: {
    backgroundColor: '#3e450f',
    color: '#fff',
    width: '160px',
    borderRadius: ' 2px',
    fontSize: '16px',
    fontWeight: '600',
    border: "1px solid transparent"
  },
  runbtnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '16px'
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    padding: '16px'
  },
  result: {
    overflowY: 'scroll'
  }

})
