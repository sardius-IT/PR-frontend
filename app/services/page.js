export const metadata = { title: "Services • ImmigraPath" };

export default function ServicesPage(){
  return (
    <div className="container py-8">
      <div className="text-sm text-slate-500 mb-3">Home › Services</div>
      <h1 className="text-3xl font-extrabold">Our Services</h1>
      <div className="card mt-3 border-l-4 border-emerald-500 bg-emerald-50 text-emerald-700">
        We provide ethical guidance with clear timelines and transparent fees.
      </div>
      <h2 id="pr" className="text-2xl font-bold mt-6">Permanent Residency</h2>
      <div className="overflow-x-auto mt-3">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="[&>th]:text-left [&>th]:text-sm [&>th]:text-slate-600">
              <th>Program</th><th>What we do</th><th>Timeline</th>
            </tr>
          </thead>
          <tbody className="[&>tr>td]:bg-white [&>tr>td]:p-4 [&>tr>td]:rounded-xl shadow-soft">
            <tr><td>Canada Express Entry</td><td>CRS evaluation, NOC mapping, document checklist, profile creation, ITA to e-APR filing</td><td>6–12 months</td></tr>
            <tr><td>Provincial Nominee Programs</td><td>PNP monitoring, EOI, nomination application, bridging work permits</td><td>Varies</td></tr>
            <tr><td>Australia PR</td><td>Skills assessment, points strategy, EOI, state nomination, visa filing</td><td>8–14 months</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="study" className="text-2xl font-bold mt-6">Study Abroad</h2>
      <ul className="list-disc pl-6 space-y-1 mt-3">
        <li>Shortlisting universities and programs aligned to your profile & budget</li>
        <li>SOP/LOR editing, application filing, scholarships and education loans</li>
        <li>Student visa filing and pre-departure support</li>
      </ul>

      <h2 id="work" className="text-2xl font-bold mt-6">Work Permits</h2>
      <ul className="list-disc pl-6 space-y-1 mt-3">
        <li>Employer-driven pathways, LMIA guidance (Canada), skilled migration options</li>
        <li>Resume localization, LinkedIn optimization, interview readiness</li>
      </ul>
    </div>
  )
}
