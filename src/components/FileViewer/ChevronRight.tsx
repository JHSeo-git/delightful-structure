export type ChevronRightProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

function ChevronRight({ size = 14, ...props }: ChevronRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

export default ChevronRight;
