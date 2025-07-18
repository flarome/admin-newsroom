

import * as React from 'react';

import { Plate, usePlateEditor } from 'platejs/react';

import { EditorKit } from '../../components/editor/editor-kit';
import { SettingsDialog } from '../../components/editor/settings-dialog';
import { Editor, EditorContainer } from '../../components/ui/editor';
import { usePropsContext } from '../../context/PropsContext';
import { useAppStore } from '../../store';
import { data as dataTEST } from '../../../editor/__test__/data';

export function PlateEditor() {

  const {onChange} = usePropsContext();

const data = useAppStore((s) => s.data);


  const editor = usePlateEditor({
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

