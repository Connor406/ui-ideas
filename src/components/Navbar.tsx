import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, Link, useColorMode } from "@chakra-ui/react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { FaAngellist, FaGithub, FaLinkedin } from "react-icons/fa"
import { UseResponsiveCheck } from "../hooks/useResponsiveCheck"
// import { StyledDrawer } from "./StyledDrawer"

const MotionBox = motion(Box)
const MotionLink = motion(Link)
const MotionFlex = motion(Flex)

export const Navbar: React.FC = ({}) => {
  const [scrollY, setScrollY] = useState(0)
  const { isMobile } = UseResponsiveCheck()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useScrollPosition(({ currPos }) => {
    setScrollY(-currPos.y)
  })

  const OnClickScroll = (value: number) => {
    window.scrollTo({ top: value, behavior: "smooth" })
  }

  const navbarLinks = [
    {
      text: "Home",
      id: "/#home",
      layoutId: "logo",
    },
    {
      text: "About",
      id: "/#about",
    },
    {
      text: "Projects",
      id: "/#projects",
    },
    {
      text: "Hire Me!",
      id: "/#contact",
    },
  ]

  const buttonIcons = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/Connor406",
      aria: "git hub",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/connor-mahan406/",
      aria: "linked in",
    },
    {
      icon: <FaAngellist size={24} />,
      href: "https://angel.co/u/connor-mahan",
      aria: "angel list",
    },
  ]

  return (
    <div id="home">
      <AnimateSharedLayout>
        <MotionBox>
          {/* isMobile but menu not open */}
          {isMobile ? (
            <>
              <IconButton
                variant="ghost"
                boxShadow="none"
                fontSize="1.8rem"
                aria-label="menu"
                icon={<HamburgerIcon />}
                color="white"
                pos="fixed"
                right={4}
                top={4}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                _hover={{
                  border: "none",
                  textDecoration: "none",
                  boxShadow: "none",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              />
              {/* <StyledDrawer
                onMenuClose={() => setMenuIsOpen(false)}
                color={hoverColor[colorMode]}
                scrollFunction={OnClickScroll}
                onClose={() => setMenuIsOpen(false)}
                isOpen={menuIsOpen}
                menuItems={navbarLinks}
              /> */}
              {/* <AnimatePresence>
                {isLoading && <Loader isMobile={isMobile} key="key" />}
              </AnimatePresence> */}
            </>
          ) : (
            // Tablet & Desktop view
            <>
              <Flex
                zIndex={5}
                position="fixed"
                w="100%"
                m="auto"
                top={0}
                p={4}
                bg={scrollY > 528 ? "white" : "transparent"}
                transitionDuration=".3s"
              >
                <MotionFlex
                  ml={4}
                  w="100%"
                  flex={1}
                  layoutId="header"
                  justifyContent="space-evenly"
                  alignItems="center"
                  color="white"
                >
                  {navbarLinks.map((link, key, href) => {
                    return (
                      <MotionLink
                        key={key}
                        layoutId={link.layoutId}
                        _hover={{
                          color: "white",
                        }}
                        href={key}
                      >
                        {link.text}
                      </MotionLink>
                    )
                  })}
                </MotionFlex>
              </Flex>
              {/* <AnimatePresence>
                {isLoading && <Loader isMobile={isMobile} key="key" />}
              </AnimatePresence> */}
            </>
          )}
        </MotionBox>
      </AnimateSharedLayout>
    </div>
  )
}
