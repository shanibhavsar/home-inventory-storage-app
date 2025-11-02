import { useState, useEffect } from 'react';

export default function Settings() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sheetUrl, setSheetUrl] = useState('');
  const [message, setMessage] = useState('');

  // Load stored settings from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || 'damn';
    const storedPassword = localStorage.getItem('password') || 'damndamn';
    const storedSheetUrl = localStorage.getItem('sheetUrl') || '';
    setUsername(storedUsername);
    setPassword(storedPassword);
    setSheetUrl(storedSheetUrl);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('sheetUrl', sheetUrl);
    setMessage('Settings updated successfully!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Google Sheet URL</label>
          <input
            type="url"
            value={sheetUrl}
            onChange={(e) => setSheetUrl(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Settings
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
