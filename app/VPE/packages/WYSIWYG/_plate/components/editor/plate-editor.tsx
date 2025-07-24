

import * as React from 'react';

import { Plate, usePlateEditor } from 'platejs/react';

import { EditorKit } from './editor-kit';
import { SettingsDialog } from './settings-dialog';
import { Editor, EditorContainer } from '../ui/editor';
import { usePropsContext } from '../../context/PropsContext';
import { useAppStore } from '../../store';
import { data as dataTEST } from '../../__test__/data';

export function PlateEditor() {

  const {onChange, id} = usePropsContext();

const data = useAppStore((s) => s.data);
 

  const editor = usePlateEditor({
    id: id,
    plugins: EditorKit,
    value: data || dataTEST,
    
  });
 

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

