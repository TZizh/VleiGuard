export function VleiUserIcon({ size = 36, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-green-50 border border-green-200 rounded-full shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle
          cx="14"
          cy="10"
          r="5"
          stroke="#234445"
          strokeWidth="2"
          fill="#e8f8e1"
        />
        {/* Shoulders */}
        <path
          d="M5 23c0-4 5-7 9-7s9 3 9 7"
          stroke="#5d8354"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
