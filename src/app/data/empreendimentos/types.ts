export interface Feature {
  title: string
  description: string
}

export interface Floorplan {
  title: string
  description: string
  image: string
}

export interface NearbyLocation {
  time: string
  place: string
  description: string
}

export interface Location {
  description?: string
  nearby?: NearbyLocation[]
  mapImage?: string
}

export interface Differential {
  title: string
  description: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface Address {
  street?: string
  number?: string
  neighborhood?: string
  city?: string
  state?: string
  zipCode?: string
  coordinates: Coordinates
}

export type ProjectStatus = "lancamento" | "construcao" | "breve-lancamento" | "entregue"
export type ProjectType = "residencial" | "comercial" | "misto"

export interface Project {
  title: string
  tagline: string
  description: string
  longDescription?: string
  features: Feature[]
  gallery?: string[]
  heroImage: string
  mainImage?: string
  additionalImages?: string[]
  floorplans?: Floorplan[]
  location?: Location
  differentials?: Differential[]
  fernandasNotes?: string
  status: ProjectStatus
  type: ProjectType
  address: Address
} 