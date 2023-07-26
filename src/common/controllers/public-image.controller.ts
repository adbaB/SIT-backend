import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('image')
export class PublicImageController {
  @Get('/logo')
  async getLogo(@Res({ passthrough: true }) res: Response) {
    const image = readFileSync(
      join(__dirname, './../../../public/Image/logo.png'),
    );

    res.contentType('image/png');

    res.send(image);
  }
  @Get('/logo-alcaldia')
  async getLogoAlcaldia(@Res({ passthrough: true }) res: Response) {
    const image = readFileSync(
      join(__dirname, './../../../public/Image/logo_alcaldia.png'),
    );

    res.contentType('image/png');

    res.send(image);
  }
}
