
interface Result {
    label: String,
    value: number
}

interface Evaluation {
    id: number,
    title: string,
    results: Result[]
}

export interface Evaluations {
    evaluation: Evaluation[]
}