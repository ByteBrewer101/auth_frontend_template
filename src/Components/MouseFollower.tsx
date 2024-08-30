interface Propi {
  left: number;
  top: number;
}

export default function MouseFollower(props: Propi) {
  return (
    <div
      className="absolute w-20 h-20 bg-black rounded-full pointer-events-none"
      style={{ top: `${props.top}px`, left: `${props.left}px` }}
    ></div>
  );
}
