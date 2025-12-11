/**
 * Profile Page for Client Web App 1
 * Tangerine Navigator Theme - User Profile Management
 */

'use client';

import { useAuth } from '@/lib/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { isAuthenticated, isLoading, account, signOut, editProfile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="navigator-spinner"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const userName = account?.name || 'Navigator User';
  const userEmail = account?.username || 'user@example.com';
  const userInitials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="navigator-nav flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/navigator-compass-icon.svg" alt="Compass" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white">Tangerine Navigator</h1>
        </div>
        <div className="flex items-center gap-6">
          <a href="/dashboard" className="navigator-nav-item">
            🧭 Dashboard
          </a>
          <a href="/profile" className="navigator-nav-item active">
            👤 Profile
          </a>
          <button onClick={signOut} className="navigator-nav-item hover:bg-red-500 hover:bg-opacity-30">
            🚪 Sign Out
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="navigator-card mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full navigator-gradient flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {userInitials}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 navigator-text-gradient">{userName}</h1>
              <p className="text-gray-600 text-lg mb-3">{userEmail}</p>
              <div className="flex gap-3">
                <span className="navigator-badge">🧭 Active Navigator</span>
                <span className="navigator-badge-teal">✅ Verified</span>
              </div>
            </div>
            <button
              onClick={editProfile}
              className="navigator-btn-primary"
            >
              ✏️ Edit Profile
            </button>
          </div>
        </div>

        {/* Account Information */}
        <div className="navigator-card mb-8">
          <h2 className="text-2xl font-bold mb-6 navigator-text-gradient">📋 Account Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Display Name</span>
              <span className="font-semibold">{userName}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Email Address</span>
              <span className="font-semibold">{userEmail}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Account Type</span>
              <span className="navigator-badge-orange">Client Navigator</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Authentication</span>
              <span className="navigator-badge-teal">Azure Entra ID</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600 font-medium">Member Since</span>
              <span className="font-semibold">December 2024</span>
            </div>
          </div>
        </div>

        {/* Navigation Stats */}
        <div className="navigator-card mb-8">
          <h2 className="text-2xl font-bold mb-6 navigator-text-gradient">📊 Your Navigation Stats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-2">🗺️</div>
              <div className="navigator-stat-number text-2xl">156</div>
              <div className="navigator-stat-label">Total Voyages</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">⚓</div>
              <div className="navigator-stat-number text-2xl">24</div>
              <div className="navigator-stat-label">Milestones Reached</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🎯</div>
              <div className="navigator-stat-number text-2xl">87%</div>
              <div className="navigator-stat-label">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="navigator-card mb-8">
          <h2 className="text-2xl font-bold mb-6 navigator-text-gradient">⚙️ Preferences</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-semibold">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates about your routes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navigator-orange peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navigator-orange"></div>
              </label>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-semibold">Weekly Summary</p>
                <p className="text-sm text-gray-600">Get a weekly digest of your progress</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navigator-teal peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navigator-teal"></div>
              </label>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-semibold">Marketing Communications</p>
                <p className="text-sm text-gray-600">Updates about new features</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navigator-orange peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navigator-orange"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="navigator-alert-info">
          <h4 className="font-semibold mb-2">🔐 Security & Privacy</h4>
          <p className="text-sm mb-2">
            Your account is secured by Azure Entra External ID. We use industry-standard encryption
            to protect your data and never share your information with third parties.
          </p>
          <p className="text-sm">
            To update your password or security settings, use the "Edit Profile" button above to
            access Azure's secure profile management.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <button onClick={editProfile} className="navigator-btn-primary flex-1">
            ✏️ Edit Profile in Azure
          </button>
          <button onClick={signOut} className="navigator-btn-secondary flex-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            🚪 Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
