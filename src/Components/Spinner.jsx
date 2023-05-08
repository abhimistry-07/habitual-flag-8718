import { Spinner, Progress } from "@chakra-ui/react";

export default function SpinnerLoading() {
  return (
    <>
      <Progress color={"purple"} height="20px" isIndeterminate />
    </>
  );
}

export function Spinner2() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
}
