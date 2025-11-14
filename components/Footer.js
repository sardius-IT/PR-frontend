import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 pt-12 pb-6 mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ✅ Logo & About */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/pr.png"
              alt="PR Consultants Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <p className="text-sm mt-3 leading-relaxed text-gray-400">
            Your trusted partner for overseas education, work, and immigration
            opportunities. We guide you to achieve your dreams abroad with
            personalized support and expert visa assistance.
          </p>
          <small className="block text-gray-500 mt-4">
            © {new Date().getFullYear()} PR Consultants. All rights reserved.
          </small>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <strong className="block mb-3 text-white font-semibold">
            Quick Links
          </strong>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/student-visa"
                className="hover:text-white transition"
              >
                Student Visa
              </Link>
            </li>
            <li>
              <Link href="/work-visa" className="hover:text-white transition">
                Work Visa
              </Link>
            </li>
            <li>
              <Link
                href="/tourist-visa"
                className="hover:text-white transition"
              >
                Tourist Visa
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Services */}
        <div>
          <strong className="block mb-3 text-white font-semibold">
            Our Services
          </strong>
          <ul className="space-y-2 text-sm">
            <li>Study Abroad Counseling</li>
            <li>Visa & Immigration Support</li>
            <li>University Admission Guidance</li>
            <li>Career & Profile Evaluation</li>
            <li>Documentation Assistance</li>
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div>
          <strong className="block mb-3 text-white font-semibold">
            Get in Touch
          </strong>
          <ul className="space-y-2 text-sm">
            <li>
              📍 <span className="text-gray-400">Hyderabad, India</span>
            </li>
            <li>
              📞{" "}
              <a href="tel:+919000012345" className="hover:text-white">
                +91 90000 12345
              </a>
            </li>
            <li>
              📧{" "}
              <a
                href="mailto:info@prconsultants.in"
                className="hover:text-white"
              >
                info@prconsultants.in
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center ">
              {/* Facebook */}
              <a
                href="#"
                className="w-12 h-12   flex items-center justify-center hover:bg-white/20 transition"
              >
                <Image
                  src="/facebook_3536394.png"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-12 h-12  flex items-center justify-center hover:bg-white/20 transition"
              >
                <Image
                  src="/instagram_408758-removebg-preview.png"
                  alt="Instagram"
                  width={25}
                  height={25}
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="w-12 h-12 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Image
                  src="/whatsapp_2504957.png"
                  alt="WhatsApp"
                  width={25}
                  height={25}
                />
              </a>

              {/* Email */}
              <a
                href="mailto:yourmail@gmail.com"
                className="w-12 h-12  flex items-center justify-center hover:bg-white/20 transition"
              >
                <Image
                  src="/mail_9068877-removebg-preview.png"
                  alt="Email"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
        © 2025 <span className="text-white font-semibold">✨PR Consultants✨</span>{" "}
        — Your Trusted Abroad Consultancy Partner 

      </div>
    </footer>
  );
}
