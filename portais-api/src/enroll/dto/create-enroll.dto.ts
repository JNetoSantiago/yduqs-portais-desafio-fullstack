import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ description: 'Nome completo do aluno' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Email válido do aluno' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'CPF do aluno, somente números' })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    description: 'Data de nascimento do aluno',
    type: String,
    example: '2000-01-01',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  birthdate: Date;

  @ApiProperty({ description: 'Telefone do aluno' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Ano de conclusão escolar' })
  @IsString()
  @IsNotEmpty()
  yearConclusionSchool: string;

  @ApiProperty({ description: 'Aceita termos de uso' })
  @IsBoolean()
  @IsNotEmpty()
  acceptTerms: boolean;

  @ApiProperty({ description: 'Permite receber notificações' })
  @IsBoolean()
  @IsNotEmpty()
  allowReceiveNotifications: boolean;

  @ApiProperty({ description: 'ID da oferta escolhida' })
  @IsInt()
  @IsNotEmpty()
  offerId: number;

  @ApiProperty({ description: 'ID da parcela escolhida' })
  @IsInt()
  @IsNotEmpty()
  installmentId: number;
}
