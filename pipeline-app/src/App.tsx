import '@mantine/core/styles.css';
import './index.css'
import styles from './App.module.css';

import { createTheme, MantineProvider } from '@mantine/core';
import PipelineCard from './components/PipelineCard/PipelineCard';

function App() {

  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <MantineProvider theme={theme}>
      <div className={styles.container}>
        <PipelineCard />
        <PipelineCard />
        <PipelineCard />
        <PipelineCard />
        <PipelineCard />
      </div>
    </MantineProvider>
    
  )
}

export default App
