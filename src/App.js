import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import { Navigation } from './components/Navigation/Navigation';
import { CodeSnippet } from './components/CodeSnippet/CodeSnippet';
import { CodeSnippetV2 } from './components/CodeSnippetV2/CodeSnippetV2';
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
              display: 'flex',
              width: '100%',
              height: 'calc(100vh - 65px)',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <CodeSnippet />
            <CodeSnippetV2 />
          </Box>
        </Box>{' '}
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
