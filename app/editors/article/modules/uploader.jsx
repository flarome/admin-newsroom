import { useCallback, memo } from "react";
import { DropZone, Thumbnail } from "@shopify/polaris";
import { NoteIcon } from "@shopify/polaris-icons";

  const types = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/pjpeg",
    "image/pjpg",
    "image/jpg",
  ];

const App = ({ file, setFile, validImageTypes = types }) => {
  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => setFile(acceptedFiles[0]),
    [],
  );

  const fileUpload = !file && <DropZone.FileUpload />;

  const uploadedFile =
    file && file instanceof File ? (
      <Thumbnail
        size="small"
        alt={file.name}
        source={
          validImageTypes.includes(file.type)  
            ? window?.URL?.createObjectURL(file)
            : NoteIcon
        }
      />
    ) : (
      file && <Thumbnail size="small" alt={""} source={file} />
    );

  return (
    <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
      {uploadedFile}
      {fileUpload}
    </DropZone>
  );
};

export const Image = memo(App)
