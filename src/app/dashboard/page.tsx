/**
 * Dashboard Page for Client Web App 1
 * Tangerine Navigator Theme - Protected Route
 */

'use client';

import { useAuth } from '@/lib/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { isAuthenticated, isLoading, account, signOut } = useAuth();
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

  const userName = account?.name || 'Navigator';
  const userEmail = account?.username || 'user@example.com';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="navigator-nav flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/navigator-compass-icon.svg" alt="Compass" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white">Tangerine Navigator</h1>
        </div>
        <div className="flex items-center gap-6">
          <a href="/dashboard" className="navigator-nav-item active">
            🧭 Dashboard
          </a>
          <a href="/profile" className="navigator-nav-item">
            👤 Profile
          </a>
          <button onClick={signOut} className="navigator-nav-item hover:bg-red-500 hover:bg-opacity-30">
            🚪 Sign Out
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">
            Welcome back, <span className="navigator-text-gradient">{userName}</span> 🧭
          </h2>
          <p className="text-gray-600 text-lg">Ready to navigate your business to new horizons?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="navigator-stat-card">
            <div className="text-4xl mb-3">🗺️</div>
            <div className="navigator-stat-number">12</div>
            <div className="navigator-stat-label">Active Routes</div>
          </div>
          <div className="navigator-stat-card">
            <div className="text-4xl mb-3">🎯</div>
            <div className="navigator-stat-number">87%</div>
            <div className="navigator-stat-label">On Target</div>
          </div>
          <div className="navigator-stat-card">
            <div className="text-4xl mb-3">⚓</div>
            <div className="navigator-stat-number">24</div>
            <div className="navigator-stat-label">Milestones</div>
          </div>
          <div className="navigator-stat-card">
            <div className="text-4xl mb-3">🌊</div>
            <div className="navigator-stat-number">156</div>
            <div className="navigator-stat-label">Total Voyages</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Routes */}
          <div className="navigator-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold navigator-text-gradient">🗺️ Current Routes</h3>
              <span className="navigator-badge">12 Active</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-navigator-orange">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Q4 Strategy Review</h4>
                  <span className="navigator-badge-orange">High Priority</span>
                </div>
                <div className="navigator-progress mb-2">
                  <div className="navigator-progress-bar" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600">Due: Dec 31, 2024</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-navigator-teal">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Market Expansion Plan</h4>
                  <span className="navigator-badge-teal">Medium</span>
                </div>
                <div className="navigator-progress mb-2">
                  <div className="navigator-progress-bar" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm text-gray-600">Due: Jan 15, 2025</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-navigator-tangerine">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Team Onboarding</h4>
                  <span className="navigator-badge-outline">Low</span>
                </div>
                <div className="navigator-progress mb-2">
                  <div className="navigator-progress-bar" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600">Due: Dec 20, 2024</p>
              </div>
            </div>
          </div>

          {/* Navigation Insights */}
          <div className="navigator-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold navigator-text-gradient">🧭 Navigation Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="navigator-alert-success">
                <h4 className="font-semibold mb-1">✅ On Course</h4>
                <p className="text-sm">You're ahead of schedule on 8 out of 12 active routes.</p>
              </div>
              <div className="navigator-alert-info">
                <h4 className="font-semibold mb-1">📊 Weekly Summary</h4>
                <p className="text-sm">Completed 5 milestones this week. Great momentum!</p>
              </div>
              <div className="navigator-alert-warning">
                <h4 className="font-semibold mb-1">⚠️ Attention Needed</h4>
                <p className="text-sm">2 routes require immediate attention to stay on schedule.</p>
              </div>
            </div>
            <hr className="navigator-divider" />
            <div>
              <h4 className="font-semibold mb-3 text-lg">📈 Performance Metrics</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Completion Rate</span>
                    <span className="text-sm font-semibold navigator-text-teal">87%</span>
                  </div>
                  <div className="navigator-progress">
                    <div className="navigator-progress-bar" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Team Engagement</span>
                    <span className="text-sm font-semibold navigator-text-orange">92%</span>
                  </div>
                  <div className="navigator-progress">
                    <div className="navigator-progress-bar" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Goal Achievement</span>
                    <span className="text-sm font-semibold navigator-text-teal">78%</span>
                  </div>
                  <div className="navigator-progress">
                    <div className="navigator-progress-bar" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 navigator-text-gradient">⚡ Quick Actions</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <button className="navigator-btn-primary text-center py-6">
              🗺️ New Route
            </button>
            <button className="navigator-btn-teal text-center py-6">
              📊 View Reports
            </button>
            <button className="navigator-btn-secondary text-center py-6">
              👥 Team Overview
            </button>
            <button className="navigator-btn-secondary text-center py-6">
              ⚙️ Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
