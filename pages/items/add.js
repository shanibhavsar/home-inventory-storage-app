import { useState } from 'react';

export default function AddItem() {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [cabinet, setCabinet] = useState('');
  const [compartment, setCompartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send data to Google Sheets or update local storage
    alert('Item added successfully! (Data submission not implemented)');
    // Reset form
    setItemName('');
    setCategory('');
    setDescription('');
    setQuantity(1);
    setPhoto(null);
    setCabinet('');
    setCompartment('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Add Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description/Notes</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            className="w-full border rounded p-2"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Cabinet</label>
          <input
            type="text"
            value={cabinet}
            onChange={(e) => setCabinet(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Compartment</label>
          <input
            type="text"
            value={compartment}
            onChange={(e) => setCompartment(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
