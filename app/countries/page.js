export const metadata = { title: "Countries • ImmigraPath" };

function CountryCard({title, children}){
  return (
    <div className="card">
      <h3 className="font-bold">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function CountriesPage(){
  return (
    <div className="container py-8">
      <div className="text-sm text-slate-500 mb-3">Home › Countries</div>
      <h1 className="text-3xl font-extrabold">Countries We Serve</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <CountryCard title="Canada">Express Entry, PNPs (OINP, BCPNP, SINP, etc.), Study Permits</CountryCard>
        <CountryCard title="Australia">Skilled Independent, State Nomination, Graduate visas</CountryCard>
        <CountryCard title="United Kingdom">Skilled Worker, Global Talent, Student routes</CountryCard>
        <CountryCard title="Germany">Job Seeker, EU Blue Card, Student visas</CountryCard>
        <CountryCard title="United States">Student (F-1), H-1B overview, pathways & counseling</CountryCard>
        <CountryCard title="More">New Zealand, Ireland, UAE and additional destinations</CountryCard>
      </div>
    </div>
  )
}
