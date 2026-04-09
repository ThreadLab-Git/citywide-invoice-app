import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

export default function CelebrationModal({ onClose }) {
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    // Burst from both sides
    const end = Date.now() + 2800

    const colors = ['#22c55e', '#16a34a', '#4ade80', '#ffffff', '#bbf7d0', '#fbbf24']

    function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors,
        zIndex: 9999,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors,
        zIndex: 9999,
      })

      if (Date.now() < end) requestAnimationFrame(frame)
    }

    // Initial big burst
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { x: 0.5, y: 0.55 },
      colors,
      zIndex: 9999,
    })

    frame()

    const timer = setTimeout(onClose, 4200)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative text-center px-12 py-10 rounded-3xl max-w-sm w-full mx-4"
        style={{
          background: '#0f1f1a',
          border: '1px solid rgba(34,197,94,0.3)',
          boxShadow: '0 0 60px rgba(34,197,94,0.2), 0 24px 64px rgba(0,0,0,0.5)',
          animation: 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @keyframes popIn {
            from { opacity: 0; transform: scale(0.7) translateY(20px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes wiggle {
            0%,100% { transform: rotate(-8deg); }
            50%      { transform: rotate(8deg); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Emoji */}
        <div
          className="text-5xl mb-4 inline-block"
          style={{ animation: 'wiggle 0.6s ease-in-out 0.3s 3' }}
        >
          🎉
        </div>

        {/* Heading */}
        <div
          className="font-bold text-white mb-2 leading-tight"
          style={{ fontSize: '22px', animation: 'fadeUp 0.4s ease 0.2s both' }}
        >
          Congrats on the<br />new job, Vanessa!
        </div>

        {/* Subtext */}
        <div
          className="text-sm mb-7"
          style={{ color: '#6b9e7a', animation: 'fadeUp 0.4s ease 0.35s both' }}
        >
          Invoice saved and ready to send 🚀
        </div>

        {/* Green glow ring */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{ boxShadow: 'inset 0 0 30px rgba(34,197,94,0.08)' }}
        />

        <button
          onClick={onClose}
          className="px-8 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
          style={{
            background: '#22c55e',
            boxShadow: '0 4px 14px rgba(34,197,94,0.4)',
            animation: 'fadeUp 0.4s ease 0.5s both',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#16a34a'}
          onMouseLeave={e => e.currentTarget.style.background = '#22c55e'}
        >
          Let's go! 💪
        </button>
      </div>
    </div>
  )
}
