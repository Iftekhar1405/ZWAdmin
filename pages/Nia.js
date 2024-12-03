import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { catImage } from "./image";

export default function Ticker() {
  return (
    <Box bg="gray.50" color={"black"}>
      <VStack>
        {/* <Navbar /> */}
        <TickerLandingImage />
        <Reach />
        <Achievement />
        <TickerSection />
        <Benefits />
        <Teacher />
        <Administration />
        <Parents />
        <NewSection />
        <ClassSathi />
        <EmpoweringSection />
        <ClientLogo />
        <YourNiaLab />
      </VStack>
    </Box>
  );
}

const TickerLandingImage = () => {
  return (
    <Box bg="aqua" width="100%">
      {/* Background Image */}
      <Box
        h={{ base: "100%", md: "400", lg: "500" }}
        w="100%"
        position={"relative"}
      >
        <Image
          src="/ticker/image.jpeg"
          alt="landing Image"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Box
          position={"absolute"}
          top={{ base: "1%", md: "5%", lg: "25%" }}
          left={{ base: "3%", md: "5%", lg: "8%" }}
          color="white"
          overflow={"hidden"}
        >
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
          >
            Improving Education Outcomes With AI
          </Heading>
          <Text color="green.300" fontSize={{ base: "sm", md: "lg" }}>
            Transforming Education, One Click at a Time
          </Text>
          <HStack spacing={1} mt={4} flexWrap="wrap" p={2}>
            <Button
              colorScheme="yellow"
              size={{ base: "sm", md: "lg" }}
              rounded="full"
              px={6}
            >
              School Leaders: Request for a Demo
            </Button>
            <Button
              colorScheme="green"
              variant="solid"
              size={{ base: "sm", md: "lg" }}
              rounded="full"
              px={6}
            >
              Students: Get Started Free
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

const Achievement = () => {
  return (
    <HStack
      alignItems="center"
      bg="green.400"
      shadow="sm"
      rounded="md"
      p={8}
      w="100%"
      h={{ base: "auto", md: "60%" }}
    >
      <Box flex={1}>
        <Image
          src="/ticker/image.jpeg"
          alt="Achievement"
          w="100%"
          objectFit="cover"
        />
      </Box>
      <Text
        color="green.900"
        fontSize={{ base: "sm", md: "lg" }}
        w={{ base: "100%", md: "40%" }}
        textAlign="center" // Centers the text
      >
        Our Achievements Like Rajasthan: Startup Achievement
      </Text>
    </HStack>
  );
};

const Reach = () => {
  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      backgroundColor="pink"
      w="100%"
      h="80%"
    >
      <Box flex={1} p={2} flexDirection={"row-reverse"}>
        <Image
          src="/ticker/image.jpeg"
          alt="Achievement"
          w="100%"
          h="100%" // Ensure the image stretches to fill the Box container
          objectFit="cover"
        />
      </Box>
      <Box flex={1} p={2} textAlign="center">
        <Heading fontSize="2xl" color="green">
          Reach
        </Heading>
        <Text mt={4} fontSize={{ base: "sm", md: "lg" }} w="100%">
          Trusted by 8000+ classrooms PAN India
        </Text>
      </Box>
    </HStack>
  );
};

const TickerSection = () => {
  return (
    <VStack
      bg="green.50"
      p={8}
      rounded="md"
      shadow="sm"
      alignItems="center"
      justify="center"
      spacing={4}
      width="60%"
      margin="auto"
    >
      <Heading fontSize="5xl" color="green.500" fontWeight="extrabold">
        NiaLabs Ticker
      </Heading>
      <Text mt={4} textAlign="center" fontWeight="semibold">
        NiaLabs Ticker is the world’s first AI-powered and Bluetooth
        clicker-based solution that revolutionizes teaching methodologies,
        personalizes learning experiences, and streamlines administrative
        processes.
      </Text>
      <Box w="100%" h="100%" backgroundColor="grey" position="relative">
        <Image src="/ticker/image.jpeg" w="100%" h="100%" objectFit="cover" />
      </Box>
    </VStack>
  );
};

const Benefits = () => {
  return (
    <Box
      bg="gray.100"
      p={8}
      borderRadius="md"
      boxShadow="sm"
      width="500px"
      height="380px"
      position="relative"
      overflow="hidden"
      transition="background-color 0.5s ease-in-out"
      //   _hover={{ bg: "#38a169" }}
    >
      <Heading
        fontSize="lg"
        fontWeight="bold"
        color="#38a169" // Green color
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        transition="all 0.3s ease-in-out"
        _hover={{ top: "8%", transform: "translate(-50%, 0)" }}
      >
        Seamless Engagement
      </Heading>
      <Text
        opacity={0} // Start fully transparent
        // visibility="hidden" // Start hidden
        fontSize="md" // Equivalent to font-size: 1rem
        color="black" // Text color equivalent to #4a5568
        position="absolute"
        top="100%" // Start below the card
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        transition="opacity 0.5s ease-in-out, top 0.5s ease-in-out, visibility 0.5s ease-in-out"
        _hover={{ opacity: 1, visibility: "visible", top: "60%" }}
      >
        Involve every learner through real-time quizzes. Instant Insights - Get
        instant feedback and insights from NiaLabs AI. Unlimited Questions -
        Choose from our repository, community, or create your own. Offline
        Accessibility - Transform your classroom, even without the internet.
        Personalized Learning - Tailor education experiences for every learner
        with NiaLabs AI. Easy Integration - Integrate into all platforms and
        devices.
      </Text>
    </Box>
  );
};

const Teacher = () => {
  return (
    <HStack
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"grey.500"}
      gap={20}
    >
      <Box fontSize="lg" fontWeight="bold" width={"40%"}>
        <Text color="green" fontSize={"lg"}>
          Nialabs Ticker For Teachers
        </Text>
        <Heading fontSize="5xl" mt={4}>
          Seamless Engagement and Performance Tracking
        </Heading>

        <Text mt={4} color={"gray.500"} fontWeight={"semibold"} fontSize={"xl"}>
          Teachers can capture student voice through spot assessments using the
          world’s first Bluetooth clicker device, and get instant insights for
          the whole class and each student.
        </Text>
      </Box>
      <Box width={"40%"}>
        <Image src={catImage} w={"90%"} />
      </Box>
    </HStack>
  );
};

