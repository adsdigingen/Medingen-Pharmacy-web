import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';

// ============================================================================
// UI/UX Pro Max Pixel-Perfect Inline SVGs (No Raw Emojis)
// ============================================================================
const PlugIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const KeyIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>
);

const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ShieldAlertIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const RefreshCwIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
  </svg>
);

const CodeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const TerminalIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ActivityIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const LockIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ServerIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

interface SettingsTabProps {
  API_BASE?: string;
  settingsForm: any;
  setSettingsForm: (val: any) => void;
  settingsLoading: boolean;
  handleSaveSettings: (e: React.FormEvent) => Promise<void>;
  licenseInfo: any;
  activationKey: string;
  setActivationKey: (val: string) => void;
  handleActivateLicense: (e: React.FormEvent) => Promise<void>;
  
  density: 'comfortable' | 'compact';
  setDensity: (val: 'comfortable' | 'compact') => void;
  currentUser?: any;
  handleResetDatabase?: (target: string) => Promise<void>;
}

type SettingSection = 'preferences' | 'general' | 'billing' | 'printer' | 'gst' | 'pricing' | 'sync' | 'backup' | 'license' | 'integrations' | 'maintenance' | 'about';

interface MedingenIntegrationInfo {
  configured: boolean;
  status: 'ACTIVE' | 'REVOKED' | 'NOT_CONFIGURED';
  keyPrefix?: string | null;
  createdAt?: string | null;
  lastUsedAt?: string | null;
  endpoint: string;
  authMethod: string;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  API_BASE,
  settingsForm,
  setSettingsForm,
  settingsLoading,
  handleSaveSettings,
  licenseInfo,
  activationKey,
  setActivationKey,
  handleActivateLicense,
  density,
  setDensity,
  currentUser,
  handleResetDatabase,
}) => {
  const [activeSection, setActiveSection] = useState<SettingSection>('preferences');

  // Medingen API Key Integration State
  const [integration, setIntegration] = useState<MedingenIntegrationInfo | null>(null);
  const [loadingIntegration, setLoadingIntegration] = useState(false);
  const [integrationActionLoading, setIntegrationActionLoading] = useState(false);
  const [integrationError, setIntegrationError] = useState<string | null>(null);
  const [integrationSuccessMsg, setIntegrationSuccessMsg] = useState<string | null>(null);

  // Modals & Key Visibility
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showRegenerateModal, setShowRegenerateModal] = useState(false);
  const [showRevokeModal, setShowRevokeModal] = useState(false);
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null);
  const [copiedKeyToast, setCopiedKeyToast] = useState(false);
  const [copiedDocId, setCopiedDocId] = useState<string | null>(null);

  // Key Visibility & Copy States
  const [showCardKey, setShowCardKey] = useState(false);
  const [showModalKey, setShowModalKey] = useState(true);
  const [cachedSecret, setCachedSecret] = useState<string | null>(null);
  const [cardKeyCopied, setCardKeyCopied] = useState(false);

  // UI/UX Pro Max Interactive States
  const [activeCodeTab, setActiveCodeTab] = useState<'curl' | 'node' | 'python' | 'json'>('curl');
  const [activeResponseTab, setActiveResponseTab] = useState<'success' | 'notFound'>('success');
  const [acknowledgedSaved, setAcknowledgedSaved] = useState(false);
  const [pingTesting, setPingTesting] = useState(false);
  const [pingResult, setPingResult] = useState<{ success: boolean; latencyMs: number; timestamp: string } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cached = sessionStorage.getItem('medingen_cached_api_key');
      if (cached) {
        setCachedSecret(cached);
      }
    }
  }, []);

  const handlePingTest = async () => {
    setPingTesting(true);
    setPingResult(null);
    const start = performance.now();
    try {
      const res = await fetch(`${effectiveApiBase}/api/settings/integrations/medingen`);
      const elapsed = Math.round(performance.now() - start);
      if (res.ok) {
        setPingResult({
          success: true,
          latencyMs: Math.max(elapsed, 4),
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        setPingResult({
          success: false,
          latencyMs: elapsed,
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    } catch {
      setPingResult({
        success: false,
        latencyMs: 0,
        timestamp: new Date().toLocaleTimeString(),
      });
    } finally {
      setPingTesting(false);
    }
  };

  const effectiveApiBase =
    API_BASE ||
    (typeof window !== 'undefined'
      ? (window as any).NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      : 'http://localhost:3001');

  // Deep linking to ?section=integrations
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const s = params.get('section');
      if (s === 'integrations' || s === 'api-integrations') {
        setActiveSection('integrations');
      }
    }
  }, []);

  // Fetch integration status when opening 'integrations' section
  const fetchIntegrationStatus = async () => {
    try {
      setLoadingIntegration(true);
      setIntegrationError(null);
      const res = await fetch(`${effectiveApiBase}/api/settings/integrations/medingen`);
      if (res.ok) {
        const json = await res.json();
        const payload = json.data || json;
        setIntegration(payload);
      } else {
        setIntegrationError(`Failed to load integration status (HTTP ${res.status})`);
      }
    } catch (err: any) {
      setIntegrationError(err.message || 'Error connecting to backend');
    } finally {
      setLoadingIntegration(false);
    }
  };

  useEffect(() => {
    if (activeSection === 'integrations') {
      fetchIntegrationStatus();
    }
  }, [activeSection]);

  const copyToClipboard = (text: string, isDocId?: string) => {
    if (!text) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    if (isDocId) {
      setCopiedDocId(isDocId);
      setTimeout(() => setCopiedDocId(null), 2000);
    } else {
      setCopiedKeyToast(true);
      setTimeout(() => setCopiedKeyToast(false), 2500);
    }
  };

  const handleCreateKey = async () => {
    try {
      setIntegrationActionLoading(true);
      setIntegrationError(null);
      const res = await fetch(`${effectiveApiBase}/api/settings/integrations/medingen/api-key`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      const payload = data.data || data;
      if (res.ok && payload.apiKey) {
        setShowCreateModal(false);
        setNewlyCreatedKey(payload.apiKey);
        setShowModalKey(true);
        setCachedSecret(payload.apiKey);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('medingen_cached_api_key', payload.apiKey);
        }
        setIntegrationSuccessMsg('API key created successfully');
        await fetchIntegrationStatus();
      } else {
        setIntegrationError(payload.message || 'Failed to create API key');
      }
    } catch (err: any) {
      setIntegrationError(err.message || 'Network error while creating key');
    } finally {
      setIntegrationActionLoading(false);
    }
  };

  const handleRegenerateKey = async () => {
    try {
      setIntegrationActionLoading(true);
      setIntegrationError(null);
      const res = await fetch(`${effectiveApiBase}/api/settings/integrations/medingen/api-key/regenerate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      const payload = data.data || data;
      if (res.ok && payload.apiKey) {
        setShowRegenerateModal(false);
        setNewlyCreatedKey(payload.apiKey);
        setShowModalKey(true);
        setCachedSecret(payload.apiKey);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('medingen_cached_api_key', payload.apiKey);
        }
        setIntegrationSuccessMsg('API key regenerated successfully');
        await fetchIntegrationStatus();
      } else {
        setIntegrationError(payload.message || 'Failed to regenerate API key');
      }
    } catch (err: any) {
      setIntegrationError(err.message || 'Network error while regenerating key');
    } finally {
      setIntegrationActionLoading(false);
    }
  };

  const handleRevokeKey = async () => {
    try {
      setIntegrationActionLoading(true);
      setIntegrationError(null);
      const res = await fetch(`${effectiveApiBase}/api/settings/integrations/medingen/api-key/revoke`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      const payload = data.data || data;
      if (res.ok) {
        setShowRevokeModal(false);
        setCachedSecret(null);
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem('medingen_cached_api_key');
        }
        setIntegrationSuccessMsg('API key revoked successfully');
        await fetchIntegrationStatus();
      } else {
        setIntegrationError(payload.message || 'Failed to revoke API key');
      }
    } catch (err: any) {
      setIntegrationError(err.message || 'Network error while revoking key');
    } finally {
      setIntegrationActionLoading(false);
    }
  };

  const formatDateDisplay = (isoString?: string | null) => {
    if (!isoString) return 'Never';
    try {
      const d = new Date(isoString);
      return d.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  const menuItems = [
    { id: 'preferences', label: 'User Preferences', icon: '⚙️' },
    { id: 'general', label: 'General Store Config', icon: '🏪' },
    { id: 'billing', label: 'Billing & Prefixes', icon: '🧾' },
    { id: 'printer', label: 'Thermal Printer Setup', icon: '🖨️' },
    { id: 'gst', label: 'GST Tax parameters', icon: '📊' },
    { id: 'pricing', label: 'Pricing Defaults', icon: '💰' },
    { id: 'sync', label: 'Cloud Sync Engine', icon: '☁️' },
    { id: 'backup', label: 'Auto Backups', icon: '💾' },
    { id: 'license', label: 'License Activation', icon: '🔑' },
    ...(currentUser?.role === 'ADMIN' ? [
      { id: 'integrations', label: 'API Integrations', icon: 'plug' },
      { id: 'maintenance', label: 'Maintenance & Reset', icon: '🛠️' },
    ] : []),
    { id: 'about', label: 'About Desk ERP', icon: 'ℹ️' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn font-sans text-xs text-muted">
      
      {/* Settings Side Menu */}
      <div className="md:col-span-3 bg-white/35 border border-gray-200 p-3 rounded-2xl h-fit space-y-1 font-semibold">
        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block px-3.5 py-2 border-b border-gray-200 mb-2">Settings Menu</span>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as SettingSection)}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
              activeSection === item.id
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'text-muted hover:bg-gray-50/50 hover:text-gray-700'
            }`}
          >
            {item.id === 'integrations' ? (
              <PlugIcon className={`w-4 h-4 shrink-0 transition-colors ${activeSection === 'integrations' ? 'text-primary' : 'text-gray-500'}`} />
            ) : (
              <span>{item.icon}</span>
            )}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Settings Panel Body */}
      <div className="md:col-span-9 bg-white/20 border border-gray-200 p-6 rounded-2xl min-h-[400px] flex flex-col justify-between shadow-xl">
        <form onSubmit={handleSaveSettings} className="space-y-6 flex-1 flex flex-col justify-between">
          <div className="space-y-5">
            
            {/* User Preferences */}
            {activeSection === 'preferences' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">⚙️ User Display Preferences</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">UI Display Density</label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setDensity('comfortable');
                          localStorage.setItem('medingen-density', 'comfortable');
                        }}
                        className={`py-2 px-3 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                          density === 'comfortable'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-muted border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        Comfortable (Standard)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setDensity('compact');
                          localStorage.setItem('medingen-density', 'compact');
                        }}
                        className={`py-2 px-3 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                          density === 'compact'
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-muted border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        Compact (Dense Lists)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* General Store Config */}
            {activeSection === 'general' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">🏪 General Store Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">Pharmacy / Store Name *</label>
                    <input
                      type="text"
                      required
                      value={settingsForm.storeName || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, storeName: e.target.value })}
                      placeholder="e.g. Medingen Pharmacy"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">Store Phone Contact *</label>
                    <input
                      type="text"
                      required
                      value={settingsForm.phone || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-mono"
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-muted font-semibold">Registered Store Email</label>
                    <input
                      type="email"
                      value={settingsForm.email || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                      placeholder="e.g. info@medingen.com"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-muted font-semibold">Physical Location / Address *</label>
                    <textarea
                      required
                      rows={2}
                      value={settingsForm.address || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                      placeholder="Enter full store address"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Billing & Prefixes */}
            {activeSection === 'billing' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">🧾 Billing Code Prefixes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">Invoice Number Prefix *</label>
                    <input
                      type="text"
                      required
                      value={settingsForm.invoicePrefix || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, invoicePrefix: e.target.value })}
                      placeholder="e.g. INV-"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">Purchase Order Prefix *</label>
                    <input
                      type="text"
                      required
                      value={settingsForm.poPrefix || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, poPrefix: e.target.value })}
                      placeholder="e.g. PO-"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Thermal Printer Setup */}
            {activeSection === 'printer' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">🖨️ Thermal Printer Configuration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">Active Receipt Printer Type</label>
                    <select
                      value={settingsForm.printerType || '80mm'}
                      onChange={(e) => setSettingsForm({ ...settingsForm, printerType: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-semibold"
                    >
                      <option value="58mm">58mm (2-inch Receipt)</option>
                      <option value="80mm">80mm (3-inch Standard Receipt)</option>
                      <option value="150x95mm">150x95mm (A4 Half-Slip Grid)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* GST Tax parameters */}
            {activeSection === 'gst' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">📊 GSTIN Tax Identification</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-muted font-semibold">Store GST Registration Number (GSTIN)</label>
                    <input
                      type="text"
                      value={settingsForm.gstin || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, gstin: e.target.value })}
                      placeholder="e.g. 33AAAAA1111A1Z1"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Defaults */}
            {activeSection === 'pricing' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">💰 Retail Pricing Defaults</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">Default Margin Markup (%)</label>
                    <input
                      type="number"
                      value={settingsForm.defaultMargin || 15}
                      onChange={(e) => setSettingsForm({ ...settingsForm, defaultMargin: parseFloat(e.target.value) })}
                      placeholder="e.g. 15"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Cloud Sync Engine */}
            {activeSection === 'sync' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">☁️ Cloud Synchronization Engine</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-muted font-semibold">Remote Cloud Gateway Endpoint</label>
                    <input
                      type="text"
                      value={settingsForm.cloudUrl || ''}
                      onChange={(e) => setSettingsForm({ ...settingsForm, cloudUrl: e.target.value })}
                      placeholder="e.g. https://cloud.medingen.com/api"
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Auto Backups */}
            {activeSection === 'backup' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">💾 Database Backups Schedule</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-muted font-semibold">Automatic Backup Cycle</label>
                    <select
                      value={settingsForm.backupInterval || 'DAILY'}
                      onChange={(e) => setSettingsForm({ ...settingsForm, backupInterval: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-850 focus:outline-none font-semibold"
                    >
                      <option value="HOURLY">Hourly Snapshots</option>
                      <option value="DAILY">Daily Snapshots</option>
                      <option value="WEEKLY">Weekly Archive</option>
                      <option value="NEVER">Disable Auto Backups</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* License Activation */}
            {activeSection === 'license' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">🔑 Desk ERP License Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/40 p-4 border border-gray-200 rounded-xl leading-relaxed">
                  <div className="space-y-1 text-gray-500 font-semibold">
                    <div>Product Name: <span className="text-gray-700">Medingen Desk ERP Pro</span></div>
                    <div>License Status: <span className={licenseInfo?.active ? "text-teal-600 font-bold" : "text-rose-600 font-bold"}>{licenseInfo?.active ? "ACTIVATED" : "NOT ACTIVATED"}</span></div>
                    <div>Expires On: <span className="text-gray-700">{licenseInfo?.expiryDate ? new Date(licenseInfo.expiryDate).toLocaleDateString() : 'N/A'}</span></div>
                    <div>Client UUID: <span className="text-gray-500 font-mono text-[10px]">{licenseInfo?.clientUuid || 'N/A'}</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* About Desk ERP */}
            {activeSection === 'about' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2">ℹ️ About Medingen Desk ERP</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/40 p-4 border border-gray-200 rounded-xl space-y-2 leading-relaxed">
                    <span className="font-bold text-gray-700 block text-xs">System Details</span>
                    <div className="space-y-1 text-gray-500 font-semibold">
                      <div>Software Version: <span className="text-gray-750">v1.2.4-stable</span></div>
                      <div>Engine Runtime: <span className="text-gray-750">Next.js Web Client</span></div>
                      <div>Tailwind Style: <span className="text-gray-700">v4.0.0</span></div>
                    </div>
                  </div>

                  <div className="bg-white/40 p-4 border border-gray-200 rounded-xl space-y-2 leading-relaxed">
                    <span className="font-bold text-gray-700 block text-xs">Customer Support Contact</span>
                    <div className="space-y-1 text-gray-500 font-semibold">
                      <div>Company: <span className="text-gray-600">Medingen Solutions Group</span></div>
                      <div>Support Hotline: <span className="text-primary">+91 99887 76655</span></div>
                      <div>Support Email: <span className="text-primary">helpdesk@medingen.com</span></div>
                      <div>Address: <span className="text-gray-600 text-[10px]">Indiranagar Block 4, Bangalore 560038</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Database Maintenance & Reset */}
            {activeSection === 'maintenance' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-2 text-rose-600">🛠️ Database Maintenance & Reset</h3>
                <p className="text-gray-500 font-semibold text-[11px] leading-relaxed">
                  Select a section below to reset local database tables. Each reset is isolated to that specific module.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Wipe Sales */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                    <div>
                      <span className="font-bold text-gray-800 block text-xs">🧾 Clear Invoices & Sales</span>
                      <p className="text-gray-450 text-[10px] mt-1">Deletes all customer bills, payment details, and records. Users, inventory, and suppliers remain untouched.</p>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm("Are you sure you want to clear all invoice bills and payments? This action is irreversible.")) {
                          if (handleResetDatabase) await handleResetDatabase('sales');
                        }
                      }}
                      className="w-fit px-3.5 py-1.5 bg-rose-50 text-rose-700 border border-rose-150 hover:bg-rose-600 hover:text-white rounded font-bold transition-all text-[10px] cursor-pointer"
                    >
                      Clear Sales
                    </button>
                  </div>

                  {/* Wipe Purchases */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                    <div>
                      <span className="font-bold text-gray-800 block text-xs">📦 Clear Purchase Orders (PO)</span>
                      <p className="text-gray-455 text-[10px] mt-1">Wipes all PO records and purchase returns. Products and sales remain untouched.</p>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm("Are you sure you want to clear all Purchase Orders? This action is irreversible.")) {
                          if (handleResetDatabase) await handleResetDatabase('purchases');
                        }
                      }}
                      className="w-fit px-3.5 py-1.5 bg-rose-50 text-rose-700 border border-rose-150 hover:bg-rose-600 hover:text-white rounded font-bold transition-all text-[10px] cursor-pointer"
                    >
                      Clear Purchases
                    </button>
                  </div>

                  {/* Wipe Products */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                    <div>
                      <span className="font-bold text-gray-800 block text-xs">💊 Clear Products & Inventory</span>
                      <p className="text-gray-450 text-[10px] mt-1">Clears all medicine items, active batches, inventory quantities, stock adjustments, and categories.</p>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm("Are you sure you want to delete all products and inventory data? This action is irreversible.")) {
                          if (handleResetDatabase) await handleResetDatabase('products');
                        }
                      }}
                      className="w-fit px-3.5 py-1.5 bg-rose-50 text-rose-700 border border-rose-150 hover:bg-rose-600 hover:text-white rounded font-bold transition-all text-[10px] cursor-pointer"
                    >
                      Clear Catalog
                    </button>
                  </div>

                  {/* Wipe Contacts */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                    <div>
                      <span className="font-bold text-gray-800 block text-xs">👥 Clear Customers & Doctors</span>
                      <p className="text-gray-450 text-[10px] mt-1">Deletes all registered profiles from customer and doctor registries. Bills and stocks remain.</p>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm("Are you sure you want to delete all registered customers and doctors? This action is irreversible.")) {
                          if (handleResetDatabase) await handleResetDatabase('contacts');
                        }
                      }}
                      className="w-fit px-3.5 py-1.5 bg-rose-50 text-rose-700 border border-rose-150 hover:bg-rose-600 hover:text-white rounded font-bold transition-all text-[10px] cursor-pointer"
                    >
                      Clear Contacts
                    </button>
                  </div>

                  {/* Wipe Drug Schedule Register */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                    <div>
                      <span className="font-bold text-gray-800 block text-xs">📒 Clear Drug Register</span>
                      <p className="text-gray-450 text-[10px] mt-1">Deletes all patient drug logs and prescriptions in the /drugRegister module.</p>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm("Are you sure you want to clear all drug registers? This action is irreversible.")) {
                          if (handleResetDatabase) await handleResetDatabase('drugRegister');
                        }
                      }}
                      className="w-fit px-3.5 py-1.5 bg-rose-50 text-rose-700 border border-rose-150 hover:bg-rose-600 hover:text-white rounded font-bold transition-all text-[10px] cursor-pointer"
                    >
                      Clear Drug Register
                    </button>
                  </div>

                  {/* Wipe Hold Bills */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                    <div>
                      <span className="font-bold text-gray-800 block text-xs">⏳ Clear Hold Bills</span>
                      <p className="text-gray-450 text-[10px] mt-1">Wipes all sales records currently kept on hold in the billing panel.</p>
                    </div>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm("Are you sure you want to clear all hold bills? This action is irreversible.")) {
                          if (handleResetDatabase) await handleResetDatabase('holdBills');
                        }
                      }}
                      className="w-fit px-3.5 py-1.5 bg-rose-50 text-rose-700 border border-rose-150 hover:bg-rose-600 hover:text-white rounded font-bold transition-all text-[10px] cursor-pointer"
                    >
                      Clear Hold Bills
                    </button>
                  </div>
                </div>

                {/* Master Reset Section */}
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 space-y-3 mt-6 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">⚠️</span>
                    <div>
                      <h4 className="font-bold text-rose-700 text-xs uppercase tracking-wide">Danger Zone: Complete System Reset</h4>
                      <p className="text-rose-600 text-[10.5px] mt-0.5 font-semibold">
                        Clears absolutely everything (invoices, POs, inventory, registers, accounts) and returns to factory default state.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      if (confirm("CRITICAL WARNING:\n\nAre you absolutely sure you want to perform a Complete System Reset?\n\nThis will permanently delete ALL pharmacy records, bills, stock, settings, and users.\n\nType 'OK' if you want to proceed.")) {
                        if (handleResetDatabase) await handleResetDatabase('all');
                      }
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold transition-all shadow cursor-pointer text-xs"
                  >
                    Trigger Master Reset Now
                  </button>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* API Integrations (Medingen Billing API) - UI/UX Pro Max */}
            {/* ======================================================== */}
            {activeSection === 'integrations' && (
              <div className="space-y-6 animate-fadeIn font-sans text-xs">
                
                {/* 1. Hero Card: Medingen POS Gateway */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs relative overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          MEDINGEN POS GATEWAY
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] font-mono text-slate-400">v1.2 Headless API</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        Headless Billing API & Key Management
                      </h3>
                      <p className="text-slate-500 text-xs max-w-2xl leading-relaxed">
                        Secure server-to-server billing integration for the Medingen Platform.
                      </p>
                    </div>

                    {/* Right side: Status Badge + Ping Gateway Button */}
                    <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2.5 shrink-0">
                      {loadingIntegration ? (
                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-mono text-xs">
                          <RefreshCwIcon className="w-3.5 h-3.5 animate-spin text-slate-400" />
                          <span>Checking status...</span>
                        </div>
                      ) : integration?.status === 'ACTIVE' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-mono font-medium text-xs shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          ● ACTIVE
                        </span>
                      ) : integration?.status === 'REVOKED' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full font-mono font-medium text-xs">
                          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                          ● REVOKED
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full font-mono font-medium text-xs">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          ● NOT CONFIGURED
                        </span>
                      )}

                      {/* Ping Gateway Button */}
                      <button
                        type="button"
                        onClick={handlePingTest}
                        disabled={pingTesting}
                        className="px-3.5 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg text-xs font-medium flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                        title="Ping backend to test connectivity"
                      >
                        <ActivityIcon className={`w-3.5 h-3.5 ${pingTesting ? 'animate-spin text-primary' : 'text-slate-500'}`} />
                        <span>
                          {pingTesting
                            ? 'Pinging Gateway...'
                            : pingResult
                            ? `Gateway reachable (${pingResult.latencyMs} ms)`
                            : 'Ping Gateway'}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Feedback Banners */}
                  {integrationError && (
                    <div className="mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center justify-between animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <ShieldAlertIcon className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{integrationError}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIntegrationError(null)}
                        className="text-rose-500 hover:text-rose-800 font-bold p-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {integrationSuccessMsg && (
                    <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center justify-between animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{integrationSuccessMsg}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIntegrationSuccessMsg(null)}
                        className="text-emerald-600 hover:text-emerald-900 font-bold p-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {/* Method / Authentication / Cryptography Specs Cards */}
                  <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center gap-3 bg-slate-50/70 p-3 rounded-xl border border-slate-200/80">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-primary shadow-xs shrink-0">
                        <ServerIcon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">METHOD & ROUTE</span>
                        <span className="text-slate-800 font-mono text-xs font-semibold truncate block">POST /api/integration/medingen/bills</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50/70 p-3 rounded-xl border border-slate-200/80">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-primary shadow-xs shrink-0">
                        <LockIcon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">AUTHENTICATION</span>
                        <span className="text-slate-800 font-mono text-xs font-semibold truncate block">Bearer Token</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50/70 p-3 rounded-xl border border-slate-200/80">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-primary shadow-xs shrink-0">
                        <ShieldCheckIcon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">CRYPTOGRAPHY</span>
                        <span className="text-slate-800 font-mono text-xs font-semibold truncate block">SHA-256 One-Way Hash</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Cryptographic Credentials & Secret Vault */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-6">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0">
                        <KeyIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm tracking-tight">API Credentials & Secret Vault</h4>
                        <p className="text-slate-500 text-xs mt-0.5">
                          Server token required by the Medingen Platform to authorize headless invoice generation.
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-mono text-[11px] font-medium self-start sm:self-auto">
                      Headless Billing + Inventory
                    </span>
                  </div>

                  {integration?.status === 'ACTIVE' ? (
                    <div className="space-y-5">
                      {/* Key Display Container */}
                      <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 shadow-inner flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                              API KEY
                            </span>
                            {integration.keyPrefix && (
                              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                                Prefix: <strong className="text-slate-200">{integration.keyPrefix}</strong>
                              </span>
                            )}
                          </div>
                          <div className="font-mono text-sm tracking-wider text-slate-100 truncate select-all">
                            {cachedSecret || (integration.keyPrefix ? `${integration.keyPrefix}••••••••••••••••••••••••••••••••` : 'sk_live_••••••••••••••••••••••••••••••••')}
                          </div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-0.5 font-sans">
                            <span>🔒</span>
                            <span>{cachedSecret ? 'Key revealed during current session' : 'Secret hidden after creation'}</span>
                          </div>
                        </div>

                        {/* Copy Key - Primary Action in Medingen Purple */}
                        <div className="shrink-0 flex items-center">
                          <button
                            type="button"
                            onClick={() => {
                              const keyToCopy = cachedSecret || integration.keyPrefix || '';
                              if (keyToCopy) {
                                copyToClipboard(keyToCopy);
                                setCardKeyCopied(true);
                                setTimeout(() => setCardKeyCopied(false), 2500);
                              }
                            }}
                            className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold cursor-pointer flex items-center gap-2 shadow-xs transition-all active:scale-95"
                            title="Copy API Key to Clipboard"
                          >
                            {cardKeyCopied ? (
                              <>
                                <CheckIcon className="w-4 h-4" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <CopyIcon className="w-4 h-4" />
                                <span>Copy Key</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Security Information Message */}
                      <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
                        <span className="text-amber-600 text-sm mt-0.5 shrink-0">🔒</span>
                        <div>
                          <strong className="font-semibold">Keep this API key private.</strong>
                          <span className="text-amber-800/90 block mt-0.5 text-[11.5px]">
                            This key allows the Medingen Platform to create invoices through the Billing API. Never expose it in frontend code or commit it to source control.
                          </span>
                        </div>
                      </div>

                      {/* Metadata Section - 4 Columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
                        <div>
                          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">CREATED</span>
                          <span className="font-semibold text-slate-800 text-xs mt-0.5 block">{formatDateDisplay(integration.createdAt)}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">LAST USED</span>
                          <span className={`font-semibold text-xs mt-0.5 block ${integration.lastUsedAt ? 'text-emerald-700' : 'text-slate-500'}`}>
                            {integration.lastUsedAt ? formatDateDisplay(integration.lastUsedAt) : 'Never used yet'}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">KEY STORAGE</span>
                          <span className="font-semibold text-slate-800 text-xs mt-0.5 block">SHA-256 Hash</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">PERMISSION SCOPE</span>
                          <span className="font-semibold text-slate-800 text-xs mt-0.5 block">Headless Billing + Inventory</span>
                        </div>
                      </div>

                      {/* Action Buttons: Differentiated Secondary Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={() => setShowRegenerateModal(true)}
                          disabled={integrationActionLoading}
                          className="px-4 py-2 bg-white hover:bg-amber-50 text-amber-800 border border-amber-300 rounded-xl font-semibold text-xs transition-all shadow-xs cursor-pointer flex items-center gap-2"
                        >
                          <RefreshCwIcon className="w-3.5 h-3.5 text-amber-600" />
                          <span>↻ Regenerate Key</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setShowRevokeModal(true)}
                          disabled={integrationActionLoading}
                          className="px-4 py-2 bg-white hover:bg-rose-50 text-rose-700 border border-rose-300 rounded-xl font-semibold text-xs transition-all shadow-xs cursor-pointer flex items-center gap-2"
                        >
                          <ShieldAlertIcon className="w-3.5 h-3.5 text-rose-600" />
                          <span>Revoke Key</span>
                        </button>
                      </div>
                    </div>
                  ) : integration?.status === 'REVOKED' ? (
                    <div className="space-y-4">
                      <div className="p-5 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 space-y-2">
                        <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                          <ShieldAlertIcon className="w-5 h-5 text-rose-600 shrink-0" />
                          <span>Active API Key Has Been Revoked</span>
                        </div>
                        <p className="text-rose-700 text-xs leading-relaxed">
                          All incoming requests from the Medingen Platform will receive HTTP 401 Unauthorized. Generate a new API key and provide it to your engineering team to resume automated billing.
                        </p>
                        {integration.createdAt && (
                          <div className="font-mono text-[10.5px] text-rose-600 pt-1">
                            Previous Prefix: <strong>{integration.keyPrefix || 'Unknown'}</strong> (Created {formatDateDisplay(integration.createdAt)})
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowCreateModal(true)}
                        disabled={integrationActionLoading}
                        className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-xs transition-all text-xs cursor-pointer flex items-center gap-2"
                      >
                        <KeyIcon className="w-4 h-4" />
                        <span>Generate New API Key</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl text-amber-900 space-y-2">
                        <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                          <KeyIcon className="w-5 h-5 text-amber-600 shrink-0" />
                          <span>No API Key Configured</span>
                        </div>
                        <p className="text-amber-700 text-xs leading-relaxed">
                          Generate a cryptographically secured API key to enable server-to-server integration with the Medingen Platform.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowCreateModal(true)}
                        disabled={integrationActionLoading}
                        className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-xs transition-all text-xs cursor-pointer flex items-center gap-2"
                      >
                        <KeyIcon className="w-4 h-4" />
                        <span>Create API Key Now</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* 3. Integration Documentation */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0">
                        <TerminalIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm tracking-tight">Integration Documentation</h4>
                        <p className="text-slate-500 text-xs mt-0.5">
                          Technical specifications for server-to-server billing and real-time inventory synchronization.
                        </p>
                      </div>
                    </div>

                    {/* Language Switcher Tabs */}
                    <div className="flex items-center bg-slate-100 p-1 rounded-xl font-mono text-[11px] self-start sm:self-auto border border-slate-200/60">
                      {(['curl', 'node', 'python', 'json'] as const).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveCodeTab(tab)}
                          className={`px-3 py-1 rounded-lg font-semibold cursor-pointer transition-all ${
                            activeCodeTab === tab
                              ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          {tab === 'curl' ? 'cURL' : tab === 'node' ? 'Node.js' : tab === 'python' ? 'Python' : 'JSON Payload'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Endpoint & Header Overview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">ENDPOINT ROUTE</span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-mono font-bold text-[10px]">POST</span>
                        <code className="text-slate-800 font-mono text-xs font-semibold truncate">/api/integration/medingen/bills</code>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">AUTHORIZATION HEADER</span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded font-mono font-bold text-[10px]">HEADER</span>
                        <code className="text-slate-800 font-mono text-xs font-semibold truncate">Authorization: Bearer &lt;API_KEY&gt;</code>
                      </div>
                    </div>
                  </div>

                  {/* Code Request Box */}
                  <div className="relative bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs border border-slate-800 shadow-inner overflow-x-auto">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                      <span className="font-bold flex items-center gap-2 text-slate-300">
                        <CodeIcon className="w-3.5 h-3.5 text-primary" />
                        {activeCodeTab === 'curl'
                          ? 'Example Request (cURL)'
                          : activeCodeTab === 'node'
                          ? 'Example Request (Node.js)'
                          : activeCodeTab === 'python'
                          ? 'Example Request (Python 3)'
                          : 'Example Request Payload (JSON)'}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const code =
                            activeCodeTab === 'curl'
                              ? `curl -X POST "${effectiveApiBase}/api/integration/medingen/bills" \\\n  -H "Authorization: Bearer ${cachedSecret || integration?.keyPrefix || 'YOUR_API_KEY'}" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "orderId": "MED-ORD-10025",\n    "customer": {\n      "name": "Raj Kumar",\n      "phone": "9876543210",\n      "email": "raj@example.com",\n      "address": "Chennai, Tamil Nadu"\n    },\n    "items": [\n      {\n        "productId": "d9029161-6e2e-46c5-a7ea-a5778dd21080",\n        "quantity": 2\n      }\n    ],\n    "payment": {\n      "method": "COD",\n      "amount": 40\n    }\n  }'`
                              : activeCodeTab === 'node'
                              ? `const axios = require('axios');\n\nasync function createMedingenInvoice() {\n  const res = await axios.post('${effectiveApiBase}/api/integration/medingen/bills', {\n    orderId: 'MED-ORD-10025',\n    customer: {\n      name: 'Raj Kumar',\n      phone: '9876543210',\n      email: 'raj@example.com',\n      address: 'Chennai, Tamil Nadu'\n    },\n    items: [\n      { productId: 'd9029161-6e2e-46c5-a7ea-a5778dd21080', quantity: 2 }\n    ],\n    payment: { method: 'COD', amount: 40 }\n  }, {\n    headers: {\n      'Authorization': 'Bearer ${cachedSecret || integration?.keyPrefix || 'YOUR_API_KEY'}',\n      'Content-Type': 'application/json'\n    }\n  });\n  console.log('Invoice Generated:', res.data);\n}`
                              : activeCodeTab === 'python'
                              ? `import requests\n\nurl = "${effectiveApiBase}/api/integration/medingen/bills"\nheaders = {\n    "Authorization": "Bearer ${cachedSecret || integration?.keyPrefix || 'YOUR_API_KEY'}",\n    "Content-Type": "application/json"\n}\npayload = {\n    "orderId": "MED-ORD-10025",\n    "customer": {\n        "name": "Raj Kumar",\n        "phone": "9876543210",\n        "email": "raj@example.com",\n        "address": "Chennai, Tamil Nadu"\n    },\n    "items": [\n        {"productId": "d9029161-6e2e-46c5-a7ea-a5778dd21080", "quantity": 2}\n    ],\n    "payment": {"method": "COD", "amount": 40}\n}\n\nres = requests.post(url, json=payload, headers=headers)\nprint(res.json())`
                              : JSON.stringify(
                                  {
                                    orderId: 'MED-ORD-10025',
                                    customer: {
                                      name: 'Raj Kumar',
                                      phone: '9876543210',
                                      email: 'raj@example.com',
                                      address: 'Chennai, Tamil Nadu',
                                    },
                                    items: [
                                      {
                                        productId: 'd9029161-6e2e-46c5-a7ea-a5778dd21080',
                                        quantity: 2,
                                      },
                                    ],
                                    payment: {
                                      method: 'COD',
                                      amount: 40,
                                    },
                                  },
                                  null,
                                  2,
                                );
                          copyToClipboard(code, 'snippet');
                        }}
                        className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
                      >
                        {copiedDocId === 'snippet' ? (
                          <>
                            <CheckIcon className="w-3 h-3 text-emerald-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon className="w-3 h-3" />
                            <span>
                              {activeCodeTab === 'curl'
                                ? 'Copy cURL'
                                : activeCodeTab === 'json'
                                ? 'Copy JSON'
                                : 'Copy Snippet'}
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11.5px]">
                      {activeCodeTab === 'curl' && (
                        <code>
                          <span className="text-emerald-400 font-bold">curl</span> -X POST <span className="text-sky-300">"{effectiveApiBase}/api/integration/medingen/bills"</span> \{"\n"}
                          {"  "}-H <span className="text-amber-300">"Authorization: Bearer {cachedSecret || integration?.keyPrefix || 'YOUR_API_KEY'}"</span> \{"\n"}
                          {"  "}-H <span className="text-amber-300">"Content-Type: application/json"</span> \{"\n"}
                          {"  "}-d <span className="text-slate-300">'{`{\n    "orderId": "MED-ORD-10025",\n    "customer": {\n      "name": "Raj Kumar",\n      "phone": "9876543210",\n      "email": "raj@example.com",\n      "address": "Chennai, Tamil Nadu"\n    },\n    "items": [\n      {\n        "productId": "d9029161-6e2e-46c5-a7ea-a5778dd21080",\n        "quantity": 2\n      }\n    ],\n    "payment": {\n      "method": "COD",\n      "amount": 40\n    }\n  }`}</span>'
                        </code>
                      )}

                      {activeCodeTab === 'node' && (
                        <code>
                          <span className="text-purple-400">const</span> axios = <span className="text-sky-400">require</span>(<span className="text-emerald-300">'axios'</span>);{"\n\n"}
                          <span className="text-purple-400">async function</span> <span className="text-sky-400">createMedingenInvoice</span>() {"{"}{"\n"}
                          {"  "}<span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> axios.<span className="text-sky-400">post</span>(<span className="text-emerald-300">'{effectiveApiBase}/api/integration/medingen/bills'</span>, {"{\n"}
                          {"    "}orderId: <span className="text-emerald-300">'MED-ORD-10025'</span>,{"\n"}
                          {"    "}customer: {"{ name: 'Raj Kumar', phone: '9876543210', email: 'raj@example.com' },\n"}
                          {"    "}items: [ {"{ productId: 'd9029161-6e2e-46c5-a7ea-a5778dd21080', quantity: 2 }"} ],{"\n"}
                          {"    "}payment: {"{ method: 'COD', amount: 40 }\n"}
                          {"  }"}, {"{\n"}
                          {"    "}headers: {"{\n"}
                          {"      "}Authorization: <span className="text-emerald-300">'Bearer {cachedSecret || integration?.keyPrefix || 'YOUR_API_KEY'}'</span>,{"\n"}
                          {"      "}'Content-Type': <span className="text-emerald-300">'application/json'</span>{"\n"}
                          {"    }}\n"}
                          {"  });\n"}
                          {"  "}console.log(<span className="text-emerald-300">'Invoice:'</span>, res.data);{"\n"}
                          {"}"}
                        </code>
                      )}

                      {activeCodeTab === 'python' && (
                        <code>
                          <span className="text-purple-400">import</span> requests{"\n\n"}
                          url = <span className="text-emerald-300">"{effectiveApiBase}/api/integration/medingen/bills"</span>{"\n"}
                          headers = {"{\n"}
                          {"    "}<span className="text-emerald-300">"Authorization"</span>: <span className="text-emerald-300">"Bearer {cachedSecret || integration?.keyPrefix || 'YOUR_API_KEY'}"</span>,{"\n"}
                          {"    "}<span className="text-emerald-300">"Content-Type"</span>: <span className="text-emerald-300">"application/json"</span>{"\n"}
                          {"}"}{"\n\n"}
                          payload = {"{\n"}
                          {"    "}<span className="text-sky-300">"orderId"</span>: <span className="text-emerald-300">"MED-ORD-10025"</span>,{"\n"}
                          {"    "}<span className="text-sky-300">"customer"</span>: {"{\n"}
                          {"        "}<span className="text-sky-300">"name"</span>: <span className="text-emerald-300">"Raj Kumar"</span>,{"\n"}
                          {"        "}<span className="text-sky-300">"phone"</span>: <span className="text-emerald-300">"9876543210"</span>,{"\n"}
                          {"        "}<span className="text-sky-300">"email"</span>: <span className="text-emerald-300">"raj@example.com"</span>{"\n"}
                          {"    }"},{"\n"}
                          {"    "}<span className="text-sky-300">"items"</span>: [ {"{\"productId\": \"d9029161-6e2e-46c5-a7ea-a5778dd21080\", \"quantity\": 2}"} ],{"\n"}
                          {"    "}<span className="text-sky-300">"payment"</span>: {"{\"method\": \"COD\", \"amount\": 40}"}{"\n"}
                          {"}"}{"\n\n"}
                          response = requests.<span className="text-sky-400">post</span>(url, json=payload, headers=headers){"\n"}
                          print(response.json())
                        </code>
                      )}

                      {activeCodeTab === 'json' && (
                        <code>
                          {JSON.stringify(
                            {
                              orderId: 'MED-ORD-10025',
                              customer: {
                                name: 'Raj Kumar',
                                phone: '9876543210',
                                email: 'raj@example.com',
                                address: 'Chennai, Tamil Nadu',
                              },
                              items: [
                                {
                                  productId: 'd9029161-6e2e-46c5-a7ea-a5778dd21080',
                                  quantity: 2,
                                },
                              ],
                              payment: {
                                method: 'COD',
                                amount: 40,
                              },
                            },
                            null,
                            2,
                          )}
                        </code>
                      )}
                    </pre>
                  </div>

                  {/* Example API Responses */}
                  <div className="space-y-3 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-800">Sample API Responses</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setActiveResponseTab('success')}
                          className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                            activeResponseTab === 'success'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'text-slate-500 hover:text-slate-800 bg-slate-50'
                          }`}
                        >
                          201 Success Response
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveResponseTab('notFound')}
                          className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                            activeResponseTab === 'notFound'
                              ? 'bg-purple-50 text-purple-700 border border-purple-200'
                              : 'text-slate-500 hover:text-slate-800 bg-slate-50'
                          }`}
                        >
                          404 Product Not Found
                        </button>
                      </div>
                    </div>

                    <div className="relative bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs border border-slate-800 shadow-inner overflow-x-auto">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                        <span className="font-bold flex items-center gap-2 text-slate-300">
                          {activeResponseTab === 'success' ? (
                            <span className="text-emerald-400">HTTP 201 Created</span>
                          ) : (
                            <span className="text-purple-400">HTTP 404 Product Not Found</span>
                          )}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const resJson =
                              activeResponseTab === 'success'
                                ? JSON.stringify(
                                    {
                                      success: true,
                                      message: 'Bill created successfully',
                                      data: {
                                        billId: 'a810f24e-72bc-4fa1-84cd-c7ec51261d71',
                                        billNumber: 'INV-2026-00412',
                                        invoiceType: 'TAX',
                                        totalAmount: 40.0,
                                        discountAmount: 0.0,
                                        gstAmount: 4.28,
                                        netAmount: 40.0,
                                        status: 'COMPLETED',
                                        items: [
                                          {
                                            productId: 'd9029161-6e2e-46c5-a7ea-a5778dd21080',
                                            batchNumber: 'BCH-2026-09',
                                            expiryDate: '2027-11-30',
                                            quantity: 2,
                                            sellingPrice: 20.0,
                                          },
                                        ],
                                      },
                                    },
                                    null,
                                    2,
                                  )
                                : JSON.stringify(
                                    {
                                      success: false,
                                      message: 'One or more products were not found in local pharmacy catalog',
                                      errorCode: 'PRODUCT_NOT_FOUND',
                                      missingProductIds: ['d9029161-6e2e-46c5-a7ea-a5778dd21080'],
                                    },
                                    null,
                                    2,
                                  );
                            copyToClipboard(resJson, 'response');
                          }}
                          className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
                        >
                          {copiedDocId === 'response' ? (
                            <>
                              <CheckIcon className="w-3 h-3 text-emerald-400" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <CopyIcon className="w-3 h-3" />
                              <span>Copy JSON</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11.5px]">
                        {activeResponseTab === 'success' && (
                          <code>
                            {JSON.stringify(
                              {
                                success: true,
                                message: 'Bill created successfully',
                                data: {
                                  billId: 'a810f24e-72bc-4fa1-84cd-c7ec51261d71',
                                  billNumber: 'INV-2026-00412',
                                  invoiceType: 'TAX',
                                  totalAmount: 40.0,
                                  discountAmount: 0.0,
                                  gstAmount: 4.28,
                                  netAmount: 40.0,
                                  status: 'COMPLETED',
                                  items: [
                                    {
                                      productId: 'd9029161-6e2e-46c5-a7ea-a5778dd21080',
                                      batchNumber: 'BCH-2026-09',
                                      expiryDate: '2027-11-30',
                                      quantity: 2,
                                      sellingPrice: 20.0,
                                    },
                                  ],
                                },
                              },
                              null,
                              2,
                            )}
                          </code>
                        )}

                        {activeResponseTab === 'notFound' && (
                          <code>
                            {JSON.stringify(
                              {
                                success: false,
                                message: 'One or more products were not found in local pharmacy catalog',
                                errorCode: 'PRODUCT_NOT_FOUND',
                                missingProductIds: ['d9029161-6e2e-46c5-a7ea-a5778dd21080'],
                              },
                              null,
                              2,
                            )}
                          </code>
                        )}
                      </pre>
                    </div>
                  </div>

                  {/* HTTP Status Reference Table */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-800">HTTP Status Code Reference</span>
                    <div className="overflow-x-auto border border-slate-200 rounded-xl">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-wider">
                            <th className="px-4 py-2.5">HTTP Status</th>
                            <th className="px-4 py-2.5">Response State</th>
                            <th className="px-4 py-2.5">Platform Behavior & Guarantee</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-2.5 font-mono font-bold text-emerald-600">200 / 201</td>
                            <td className="px-4 py-2.5 font-semibold text-emerald-800">
                              <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded font-mono text-[10px]">GENERATED</span>
                            </td>
                            <td className="px-4 py-2.5 text-slate-600">Invoice created or existing idempotent invoice returned. Stock deducted via FEFO batches.</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-2.5 font-mono font-bold text-amber-600">400</td>
                            <td className="px-4 py-2.5 font-semibold text-amber-800">
                              <span className="px-2 py-0.5 bg-amber-50 border border-amber-200 rounded font-mono text-[10px]">BAD REQUEST</span>
                            </td>
                            <td className="px-4 py-2.5 text-slate-600">Missing required order fields or insufficient physical inventory in active batches. Zero partial bills created.</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-2.5 font-mono font-bold text-rose-600">401</td>
                            <td className="px-4 py-2.5 font-semibold text-rose-800">
                              <span className="px-2 py-0.5 bg-rose-50 border border-rose-200 rounded font-mono text-[10px]">UNAUTHORIZED</span>
                            </td>
                            <td className="px-4 py-2.5 text-slate-600">Missing Bearer header, invalid token secret, or revoked API key. Request is rejected at the gateway.</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-2.5 font-mono font-bold text-purple-600">404</td>
                            <td className="px-4 py-2.5 font-semibold text-purple-800">
                              <span className="px-2 py-0.5 bg-purple-50 border border-purple-200 rounded font-mono text-[10px]">PRODUCT NOT FOUND</span>
                            </td>
                            <td className="px-4 py-2.5 text-slate-600">One or more Product IDs do not exist in the Billing Software database. Missing IDs returned in response.</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-2.5 font-mono font-bold text-slate-600">500</td>
                            <td className="px-4 py-2.5 font-semibold text-slate-800">
                              <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">INTERNAL ERROR</span>
                            </td>
                            <td className="px-4 py-2.5 text-slate-600">Database transaction failure. Full ACID atomic rollback occurs automatically with 0 corrupt records.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Architecture Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                      <span className="font-bold text-slate-900 block text-xs flex items-center gap-1.5">
                        <LockIcon className="w-3.5 h-3.5 text-primary" />
                        Zero Plaintext Persistence
                      </span>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        API secrets are passed through SHA-256 one-way hashing before storage. Database compromises cannot expose live secrets.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                      <span className="font-bold text-slate-900 block text-xs flex items-center gap-1.5">
                        <ActivityIcon className="w-3.5 h-3.5 text-primary" />
                        Automated FEFO Allocation
                      </span>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Dispenses medication from batches closest to expiration first, maintaining strict statutory compliance without manual intervention.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                      <span className="font-bold text-slate-900 block text-xs flex items-center gap-1.5">
                        <ShieldCheckIcon className="w-3.5 h-3.5 text-primary" />
                        Idempotent Order Handling
                      </span>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Duplicate requests with the same external Order ID safely return the existing invoice, preventing double billing or duplicate stock reduction.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Action bar (Hide if on About/License/Maintenance/Integrations section which are read-only or handled separately) */}
          {activeSection !== 'about' && activeSection !== 'license' && activeSection !== 'maintenance' && activeSection !== 'integrations' && (
            <div className="flex justify-end pt-5 border-t border-gray-200">
              <Button 
                type="submit" 
                disabled={settingsLoading} 
                className="px-6 py-2 cursor-pointer font-bold"
              >
                {settingsLoading ? 'Saving config...' : 'Save Settings Details'}
              </Button>
            </div>
          )}
        </form>

        {/* Alternate Activation Form directly on License Section */}
        {activeSection === 'license' && (
          <form onSubmit={handleActivateLicense} className="flex gap-3 pt-5 border-t border-gray-200 mt-4 animate-fadeIn">
            <input
              type="text"
              required
              value={activationKey}
              onChange={(e) => setActivationKey(e.target.value)}
              placeholder="Enter offline activation license key (MED-XXXX-...)"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 font-mono text-xs focus:outline-none"
            />
            <Button type="submit" className="px-5 py-2 font-bold cursor-pointer">Activate</Button>
          </form>
        )}

      </div>

      {/* ======================================================== */}
      {/* Confirmation & One-Time Reveal Modals */}
      {/* ======================================================== */}

      {/* ======================================================== */}
      {/* Confirmation & One-Time Reveal Modals - UI/UX Pro Max */}
      {/* ======================================================== */}

      {/* Create Confirmation Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4 font-sans text-xs">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <KeyIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">Create Medingen API Key?</h3>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                  Generates a cryptographically secure token for automated server-to-server POS invoice generation.
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
              <ShieldAlertIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Security Policy:</strong> Any previously active key will be automatically revoked upon generation of this new key.
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                disabled={integrationActionLoading}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-xs cursor-pointer transition-all"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreateKey}
                disabled={integrationActionLoading}
                className="px-5 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-xs shadow cursor-pointer flex items-center gap-2 transition-all"
              >
                {integrationActionLoading && <RefreshCwIcon className="w-3.5 h-3.5 animate-spin" />}
                <span>{integrationActionLoading ? 'Generating Key...' : 'Create API Key'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Regenerate Confirmation Modal */}
      {showRegenerateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4 font-sans text-xs">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0 border border-amber-200/60">
                <RefreshCwIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900">Regenerate API Key?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  The current key will immediately stop working. The Medingen Platform must be updated with the new key before API requests can continue.
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
              <ShieldAlertIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-[11.5px]">
                External headless billing requests will fail with <strong>HTTP 401</strong> until your environment secret is updated.
              </div>
            </div>

            <div className="flex justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowRegenerateModal(false)}
                disabled={integrationActionLoading}
                className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-semibold text-xs cursor-pointer transition-all shadow-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleRegenerateKey}
                disabled={integrationActionLoading}
                className="px-5 py-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white rounded-xl font-bold text-xs shadow-xs cursor-pointer flex items-center gap-2 transition-all"
              >
                {integrationActionLoading && <RefreshCwIcon className="w-3.5 h-3.5 animate-spin" />}
                <span>{integrationActionLoading ? 'Regenerating...' : 'Regenerate Key'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Revoke Confirmation Modal */}
      {showRevokeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4 font-sans text-xs">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl shrink-0 border border-rose-200/60">
                <ShieldAlertIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900">Revoke API Key?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  The Medingen Platform will no longer be able to generate invoices through this integration.
                </p>
              </div>
            </div>

            <div className="p-3 bg-rose-50/70 border border-rose-200/80 rounded-xl text-rose-900 text-xs leading-relaxed flex items-start gap-2.5">
              <ShieldAlertIcon className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="text-[11.5px]">
                This action immediately invalidates access. All upcoming server-to-server requests will be permanently rejected until a new key is created.
              </div>
            </div>

            <div className="flex justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowRevokeModal(false)}
                disabled={integrationActionLoading}
                className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-semibold text-xs cursor-pointer transition-all shadow-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleRevokeKey}
                disabled={integrationActionLoading}
                className="px-5 py-2 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-xl font-bold text-xs shadow-xs cursor-pointer flex items-center gap-2 transition-all"
              >
                {integrationActionLoading && <RefreshCwIcon className="w-3.5 h-3.5 animate-spin" />}
                <span>{integrationActionLoading ? 'Revoking Key...' : 'Revoke Key'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* One-Time API Key Reveal Modal */}
      {newlyCreatedKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 space-y-5 font-sans text-xs">
            <div className="flex items-start gap-3.5">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">API Key Created Successfully</h3>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                  Please copy and securely store this secret now. For your security, this full key will never be shown again.
                </p>
              </div>
            </div>

            {/* Secret Display Box */}
            <div className="space-y-3">
              <div className="bg-slate-950 text-emerald-400 p-4 rounded-xl font-mono text-xs break-all border border-slate-800 select-all flex items-center justify-between gap-3 shadow-inner">
                <span className="font-bold tracking-wide">
                  {showModalKey ? newlyCreatedKey : `${newlyCreatedKey.substring(0, 16)}••••••••••••••••••••••••••••••••••••••••`}
                </span>
                <button
                  type="button"
                  onClick={() => setShowModalKey(!showModalKey)}
                  className="px-2.5 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-700 flex items-center gap-1 cursor-pointer shrink-0 transition-all"
                  title={showModalKey ? "Hide Secret" : "View Secret"}
                >
                  {showModalKey ? (
                    <>
                      <EyeOffIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>Hide</span>
                    </>
                  ) : (
                    <>
                      <EyeIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>View</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    copyToClipboard(newlyCreatedKey);
                    setAcknowledgedSaved(true);
                  }}
                  className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-xs shadow cursor-pointer flex items-center gap-2 transition-all active:scale-95"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy API Key</span>
                </button>

                {copiedKeyToast && (
                  <span className="text-emerald-600 font-bold text-xs animate-fadeIn flex items-center gap-1">
                    <CheckIcon className="w-4 h-4" />
                    <span>Key copied to clipboard!</span>
                  </span>
                )}
              </div>
            </div>

            {/* Mandatory Acknowledgement Checkbox */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="ack-key-saved"
                  checked={acknowledgedSaved}
                  onChange={(e) => setAcknowledgedSaved(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <span className="text-gray-700 text-[11.5px] leading-tight font-medium">
                  I have copied this API key and stored it securely in our platform's secret manager.
                </span>
              </label>
            </div>

            {/* Confirmation Close Button */}
            <div className="flex justify-end pt-1">
              <button
                type="button"
                disabled={!acknowledgedSaved}
                onClick={() => {
                  setNewlyCreatedKey(null);
                  setCopiedKeyToast(false);
                  setAcknowledgedSaved(false);
                }}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all ${
                  acknowledgedSaved
                    ? 'bg-slate-950 hover:bg-black text-white cursor-pointer active:scale-95'
                    : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                }`}
              >
                Done / Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default SettingsTab;
