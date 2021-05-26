const fs = require('fs');
const { Command, flags } = require('@oclif/command');
const request = require('request');
const path = require('path');

const PLUGIN_NAME = 'squeezeimg-cli';
const URL = 'https://api.squeezeimg.com/plugin'; 
const EXTENSIONS = ['.jpg','.png','.svg','.jpeg','.jp2','.gif','.tiff','.bmp','.PNG','.JPEG','.GIF','.SVG','.TIFF','.BMP'];

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
    if( EXTENSIONS.includes(`.${file.split('.').pop()}`)) {
      let data = fs.readFileSync(file);
      let req = request.post({ url:URL, encoding: 'binary' }, (err, resp, body) => {
        let filename = file;
          if (err) {
              console.log(`${PLUGIN_NAME} error: ${err}`);
          } else if(resp.statusCode === 200) {
              if(options.rename){
                filename = resp.headers["content-disposition"].split('=').pop().replace(/"/g,'');
              }
              filename = filename.replace(path.extname(filename), path.extname(resp.headers["content-disposition"].split('=').pop().replace(/"/g,'')));
              fs.writeFileSync(filename, body, {encoding: 'binary'});
              console.log(`${PLUGIN_NAME} optimize: ${filename}`)
          } else if( resp.statusCode > 200 ){
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
  // Enter directory with --dir=/your/directory or -d=/your/directory
  dir: flags.string({
    char: 'd',
    default: process.cwd(),
    description: 'USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN> ---> set directory to compress/convert your images, default compress'
  }),
  // Enter token with --token= or -t=
  token: flags.string({
    char: 't',
    default: '',
    description: 'USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN> ---> token you need to start process, find it here https://squeezeimg.com/account/api'
  }),
  qlt: flags.string({
    char: 'q',
    default: 60,
    description: 'USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -q [0-100]> ---> set quality, default 60'
  }),
  method: flags.string({
    char: 'm',
    default: 'compress',
    description: 'USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m [compress/convert]> ---> method, default compress'
  }),
  to: flags.string({
    char: 'to',
    default: 'webp',
    description: 'USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m convert -to [webp/jp2]> ---> format you want to recieve, default webP'
  }),
  // rename: flags.string({
  //   char: 'rnm',
  //   default: false,
  //   description: 'USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m convert -to [webp/jp2] -rnm [true/false]> ---> rename option, default false'
  // })
}

module.exports = SQUEEZEIMG;