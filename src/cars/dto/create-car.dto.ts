import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly year: number;
}
