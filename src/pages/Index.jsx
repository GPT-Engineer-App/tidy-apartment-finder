// Complete the Index page component here
// Use chakra-ui and react-icons for UI components
import { Box, Button, Checkbox, FormControl, FormLabel, Input, NumberInput, NumberInputField, Stack, Text, VStack } from "@chakra-ui/react";
import { FaBed, FaBuilding, FaQuoteRight, FaTimesCircle } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState(1);
  const [cleaningFrequency, setCleaningFrequency] = useState("");
  const [cleaningIncluded, setCleaningIncluded] = useState(false);
  const [bedSheetsIncluded, setBedSheetsIncluded] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const handleGetQuotes = () => {
    // Mocking quote retrieval
    const mockQuotes = [
      { company: "CleanFast", price: 120 },
      { company: "SparkleHome", price: 150 },
      { company: "EcoCleaners", price: 135 },
    ];
    setQuotes(mockQuotes);
  };

  return (
    <Box p={8} maxW="600px" mx="auto">
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Size in m²</FormLabel>
          <NumberInput min={10} max={1000}>
            <NumberInputField placeholder="50" value={size} onChange={(e) => setSize(e.target.value)} />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Number of Rooms</FormLabel>
          <NumberInput min={1} max={20} defaultValue={1}>
            <NumberInputField value={rooms} onChange={(e) => setRooms(e.target.value)} />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Cleaning Frequency (per month)</FormLabel>
          <NumberInput min={1} max={30}>
            <NumberInputField placeholder="4" value={cleaningFrequency} onChange={(e) => setCleaningFrequency(e.target.value)} />
          </NumberInput>
        </FormControl>
        <Stack spacing={5} direction="row">
          <Checkbox icon={<FaBed />} isChecked={bedSheetsIncluded} onChange={(e) => setBedSheetsIncluded(e.target.checked)}>
            Bed Sheets Provided
          </Checkbox>
          <Checkbox icon={<FaBuilding />} isChecked={cleaningIncluded} onChange={(e) => setCleaningIncluded(e.target.checked)}>
            Cleaning Provided
          </Checkbox>
        </Stack>
        <Button leftIcon={<FaQuoteRight />} colorScheme="pink" onClick={handleGetQuotes}>
          Get Quotes
        </Button>
      </VStack>
      {quotes.length > 0 && (
        <Box mt={10}>
          <Text fontSize="xl" mb={4}>
            Quotes:
          </Text>
          {quotes.map((quote, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">{quote.company}</Text>
              <Text>${quote.price}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Index;
