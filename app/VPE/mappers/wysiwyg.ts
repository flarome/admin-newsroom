import { type Content } from "types";
import { nanoid } from "nanoid"; // ou un autre générateur d'id


export function userInputToWysiwyg(userInput: Content) {

    console.log('[userInputToWysiwyg] userInput', userInput);


    const input = userInput && Array.isArray(userInput) ? userInput : [];
    



    const newData = input.map((section) => {
    const sectionId = nanoid();
    const blocks = section.blocks?.length
      ? section.blocks.map((block) => ({
          type: block.type || "block",
          id: nanoid(),
          children: [{ text: "" }],
          props: {
            ...(block.values || {}),
          },
        }))
      : [
          {
            type: "placeholder_block",
            id: nanoid(),
            children: [{ text: "" }],
            props: {},
          },
        ];

    return {
      type: "section",
      id: sectionId,
      children: blocks,
      props: {
        title: section.title || "",
        type: section.type,
        visible: section.visible ?? true,
        values: section.values || {},
      },
    };
  });



 console.log('[userInputToWysiwyg] newData', newData);

 
    return newData
}

