import {
  MarkGithubIcon,
  SearchIcon,
  GlobeIcon,
  TriangleDownIcon,
} from '@primer/octicons-react';
import {
  Box,
  Button,
  Heading,
  IconButton,
  TextInput,
  Text,
} from '@primer/react';

export function Navigation() {
  const style = {
    color: 'fg.muted',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        bg: 'canvas.subtle',
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
            }}
          >
            <Text
              sx={{
                fontWeight: 'semibold',
                color: 'fg.default',
              }}
            >
              Version:
            </Text>{' '}
            Enterprise Server 3.12
          </Text>
          <TriangleDownIcon />
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
          sx={style}
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
