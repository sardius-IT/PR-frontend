import Image from "next/image";
import Link from "next/link";

export default function Hero(){
  return (
    <header className="container grid md:grid-cols-2 gap-6 items-center py-10">
      <div className="card">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full font-semibold text-sm">Hyderabad · Chennai · Pan-India</span>
        <h1 className="text-4xl font-extrabold mt-3">Move Abroad with Confidence</h1>
        <p className="text-slate-600 text-lg mt-2">
          Transparent, step-by-step visa guidance for Canada, Australia, UK, and beyond.
          Get a free eligibility check in 60 seconds.
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/contact" className="btn">Start Free Assessment</Link>
          <Link href="/services" className="btn-outline">Explore Services</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          <div className="kpi"><strong className="text-2xl block">25,000+</strong><span>Assessments</span></div>
          <div className="kpi"><strong className="text-2xl block">1,200+</strong><span>Visa Approvals</span></div>
          <div className="kpi"><strong className="text-2xl block">4.8/5</strong><span>Client Rating</span></div>
        </div>
      </div>
      <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-soft bg-blue-100">
        <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop" alt="Immigration success visuals" fill className="object-cover"/>
      </div>
    </header>
  )
}
