import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-light mb-8">Bem-vindo ao Painel Administrativo</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Empreendimentos</CardTitle>
            <CardDescription>Gerencie os empreendimentos da Dimas</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/empreendimentos">Gerenciar Empreendimentos</Link>
            </Button>
          </CardContent>
        </Card>

        {/* TODO: Adicionar mais cards conforme necessário */}
      </div>
    </div>
  )
} 