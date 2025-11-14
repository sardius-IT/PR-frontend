export const metadata = { title: "Blog • ImmigraPath" };

function PostCard({title, excerpt}){
  return (
    <article className="card">
      <h3 className="font-bold">{title}</h3>
      <p>{excerpt}</p>
      <a className="btn-outline mt-3" href="#">Read</a>
    </article>
  )
}

export default function BlogPage(){
  return (
    <div className="container py-8">
      <div className="text-sm text-slate-500 mb-3">Home › Blog</div>
      <h1 className="text-3xl font-extrabold">Insights & Updates</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <PostCard title="Canada Express Entry: 2025 Overview" excerpt="What’s new in category-based draws and how to maximize your CRS." />
        <PostCard title="Australia Points: Quick Wins" excerpt="From English scores to state nomination—practical ways to add points." />
        <PostCard title="Statement of Purpose: Do’s & Don’ts" excerpt="Write a compelling SOP that stands out for student visas." />
      </div>
    </div>
  )
}
