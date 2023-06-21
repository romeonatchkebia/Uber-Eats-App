import { useState, useContext, createContext } from "react";

const ItemContext = createContext();
const ItemUpdateContext = createContext();

export const Item = () => {
  return useContext(ItemContext);
};

export const ItemUpdate = () => {
  return useContext(ItemUpdateContext);
};

const ItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const AddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <ItemContext.Provider value={selectedItems}>
      <ItemUpdateContext.Provider value={AddItem}>
        {children}
      </ItemUpdateContext.Provider>
    </ItemContext.Provider>
  );
};

export default ItemsProvider;
