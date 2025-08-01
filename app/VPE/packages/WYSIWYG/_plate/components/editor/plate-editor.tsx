

import {useRef, useState} from 'react';

import { Plate, usePlateEditor, createPlateEditor } from 'platejs/react';

import { EditorKit } from './editor-kit';
import { SettingsDialog } from './settings-dialog';
import { Editor, EditorContainer } from '../ui/editor';
import { usePropsContext } from '../../../../../context/PropsContext';
import { data as dataTEST } from '../../__test__/data';
import { createUseVPE } from '../../../../../lib/use-vpe';

import isEqual from 'lodash/isEqual';


const useVPE = createUseVPE(); 

export function PlateEditor() {

  console.log('[PlateEditor] RENDER')
  const {id} = usePropsContext();

  const data = useVPE((s) => s.WYSIWYG);
  const dispatch = useVPE((s) => s.dispatch);
 
  const onChange = (value) => {
  if (!isEqual(data, value)) {
    dispatch({
      type: "setData",
      data: { WYSIWYG: value },
    });
  }
};


const editor =  usePlateEditor({
    id,
    plugins: EditorKit,
    // une valeur initiale fixe
    value: data || dataTEST,
  })




 

  return (
    <Plate editor={editor}     onChange={(newValue) => {
      console.log('🔁 Nouveau contenu :', newValue);
      onChange && typeof onChange === "function" && onChange(newValue.value);
    }}>


      <EditorContainer>
        
        <Editor variant="default" />
      </EditorContainer>

      <SettingsDialog />
    </Plate>
  );
}

