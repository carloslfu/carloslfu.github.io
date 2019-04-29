import React, { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Box, Button, Flex, Heading, Image, Text } from 'rebass';

const links = [
  { title: 'Github', href: 'https://github.com/carloslfu' },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carloslfu/?locale=en_US',
  },
  { title: 'Twitter', href: 'https://twitter.com/carloslfu' },
  { title: 'Blog', href: 'https://medium.com/@carloslfu' },
];

export default () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen, setDrawerOpen]);

  return (
    <Flex justifyContent="center">
      <Box width={[1, 800]}>
        <Flex
          as="header"
          justifyContent="space-between"
          p={3}
          alignItems="center"
        >
          <Text fontSize={4}>Carlos Galarza</Text>
          <MobileView renderWithFragment={true}>
            <Image
              src="/static/menu.svg"
              alt="open menu"
              width={28}
              height="auto"
              onClick={toggleDrawer}
            />
          </MobileView>
          <BrowserView>
            <Flex as="nav">
              {links.map(({ href, title }, idx) => (
                <ButtonLink key={idx} href={href}>
                  {title}
                </ButtonLink>
              ))}
            </Flex>
          </BrowserView>
        </Flex>
        <Flex
          as="section"
          flexDirection={['column', 'row']}
          alignItems={['center']}
          marginBottom={20}
        >
          <Flex flexDirection="column" justifyContent="space-between">
            <Heading as="h1" p={3} fontSize={[2, 3]} fontWeight={1}>
              I'm a Senior Software Engineer and Consultant.
              <br />I love to help people by creating tools using the Web
              Platform and the cloud.
            </Heading>
            <Text p={3}>
              "The best way to predict the future is to invent it." - Alan Kay
            </Text>
          </Flex>
          <Image
            src="/static/profile.jpg"
            alt="Carlos Galarza's photo"
            width={[300, 320]}
            height="auto"
          />
        </Flex>
      </Box>
      {drawerOpen && (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ position: 'fixed', top: 0, left: 0, height: '100%' }}
          backgroundColor="white"
          width={1}
        >
          <Image
            src="/static/close.svg"
            alt="close menu"
            width={28}
            height="auto"
            onClick={toggleDrawer}
            style={{ position: 'fixed', right: 16, top: 16 }}
          />
          {links.map(({ href, title }, idx) => (
            <ButtonLink key={idx} href={href} p={4}>
              {title}
            </ButtonLink>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

const ButtonLink = ({ href, children, ...rest }) => (
  <Button
    as="a"
    variant="link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
    color="black"
    fontSize={2}
    fontWeight={1}
    p={2}
    {...rest}
  >
    {children}
  </Button>
);
