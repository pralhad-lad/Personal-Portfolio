export default function Resume() {
  return (
    <section className="py-16 px-6  scroll-mt-28" id="resume">
      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 p-10 rounded-xl border border-white/10 text-center scroll-mt-28" id="resume">
        <p className="text-sm text-blue-400 mb-2">My Professional Background</p>
        <h2 className="mb-8 text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resume</h2>
        <p className="mb-8 text-gray-300">
          Take a look at my professional experience and skills. You can view it directly in your browser or download a PDF copy.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/PRALHAD_PRAVIN_LAD_N.pdf"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow"
          >
            👁 View Online
          </a>

          <a
            href="/PRALHAD_PRAVIN_LAD_N.pdf"
            download
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2 rounded-md shadow border border-white/20"
          >
            ⬇ Download CV (.pdf)
          </a>
        </div>
      </div>
    </section>
  );
}
