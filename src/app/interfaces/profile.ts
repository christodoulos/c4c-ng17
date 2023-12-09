export interface Profile {
  id: string
  email: string
  firstname: string
  lastname: string
  password: string
  role: Role
  language: Language[]
}

export interface Role {
  type: string
}

export interface Language {
  language: string
  evaluation: boolean
}