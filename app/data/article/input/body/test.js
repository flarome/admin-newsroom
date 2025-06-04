import body_generate, {sections} from "./index.js";


console.log('sections', sections[0].props[0])
const data = [

    {

    type: "pagebody",
    values: {

       
        pagebodysmall: false,
         dropcaps: undefined,

    },
    blocks: [
        {
            type: "text",
            values: {
                location: "re",
                text: "p"
            }
        }
    ]
    }
]


const result = await body_generate(data);
console.log('[TEST]', JSON.stringify(result, null, 2));


