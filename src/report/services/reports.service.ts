import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';

import * as fs from 'fs';
import hbs from 'handlebars';
import * as path from 'path';
import puppeteer, { PDFOptions } from 'puppeteer';
import { templates } from '../template';

@Injectable()
export class ReportService {
  async renderTemplate(name: string, data: any) {
    const templateInfo = templates.find((template) => template.name === name);

    if (!templateInfo.name) {
      throw new NotFoundException('Invalid report');
    }
    if (!templateInfo.folder && !templateInfo.template) {
      throw new NotFoundException('Invalid report');
    }
    const html = fs.readFileSync(
      path.join(templateInfo.folder, templateInfo.template),
      { encoding: 'utf-8' },
    );

    if (templateInfo.helpers) {
      const { helpers } = await import(
        path.join(templateInfo.folder, templateInfo.helpers)
      );
      // const { helper } = helpers;

      for (const func of helpers) {
        hbs.registerHelper(func.name, func.function);
      }
    }

    const template = hbs.compile(html);
    const rendered = template(data);
    return rendered;
  }

  async createPdf(htmlContent: string, options: PDFOptions) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent);
    await page.emulateMediaType('screen');
    await page.waitForNetworkIdle({ idleTime: 1000, timeout: 2000 });
    const pdf = await page.pdf(options);
    page.close();
    return pdf;
  }
}
