import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    type: String,
    description: 'User first name',
    example: 'John',
  })
  firstName?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'User last name',
    example: 'Doe',
  })
  lastName?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'User email address',
    example: 'john.doe@example.com',
  })
  email?: string;

  @ApiPropertyOptional({
    type: [String],
    description: 'Roles assigned to the user',
    example: ['admin', 'user'],
    default: ['user'],
  })
  roles?: string[];
}
