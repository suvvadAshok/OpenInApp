// Add this context file (e.g., AddListContext.js)
import { createContext, useContext, useState } from "react";

const addListData = [
  { option: "Technology", state: false },
  { option: "Fashion", state: false },
  { option: "Food", state: false },
  { option: "Travel", state: false },
  { option: "Sports", state: false },
  { option: "Music", state: false },
  { option: "Art", state: false },
  { option: "Health", state: false },
  { option: "Education", state: false },
  { option: "Finance", state: false },
];

const AddListContext = createContext();

export const AddListProvider = ({ children }) => {
  const [addList, setAddList] = useState(addListData);

  return (
    <AddListContext.Provider value={{ addList, setAddList }}>
      {children}
    </AddListContext.Provider>
  );
};

export const useAddListContext = () => {
  return useContext(AddListContext);
};
