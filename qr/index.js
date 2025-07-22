import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs'
const answer = await input({ message: 'Enter website' });

 
var qr_svg = qr.image(answer, { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));