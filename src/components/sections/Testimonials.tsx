const testimonials = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote:
      "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote:
      "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
        What They Say
      </span>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mt-6 mb-16">
        Don&apos;t take our word for it.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="liquid-glass rounded-2xl p-8"
          >
            <p className="text-white/80 font-body font-light text-sm italic mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="text-white font-body font-medium text-sm">
              {testimonial.name}
            </div>
            <div className="text-white/50 font-body font-light text-xs">
              {testimonial.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
