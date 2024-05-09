import { ThemeProvider, BaseStyles, Box } from '@primer/react';
import { Navigation } from './components/Navigation/Navigation';
import { CodeSnippet } from './components/CodeSnippet/CodeSnippet';
import ColorModeSwitcher from './ColorModeSwitcher';
import { HostnameProvider } from './context/HostnameContext';
import { LastEditedProvider } from './context/LastEditedContext';

function App() {
  return (
    <HostnameProvider>
      <LastEditedProvider>
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
                {/* Use hasIcon for pencil icon */}
                <CodeSnippet />
              </Box>
            </Box>{' '}
          </BaseStyles>
        </ThemeProvider>
      </LastEditedProvider>
    </HostnameProvider>
  );
}

export default App;
