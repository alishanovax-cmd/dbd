interface StatCardProps {
  value: string
  label: string
  stars?: boolean
}

export function StatCard({ value, label, stars }: StatCardProps) {
  return (
    <div className="stat-card glass-card">
      <div className="stat-card__value">{value}</div>
      {stars && (
        <div className="stat-card__stars" aria-hidden="true">
          ★★★★★
        </div>
      )}
      <div className="stat-card__label">{label}</div>
    </div>
  )
}
