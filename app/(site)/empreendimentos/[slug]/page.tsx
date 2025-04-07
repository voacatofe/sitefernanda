import { projectsData } from "@/app/data/empreendimentos/projects"
import ProjectContent from "./ProjectContent"

// Definir os tipos
type Props = {
  params: Promise<{
    slug: string
  }>
}

// Componente do servidor
export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData]

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Projeto não encontrado</div>
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      <ProjectContent project={project} />
    </main>
  )
}

// Gerar páginas estáticas para cada empreendimento
export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}

