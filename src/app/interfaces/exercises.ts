export interface Exercise {
  id: number
  introduction: string[]
  subintroduction: string[]
  exercise_description: string[]
  category: Category
  hints: Hint[]
  author: Author
  exercise: string
  type: string
  code: string
  output: string[]
}

export interface Category {
  chapter: string
  subchapter: Subchapter[]
}

export interface Subchapter {
  chapter: string
  subchapter: string[]
}

export interface Hint {
  text: string
  code: string
  penalty: string
}

export interface Author {
  name: string
  email: string
}

