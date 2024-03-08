import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import { Navigation } from './components/Navigation/Navigation';
import { CodeSnippet } from './components/CodeSnippet/CodeSnippet';
import ColorModeSwitcher from './ColorModeSwitcher';

function App() {
  return (
    <ThemeProvider colorMode='light'>
      <BaseStyles>
        <ColorModeSwitcher />
        <Navigation />
        <Box
          sx={{
            display: 'flex',
            bg: 'canvas.default',
            height: '100%',
          }}
        >
          <Box
            sx={{
              mt: [3, 0],
              p: [3, 5],
              display: 'inline-flex',
              width: '100%',
              height: 'calc(100vh - 65px)',
              justifyContent: 'center',
            }}
          >
            <CodeSnippet />
          </Box>
        </Box>{' '}
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
