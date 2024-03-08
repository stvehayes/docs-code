import { useState } from 'react';
import {
  CheckIcon,
  SearchIcon,
  TriangleDownIcon,
  XIcon,
} from '@primer/octicons-react';
import {
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  LinkButton,
  NavList,
  Text,
  TextInput,
} from '@primer/react';

export function SelectHeader() {
  const [selected, setSelected] = useState('All usage');
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const costCenters = [
    'All usage',
    'Actions',
    'Engineering',
    'Marketplace',
    'Packages',
    'Primer',
    'Sponsors',
  ];

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Text>{searchTerm}</Text>

      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'border.default',
          alignSelf: 'flex-start',
          pb: 3,
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: 'none',
            background: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'row',
            px: 2,
            ml: -2,
            cursor: 'pointer',
            alignItems: 'center',
            span: {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            },
            _hover: {
              bg: 'transparent',
            },
            _focus: {
              bg: 'transparent',
            },
          }}
        >
          <Heading
            as='h1'
            sx={{
              fontSize: '4',
              display: 'inline',
              fontWeight: 400,
              color: 'fg.default',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {selected}

            <TriangleDownIcon
              sx={{
                color: 'fg.default',
                bg: 'red',
              }}
              size={20}
            />
          </Heading>
        </button>

        {isOpen && (
          <Box
            sx={{
              mt: 1,
              position: 'absolute',
              bg: 'canvas.default',
              minWidth: '320px',
              border: '1px solid',
              borderColor: 'border.default',
              fontSize: 1,
              boxShadow:
                '0 1px 3px 0 rgba(31, 35, 40, 0.12), 0 8px 24px 0 rgba(66, 74, 83, 0.12)',
              borderRadius: 12,
            }}
          >
            <Box
              sx={{
                p: 3,
                pb: 2,
              }}
            >
              <Heading sx={{ fontSize: 1 }}>Select cost center</Heading>
              <Text
                sx={{
                  color: 'fg.muted',
                  fontSize: '12px',
                }}
              >
                View usage for individual cost centers
              </Text>
              <IconButton
                onClick={() => setIsOpen(false)}
                icon={XIcon}
                sx={{
                  color: 'fg.muted',
                  bg: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                  position: 'absolute',
                  top: 2,
                  right: 2,
                }}
              />
            </Box>
            <Box
              sx={{
                p: 2,
                pt: 0,
                borderBottom: '1px solid',
                borderColor: 'border.default',
              }}
            >
              <TextInput
                leadingVisual={SearchIcon}
                sx={{
                  width: '100%',
                  color: 'fg.muted',
                }}
                placeholder='Search'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </Box>
            <Box sx={{}}>
              <NavList>
                {searchTerm === '' &&
                  costCenters.map((center) => (
                    <NavList.Item
                      onClick={() => {
                        setSelected(center);
                        setIsOpen(false);
                      }}
                      key={center}
                    >
                      <NavList.LeadingVisual
                        sx={{
                          opacity: center === selected ? '1' : '0',
                        }}
                      >
                        <CheckIcon size={16} />
                      </NavList.LeadingVisual>
                      {center}
                    </NavList.Item>
                  ))}
              </NavList>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 2,
                borderTop: '1px solid',
                borderColor: 'border.default',
              }}
            >
              <Button
                sx={{
                  cursor: 'pointer',
                }}
                variant='invisible'
              >
                Manage cost centers
              </Button>
            </Box>
          </Box>
        )}

        <Text
          sx={{
            color: 'fg.muted',
            fontSize: '1',
          }}
        >
          Includes amounts spent for organizations and repositories across all
          services.{' '}
          <Link href='/'>
            <Text
              as='span'
              sx={{
                color: 'accent.fg',
              }}
            >
              View current and past pricing information.
            </Text>
          </Link>
        </Text>
      </Box>
      <Box
        sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'border.default',
          borderRadius: 6,
          mt: 3,
        }}
      >
        <Text
          sx={{
            fontWeight: 'bold',
            display: 'block',
          }}
        >
          {selected}
        </Text>
        <Text
          sx={{
            fontSize: 1,
            color: 'fg.muted',
          }}
        >
          Feb 1 - Feb 28, 2024
        </Text>
        <Box
          sx={{
            mt: 3,
            height: '200px',
            bg: 'canvas.subtle',
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            sx={{
              fontSize: 1,
              color: 'fg.muted',
            }}
          >
            Chart goes here
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
