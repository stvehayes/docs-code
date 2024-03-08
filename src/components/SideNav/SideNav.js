import { Avatar, Box, Heading, NavList, Text } from '@primer/react'
import {
    ChecklistIcon,
    CreditCardIcon,
    GearIcon,
    GitPullRequestIcon,
    HomeIcon,
    IssueOpenedIcon,
    LawIcon,
    OrganizationIcon,
    PersonIcon,
    PlugIcon,
    ShieldIcon,
} from '@primer/octicons-react'

export function SideNav() {
    const style = {
        bg: 'canvas.subtle',
        borderBottom: '1px solid',
        borderColor: 'border.default',
        borderRadius: 0,
        px: 3,
        py: '13px',
        width: '100%',
        ml: -2,
        mr: -2,
    }

    const nav = [
        {
            icon: <HomeIcon />,
            text: 'Home',
        },
        {
            icon: <OrganizationIcon />,
            text: 'Organizations',
        },
        {
            icon: <PersonIcon />,
            text: 'People',
        },
        {
            icon: <LawIcon />,
            text: 'Policies',
        },
        {
            icon: <PlugIcon />,
            text: 'GitHub Connect',
        },
        {
            icon: <ShieldIcon />,
            text: 'Code Security',
        },
        {
            icon: <CreditCardIcon />,
            text: 'Billing',
        },
        {
            icon: <GearIcon />,
            text: 'Settings',
        },
        {
            icon: <ChecklistIcon />,
            text: 'Compliance',
        },
    ]

    return (
        <Box
            sx={{
                display: ['none', 'block'],
                bg: 'canvas.default',
                borderRight: '1px solid',
                borderColor: 'border.default',
            }}
        >
            <Box
                sx={{
                    p: 3,
                    borderBottom: '1px solid',
                    borderColor: 'border.default',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '2',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        size={24}
                        src="https://avatars.githubusercontent.com/b/2?s=48&v=4"
                    />
                    <Heading
                        sx={{
                            fontSize: 3,
                            fontWeight: '400',
                        }}
                    >
                        Avocado Corp.
                    </Heading>
                </Box>
                <Text
                    sx={{
                        fontSize: 1,
                    }}
                >
                    Makers of the best avocados.
                </Text>
            </Box>
            <NavList
                sx={{
                    width: '300px',
                    height: '100%',
                }}
                style={{
                    marginTop: '-8px',
                }}
            >
                {nav.map((item, index) => (
                    <NavList.Item sx={style} key={index} href="/">
                        <NavList.LeadingVisual sx={{ color: 'fg.default' }}>
                            {item.icon}
                        </NavList.LeadingVisual>
                        {item.text}
                    </NavList.Item>
                ))}
            </NavList>
        </Box>
    )
}
