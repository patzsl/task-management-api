export class TaskDto {
    id: string;
    title: string;
    description: string;
    status: string;
    expiration: Date;
}

export interface FindAllParametersDTO {
    title: string;
    status: string
}