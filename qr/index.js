import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs'

try {
    const answer = await input({ message: 'Enter website' });
    var qr_svg = qr.image(answer, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('link.png'));
} catch (error) {
    console.log("error");
}
