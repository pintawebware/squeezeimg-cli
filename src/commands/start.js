const fs = require('fs');
const { Command, flags } = require('@oclif/command');
const request = require('request');
const path = require('path');

const PLUGIN_NAME = 'squeezeimg-cli';
const URL = 'https://api.squeezeimg.com/plugin'; 
const EXTENSIONS = ['.jpg','.png','.svg','.jpeg','.jp2','.gif','.tiff','.bmp','.PNG','.JPEG','.GIF','.SVG','.TIFF','.BMP'];

let ERROR_TARIFF = false;

const startOpti = async (dir, flags) => {
  let files = fs.readdirSync(dir);
    for (let f of files) {
      if(fs.lstatSync(`${dir}/${f}`).isDirectory()) {
        await startOpti(`${dir}/${f}`, flags);
      } else {
        await run_opti(`${dir}/${f}`, flags);
      }
    }
}

const run_opti = async (file, options) =>  {
  return new Promise((resolve) => {
    if (EXTENSIONS.includes(`.${file.split('.').pop()}`)) {
      try {
        let data = fs.readFileSync(file);
        let req = request.post({ url:URL, encoding: 'binary' }, (err, resp, body) => {
        let filename = file;
          if (err) {
              console.log(`${PLUGIN_NAME} error: ${err}`);
          } else if (resp.statusCode === 200) {
              if (options.rename === true || options.rename === 'true') {
                filename = (path.dirname(file) + '/' + resp.headers["content-disposition"].split('=').pop().replace(/"/g,''));                 
              } else if(fs.existsSync(filename.replace(path.extname(filename), path.extname(resp.headers["content-disposition"].split('=').pop().replace(/"/g,'')))) && options.method === 'convert') {
                filename = (path.dirname(file) + '/' + path.parse(filename).base + path.extname(resp.headers["content-disposition"].split('=').pop().replace(/"/g,'')));
              } else {
                filename = filename.replace(path.extname(filename), path.extname(resp.headers["content-disposition"].split('=').pop().replace(/"/g,'')));
              }
                fs.writeFileSync(filename, body, {encoding: 'binary'});
                console.log(`${PLUGIN_NAME} optimize: ${filename}`);
          } else if ( resp.statusCode > 200 ) {
              let str = Buffer.from(body, 'binary').toString();
              let res = {};
              try {
                  res = JSON.parse(str);
              } catch(err) {
                console.log(`${PLUGIN_NAME} error: ${err}`);
              }
          }
          resolve();
      });
        let formData = req.form();
        formData.append('file_name', file.split('/').pop());
        formData.append('qlt', options.qlt || 60);
        formData.append('token', options.token);
        formData.append('source', "CLI : Node JS");
        formData.append('method', options.method || 'compress');
        formData.append('file', data, { filename: file.split('/').pop() });
        formData.append('to', options.to || 'webp');
      } catch(err) {
        console.log(`${PLUGIN_NAME} error: ${err}`);
        resolve();
      }
    } else {
      resolve();
    }   
  })
}   

class SQUEEZEIMG extends Command {
  async run() {
    const {flags} = this.parse(SQUEEZEIMG);
    await startOpti(flags.dir, flags);
  }
}

SQUEEZEIMG.flags = {
  version: flags.version(),
  help: flags.help(),
  dir: flags.string({
    char: 'd',
    default: process.cwd(),
    description: '[REQUIRED]\nUSAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN> \n------>   set directory to compress/convert your images, default compress'
  }),
  token: flags.string({
    char: 't',
    default: '',
    description: '[REQUIRED]\nUSAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN> \n------>   token you need to start process, find it here https://squeezeimg.com/account/api'
  }),
  qlt: flags.string({
    char: 'q',
    default: 60,
    description: '[OPTIONAL]\nUSAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -q [60/70/80]> \n------>   set quality, default 60'
  }),
  method: flags.string({
    char: 'm',
    default: 'compress',
    description: '[OPTIONAL]\nUSAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m [compress/convert]> \n------>   method, default compress'
  }),
  to: flags.string({
    char: 'to',
    default: 'webp',
    description: '[OPTIONAL]\nUSAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m convert --to [webp/jp2]> \n------>   format you want to receive, default webP'
  }),
  rename: flags.string({
    char: 'r',
    default: false,
    description: '[OPTIONAL]\nUSAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m convert --to [webp/jp2] --rename [true/false]> \n------>   rename option, returns renamed image but original file stays saved, default false'
  })
}

module.exports = SQUEEZEIMG;