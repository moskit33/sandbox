import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
