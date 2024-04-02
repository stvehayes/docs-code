import { useEffect, useState } from 'react';
import {
  MarkGithubIcon,
  TriangleDownIcon,
  SearchIcon,
  GlobeIcon,
} from '@primer/octicons-react';
import {
  Box,
  Button,
  Heading,
  IconButton,
  Text,
  TextInput,
} from '@primer/react';
import { useHostname } from '../../context/HostnameContext';
import { useLastEdited } from '../../context/LastEditedContext';

export function Navigation() {
  const { hostname, updateHostname } = useHostname();
  const [edit, setEdit] = useState(false);
  const { setLastEdited } = useLastEdited();

  const handleEditButton = () => {
    setEdit(!edit);
    setLastEdited(true);
  };

  const editFromNav = (e) => {
    updateHostname(e.target.value);
    setLastEdited(true);
  };

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
        bg: 'canvas.default',
        borderBottom: '1px solid',
        borderColor: 'border.default',
        p: 3,
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '3',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <MarkGithubIcon size={32} />
          <Heading
            sx={{
              fontSize: '2',
            }}
          >
            GitHub Docs
          </Heading>
        </Box>
        <Box
          sx={{
            height: '32px',
            width: '1px',
            bg: 'border.default',
            display: ['none', null, 'block'],
          }}
        />
        <Box
          sx={{
            display: ['none', null, 'flex'],
            gap: '2',
            alignItems: 'center',
          }}
        >
          <Text
            sx={{
              fontSize: '1',
              color: 'fg.muted',
              fontWeight: 'semibold',
            }}
          >
            <Text
              sx={{
                color: 'fg.default',
              }}
            >
              Version:{' '}
            </Text>
            <Text
              as='span'
              sx={{
                fontWeight: 'inherit',
              }}
            >
              Enterprise Server 3.12
            </Text>
          </Text>
          <Box
            sx={{
              color: 'fg.muted',
              display: 'flex',
            }}
          >
            <TriangleDownIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: ['none', null, 'flex'],
            gap: '2',
            alignItems: edit ? 'flex-end' : 'center',
            ml: 2,
            position: 'relative',
          }}
        >
          <Text
            sx={{
              fontSize: '1',
              color: 'fg.muted',
              fontWeight: 'semibold',
            }}
          >
            <Text
              sx={{
                color: 'fg.default',
              }}
            >
              Host Name:{' '}
            </Text>

            {edit ? (
              <TextInput
                aria-label='Search'
                name='search'
                size='small'
                placeholder='Add your host name'
                value={hostname}
                onChange={editFromNav}
                sx={{
                  bg: 'canvas.default',
                  color: 'fg.muted',
                  display: 'inline-flex',
                  ml: 2,
                  pl: 0,
                  position: 'relative',
                  input: {
                    bg: 'canvas.default',
                    px: 2,
                    color: 'fg.default',
                  },
                }}
              />
            ) : (
              <Text
                as='span'
                sx={{
                  fontWeight: 'inherit',
                }}
              >
                {hostname}
              </Text>
            )}
          </Text>
          <Button
            variant='invisible'
            size='small'
            onClick={handleEditButton}
            sx={{
              display: 'absolute',
              right: 0,
            }}
          >
            {edit ? 'Save' : 'Edit'}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '3',
          alignItems: 'center',
        }}
      >
        <TextInput
          trailingVisual={SearchIcon}
          aria-label='Search'
          name='search'
          placeholder='Search GitHub Docs'
          sx={{
            bg: 'canvas.subtle',
            color: 'fg.muted',
            display: ['none', 'flex'],
          }}
        />

        <IconButton
          sx={{
            color: 'fg.muted',
          }}
          icon={GlobeIcon}
          aria-label='Open inbox'
        />
        <Box
          sx={{
            height: '32px',
            width: '1px',
            bg: 'border.default',
          }}
        />
        <Button>Sign up</Button>
      </Box>
    </Box>
  );
}
