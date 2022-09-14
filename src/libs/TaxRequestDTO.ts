import { IsIn, IsNotEmpty, IsString, ValidateNested, IsArray, ArrayNotEmpty, ArrayMinSize} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class TaxRequestDTO {
  @ApiProperty({ description: 'Vehicle Type must be "Motorcycle", "Tractor", "Emergency", "Diplomat", "Foreign", "Military", "Car".', type: String, required: true })
  @IsNotEmpty({ message: 'vehicle type: must be provided' })
  @IsString()
  @IsIn(["Motorcycle", "Tractor", "Emergency", "Diplomat", "Foreign", "Military", "Car"])
  vehicleType: string;

  @ApiProperty({ description: 'City must be "Gothenburg", "Stockholm".', type: String, required: true })
  @IsNotEmpty({ message: 'city: must be provided' })
  @IsString()
  @IsIn(["Gothenburg", "Stockholm"])
  city: string;

  @ApiProperty({ description: 'Dates must be an array of valid dates.', type: Array<Date>, required: true })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Date)
  @ArrayMinSize(1)
  dates: Date[];
}