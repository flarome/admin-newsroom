import React, { useState, useCallback } from "react";
import {DropZone, LegacyStack, Thumbnail, Text} from '@shopify/polaris';
import {NoteIcon} from '@shopify/polaris-icons';

export const ImageUploader = ({ file, setFile }) => {

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) =>
      setFile(acceptedFiles[0]),
    [],
  );

  const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/pjpeg', 'image/pjpg', 'image/jpg'];

  const fileUpload = !file && <DropZone.FileUpload />;



  const uploadedFile = file && file instanceof File ? (

      <Thumbnail
        size="small"
        alt={file.name}
        source={
          validImageTypes.includes(file.type)
            ? window.URL.createObjectURL(file)
            : NoteIcon
        }
      />
      

  ) : (

    <Thumbnail
    size="small"
    alt={""}
    source={file}
  />

  )

  ;


  return (
    <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
    {uploadedFile}
    {fileUpload}
  </DropZone>
  );
};
