export interface UserEvaluation {
  id: number
  question: string
  answers: [ 
    {
      text: string,
      correct: boolean
    }
  ]
  type: string
  level: string
  gravity: number
}