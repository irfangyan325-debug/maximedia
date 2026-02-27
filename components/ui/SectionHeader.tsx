interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`.trim()}>
      <div className={`eyebrow ${center ? 'eyebrow--center' : ''}`.trim()}>
        {eyebrow}
      </div>
      <h2
        style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className="mt-3.5 leading-relaxed"
          style={{ fontSize: '1.02rem', color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
