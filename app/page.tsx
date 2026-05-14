import { BlogPosts } from 'app/components/posts'

const projects = [
  {
    href: '/network_full.html',
    title: 'Network',
    description: 'Interactive network view of USEEIO sectors and relationships.',
  },
  {
    href: '/linkages.html#linkages',
    title: 'Linkages',
    description: 'Explore linkage, shock, and circularity analysis outputs.',
  },
  {
    href: '/flow_analysis.html',
    title: 'Flow Analysis',
    description: 'Sankey-style factor flow exploration from generated data.',
  },
]

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Viktoras Kulionis
      </h1>
      <p className="mb-4">
        I am an economist with a strong interest in sustainability and machine
        learning. I use data, models, and interactive tools to explore economic
        systems and make sense of environmental impacts.
      </p>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300">
        Below is some of my experimental work with USEEIO analysis.
      </p>

      <div className="my-8 grid gap-4">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            className="rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h2 className="font-medium tracking-tight">{project.title}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </a>
        ))}
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Notes</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