const Administration = () => {
  return (
    <HStack>
      <Box width={"50%"}>
        <Image src="" alt="administrators section" />
      </Box>
      <Box width={"40%"}>
        <Text fontSize="lg" fontWeight="bold" color="green">
          Nialabs Ticker For Administrators
        </Text>
        <Heading fontSize="lg" mt={4}>
          Instant Monitoring and Insights
        </Heading>
        <Text mt={4}>
          Administrators can monitor syllabus progress, teacher work, and
          student impact through rich, multi-level dashboards powered by AI.
        </Text>
      </Box>
    </HStack>
  );
};
const Parents = () => {
  return (
    <HStack backgroundColor={"red.500"} width={"90%"}>
      <Box width={"40%"}>
        <Text fontSize="lg" fontWeight="bold" color="green">
          Nialabs Ticker For Parents
        </Text>
        <Heading fontSize="lg" mt={4}>
          Student Progress and Learning Supervision
        </Heading>
        <Text mt={4}>
          Parents can keep track of student learning and be involved in every
          aspect of academics to support their child.
        </Text>
      </Box>
      <Box width={"40%"}>
        <Image src="" alt="parents section" />
      </Box>
    </HStack>
  );
};

const NewSection = () => {
  return (
    <Box>
      <Heading color="green" alignContent={"center"}>
        News Updates
      </Heading>
      <Image
        src="/placeholder.jpg"
        alt="Relevant Visual"
        w="full"
        rounded="md"
        shadow="sm"
      />
    </Box>
  );
};
const ClassSathi = () => {
  return (
    <Box>
      <Heading>
        This Samsung-funded startup’s mission is to reduce dropout rates in govt
        schools
      </Heading>
      <Text mt={4}>
        TagHive, a Samsung-funded startup, is on a mission to reduce dropout
        rates in government schools. Through its "Class Saathi" platform, the
        company provides interactive and AI-driven educational tools designed to
        enhance classroom engagement and support students in underserved
        schools, aiming to improve educational outcomes and retention rates.
      </Text>
    </Box>
  );
};
const EmpoweringSection = () => {
  return (
    <Box>
      <Heading>Empowering the next generation of</Heading>
      <UnorderedList>
        <ListItem>
          <Text fontWeight="bold">Private Schools</Text>
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Coaching Centers</Text>
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Foundations</Text>
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">System Integrators</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
const ClientLogo = () => {
  return (
    <marquee>
      <HStack width={"80vw"}>
        <Image src="/images/1.png" width={"15vw"} />
        <Image src="/images/16.png" width={"15vw"} />
        <Image src="/images/17.png" width={"15vw"} />
        <Image src="/images/19.png" width={"15vw"} />
        <Image src="/images/20.png" width={"15vw"} />
        <Image src="/images/21.png" width={"15vw"} />
      </HStack>
    </marquee>
  );
};

const YourNiaLab = () => {
  return (
    <Box
      alignContent={"center"}
      justifyContent={"center"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        backgroundColor={"green.500"}
        padding={8}
        borderRadius="md"
        boxShadow="md"
      >
        <Text fontSize={"6xl"} textAlign="center" color="white">
          Get Your Own Nialabs Ticker today!
        </Text>
        <Flex direction="column" align="center" justify="center" mt={6}>
          <Box textAlign="center">
            <Heading fontSize="3xl" fontWeight="bold" color="white">
              Our team will assist you every step of the way in real-time!
            </Heading>
            <Text mt={4} fontSize="xl" color="white">
              NiaLabs Ticker - Transforming Education, One Click At a Time!
            </Text>
            <Flex justify="center" mt={8}>
              {" "}
              {/* Added Flex to center the button */}
              <Button
                colorScheme="blue"
                size="lg"
                borderRadius="full" // Rounded button border
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Book a Demo
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
