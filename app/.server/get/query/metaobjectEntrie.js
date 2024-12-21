
import metaobjectDefinition from "./metaobjectDefinition";
const mutation = `

        id
          handle
          fields {
            key
            value
          }
          updatedAt

          definition {
          ${metaobjectDefinition}
          }



`;
export default mutation;