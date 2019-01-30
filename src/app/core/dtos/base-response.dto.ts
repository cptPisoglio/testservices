export interface BaseResponseDto<DataType> {
    status: number;
    data?: DataType;
    message?: string;
}