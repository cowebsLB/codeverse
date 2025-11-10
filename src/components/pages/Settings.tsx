import { useState } from 'react'
import { useAuthStore } from '../../store/authStore'

export default function Settings() {
  const { user } = useAuthStore()
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)
  const [theme, setTheme] = useState('dark')

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold font-heading text-white mb-8">Settings</h1>

          {/* Account Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-white mb-4">Account Settings</h2>
            <div className="bg-gray-700 rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-gray-300 font-body mb-2">Name</label>
                <input
                  type="text"
                  value={user?.name || ''}
                  readOnly
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg border border-gray-500 font-body"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-body mb-2">Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg border border-gray-500 font-body"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-white mb-4">Notifications</h2>
            <div className="bg-gray-700 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-gray-300 font-body">Enable Notifications</label>
                  <p className="text-gray-400 font-code text-sm">Receive updates about your progress</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications ? 'bg-indigo-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-gray-300 font-body">Email Updates</label>
                  <p className="text-gray-400 font-code text-sm">Get email notifications</p>
                </div>
                <button
                  onClick={() => setEmailUpdates(!emailUpdates)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailUpdates ? 'bg-indigo-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      emailUpdates ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-white mb-4">Appearance</h2>
            <div className="bg-gray-700 rounded-lg p-6">
              <label className="block text-gray-300 font-body mb-2">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg border border-gray-500 font-body"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium font-heading">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

