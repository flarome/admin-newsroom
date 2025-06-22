'use client';

import * as React from 'react';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { useEditorRef, useEditorSelector } from 'platejs/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

import { Input } from '../../components/ui/input';
import { ToolbarButton } from './toolbar';

function getSections(nodes: any[]) {
  const sections: any[][] = [];
  let currentSection: any[] = [];

  for (const node of nodes) {
    if (node.type === 'image') {
      if (currentSection.length > 0) {
        sections.push(currentSection);
        currentSection = [];
      }
    } else {
      currentSection.push(node);
    }
  }

  if (currentSection.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}

export function PartMetadataToolbarButton() {
  const editor = useEditorRef();
  const selectionDefined = useEditorSelector((e) => !!e.selection, []);

  const [open, setOpen] = React.useState(false);
  const [location, setLocation] = React.useState('');
  const [date, setDate] = React.useState('');

  
  const handleApply = () => {
  console.log('🛠️ handleApply déclenché');

  if (!selectionDefined || !editor.selection) {
    console.warn('⛔ Pas de sélection active');
    return;
  }

  const anchorPath = editor.selection.anchor.path;
  const anchorIndex = anchorPath[0];

  console.log('📍 Position du curseur :', anchorPath);

  const sections = getSections(editor.children);
  console.log('📦 Sections détectées :', sections.length);

  const currentSection = sections.find((section) =>
    section.some((node) => editor.children.indexOf(node) === anchorIndex)
  );

  if (!currentSection) {
    console.warn('⛔ Aucune section trouvée pour anchorIndex:', anchorIndex);
    return;
  }
  console.log('currentSection', currentSection)

  const firstNode = currentSection.find(
  (n) => n.type === 'p'
);

if (!firstNode) {
  console.warn('⛔ Aucune balise <paragraph> trouvée dans la section active');
  return;
}

const firstIndex = editor.children.indexOf(firstNode);


  console.log('✅ Premier paragraphe de la section :', firstNode);
  console.log('📍 Path =', [firstIndex]);
  console.log('📤 Données à appliquer :', { location, date });

  editor.tf.setNodes(
    {
      location: location || undefined,
      date: date || undefined,
    },
    {
      at: [firstIndex],
      match: (n) => n.type === 'p',
    }
  );

  console.log('✅ setNodes exécuté sur [firstIndex]');

  setOpen(false);
  setLocation('');
  setDate('');
  console.log('🎉 Formulaire réinitialisé et menu fermé');
};



  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip="Ajouter localisation/date" pressed={open} isDropdown>
          <MapPinIcon className="size-4" />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[200px] space-y-2 p-3" align="start">
        <DropdownMenuLabel className="text-xs font-medium">Localisation</DropdownMenuLabel>
        <Input
          placeholder="Paris, France"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <DropdownMenuLabel className="text-xs font-medium">Date</DropdownMenuLabel>
        <Input
          type="date"
         
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <ToolbarButton className="w-full mt-2" onClick={handleApply}>
          Appliquer
        </ToolbarButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}