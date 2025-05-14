import React, { useState, useRef } from "react";
import {
  Button,
  Modal,
  Select,
  BlockStack,
  Box,
  InlineStack,
  Card,
  TextField,
} from "@shopify/polaris";
import {
  DeleteIcon,
  PlusIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DragHandleIcon,
} from "@shopify/polaris-icons";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { v4 as uuidv4 } from "uuid";


import Lexical from '../../../lexical/editor';

const BLOCK_TYPES = [
  { label: "Texte", value: "text" },
  { label: "Image", value: "image" },
  { label: "Citation", value: "quote" },
];

const generateEmptyBlock = (type) => {
  const id = uuidv4();
  switch (type) {
    case "text":
      return { id, type, content: "" };
    case "image":
      return { id, type, url: "", alt: "" };
    case "quote":
      return { id, type, text: "", author: "" };
    default:
      return { id, type };
  }
};

const SortableBlock = React.forwardRef((props, ref) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        if (ref) ref.current = node;
      }}
      style={style}
    >
      <BlockRenderer {...props} dragHandleProps={{ ...attributes, ...listeners }} />
    </div>
  );
});


function RichTextEditor({ initialContent, onChange }) {


  return (

    <Lexical />

  );
}


const BlockRenderer = ({
  block,
  index,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
  dragHandleProps,
}) => {
  const handleTextChange = (newState) => {
    onUpdate(index, { ...block, content: newState });
  };

  const handleChange = (field) => (value) => {
    onUpdate(index, { ...block, [field]: value });
  };

  return (
    <Card padding="400">

      <BlockStack gap="300">
        <InlineStack align="space-between" blockAlign="start">
          <BlockStack gap="200" width="100%">
            {block.type === "text" && (
              <RichTextEditor
                editorState={block.content}
                onChange={handleTextChange}
              />
            )}
            {block.type === "image" && (
              <>
                <TextField
                  label="URL de l’image"
                  value={block.url}
                  onChange={handleChange("url")}
                />
                <TextField
                  label="Texte alternatif"
                  value={block.alt}
                  onChange={handleChange("alt")}
                />
              </>
            )}
            {block.type === "quote" && (
              <>
                <TextField
                  label="Citation"
                  value={block.text}
                  onChange={handleChange("text")}
                />
                <TextField
                  label="Auteur"
                  value={block.author}
                  onChange={handleChange("author")}
                />
              </>
            )}
          </BlockStack>

          <InlineStack gap="100">
            <Button icon={ArrowUpIcon} onClick={() => onMoveUp(index)} disabled={isFirst} />
            <Button icon={ArrowDownIcon} onClick={() => onMoveDown(index)} disabled={isLast} />
            <Button icon={DeleteIcon} tone="critical" onClick={() => onDelete(index)} />
            <Button icon={DragHandleIcon} variant="tertiary" {...dragHandleProps} />
          </InlineStack>
        </InlineStack>
      </BlockStack>
    </Card>
  );
};

const ArticleEditor = ({ value = [], onChange }) => {
  const [open, setOpen] = useState(false);
  const [blocks, setBlocks] = useState(value);
  const [selectedType, setSelectedType] = useState("text");
  const lastBlockRef = useRef(null);
  const sensors = useSensors(useSensor(PointerSensor));

  const addBlock = () => {
    const newBlock = generateEmptyBlock(selectedType);
    const updated = [...blocks, newBlock];
    setBlocks(updated);
    onChange?.(updated);

    setTimeout(() => {
      lastBlockRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const updateBlock = (index, updatedBlock) => {
    const updated = [...blocks];
    updated[index] = updatedBlock;
    setBlocks(updated);
    onChange?.(updated);
  };

  const deleteBlock = (index) => {
    const updated = blocks.filter((_, i) => i !== index);
    setBlocks(updated);
    onChange?.(updated);
  };

  const moveBlock = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= blocks.length) return;
    const updated = [...blocks];
    const [movedBlock] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedBlock);
    setBlocks(updated);
    onChange?.(updated);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = blocks.findIndex((b) => b.id === active.id);
    const newIndex = blocks.findIndex((b) => b.id === over.id);

    const updated = arrayMove(blocks, oldIndex, newIndex);
    setBlocks(updated);
    onChange?.(updated);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Gérer le contenu</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Contenu de l’article"
        large
        primaryAction={{ content: "Fermer", onAction: () => setOpen(false) }}
        footer={
          <InlineStack gap="200" align="space-between">
            <Select
              label="Type de bloc"
              options={BLOCK_TYPES}
              value={selectedType}
              onChange={setSelectedType}
            />
            <Button onClick={addBlock} icon={PlusIcon}>
              Ajouter un bloc
            </Button>
          </InlineStack>
        }
      >
        <Modal.Section>
          <Box maxHeight="70vh" overflow="auto" paddingBlockEnd="400">
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext
                items={blocks.map((block) => block.id)}
                strategy={verticalListSortingStrategy}
              >
                <BlockStack gap="400">
                  {blocks.map((block, index) => (
                    <SortableBlock
                      key={block.id}
                      id={block.id}
                      block={block}
                      index={index}
                      onUpdate={updateBlock}
                      onDelete={deleteBlock}
                      onMoveUp={() => moveBlock(index, index - 1)}
                      onMoveDown={() => moveBlock(index, index + 1)}
                      isFirst={index === 0}
                      isLast={index === blocks.length - 1}
                      ref={index === blocks.length - 1 ? lastBlockRef : null}
                    />
                  ))}
                </BlockStack>
              </SortableContext>
            </DndContext>
          </Box>
        </Modal.Section>
      </Modal>
    </>
  );
};

export default ArticleEditor;