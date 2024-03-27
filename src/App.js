import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import { Navigation } from './components/Navigation/Navigation';
import { CodeSnippet } from './components/CodeSnippet/CodeSnippet';
import ColorModeSwitcher from './ColorModeSwitcher';
import { HostnameProvider } from './context/HostnameContext';

function App() {
  return (
    <HostnameProvider>
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
              <CodeSnippet hasIcon />
            </Box>
          </Box>{' '}
        </BaseStyles>
      </ThemeProvider>
    </HostnameProvider>
  );
}

export default App;
