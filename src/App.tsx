import MList from '@molecules/MList/MList';
import MListItem from '@molecules/MListItem/MListItem';
import { useState } from 'react';

function App() {
  type TodoListItem = {
    id: number;
    text: string;
    isCompleted: boolean;
    selectedItem: string;
  };

  const availableItems = ['green', 'blue', 'red'];

  const [items, setItems] = useState<TodoListItem[]>([
    { id: 1, text: 'Buy milk', isCompleted: false, selectedItem: '' },
    { id: 2, text: 'Walk the dog', isCompleted: false, selectedItem: 'green' },
    { id: 3, text: 'Learn React', isCompleted: false, selectedItem: 'blue' },
  ]);

  const updateItem = (id: number, patch: Partial<TodoListItem>) => {
    setItems((previousItems) =>
      previousItems.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  };

  const handleCompletedChange = (id: number, isChecked: boolean) => {
    updateItem(id, { isCompleted: isChecked });
  };

  const handleItemChange = (id: number, value: string) => {
    updateItem(id, { selectedItem: value });
  };

  const handleDelete = (id: number) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  };

  const listItems = items.map((item) => (
    <MListItem
      key={item.id}
      text={item.text}
      isCompleted={item.isCompleted}
      selectedItem={item.selectedItem}
      availableItems={availableItems}
      shouldShowCheckbox
      shouldShowActionButton
      onCompletedChange={(e) => handleCompletedChange(item.id, e.target.checked)}
      onItemChange={(e) => handleItemChange(item.id, e.target.value)}
      onDelete={() => handleDelete(item.id)}
    />
  ));

  return <MList items={listItems} />;
}

export default App;
