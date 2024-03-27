import React, { useEffect, useState } from 'react';
import {
  Box,
  Flash,
  IconButton,
  Octicon,
  TabNav,
  Text,
  TextInput,
} from '@primer/react';
import { CopyIcon, InfoIcon, PencilIcon } from '@primer/octicons-react';
import { useHostname } from '../../context/HostnameContext';

export function CodeSnippet({ ...props }) {
  const [edit, setEdit] = useState(false);
  const { hostname, updateHostname } = useHostname();

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
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {/* <Text
        sx={{
          fontFamily: 'mono',
          fontSize: 1,
          color: 'fg.muted',
          textAlign: 'center',
        }}
      >
        {props.hasIcon ? 'With' : 'No'} icon
      </Text> */}
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'border.default',
          borderRadius: 2,
          alignSelf: 'flex-start',
          width: '100%',
          maxWidth: '600px',
          overflow: 'hidden',
          m: '0 auto',
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
            display: 'flex',
            justifyContent: 'space-between',
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
          <IconButton
            icon={CopyIcon}
            variant='invisible'
          />
        </Box>
        <Box
          sx={{
            bg: 'canvas.subtle',
            borderTop: '1px solid',
            borderColor: 'border.default',
            p: 3,
            fontSize: 1,
            overflowX: 'auto',
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
                    onChange={(e) => updateHostname(e.target.value)}
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
                <>
                  <Box
                    sx={{
                      color: 'accent.fg',
                      fontWeight: 'bold',
                      border: '1px solid',
                      borderTopColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderBottomColor: 'border.default',
                      borderLeftColor: 'transparent',
                      borderBottomStyle: 'dashed',
                      px: 1,
                      cursor: 'pointer',

                      ':hover': {
                        borderRadius: 1,
                        borderStyle: 'solid',
                        border: '1px solid',
                        borderColor: 'border.default',
                      },
                    }}
                    onClick={() => setEdit(!edit)}
                  >
                    <Text>{hostname}</Text>
                    {props.hasIcon && (
                      <Box sx={{ display: 'inline', ml: 1 }}>
                        <Octicon icon={PencilIcon} />
                      </Box>
                    )}
                  </Box>
                </>
              )}
              <Text>/api/v3/repos/OWNER/REPO/commits</Text>
            </Box>
          </pre>
        </Box>
        {hostname === 'HOSTNAME' || edit ? null : (
          <Flash
            full
            sx={{
              py: 3,
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              borderBottom: 'none',
            }}
          >
            <Octicon icon={InfoIcon} />
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Text
                sx={{
                  fontSize: 1,
                }}
              >
                The host name{' '}
                <Text
                  as='span'
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: '600',
                  }}
                >
                  {hostname}
                </Text>{' '}
                will update across all of GitHub Docs.
              </Text>
            </Box>
          </Flash>
        )}
      </Box>
    </Box>
  );
}
