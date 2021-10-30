
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

export interface RootState {
    evaluations:{
        data : Evaluations,
        status: String,
        getData: Boolean,
        detail: Evaluation[]
    }
}