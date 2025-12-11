/**
 * Home Page for Client Web App 1
 * Tangerine Navigator Theme - Landing Page
 */

'use client';

import { useAuth } from '@/lib/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const { isAuthenticated, isLoading, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="navigator-spinner"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen navigator-gradient">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/navigator-compass-full.svg"
              alt="Tangerine Navigator Compass"
              width={180}
              height={180}
              priority
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Tangerine Navigator
          </h1>
          <p className="text-2xl text-white opacity-90 mb-8">
            Chart Your Course to Success
          </p>
          <p className="text-lg text-white opacity-80 max-w-2xl mx-auto mb-12">
            Navigate the complexities of modern business with confidence. Our platform provides the
            tools and insights you need to reach your destination.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={signIn} className="navigator-btn-primary text-lg px-8 py-4">
              🧭 Begin Navigation
            </button>
            <button className="navigator-btn-secondary bg-white bg-opacity-20 text-white border-white hover:bg-white hover:text-navigator-orange text-lg px-8 py-4">
              📍 Explore Features
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="navigator-feature-card">
            <div className="navigator-feature-icon">🗺️</div>
            <h3 className="text-2xl font-bold mb-3 navigator-text-gradient">Strategic Planning</h3>
            <p className="text-gray-600">
              Map out your business strategy with precision tools designed for modern enterprises.
            </p>
          </div>

          <div className="navigator-feature-card">
            <div className="navigator-feature-icon">🧭</div>
            <h3 className="text-2xl font-bold mb-3 navigator-text-gradient">Guided Navigation</h3>
            <p className="text-gray-600">
              Never lose your way with real-time guidance and intelligent recommendations.
            </p>
          </div>

          <div className="navigator-feature-card">
            <div className="navigator-feature-icon">⚓</div>
            <h3 className="text-2xl font-bold mb-3 navigator-text-gradient">Anchored Security</h3>
            <p className="text-gray-600">
              Enterprise-grade security keeps your data safe while you focus on growth.
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 navigator-text-gradient">
              Why Choose Tangerine Navigator?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold navigator-text-orange mb-3">🎯 Precision Tools</h4>
                <p className="text-gray-700">
                  Access sophisticated analytics and reporting tools that give you the insights needed
                  to make informed decisions.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold navigator-text-teal mb-3">🌊 Smooth Sailing</h4>
                <p className="text-gray-700">
                  Intuitive interface designed for efficiency. Get up to speed quickly and navigate
                  with ease.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold navigator-text-orange mb-3">🔐 Secure Harbor</h4>
                <p className="text-gray-700">
                  Enterprise authentication via Azure Entra ID ensures your data remains protected at
                  all times.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold navigator-text-teal mb-3">📈 Growth Focused</h4>
                <p className="text-gray-700">
                  Built to scale with your business. Start small and expand as your needs evolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-white opacity-75">
          <p className="text-sm">
            Powered by Azure Entra External ID • Secured & Authenticated
          </p>
          <p className="text-xs mt-2">
            Client Web App 1 • Tangerine Navigator Theme • Port 3002
          </p>
        </footer>
      </div>
    </main>
  );
}
