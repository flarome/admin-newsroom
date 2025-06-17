import {
  Button,
  Card,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Popover,
  TextField,
  Modal as PolarisModal,
  Icon,
  AppProvider,
  Thumbnail,
  InlineGrid,
  Collapsible,
  DropZone,
  ActionList,
} from "@shopify/polaris";

const MainVideo = () => { 
 
  return (
    
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }} inlineAlign="stretch">
        <InlineStack wrap align="space-between" direction={{ xs: "row" }}>
          <Text as="h2" variant="headingSm" fontWeight="semibold">
            Vidéo Principale
          </Text>

          
        </InlineStack>

        <div
          className="Polaris-DropZone Polaris-DropZone--hasOutline Polaris-DropZone--sizeLarge"
          style={{opacity: "0.5"}}
        >
          <div className="Polaris-DropZone__Container">
       
              <div className="Polaris-DropZone-FileUpload Polaris-DropZone-FileUpload--large">
                <BlockStack align="center">
                  <Button
                  disabled
               
                    variant="secondary"
                    size="medium"
                    textAlign="center"
              
                  >
                    <Text as="span" variant="bodySm" fontWeight="medium">
                      Non disponible
                    </Text>
                  </Button>
                </BlockStack>
              </div>
          
          </div>
        </div>
      </BlockStack>

    </Card>





  );
};

export default MainVideo;
