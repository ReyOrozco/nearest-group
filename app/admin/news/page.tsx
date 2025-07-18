"use client"

import type React from "react"

import { useState } from "react"
import { CalendarDays, Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Importamos el tipo NewsItem del componente de noticias
import { type NewsItem, newsItems as initialNewsItems } from "@/app/components/news-section"

export default function NewsManagementPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(initialNewsItems)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null)
  const [newNewsItem, setNewNewsItem] = useState<Partial<NewsItem>>({
    id: `news-${Date.now()}`,
    title: "",
    date: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
    summary: "",
    content: "",
    imageUrl: "/placeholder.svg?height=200&width=400",
  })

  // Filtrar noticias
  const filteredNews = newsItems.filter(
    (news) =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (editingNews) {
      setEditingNews({ ...editingNews, [name]: value })
    } else {
      setNewNewsItem({ ...newNewsItem, [name]: value })
    }
  }

  // Agregar nueva noticia
  const handleAddNews = () => {
    if (newNewsItem.title && newNewsItem.summary) {
      const newNews = {
        id: `news-${Date.now()}`,
        title: newNewsItem.title,
        date: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
        summary: newNewsItem.summary,
        content: newNewsItem.content || "",
        imageUrl: newNewsItem.imageUrl || "/placeholder.svg?height=200&width=400",
      } as NewsItem

      setNewsItems([newNews, ...newsItems])
      setNewNewsItem({
        id: `news-${Date.now() + 1}`,
        title: "",
        date: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
        summary: "",
        content: "",
        imageUrl: "/placeholder.svg?height=200&width=400",
      })
      setIsAddDialogOpen(false)
    }
  }

  // Editar noticia
  const handleEditNews = () => {
    if (editingNews && editingNews.title && editingNews.summary) {
      setNewsItems(newsItems.map((item) => (item.id === editingNews.id ? editingNews : item)))
      setEditingNews(null)
    }
  }

  // Eliminar noticia
  const handleDeleteNews = (id: string) => {
    setNewsItems(newsItems.filter((item) => item.id !== id))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de Noticias</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Noticia
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Agregar Nueva Noticia</DialogTitle>
              <DialogDescription>Complete el formulario para crear una nueva noticia.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  name="title"
                  value={newNewsItem.title}
                  onChange={handleInputChange}
                  placeholder="Título de la noticia"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="summary">Resumen</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  value={newNewsItem.summary}
                  onChange={handleInputChange}
                  placeholder="Breve resumen de la noticia"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Contenido Completo</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={newNewsItem.content}
                  onChange={handleInputChange}
                  placeholder="Contenido completo de la noticia"
                  className="min-h-[150px]"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUrl">Imagen</Label>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input
                      id="imageUrl"
                      name="imageUrl"
                      value={newNewsItem.imageUrl}
                      onChange={handleInputChange}
                      placeholder="URL de la imagen"
                    />
                    <span className="text-xs text-muted-foreground">o</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="imageUpload">Subir imagen</Label>
                      <Input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            // En un entorno real, aquí subirías el archivo a un servidor
                            // y obtendrías la URL. Para esta demo, usamos una URL local temporal
                            const tempUrl = URL.createObjectURL(file)
                            setNewNewsItem({ ...newNewsItem, imageUrl: tempUrl })
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                {newNewsItem.imageUrl && (
                  <div className="mt-2 rounded-md border p-2">
                    <img
                      src={newNewsItem.imageUrl || "/placeholder.svg"}
                      alt="Vista previa"
                      className="h-40 w-full object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddNews}>Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar noticias..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las noticias</SelectItem>
            <SelectItem value="published">Publicadas</SelectItem>
            <SelectItem value="draft">Borradores</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="grid">
        <TabsList>
          <TabsTrigger value="grid">Cuadrícula</TabsTrigger>
          <TabsTrigger value="list">Lista</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((news) => (
              <Card key={news.id} className="overflow-hidden">
                {news.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={news.imageUrl || "/placeholder.svg"}
                      alt={news.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      {news.date}
                    </div>
                    <Badge>Publicada</Badge>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="line-clamp-3">{news.summary}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-4">
                  <Button variant="outline" size="sm">
                    Vista previa
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Acciones</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => {
                          setEditingNews(news)
                        }}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteNews(news.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            ))}
          </div>
          {filteredNews.length === 0 && (
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
              <p className="text-muted-foreground">No se encontraron noticias</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="list" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Todas las Noticias</CardTitle>
              <CardDescription>{filteredNews.length} noticias encontradas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 border-b bg-muted/50 p-4 font-medium">
                  <div className="col-span-5">Título</div>
                  <div className="col-span-3">Fecha</div>
                  <div className="col-span-2">Estado</div>
                  <div className="col-span-2 text-right">Acciones</div>
                </div>
                {filteredNews.map((news) => (
                  <div key={news.id} className="grid grid-cols-12 border-b p-4">
                    <div className="col-span-5 font-medium">{news.title}</div>
                    <div className="col-span-3">{news.date}</div>
                    <div className="col-span-2">
                      <Badge>Publicada</Badge>
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Acciones</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuItem
                            onClick={() => {
                              setEditingNews(news)
                            }}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem>Vista previa</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteNews(news.id)}>
                            <Trash className="mr-2 h-4 w-4" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
                {filteredNews.length === 0 && (
                  <div className="flex h-24 items-center justify-center">
                    <p className="text-muted-foreground">No se encontraron noticias</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Diálogo de edición */}
      <Dialog open={!!editingNews} onOpenChange={(open) => !open && setEditingNews(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Editar Noticia</DialogTitle>
            <DialogDescription>Modifique los campos para actualizar la noticia.</DialogDescription>
          </DialogHeader>
          {editingNews && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Título</Label>
                <Input
                  id="edit-title"
                  name="title"
                  value={editingNews.title}
                  onChange={handleInputChange}
                  placeholder="Título de la noticia"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-summary">Resumen</Label>
                <Textarea
                  id="edit-summary"
                  name="summary"
                  value={editingNews.summary}
                  onChange={handleInputChange}
                  placeholder="Breve resumen de la noticia"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-content">Contenido Completo</Label>
                <Textarea
                  id="edit-content"
                  name="content"
                  value={editingNews.content}
                  onChange={handleInputChange}
                  placeholder="Contenido completo de la noticia"
                  className="min-h-[150px]"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-imageUrl">Imagen</Label>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input
                      id="edit-imageUrl"
                      name="imageUrl"
                      value={editingNews.imageUrl}
                      onChange={handleInputChange}
                      placeholder="URL de la imagen"
                    />
                    <span className="text-xs text-muted-foreground">o</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="edit-imageUpload">Subir imagen</Label>
                      <Input
                        id="edit-imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            // En un entorno real, aquí subirías el archivo a un servidor
                            // y obtendrías la URL. Para esta demo, usamos una URL local temporal
                            const tempUrl = URL.createObjectURL(file)
                            setEditingNews({ ...editingNews, imageUrl: tempUrl })
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                {editingNews.imageUrl && (
                  <div className="mt-2 rounded-md border p-2">
                    <img
                      src={editingNews.imageUrl || "/placeholder.svg"}
                      alt="Vista previa"
                      className="h-40 w-full object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingNews(null)}>
              Cancelar
            </Button>
            <Button onClick={handleEditNews}>Guardar Cambios</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
