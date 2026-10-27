import React, { useState, useEffect, useCallback } from 'react';

// Crisp inline SVG icons tailored to match the design
function Icon({ name, className = 'w-4 h-4' }) {
  switch (name) {
    case 'sparkle':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
        </svg>
      );
    case 'number_badge':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="4" />
          <path d="M7 15V9h1.5l1.5 2V9" strokeWidth="1.5" />
          <path d="M13 9h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2v3h3" strokeWidth="1.5" />
        </svg>
      );
    case 'person':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'copy':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case 'paste':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
      );
    case 'check':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'check_circle':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case 'chevron_down':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      );
    case 'arrow_right':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'arrow_left':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      );
    case 'live':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.93 4.93a10 10 0 0 0 0 14.14M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M8.46 8.46a5 5 0 0 0 0 7.08M15.54 8.46a5 5 0 0 1 0 7.08" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'help':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 'refresh':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
        </svg>
      );
    default:
      return null;
  }
}

// Preset mock sessions for realistic auto-detection
const SESSIONS = {
  '849-201': {
    code: '849-201',
    title: 'Web Development 101',
    host: 'Prof. Hawthorne',
    questions: 25,
    players: 36,
  },
  '304-912': {
    code: '304-912',
    title: 'Modern JavaScript & React',
    host: 'Dr. Sarah Chen',
    questions: 20,
    players: 42,
  },
  '552-118': {
    code: '552-118',
    title: 'Cloud Computing & AI',
    host: 'Marcus Vance',
    questions: 15,
    players: 28,
  },
  '102-440': {
    code: '102-440',
    title: 'Cybersecurity Fundamentals',
    host: 'Elena Rostova',
    questions: 30,
    players: 19,
  },
};

const COUNTRIES = [
  { code: '+1', iso: 'us', label: 'us +1' },
  { code: '+44', iso: 'gb', label: 'uk +44' },
  { code: '+61', iso: 'au', label: 'au +61' },
  { code: '+49', iso: 'de', label: 'de +49' },
  { code: '+91', iso: 'in', label: 'in +91' },
  { code: '+33', iso: 'fr', label: 'fr +33' },
  { code: '+81', iso: 'jp', label: 'jp +81' },
  { code: '+55', iso: 'br', label: 'br +55' },
];

/**
 * JoinQuiz Page Component
 * Exact color palette & typography matched to the reference screenshot.
 */
