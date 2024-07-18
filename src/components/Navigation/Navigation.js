import { useEffect, useState, useRef } from 'react';
import {
  MarkGithubIcon,
  TriangleDownIcon,
  SearchIcon,
  GlobeIcon,
} from '@primer/octicons-react';
import {
  Box,
  Button,
  Dialog,
  FormControl,
  Link,
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
  const [isOpen, setIsOpen] = useState(false);
  const returnFocusRef = useRef();

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
          width: '100%',
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
            alignItems: 'center',
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

            <Text
              as='span'
              sx={{
                fontWeight: 'inherit',
              }}
            >
              {hostname}
            </Text>
          </Text>
          <Button
            variant='invisible'
            size='small'
            onClick={() => setIsOpen(true)}
            sx={{
              display: 'absolute',
              right: 0,
            }}
          >
            Edit
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '3',
          alignItems: 'center',
          flexShrink: 0,
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

      <Dialog
        returnFocusRef={returnFocusRef}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        aria-labelledby='header'
        sx={{
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Box
          data-testid='inner'
          sx={{}}
        >
          <Dialog.Header
            id='header'
            sx={{
              bg: 'canvas.default',
            }}
          >
            Edit your domain name
          </Dialog.Header>
          <Box p={3}>
            <FormControl>
              <FormControl.Label>Domain name</FormControl.Label>
              <TextInput
                value={hostname}
                block
                onChange={(e) => updateHostname(e.target.value)}
              />
            </FormControl>
            <Text
              sx={{
                fontSize: '14px',
                display: 'block',
                mt: 4,
              }}
            >
              Updating will include the new domain name in all code snippets
              across GitHub Docs.{' '}
              <Link
                sx={{
                  cursor: 'pointer',
                }}
              >
                Learn more
              </Link>
            </Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
            width: '100%',
            p: 3,
            borderTop: '1px solid',
            borderColor: 'border.default',
          }}
        >
          <Button>Cancel</Button>
          <Button
            variant='primary'
            onClick={() => setIsOpen(false)}
          >
            Save
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}
