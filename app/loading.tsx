export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Animated Gold Droplets */}
        <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
          <div
            className="absolute w-full h-full rounded-full border border-[#d4af37]/20"
            style={{
              animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
            }}
          />
          <div
            className="absolute w-14 h-14 rounded-full border border-[#d4af37]/30"
            style={{
              animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) 0.3s infinite",
            }}
          />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#9e7d23] shadow-lg shadow-[#d4af37]/30" />
        </div>

        <div className="space-y-1">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-[#d4af37] font-semibold">
            ÉLYSIAN NOIR
          </span>
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Curating your experience…
          </p>
        </div>
      </div>
    </div>
  );
}
