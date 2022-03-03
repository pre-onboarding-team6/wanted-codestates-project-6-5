export default function ArrowNarrowLeftIcon({
  className = 'w-6 h-6',
  ...rest
}) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
  );
}
