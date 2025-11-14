import Image from "next/image";

export const metadata = {
  title: "AdWords Services • FlyHigh PR",
  description:
    "Professional AdWords consultation and campaign management services by FlyHigh PR.",
};

export default function AdWordsPage() {
  return (
    <section className=" text-white min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            PR Consultation & Campaign Strategy
          </h1>

          <p className="text-gray-200 leading-relaxed mb-6">
            Our <strong>PR Consultation Program</strong> helps businesses,
            brands, and professionals strengthen their public image and
            communication strategy. Whether you’re an established organization
            or a growing startup, we help you build trust, boost visibility, and
            manage your reputation through data-driven campaigns, media
            relations, and strategic storytelling.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
            We focus on real growth — from keyword research and campaign setup
            to conversion optimization and analytics. With the right mix of
            strategy, automation, and creative design, your brand reaches the
            right audience at the right time.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="inline-block bg-[#1b1b1b] text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-[#333] transition text-sm sm:text-base"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpg"
            alt="AdWords Consultation Office"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition text-white">
            <h3 className="text-lg font-bold mb-2">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Personalized strategy for every profile</li>
              <li>Transparent process & pricing</li>
              <li>Dedicated case manager</li>
            </ul>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition text-white">
            <h3 className="text-lg font-bold mb-2">Our Presence</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Hyderabad, Chennai, Bengaluru <br />
              <span className="text-gray-400">(Virtual support Pan-India)</span>
            </p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition text-white">
            <h3 className="text-lg font-bold mb-2">Our Promise</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              No false guarantees. Honest assessment and clear timelines.
            </p>
          </div>
        </div>
        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mt-6 hover:bg-white/20 transition text-white">
          <h3 className="text-lg font-bold mb-2">Licensing & Ethics</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            We are not a government agency. We provide documentation support and
            guidance. Immigration decisions are made solely by the respective
            governments.
          </p>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-5xl mx-auto mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          What We Provide
        </h2>
        <ul className="list-disc pl-6 text-gray-200 space-y-2 text-base sm:text-lg">
          <li>Comprehensive keyword and competitor analysis.</li>
          <li>AdWords campaign setup (Search, Display, Video & Shopping).</li>
          <li>Continuous optimization to reduce CPC and improve CTR.</li>
          <li>Conversion tracking and analytics integration.</li>
          <li>Monthly performance reports and ROI tracking.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-10 mb-4">
          Contact Details
        </h2>
        <p className="text-gray-200 mb-2 text-sm sm:text-base">
          📍 <strong>Address:</strong> FlyHigh PR Consultancy, Road No. 12,
          Banjara Hills, Hyderabad, Telangana - 500034
        </p>
        <p className="text-gray-200 mb-2 text-sm sm:text-base">
          📞 <strong>Phone:</strong>{" "}
          <a
            href="tel:+919876543210"
            className="text-[#1b1b1b] hover:underline"
          >
            +91 98765 43210
          </a>
        </p>
        <p className="text-gray-200 mb-4 text-sm sm:text-base">
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:info@flyhighpr.com"
            className="text-[#1b1b1b] hover:underline"
          >
            info@flyhighpr.com
          </a>
        </p>

        {/* Google Map Embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[250px] sm:h-[300px] md:h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.442237973149!2d78.4282073!3d17.4240343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b8b02bba81%3A0xdda17d2a12e53b63!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1731476954000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
