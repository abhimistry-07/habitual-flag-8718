import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Input,
  Button,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box>
      <Box style={{ border: "1px solid red", display: "flex" }}>
        <Box>
          <Text>fusion</Text>
        </Box>
        <Box style={{ border: "1px solid blue" }}>
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>COURSES</Tab>
              <Tab>TUTORIALS</Tab>
              <Tab>FEATURES</Tab>
              <Tab>PRICING</Tab>
              <Tab>ABOUT</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            {/* <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels> */}
          </Tabs>
        </Box>
        <Box style={{ border: "1px solid black", display: "flex" }}>
          <Text>LOGIN</Text>
          <Text>JOIN FOR FREE</Text>
        </Box>
      </Box>
      <Box>
        <Text>Learn on your schedule</Text>
        <Box>
          <Input placeholder="What do you want to learn?" />
          <Button>
            <SearchIcon />
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
