import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, VStack, HStack, useToast, List, ListItem, ListIcon, Image } from "@chakra-ui/react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  const [startups, setStartups] = useState("");
  const toast = useToast();

  // Mock data for demonstration
  const mockNewsData = [
    {
      name: "Startup A",
      news: [
        { title: "Startup A secures Series A funding", date: "2023-03-01" },
        { title: "Startup A launches new product", date: "2023-02-15" },
      ],
    },
    {
      name: "Startup B",
      news: [
        { title: "Startup B expands to new markets", date: "2023-01-20" },
        { title: "Startup B partners with tech giant", date: "2023-01-10" },
      ],
    },
  ];

  const handleSearch = () => {
    // In a real application, you would make an API call to the backend to fetch the news
    // For now, we will just display a toast notification
    toast({
      title: "Search initiated.",
      description: "This is where the scraping service would be called.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Startup News Extractor
        </Heading>
        <Text>Enter a list of startups and scrape their websites for recent news</Text>
        <HStack w="full">
          <Input placeholder="Enter startup names separated by commas" value={startups} onChange={(e) => setStartups(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
        </HStack>
        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            Recent News
          </Heading>
          <List spacing={3}>
            {mockNewsData.map((startup) => (
              <ListItem key={startup.name}>
                <Text fontWeight="bold">{startup.name}</Text>
                <List spacing={2} pl={4}>
                  {startup.news.map((item, index) => (
                    <ListItem key={index}>
                      <HStack>
                        <ListIcon as={FaPlus} color="green.500" />
                        <Text>{item.title}</Text>
                        <Text fontSize="sm" color="gray.500">
                          - {item.date}
                        </Text>
                      </HStack>
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
