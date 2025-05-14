import React, {
  useState,
  useCallback,
} from "react";


import {
  Select
} from '@shopify/polaris';
import { PlusCircleIcon, SearchIcon } from '@shopify/polaris-icons';

const type = "press_contacts";


const Author = ({error, blogs, blogID, setBlogID }) => {




const options = blogs.map(blog => ({
  label: blog.title,
  value: blog.id,
}));


  const handleSelectChange = useCallback(
    (value) => setBlogID(value),
    [],
  );


   

return (

        <Select
      label="Blog"
      options={options}
      value={blogID}
      onChange={handleSelectChange}
      error={error || false}
    />


 
);

}


export default Author;