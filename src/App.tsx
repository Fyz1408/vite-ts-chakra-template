import {
  Box,
  Button,
  Checkbox,
  ClientOnly,
  Heading,
  HStack,
  Image,
  Progress,
  RadioGroup,
  Skeleton,
  VStack,
} from "@chakra-ui/react"
import {ColorModeToggle} from "./components/ColorModeToggle.tsx";
import react from "./assets/react.svg";
import chakra from "./assets/chakra.svg";


export default function App() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <HStack>
          <Image alt="chakra logo" src={chakra} width="20" height="20" />
          <Image alt="react logo" src={react} width="30" height="20" />
        </HStack>

        <Heading size="2xl" letterSpacing="tight">
          Welcome to Chakra UI v3 + Vite
        </Heading>

        <HStack gap="10">
          <Checkbox.Root defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Label>Checkbox</Checkbox.Label>
          </Checkbox.Root>

          <RadioGroup.Root display="inline-flex" defaultValue="1">
            <RadioGroup.Item value="1" mr="2">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText lineHeight="1">Radio</RadioGroup.ItemText>
            </RadioGroup.Item>

            <RadioGroup.Item value="2">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText lineHeight="1">Radio</RadioGroup.ItemText>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </HStack>

        <Progress.Root width="300px" value={65} striped>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>

        <HStack>
          <Button>Let's go!</Button>
          <Button variant="outline">bun install @chakra-ui/react</Button>
        </HStack>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
    </Box>
  )
}