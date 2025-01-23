import React, { useState, useCallback } from "react";
import {DropZone, LegacyStack, Thumbnail, Text} from '@shopify/polaris';
import {NoteIcon} from '@shopify/polaris-icons';

export const ImageUploader = ({ file, setFile }) => {

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) =>
      setFile(acceptedFiles[0]),
    [],
  );

  const validImageTypes = ['image/jpeg', 'image/png'];

  const fileUpload = !file && <DropZone.FileUpload />;

  const uploadedFile = file && (

      <Thumbnail
        size="small"
        alt={file.name}
        source={
          validImageTypes.includes(file.type)
            ? window.URL.createObjectURL(file)
            : NoteIcon
        }
      />
      

  );


  return (
    <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
    {uploadedFile}
    {fileUpload}
  </DropZone>
  );
};
