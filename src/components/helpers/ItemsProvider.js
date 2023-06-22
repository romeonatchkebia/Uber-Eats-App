import { useState, useContext, createContext } from "react";

const ItemContext = createContext();
const ItemUpdateContext = createContext();
const ItemDeleteContext = createContext();

export const Item = () => {
  return useContext(ItemContext);
};

export const ItemAdd = () => {
  return useContext(ItemUpdateContext);
};

export const ItemDelete = () => {
  return useContext(ItemDeleteContext);
};

const ItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const itemAdd = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const itemDelete = (id) => {
    let newArr = selectedItems.filter((obj) => obj.id !== id);

    setSelectedItems(newArr);
  };

  return (
    <ItemContext.Provider value={selectedItems}>
      <ItemUpdateContext.Provider value={itemAdd}>
        <ItemDeleteContext.Provider value={itemDelete}>
          {children}
        </ItemDeleteContext.Provider>
      </ItemUpdateContext.Provider>
    </ItemContext.Provider>
  );
};

export default ItemsProvider;
