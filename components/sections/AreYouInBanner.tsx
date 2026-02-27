export default function AreYouInBanner() {
  return (
    <div
      className="overflow-hidden py-[26px]"
      style={{ background: 'linear-gradient(90deg, #03a94e, #04d361 50%, #03a94e)' }}
    >
      <div className="overflow-hidden">
        <div className="marquee-track marquee-track--fast">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 px-[30px] whitespace-nowrap">
              <span
                className="font-display font-extrabold tracking-[0.04em] uppercase text-[1.2rem]"
                style={{ color: 'rgba(0,0,0,0.85)' }}
              >
                ARE YOU IN?
              </span>
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[0.75rem]"
                style={{ background: 'rgba(0,0,0,0.15)' }}
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
