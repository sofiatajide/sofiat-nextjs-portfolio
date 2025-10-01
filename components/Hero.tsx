export default function Hero() {
  return (
    <section className="section py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Product Manager & Data Analyst
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I turn messy problems into measurable results—blending product thinking,
            analytics, and clear storytelling.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-50">
              View Projects
            </a>
            <a href="/Sofiat_Ajide_Resume.pdf" className="px-5 py-3 rounded-xl border border-gray-900 hover:bg-gray-900 hover:text-white">
              Download Resume
            </a>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img
              src="/headshot.jpg"
              alt="Sofiat Ajide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
