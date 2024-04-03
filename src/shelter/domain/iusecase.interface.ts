export interface IUseCase <Input, Output>{
   run(imput: Input): Promise<Output>
}