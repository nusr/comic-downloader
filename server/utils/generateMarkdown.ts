import mustache from 'mustache';
import Path from 'path';
import fs from 'fs';
import urlConfig from '../shared/urlConfig';
import logger from './logger';
import { UrlConfigItem } from '../shared/type';

function generateMarkdown() {
    const sourceFilePath = Path.join(
        process.cwd(),
        '../docs/readmeTemplate.md',
    );
    const template = fs.readFileSync(sourceFilePath, 'utf8');
    const result = Object.values(urlConfig);
    const resultMarkdown = mustache.render(template, {
        siteList: result.filter((item: UrlConfigItem): boolean => item.enabled),
    });
    const resultFilePath = Path.join(process.cwd(), '../README.md');
    fs.writeFileSync(resultFilePath, resultMarkdown);
    logger.info(`[Update README.md Success] ${resultFilePath}`);
}

generateMarkdown();
