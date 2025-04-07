"use client"

import { FC, useState, ChangeEvent, DragEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface ImageUploaderProps {
  value: string
  onChange: (value: string) => void
}

export const ImageUploader: FC<ImageUploaderProps> = ({ value, onChange }) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer?.files) {
      const file = e.dataTransfer.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          onChange(reader.result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onChange(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card
      className="relative border-2 border-dashed p-4 hover:border-primary/50 transition-colors"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-4">
        {value ? (
          <>
            <img
              src={value}
              alt="Preview"
              className="max-h-48 object-contain"
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onChange("")}
            >
              Remover
            </Button>
          </>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer text-center"
            >
              <div className="text-sm text-muted-foreground">
                Arraste uma imagem ou clique para selecionar
              </div>
            </label>
          </>
        )}
      </div>
    </Card>
  )
} 