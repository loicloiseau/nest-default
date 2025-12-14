import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'User first name',
    example: 'John',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'User last name',
    example: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'User email address',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiPropertyOptional({
    type: [String],
    description: 'Roles assigned to the user',
    example: ['admin', 'user'],
    default: ['user'],
  })
  roles?: string[];
}
