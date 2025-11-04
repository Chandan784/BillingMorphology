export default function CareerVideoSection() {
  return (
    <section className="bg-[#f9fafb] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Watch How We Build Careers in Hospital Billing — Step by Step
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          In just a few minutes, you’ll see how our programs blend hands-on
          training, live mentorship, and active placement assistance to prepare
          you for in-demand billing and TPA roles across hospitals and
          healthcare networks.
        </p>

        {/* Video Section */}
        <div className="mt-12 relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="w-full h-[500px] md:h-[600px] rounded-2xl">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // 🔗 Replace with your video URL
              title="Hospital Billing Training Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-10">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 hover:shadow-[0_0_12px_rgba(255,0,0,0.4)] transition-all duration-300">
            Explore Full Program →
          </button>
        </div>
      </div>
    </section>
  );
}
