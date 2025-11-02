import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Home Inventory</h1>
      <div className="flex space-x-4">
        <Link href="/items/add">
          <a className="bg-green-500 text-white px-4 py-2 rounded">Add Item</a>
        </Link>
        <Link href="/settings">
          <a className="bg-gray-500 text-white px-4 py-2 rounded">Settings</a>
        </Link>
      </div>
      <p className="mt-4">Search and manage items coming soon.</p>
    </div>
  );
}
