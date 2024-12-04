
async function getTypeData(client, typeName) {
    const Query = `
   {
      __type(name: "${typeName}") {
        enumValues {
          name
          description
        }
      }
    }
      `;
  
    try {
      const response = await client.request(Query);
      return response.data.__type.enumValues;
    } catch (error) {
      console.error("Error fetching __type data:", error);
      throw error;
    }
  }


module.exports = { getTypeData };
