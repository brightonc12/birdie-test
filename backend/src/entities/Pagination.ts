export default class Pagination<T> {

    constructor(
        public pageCount: number = 0,
        public pageNum: number = 0,
        public pageSize: number = 0,
        public total: number = 0,
        public data: T[] = []) {

    }
}