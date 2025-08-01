import { Box, InlineStack, Spinner } from "@polaris/npm";

const Loading = () => {
  return (
    <Box  width="100%"  padding={"1000"}>
        <InlineStack align="center" blockAlign="center">
          <Spinner
            size="small"
            accessibilityLabel="Chargement des informations en cours..."
          />
        </InlineStack>
    </Box>
  );
};

export default Loading;
