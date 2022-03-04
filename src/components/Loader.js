import rolling from '../assets/rolling.png';

export default function Loader({ className = 'w-32 h-32', ...rest }) {
  return (
    <div className={className} {...rest}>
      <img
        src={rolling}
        alt="loading"
        className="object-contain w-full h-full"
      />
    </div>
  );
}
