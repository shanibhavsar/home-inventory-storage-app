import { useState } from 'react';

export default function AddItem() {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [cabinet, setCabinet] = useState('');
  const [compartment, setCompartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sheetUrl = localStorage.getItem('sheetUrl');
    const payload = {
      itemName,
      category,
      description,
      quantity,
      photo: '', // photo handling not implemented yet
      cabinet,
      compartment,
      sheetUrl,
    };
    try {
      const res = await fetch('/api/addItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert('Item added successfully!');
        setItemName('');
        setCategory('');
        setDescription('');
        setQuantity(1);
        setPhoto(null);
        setCabinet('');
        setCompartment('');
      } else {
        const data = await res.json();
        alert('Error adding item: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Error adding item: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block font-semibold mb-1">Item Name</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required className="border p-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold mb-1">Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold mb-1">Description/Notes</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold mb-1">Quantity</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="0" className="border p-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold mb-1">Cabinet</label>
        <input type="text" value={cabinet} onChange={(e) => setCabinet(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block font-semibold mb-1">Compartment</label>
        <input type="text" value={compartment} onChange={(e) => setCompartment(e.target.value)} className="border p-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
    </form>
  );
}
