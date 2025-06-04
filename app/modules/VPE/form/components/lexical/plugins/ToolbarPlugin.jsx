/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  RedoIcon,
  UndoIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  LinkIcon,
} from "@shopify/polaris-icons";

import {
  Button,
  Modal,
  Select,
  BlockStack,
  Box,
  InlineStack,
  FormLayout,
  ActionList,
  Card,
  TextField,
  Popover,
  
} from "@shopify/polaris";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,

} from "lexical";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useCallback, useEffect, useRef, useState } from "react";

const LowPriority = 1;

function Divider() {
  return <div className="divider" />;
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const [showLinkPopover, setShowLinkPopover] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkTitle, setLinkTitle] = useState("");
  const [linkAriaLabel, setLinkAriaLabel] = useState("");

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority,
      ),
    );
  }, [editor, $updateToolbar]);

  return (
    <InlineStack ref={toolbarRef} >
      <Button
        variant="monochromePlain"
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        accessibilityLabel="Undo"
        icon={UndoIcon}
      />
      <Button
        variant="monochromePlain"
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        accessibilityLabel="Redo"
        icon={RedoIcon}
      />
      <Divider />
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
        className="toolbar-item"
        accessibilityLabel="Format Bold"
        ariaChecked={isBold}
        icon={TextBoldIcon}
        variant={isBold ? "monochromePlain" : "tertiary"}
      />
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
        className="toolbar-item"
        accessibilityLabel="Format Italics"
        icon={TextItalicIcon}
        variant={isItalic ? "secondary" : "tertiary"}
      />
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
        className="toolbar-item"
        accessibilityLabel="Format Underline"
        icon={TextUnderlineIcon}
        variant={isUnderline ? "secondary" : "tertiary"}
      />
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        }}
        className="toolbar-item"
        accessibilityLabel="Format Strikethrough"
        icon={TextUnderlineIcon}
        variant={isStrikethrough ? "secondary" : "tertiary"}
      />

     
 <Popover
  active={showLinkPopover}
  preferredAlignment="center"
  autofocusTarget="first-node"
  onClose={() => setShowLinkPopover(false)}
  activator={
    <Button
      // <-------------------- AJOUTE ICI
      onPointerDown={e => e.stopPropagation()}
      onMouseDown={e => e.stopPropagation()}
      // <-------------------- FIN AJOUT
      onClick={() => setShowLinkPopover(true)}
      className="toolbar-item"
      accessibilityLabel="Ajouter un lien"
      icon={LinkIcon}
      variant="tertiary"
    />
  }
>
        <FormLayout>
            <TextField
              label="URL"
              autoComplete="off"
              value={linkUrl}
              onChange={setLinkUrl}
              placeholder="https://..."
            />
            <TextField
              label="Title"
              autoComplete="off"
              value={linkTitle}
              onChange={setLinkTitle}
              placeholder="Titre du lien"
            />
            <TextField
              label="Aria-label"
              autoComplete="off"
              value={linkAriaLabel}
              onChange={setLinkAriaLabel}
              placeholder="Aria label"
            />
            <InlineStack gap="200">
              <Button
                size="slim"
                onClick={() => {
                  setShowLinkPopover(false);
                }}
              >
                Annuler
              </Button>
              <Button
                size="slim"
                variant="primary"
                onClick={() => {
                  editor.dispatchCommand(TOGGLE_LINK_COMMAND, {
                    url: linkUrl,
                    title: linkTitle,
                    'aria-label': linkAriaLabel,
                  });
                  setShowLinkPopover(false);
                  setLinkUrl("");
                  setLinkTitle("");
                  setLinkAriaLabel("");
                }}
              >
                Ajouter le lien
              </Button>
            </InlineStack>
        </FormLayout>
      </Popover>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        }}
        className="toolbar-item spaced"
        aria-label="Left Align"
      >
        <i className="format left-align" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        }}
        className="toolbar-item spaced"
        aria-label="Center Align"
      >
        <i className="format center-align" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        }}
        className="toolbar-item spaced"
        aria-label="Right Align"
      >
        <i className="format right-align" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
        }}
        className="toolbar-item"
        aria-label="Justify Align"
      >
        <i className="format justify-align" />
      </button>{" "}
    </InlineStack>
  );
}
