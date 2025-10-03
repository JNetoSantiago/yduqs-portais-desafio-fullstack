import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateEnrollDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  yearConclusionSchool: string;

  @IsBoolean()
  @IsNotEmpty()
  acceptTerms: boolean;

  @IsBoolean()
  @IsNotEmpty()
  allowReceiveNotifications: boolean;

  @IsInt()
  @IsNotEmpty()
  offerId: number;

  @IsInt()
  @IsNotEmpty()
  installmentId: number;
}
