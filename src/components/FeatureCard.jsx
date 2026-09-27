export default function FeatureCard(props) {
  return (
    <div className="p-8 bg-[#0a0a0a] hover:bg-[#111111] transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
        {/* Blank #1: The Image Source */}
        <img src={props.iconSrc} alt="" className="w-5 h-5 invert" />
      </div>
      {/* Blank #2: The Tag / Number */}
      <div className="text-xs font-mono text-neutral-500 mb-1">{props.tag}</div>
      {/* Blank #3: The Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
        {props.title}
      </h3>
      {/* Blank #4: The Description */}
      <p className="text-sm text-neutral-400 leading-relaxed">
        {props.description}
      </p>
    </div>
  );
}
