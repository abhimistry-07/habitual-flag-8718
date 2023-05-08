// import {
//   Box,
//   Text,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   TabIndicator,
//   Input,
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   SimpleGrid,
//   Image,
//   Stack,
//   Heading,
//   Divider,
//   ButtonGroup,
//   VStack,
//   Link,
//   chakra,
//   Container,
//   VisuallyHidden,
//   IconButton,
//   useColorModeValue,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import React from "react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// import Slider from "react-slick";
// import SingleCoursePage from "../Pages/SingleCoursePage";

// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function MyCarousel({ recommendedCoursesData }) {
//   const [slider, setSlider] = (React.useState < Slider) | (null > null);

//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   const handleSinglePage = (id) => {
//     <SingleCoursePage id={id} />;
//   };

//   return (
//     <Box
//       position={"relative"}
//       height={"600px"}
//       width={"full"}
//       overflow={"hidden"}
//     >
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}
//       >
//         <BiLeftArrowAlt />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}
//       >
//         <BiRightArrowAlt />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {recommendedCoursesData.map((item) => {
//           return (
//             <Card key={item.id}>
//               <CardBody>
//                 <Image src={item.image} borderRadius="lg" margin={"auto"} />
//                 <Stack mt="6" spacing="3">
//                   <Heading size="md">{item.title}</Heading>
//                   <Text>{item.instructor}</Text>
//                   <Text color="blue.600" fontSize="2xl">
//                     {item.duration}{" "}
//                   </Text>
//                   <Text>{item.view}</Text>
//                 </Stack>
//                 <Text
//                   fontSize={"md"}
//                   color="green.400"
//                   as={"b"}
//                   onClick={() => handleSinglePage(item.id)}
//                 >
//                   More Details...
//                 </Text>
//               </CardBody>
//             </Card>
//           );
//         })}
//       </Slider>
//     </Box>
//   );
// }
