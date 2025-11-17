import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  @Matches(/^[a-zA-Z][a-zA-Z\s]{2,95}$/, {
    message:
      'Firstname must be 3-96 characters long, start with a letter, and contain only letters and spaces!',
  })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  @Matches(/^[a-zA-Z][a-zA-Z\s]{2,95}$/, {
    message:
      'Lastname must be 3-96 characters long, start with a letter, and contain only letters and spaces!',
  })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Password must be at least 8 characters long and include at least one letter, one number, and one special character (@$!%*#?&)!',
  })
  password: string;
}
