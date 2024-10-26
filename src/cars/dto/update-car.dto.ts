import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsNumber()
  @IsOptional()
  readonly price?: number;

  @IsNumber()
  @IsOptional()
  readonly year?: number;
}