export default function JoinQuiz({
  initialCode = '849-201',
  initialName = 'Alex Rivera',
  initialPhone = '(555) 019-2834',
  onJoin,
}) {
  const [sessionCode, setSessionCode] = useState(initialCode);
  const [participantName, setParticipantName] = useState(initialName);
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState(initialPhone);

  const [copyStatus, setCopyStatus] = useState('idle');
  const [pasteNotice, setPasteNotice] = useState(null);
  const [retryState, setRetryState] = useState('idle');
  const [joinState, setJoinState] = useState('idle');
  const [formError, setFormError] = useState(null);

  const [activeSession, setActiveSession] = useState(
    SESSIONS[initialCode] || {
      code: initialCode,
      title: 'Web Development 101',
      host: 'Prof. Hawthorne',
      questions: 25,
      players: 36,
    }
  );

  const [livePlayerCount, setLivePlayerCount] = useState(activeSession.players);

  // Auto-detect session metadata
  useEffect(() => {
    const clean = sessionCode.trim();
    if (SESSIONS[clean]) {
      setActiveSession(SESSIONS[clean]);
      setLivePlayerCount(SESSIONS[clean].players);
      setFormError(null);
    } else if (clean.length >= 6) {
      setActiveSession({
        code: clean,
        title: `Live Session #${clean}`,
        host: 'Session Moderator',
        questions: 20,
        players: 24,
      });
      setFormError(null);
    }
  }, [sessionCode]);

  // Copy code
  const handleCopyCode = useCallback(async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(sessionCode);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = sessionCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopyStatus('copied');
      setPasteNotice('Session code copied!');
      setTimeout(() => {
        setCopyStatus('idle');
        setPasteNotice(null);
      }, 2000);
    } catch {
      setPasteNotice('Failed to copy');
      setTimeout(() => setPasteNotice(null), 2000);
    }
  }, [sessionCode]);

  // Paste code
  const handlePasteCode = useCallback(async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text && text.trim()) {
          const formatted = text.trim().slice(0, 10).toUpperCase();
          setSessionCode(formatted);
          setPasteNotice(`Pasted "${formatted}"`);
          setTimeout(() => setPasteNotice(null), 2000);
          return;
        }
      }
      setPasteNotice('Clipboard empty');
      setTimeout(() => setPasteNotice(null), 2000);
    } catch {
      setPasteNotice('Clipboard access denied');
      setTimeout(() => setPasteNotice(null), 2000);
    }
  }, []);

  const handleCodeChange = (e) => {
    setSessionCode(e.target.value.toUpperCase());
    if (formError) setFormError(null);
  };

  const handleRetryValidation = useCallback(() => {
    if (retryState !== 'idle') return;
    setRetryState('checking');
    setTimeout(() => {
      setRetryState('valid');
      setTimeout(() => {
        setRetryState('idle');
      }, 1500);
    }, 700);
  }, [retryState]);

  const handleJoinQuiz = useCallback(
    (e) => {
      e.preventDefault();

      if (!sessionCode.trim()) {
        setFormError('Please enter a session code');
        return;
      }
      if (!participantName.trim()) {
        setFormError('Please enter your participant name');
        return;
      }
      if (!phoneNumber.trim()) {
        setFormError('Please enter a phone number');
        return;
      }

      setFormError(null);
      setJoinState('joining');

      setTimeout(() => {
        setJoinState('joined');
        if (onJoin) {
          onJoin({
            sessionCode: sessionCode.trim(),
            participantName: participantName.trim(),
            countryCode,
            phoneNumber: phoneNumber.trim(),
            session: activeSession,
          });
        }
        setTimeout(() => {
          setJoinState('idle');
        }, 2000);
      }, 1000);
    },
    [sessionCode, participantName, countryCode, phoneNumber, onJoin, activeSession]
  );

  return (
    <main className="w-full min-h-screen bg-[#F5F7FD] text-slate-800 antialiased flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans selection:bg-[#5B4DF6] selection:text-white">
      {/* Toast Notification */}
      {pasteNotice && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-xl flex items-center gap-2 animate-bounce">
          <span>{pasteNotice}</span>
        </div>
      )}

      {/* Main Form Container */}
      <div className="w-full max-w-[460px] mx-auto flex flex-col items-center">
        {/* Core White Card */}
        <div className="w-full bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.08)] border border-slate-100/80 p-7 sm:p-9 flex flex-col gap-6">
          {/* Top Session Pill */}
          <div className="flex items-center justify-between bg-[#EEF2FF] px-4 py-2.5 rounded-full">
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Outer halo with solid blue dot inside */}
              <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
              </div>
              <div className="min-w-0 truncate text-xs">
                <span className="text-slate-600 font-medium">Session code active: </span>
                <span className="text-[#4338CA] font-semibold">{activeSession.title}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#4F46E5] text-[11px] font-bold tracking-wide flex-shrink-0 ml-2">
              <Icon name="live" className="w-3.5 h-3.5 text-[#4F46E5]" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Heading Section */}
          <div className="flex flex-col items-center text-center -mt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-[11px] font-semibold mb-2.5">
              <Icon name="sparkle" className="w-3 h-3 text-[#7C3AED]" />
              <span>Instant Room Join</span>
            </div>
            <h1 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight">
              Join a Quiz
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-[280px] leading-relaxed">
              Enter your details to join the live quiz and compete in real-time.
            </p>
          </div>

          {/* Error Banner */}
          {formError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-600 px-3.5 py-2 rounded-xl text-xs font-medium text-center">
              {formError}
            </div>
          )}

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleJoinQuiz}>
            {/* Input 1: Quiz Session Code */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center px-0.5">
                <label className="text-xs font-semibold text-slate-800" htmlFor="sessionCode">
                  Quiz Session Code
                </label>
                <span className="text-xs font-medium text-[#4F46E5] flex items-center gap-1">
                  <Icon name="check_circle" className="w-3.5 h-3.5 text-[#4F46E5]" />
                  <span>Auto-detected</span>
                </span>
              </div>

              <div className="relative flex items-center">
                {/* 123 Numeric Keypad Badge Icon */}
                <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
                  <div className="border border-slate-300 rounded px-1 py-0.5 text-[10px] font-bold text-slate-500 leading-none">
                    123
                  </div>
                </div>

                <input
                  id="sessionCode"
                  className="w-full h-11 pl-12 pr-20 rounded-xl bg-[#F1F3F9] text-slate-800 font-semibold text-sm tracking-wide uppercase focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4DF6]/20 focus:border-[#5B4DF6] border border-transparent transition-all placeholder:text-slate-400"
                  maxLength={10}
                  placeholder="000-000"
                  required
                  type="text"
                  value={sessionCode}
                  onChange={handleCodeChange}
                />

                <div className="absolute right-2.5 flex items-center gap-1 text-slate-400">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1 hover:text-slate-700 transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    <Icon name={copyStatus === 'copied' ? 'check' : 'copy'} className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handlePasteCode}
                    className="p-1 hover:text-slate-700 transition-colors cursor-pointer"
                    title="Paste code"
                  >
                    <Icon name="paste" className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-1 text-[11px]">
                <span className="text-slate-400">
                  Host: {activeSession.host} • {activeSession.questions} questions
                </span>
                <span className="text-[#4F46E5] font-semibold">
                  Ready to enter
                </span>
              </div>
            </div>

            {/* Input 2: Participant Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-800 px-0.5" htmlFor="participantName">
                Participant Name
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
                  <Icon name="person" className="w-4 h-4" />
                </div>
                <input
                  id="participantName"
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#F1F3F9] text-slate-800 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4DF6]/20 focus:border-[#5B4DF6] border border-transparent transition-all placeholder:text-slate-400"
                  placeholder="e.g. Alex Rivera"
                  required
                  type="text"
                  value={participantName}
                  onChange={(e) => setParticipantName(e.target.value)}
                />
              </div>
            </div>

            {/* Input 3: Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-800 px-0.5" htmlFor="phoneNumber">
                Phone Number
              </label>
              <div className="flex gap-2">
                {/* Country selector */}
                <div className="relative flex-shrink-0 w-24">
                  <select
                    className="w-full h-11 appearance-none bg-[#F1F3F9] text-slate-800 text-xs font-semibold pl-3 pr-7 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4DF6]/20 focus:border-[#5B4DF6] border border-transparent transition-all cursor-pointer lowercase"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    aria-label="Country Code"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Icon name="chevron_down" className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Phone field */}
                <div className="relative flex-1">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-slate-400">
                    <Icon name="phone" className="w-3.5 h-3.5" />
                  </div>
                  <input
                    id="phoneNumber"
                    className="w-full h-11 pl-9 pr-4 rounded-xl bg-[#F1F3F9] text-slate-800 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4DF6]/20 focus:border-[#5B4DF6] border border-transparent transition-all placeholder:text-slate-400"
                    placeholder="(555) 019-2834"
                    required
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <span className="text-[11px] text-slate-400 px-1">
                Used for private SMS result card &amp; certificate access
              </span>
            </div>

            {/* Primary Submit Button */}
            <button
              id="joinButton"
              className="w-full h-11 mt-1 rounded-xl bg-[#5B4DF6] hover:bg-[#4E3FE8] active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-1.5 shadow-md shadow-[#5B4DF6]/25 transition-all cursor-pointer disabled:opacity-75"
              type="submit"
              disabled={joinState !== 'idle'}
            >
              {joinState === 'idle' && (
                <>
                  <span>Join Quiz</span>
                  <Icon name="arrow_right" className="w-4 h-4" />
                </>
              )}
              {joinState === 'joining' && (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Entering Lobby...</span>
                </>
              )}
              {joinState === 'joined' && (
                <>
                  <Icon name="check" className="w-4 h-4 text-white" />
                  <span>Joined!</span>
                </>
              )}
            </button>
          </form>

          {/* Player Count Status */}
          <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 -mt-1">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>
              Code verified • <strong className="text-slate-700 font-semibold">{livePlayerCount} players</strong> currently waiting
            </span>
          </div>

          {/* Need help joining? Card */}
          <div className="rounded-2xl bg-[#EFF2FC] p-3.5 sm:p-4 flex items-center justify-between gap-3">
            <div className="flex items-start gap-2.5 min-w-0">
              <div className="text-[#4F46E5] mt-0.5 flex-shrink-0">
                <Icon name="help" className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-xs font-bold text-slate-800">
                  Need help joining?
                </span>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  If code is invalid or expired, check with the host or refresh session status.
                </p>
              </div>
            </div>

            <button
              className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-[#E0E7FF] hover:bg-indigo-100 text-[#4F46E5] text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-75"
              onClick={handleRetryValidation}
              type="button"
              disabled={retryState !== 'idle'}
            >
              {retryState === 'idle' && (
                <>
                  <Icon name="refresh" className="w-3 h-3" />
                  <span>Try Again</span>
                </>
              )}
              {retryState === 'checking' && (
                <>
                  <span className="w-3 h-3 border-2 border-[#4F46E5]/30 border-t-[#4F46E5] rounded-full animate-spin" />
                  <span>Checking...</span>
                </>
              )}
              {retryState === 'valid' && (
                <>
                  <Icon name="check" className="w-3 h-3" />
                  <span>Valid</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Back to Home Link */}
        <button
          type="button"
          onClick={() => window.history?.back?.()}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <Icon name="arrow_left" className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>
    </main>
  );
}

// Export both named and default
export { JoinQuiz, JoinQuiz as joinQuiz };
