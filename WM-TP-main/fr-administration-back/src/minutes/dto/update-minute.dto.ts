import { ApiProperty } from '@nestjs/swagger';

export class UpdateMinuteDto {
  @ApiProperty({
    description:
      'The content of the minute, should relate the accepted motions',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sagittis sem. Praesent sollicitudin lacus.',
    type: String,
    required: false,
  })
  public content?: string;

  @ApiProperty({
    description:
      'The ids of the voters. These should be the same than the users that are members of the association',
    example: [1, 2, 3],
    type: [Number],
    required: false,
  })
  public idVoters?: number[];

  @ApiProperty({
    description: 'The date when the general assembly occured',
    example: '12/12/2021',
    type: String,
    required: false,
  })
  public date?: string;

  @ApiProperty({
    description: 'The id of the association',
    example: 1,
    type: Number,
    required: false,
  })
  public idAssociation?: number;
}
