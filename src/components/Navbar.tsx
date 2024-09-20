import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaHamburger,
  FaHome,
  FaMailBulk,
  FaSchool,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue("brand.200", "brand.700");

  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Stack
        minH={"10vh"}
        w={"full"}
        align={"center"}
        justify={"center"}
        maxW={"container.xl"}
        px={4}
      >
        <Flex
          justify={"space-between"}
          bg={useColorModeValue("brand.100", "brand.900")}
          height={"64px"}
          pl={3}
          pr={{
            base: 3,
            md: 1,
          }}
          w={"full"}
          rounded={"full"}
          align={"center"}
          border={"1px"}
          borderColor={borderColor}
        >
          <Image
            src={"/assets/logo.svg"}
            boxSize={10}
            as={motion.img}
            whileHover={{ rotate: -120, scale: 1.1 }}
            whileTap={{ rotate: 120, scale: 1.05 }}
            onContextMenu={preventRightClick}
          />
          {isMobile ? (
            <Flex align={"center"}>
              <IconButton
                aria-label="Open menu"
                icon={<FaHamburger />}
                variant={"ghost"}
                onClick={isOpen ? onClose : onOpen}
                rounded={"full"}
                colorScheme="brand"
              />
            </Flex>
          ) : (
            <DesktopOptions />
          )}
        </Flex>
      </Stack>
      <BottomSheet isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const DesktopOptions = () => {
  const borderColor = useColorModeValue("brand.200", "brand.500");
  const hoverColor = useColorModeValue("brand.50", "brand.600");
  const textColor = useColorModeValue("brand.800", "brand.50");

  return (
    <Stack
      direction={"row"}
      spacing={0}
      align={"center"}
      justify={"center"}
      height={"full"}
      py={1}
    >
      {options.map((option) => (
        <motion.div
          whileTap={{ scale: 0.9 }}
          key={option.name}
          style={{ height: "100%" }}
          tabIndex={-1}
        >
          <Flex
            align={"center"}
            as={Link}
            to={option.href}
            smooth={true}
            cursor={"pointer"}
            px={3}
            borderRadius={"full"}
            h={"full"}
            tabIndex={0} // Make focusable with tab
            onClick={() => trackClick(option.name, "Desktop")}
            onKeyDown={(e) => handleKeyDown(e, option.href, option.name)}
            _hover={{
              backgroundColor: hoverColor,
              border: "1px",
              borderColor: borderColor,
              // Transition effect
              transition: "background-color 0.25s",
            }}
            _focus={{
              outline: "none",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)", // Focus style
            }}
          >
            <Text fontWeight={"bold"} color={textColor}>
              {option.name}
            </Text>
          </Flex>
        </motion.div>
      ))}
      {/* <Box w={2} /> */}
    </Stack>
  );
};

const BottomSheet = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const onClick = (name: string) => {
    onClose();
    trackClick(name, "Mobile");
  };

  const borderColor = useColorModeValue("brand.200", "brand.600");
  const hoverColor = useColorModeValue("brand.50", "brand.600");
  const textColor = useColorModeValue("brand.800", "brand.50");

  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      // finalFocusRef={}
    >
      <DrawerOverlay />
      <DrawerContent bg={useColorModeValue("brand.50", "brand.950")} py={4}>
        <DrawerHeader>
          <Stack direction={"row"} justify={"space-between"} align={"center"}>
            <Image
              src={"/assets/logo.svg"}
              boxSize={10}
              as={motion.img}
              whileHover={{ rotate: -120, scale: 1.1 }}
              whileTap={{ rotate: 120, scale: 1.05 }}
            />
            <IconButton
              aria-label="Close menu"
              icon={<FaTimes />}
              variant={"ghost"}
              onClick={onClose}
              rounded={"full"}
              colorScheme="brand"
            />
          </Stack>
        </DrawerHeader>
        <DrawerBody>
          <Stack
            direction={"column"}
            spacing={0}
            justify={"center"}
            height={"full"}
          >
            {options.map((option) => (
              <Stack
                p={4}
                key={option.name}
                role={"button"}
                as={Link}
                to={isOpen ? option.href : ""}
                smooth={true}
                cursor={isOpen ? "pointer" : "default"}
                onClick={() => onClick(option.name)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  handleKeyDown(e, option.href, option.name);
                  if (e.key === "Escape") {
                    onClose();
                  }
                }}
                border={"1px"}
                borderColor="transparent"
                borderRadius={"lg"}
                _hover={{
                  backgroundColor: hoverColor,
                  borderColor: borderColor,
                }}
                tabIndex={isOpen ? 0 : -1} // Make focusable only when open
                direction={"row"}
                spacing={4}
                align={"center"}
                color={textColor}
              >
                <Icon as={option.icon} boxSize={4} />
                <Text fontWeight={"bold"}>{option.name}</Text>
              </Stack>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const handleKeyDown = (e: React.KeyboardEvent, href: string, name: string) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    document.getElementById(href)?.focus({ preventScroll: false });
    trackClick(name, "Keyboard");
  }
};

const options = [
  { name: "Home", href: "home", icon: FaHome },
  { name: "Services", href: "services", icon: FaUser },
  { name: "Why Us?", href: "why-us", icon: FaSchool },
  { name: "Contact", href: "contact", icon: FaMailBulk },
];

// Analytics
const trackClick = (
  name: string,
  variant: "Mobile" | "Desktop" | "Keyboard" = "Desktop"
) => {
  console.log(`Tracking click on ${name} from ${variant}`);
};

export default Navbar;
