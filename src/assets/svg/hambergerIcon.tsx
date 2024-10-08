const HambergerIcon: React.FC = ({className}:{className?:string}) => {
    return(
        <svg
        className={className}
        fill="none"
        stroke="currentColor"
        aria-label="hamberger menu"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    )
}
export default HambergerIcon