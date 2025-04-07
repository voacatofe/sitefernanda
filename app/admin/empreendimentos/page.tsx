"use client"

import { useState } from "react"
import { projectsData } from "@/app/data/empreendimentos/projects"
import { Project, ProjectStatus, ProjectType } from "@/app/data/empreendimentos/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ImageUploader } from "@/app/components/image-uploader"

export default function AdminEmpreendimentos() {
  const [selectedProject, setSelectedProject] = useState<string>(Object.keys(projectsData)[0])
  const [editingProject, setEditingProject] = useState<Project>(projectsData[selectedProject])

  const handleProjectChange = (projectId: string) => {
    setSelectedProject(projectId)
    setEditingProject(projectsData[projectId])
  }

  const handleSave = () => {
    // TODO: Implementar salvamento das alterações
    console.log("Salvando alterações:", editingProject)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-light mb-8">Gerenciar Empreendimentos</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar com lista de empreendimentos */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Empreendimentos</CardTitle>
              <CardDescription>Selecione um empreendimento para editar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(projectsData).map(([id, project]) => (
                  <Button
                    key={id}
                    variant={selectedProject === id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleProjectChange(id)}
                  >
                    {project.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Área de edição */}
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Editando: {editingProject.title}</CardTitle>
              <CardDescription>Altere as informações do empreendimento</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basic" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
                  <TabsTrigger value="features">Características</TabsTrigger>
                  <TabsTrigger value="location">Localização</TabsTrigger>
                  <TabsTrigger value="gallery">Galeria</TabsTrigger>
                  <TabsTrigger value="floorplans">Plantas</TabsTrigger>
                  <TabsTrigger value="differentials">Diferenciais</TabsTrigger>
                </TabsList>

                {/* Informações Básicas */}
                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Título</Label>
                      <Input
                        id="title"
                        value={editingProject.title}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, title: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tagline">Tagline</Label>
                      <Input
                        id="tagline"
                        value={editingProject.tagline}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, tagline: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="heroImage">Imagem Principal</Label>
                    <ImageUploader
                      value={editingProject.heroImage || ""}
                      onChange={(value: string) =>
                        setEditingProject({ ...editingProject, heroImage: value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição Curta</Label>
                    <Textarea
                      id="description"
                      value={editingProject.description}
                      onChange={(e) =>
                        setEditingProject({ ...editingProject, description: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="longDescription">Descrição Longa</Label>
                    <Textarea
                      id="longDescription"
                      value={editingProject.longDescription}
                      onChange={(e) =>
                        setEditingProject({ ...editingProject, longDescription: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={editingProject.status}
                        onValueChange={(value: ProjectStatus) =>
                          setEditingProject({ ...editingProject, status: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lancamento">Lançamento</SelectItem>
                          <SelectItem value="construcao">Em Construção</SelectItem>
                          <SelectItem value="breve-lancamento">Breve Lançamento</SelectItem>
                          <SelectItem value="entregue">Entregue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Tipo</Label>
                      <Select
                        value={editingProject.type}
                        onValueChange={(value: ProjectType) =>
                          setEditingProject({ ...editingProject, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residencial">Residencial</SelectItem>
                          <SelectItem value="comercial">Comercial</SelectItem>
                          <SelectItem value="misto">Misto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fernandasNotes">Notas da Fernanda</Label>
                    <Textarea
                      id="fernandasNotes"
                      value={editingProject.fernandasNotes}
                      onChange={(e) =>
                        setEditingProject({ ...editingProject, fernandasNotes: e.target.value })
                      }
                    />
                  </div>
                </TabsContent>

                {/* Características */}
                <TabsContent value="features" className="space-y-4">
                  <div className="space-y-4">
                    {editingProject.features.map((feature, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`feature-title-${index}`}>Título</Label>
                              <Input
                                id={`feature-title-${index}`}
                                value={feature.title}
                                onChange={(e) => {
                                  const newFeatures = [...editingProject.features]
                                  newFeatures[index] = {
                                    ...newFeatures[index],
                                    title: e.target.value,
                                  }
                                  setEditingProject({
                                    ...editingProject,
                                    features: newFeatures,
                                  })
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`feature-description-${index}`}>Descrição</Label>
                              <Input
                                id={`feature-description-${index}`}
                                value={feature.description}
                                onChange={(e) => {
                                  const newFeatures = [...editingProject.features]
                                  newFeatures[index] = {
                                    ...newFeatures[index],
                                    description: e.target.value,
                                  }
                                  setEditingProject({
                                    ...editingProject,
                                    features: newFeatures,
                                  })
                                }}
                              />
                            </div>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="mt-4"
                            onClick={() => {
                              const newFeatures = [...editingProject.features]
                              newFeatures.splice(index, 1)
                              setEditingProject({
                                ...editingProject,
                                features: newFeatures,
                              })
                            }}
                          >
                            Remover
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      setEditingProject({
                        ...editingProject,
                        features: [
                          ...editingProject.features,
                          { title: "", description: "" },
                        ],
                      })
                    }}
                  >
                    Adicionar Característica
                  </Button>
                </TabsContent>

                {/* Localização */}
                <TabsContent value="location" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="location-description">Descrição da Localização</Label>
                      <Textarea
                        id="location-description"
                        value={editingProject.location?.description || ""}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            location: {
                              ...(editingProject.location || {}),
                              description: e.target.value,
                            },
                          })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Locais Próximos</Label>
                      <div className="space-y-4">
                        {(editingProject.location?.nearby || []).map((nearby, index) => (
                          <Card key={index}>
                            <CardContent className="pt-6">
                              <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`nearby-time-${index}`}>Tempo</Label>
                                  <Input
                                    id={`nearby-time-${index}`}
                                    value={nearby.time}
                                    onChange={(e) => {
                                      const newLocations = [...(editingProject.location?.nearby || [])]
                                      newLocations[index] = {
                                        ...newLocations[index],
                                        time: e.target.value,
                                      }
                                      setEditingProject({
                                        ...editingProject,
                                        location: {
                                          ...(editingProject.location || {}),
                                          nearby: newLocations,
                                        },
                                      })
                                    }}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`nearby-place-${index}`}>Local</Label>
                                  <Input
                                    id={`nearby-place-${index}`}
                                    value={nearby.place}
                                    onChange={(e) => {
                                      const newLocations = [...(editingProject.location?.nearby || [])]
                                      newLocations[index] = {
                                        ...newLocations[index],
                                        place: e.target.value,
                                      }
                                      setEditingProject({
                                        ...editingProject,
                                        location: {
                                          ...(editingProject.location || {}),
                                          nearby: newLocations,
                                        },
                                      })
                                    }}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`nearby-description-${index}`}>Descrição</Label>
                                  <Input
                                    id={`nearby-description-${index}`}
                                    value={nearby.description}
                                    onChange={(e) => {
                                      const newLocations = [...(editingProject.location?.nearby || [])]
                                      newLocations[index] = {
                                        ...newLocations[index],
                                        description: e.target.value,
                                      }
                                      setEditingProject({
                                        ...editingProject,
                                        location: {
                                          ...(editingProject.location || {}),
                                          nearby: newLocations,
                                        },
                                      })
                                    }}
                                  />
                                </div>
                              </div>
                              <Button
                                variant="destructive"
                                size="sm"
                                className="mt-4"
                                onClick={() => {
                                  const newLocations = [...(editingProject.location?.nearby || [])]
                                  newLocations.splice(index, 1)
                                  setEditingProject({
                                    ...editingProject,
                                    location: {
                                      ...(editingProject.location || {}),
                                      nearby: newLocations,
                                    },
                                  })
                                }}
                              >
                                Remover
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Button
                        onClick={() => {
                          setEditingProject({
                            ...editingProject,
                            location: {
                              ...(editingProject.location || {}),
                              nearby: [
                                ...(editingProject.location?.nearby || []),
                                { time: "", place: "", description: "" },
                              ],
                            },
                          })
                        }}
                      >
                        Adicionar Local Próximo
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-image">Imagem do Mapa</Label>
                      <Input
                        id="map-image"
                        value={editingProject.location?.mapImage || ""}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            location: {
                              ...(editingProject.location || {}),
                              mapImage: e.target.value,
                            },
                          })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address-street">Rua</Label>
                        <Input
                          id="address-street"
                          value={editingProject.address?.street || ""}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              address: {
                                ...(editingProject.address || {}),
                                street: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address-number">Número</Label>
                        <Input
                          id="address-number"
                          value={editingProject.address?.number || ""}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              address: {
                                ...(editingProject.address || {}),
                                number: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address-neighborhood">Bairro</Label>
                        <Input
                          id="address-neighborhood"
                          value={editingProject.address?.neighborhood || ""}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              address: {
                                ...(editingProject.address || {}),
                                neighborhood: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address-city">Cidade</Label>
                        <Input
                          id="address-city"
                          value={editingProject.address?.city || ""}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              address: {
                                ...(editingProject.address || {}),
                                city: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address-state">Estado</Label>
                        <Input
                          id="address-state"
                          value={editingProject.address?.state || ""}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              address: {
                                ...(editingProject.address || {}),
                                state: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address-zipcode">CEP</Label>
                        <Input
                          id="address-zipcode"
                          value={editingProject.address?.zipCode || ""}
                          onChange={(e) =>
                            setEditingProject({
                              ...editingProject,
                              address: {
                                ...(editingProject.address || {}),
                                zipCode: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Galeria */}
                <TabsContent value="gallery" className="space-y-4">
                  <div className="space-y-4">
                    {(editingProject.gallery || []).map((image, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="space-y-2">
                            <Label htmlFor={`gallery-image-${index}`}>Imagem</Label>
                            <ImageUploader
                              value={image || ""}
                              onChange={(value: string) => {
                                const newGallery = [...(editingProject.gallery || [])]
                                newGallery[index] = value
                                setEditingProject({
                                  ...editingProject,
                                  gallery: newGallery,
                                })
                              }}
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="mt-4"
                            onClick={() => {
                              const newGallery = [...(editingProject.gallery || [])]
                              newGallery.splice(index, 1)
                              setEditingProject({
                                ...editingProject,
                                gallery: newGallery,
                              })
                            }}
                          >
                            Remover
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      setEditingProject({
                        ...editingProject,
                        gallery: [...(editingProject.gallery || []), ""],
                      })
                    }}
                  >
                    Adicionar Imagem
                  </Button>
                </TabsContent>

                {/* Plantas */}
                <TabsContent value="floorplans" className="space-y-4">
                  <div className="space-y-4">
                    {(editingProject.floorplans || []).map((floorplan, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`floorplan-title-${index}`}>Título</Label>
                              <Input
                                id={`floorplan-title-${index}`}
                                value={floorplan.title}
                                onChange={(e) => {
                                  const newFloorplans = [...(editingProject.floorplans || [])]
                                  newFloorplans[index] = {
                                    ...newFloorplans[index],
                                    title: e.target.value,
                                  }
                                  setEditingProject({
                                    ...editingProject,
                                    floorplans: newFloorplans,
                                  })
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`floorplan-image-${index}`}>Imagem</Label>
                              <ImageUploader
                                value={floorplan.image || ""}
                                onChange={(value: string) => {
                                  const newFloorplans = [...(editingProject.floorplans || [])]
                                  newFloorplans[index] = {
                                    ...newFloorplans[index],
                                    image: value,
                                  }
                                  setEditingProject({
                                    ...editingProject,
                                    floorplans: newFloorplans,
                                  })
                                }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2 mt-4">
                            <Label htmlFor={`floorplan-description-${index}`}>Descrição</Label>
                            <Textarea
                              id={`floorplan-description-${index}`}
                              value={floorplan.description}
                              onChange={(e) => {
                                const newFloorplans = [...(editingProject.floorplans || [])]
                                newFloorplans[index] = {
                                  ...newFloorplans[index],
                                  description: e.target.value,
                                }
                                setEditingProject({
                                  ...editingProject,
                                  floorplans: newFloorplans,
                                })
                              }}
                            />
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="mt-4"
                            onClick={() => {
                              const newFloorplans = [...(editingProject.floorplans || [])]
                              newFloorplans.splice(index, 1)
                              setEditingProject({
                                ...editingProject,
                                floorplans: newFloorplans,
                              })
                            }}
                          >
                            Remover
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      setEditingProject({
                        ...editingProject,
                        floorplans: [
                          ...(editingProject.floorplans || []),
                          { title: "", description: "", image: "" },
                        ],
                      })
                    }}
                  >
                    Adicionar Planta
                  </Button>
                </TabsContent>

                {/* Diferenciais */}
                <TabsContent value="differentials" className="space-y-4">
                  <div className="space-y-4">
                    {(editingProject.differentials || []).map((differential, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`differential-title-${index}`}>Título</Label>
                              <Input
                                id={`differential-title-${index}`}
                                value={differential.title}
                                onChange={(e) => {
                                  const newDifferentials = [...(editingProject.differentials || [])]
                                  newDifferentials[index] = {
                                    ...newDifferentials[index],
                                    title: e.target.value,
                                  }
                                  setEditingProject({
                                    ...editingProject,
                                    differentials: newDifferentials,
                                  })
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`differential-description-${index}`}>Descrição</Label>
                              <Input
                                id={`differential-description-${index}`}
                                value={differential.description}
                                onChange={(e) => {
                                  const newDifferentials = [...(editingProject.differentials || [])]
                                  newDifferentials[index] = {
                                    ...newDifferentials[index],
                                    description: e.target.value,
                                  }
                                  setEditingProject({
                                    ...editingProject,
                                    differentials: newDifferentials,
                                  })
                                }}
                              />
                            </div>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="mt-4"
                            onClick={() => {
                              const newDifferentials = [...(editingProject.differentials || [])]
                              newDifferentials.splice(index, 1)
                              setEditingProject({
                                ...editingProject,
                                differentials: newDifferentials,
                              })
                            }}
                          >
                            Remover
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      setEditingProject({
                        ...editingProject,
                        differentials: [
                          ...(editingProject.differentials || []),
                          { title: "", description: "" },
                        ],
                      })
                    }}
                  >
                    Adicionar Diferencial
                  </Button>
                </TabsContent>

                {/* TODO: Implementar outras abas */}
              </Tabs>

              <div className="mt-8 flex justify-end">
                <Button onClick={handleSave}>Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 