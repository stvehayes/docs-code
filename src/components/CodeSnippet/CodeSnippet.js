import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  StateLabel,
  TabNav,
  Text,
  TextInput,
} from '@primer/react';

export function CodeSnippet() {
  const [edit, setEdit] = useState(false);
  const [hostname, setHostname] = useState('HOSTNAME');

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setEdit(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'border.default',
        borderRadius: 2,
        alignSelf: 'flex-start',
        width: '100%',
        maxWidth: '600px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'border.default',
          p: 3,
        }}
      >
        <pre>
          <Text
            sx={{
              color: 'fg.muted',
              fontSize: 1,
            }}
          >
            <Box
              sx={{
                bg: 'accent.fg',
                color: 'white',
                display: 'inline-block',
                px: '12px',
                fontFamily: 'system-ui',
                fontWeight: 'semibold',
                mr: 2,
                py: 1,
                borderRadius: 100,
              }}
            >
              GET
            </Box>
            {`/repos/{owner}/{repo}/commits`}
          </Text>
        </pre>
      </Box>
      <Box
        sx={{
          pt: 2,
          px: 3,
        }}
      >
        <TabNav
          aria-label='Main'
          sx={{
            marginBottom: '-1px',
          }}
        >
          <TabNav.Link
            href='#'
            selected
            sx={{
              bg: 'transparent !important',
            }}
          >
            cURL
          </TabNav.Link>
          <TabNav.Link href='#'>JavaScript</TabNav.Link>
          <TabNav.Link href='#'>GitHub CLI</TabNav.Link>
        </TabNav>
      </Box>
      <Box
        sx={{
          bg: 'canvas.subtle',
          borderTop: '1px solid',
          borderColor: 'border.default',
          p: 3,
          fontSize: 1,
        }}
      >
        <pre>
          <Text sx={{ color: 'danger.fg' }}>curl </Text>
          <Text sx={{ color: 'accent.fg' }}>-L</Text>
          <Text sx={{ color: 'fg.default' }}> \</Text>
          <br />
          <Text sx={{ color: 'fg.muted' }}>
            {'  '}
            <Text sx={{ color: 'accent.fg' }}>-H</Text> "Accept:
            application/vnd.github+json"{' '}
            <Text sx={{ color: 'fg.default' }}>\</Text>
          </Text>
          <br />
          <Text sx={{ color: 'fg.muted' }}>
            {'  '}
            <Text sx={{ color: 'accent.fg' }}>-H</Text> "Authorization: Bearer
            YOUR-TOKEN" <Text sx={{ color: 'fg.default' }}>\</Text>
          </Text>
          <br />
          <Text sx={{ color: 'fg.muted' }}>
            {'  '}
            <Text sx={{ color: 'accent.fg' }}>-H</Text> "X-GitHub-Api-Version:
            2022-11-28" <Text sx={{ color: 'fg.default' }}>\</Text>
          </Text>
          <br />
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Text>http(s)://</Text>
            {edit && (
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <TextInput
                  type='text'
                  autoFocus
                  value={hostname}
                  onChange={(e) => setHostname(e.target.value)}
                  p='0'
                  sx={{
                    paddingLeft: 0,
                    m: 0,
                    minHeight: 0,
                    maxWidth: '100%',
                    textAlign: 'center',
                    width: hostname.split('').length + 4 + 'ch',
                    '> input': {
                      px: 1,
                    },
                    py: '2px',
                  }}
                />
                <Box
                  sx={{
                    borderRadius: 2,
                    px: 1,
                    py: 0,
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',

                    border: '1px solid',
                    borderColor: 'border.default',
                    alignSelf: 'flex-start',
                    position: 'absolute',
                    right: '3px',
                    top: '3px',
                    bg: 'canvas.subtle',
                  }}
                >
                  <Text
                    sx={{
                      fontSize: '14px',
                      color: 'fg.muted',
                    }}
                  >
                    ↵
                  </Text>
                </Box>
              </Box>
            )}
            {!edit && (
              <Text
                sx={{
                  color: 'accent.fg',
                  fontWeight: 'bold',
                  borderBottom: '1px solid',
                  borderColor: 'border.default',
                  borderBottomStyle: 'dashed',
                  px: 1,
                  cursor: 'pointer',
                }}
                onClick={() => setEdit(!edit)}
              >
                {hostname}
              </Text>
            )}
            <Text>/api/v3/repos/OWNER/REPO/commits</Text>
          </Box>
        </pre>
      </Box>
    </Box>
  );
}