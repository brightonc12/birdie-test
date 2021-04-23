

export interface Event {
    id: string;
    eventType: string;
    taskInstanceId: string;
    visitId: string;
    medicationFailureReason: string;
    caregiverId: string;
    careRecipientId: string;
    timestamp: string;
    note: string;
}

export interface Pagination<T> {
    pageCount: number;
    pageNum: number;
    pageSize: number;
    total: number;
    data: T[]
}