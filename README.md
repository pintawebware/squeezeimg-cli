squeezeimg
==========
The Squeezeimg-cli is destined to optimize unlimited images without any visible loss in quality.
Using the Squeezeimg-cli you can easily minify the size of all your images, speed up loading of your websites and applications.
You can compress your images of such formats - .png, .jpg/.jpeg, .gif, .svg, .bmp, .tiff.
Also allows you to convert your images to webP and jp2 format.
Try the functions right now. To do this, go to https://squeezeimg.com/.



<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @pintawebware/squeezeimg
$ squeezeimg COMMAND
running command...
$ squeezeimg (-v|--version|version)
@pintawebware/squeezeimg/0.0.6 linux-x64 node-v14.16.0
$ squeezeimg --help [COMMAND]
USAGE
  $ squeezeimg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`squeezeimg help [COMMAND]`](#squeezeimg-help-command)
* [`squeezeimg start`](#squeezeimg-start)

## `squeezeimg help [COMMAND]`

display help for squeezeimg

```
USAGE
  $ squeezeimg help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `squeezeimg start`

```
USAGE
  $ squeezeimg start

OPTIONS
  -d, --dir=dir        [default: /home/pinta/Projects/SqueezeIMG/squeezeimg] [REQUIRED]
                       USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN>
                       ------>   set directory to compress/convert your images, default compress

  -m, --method=method  [default: compress] [OPTIONAL]
                       USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m [compress/convert]>
                       ------>   method, default compress

  -q, --qlt=qlt        [default: 60] [OPTIONAL]
                       USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -q [60/70/80]>
                       ------>   set quality, default 60

  -r, --rename=rename  [OPTIONAL]
                       USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m convert --to [webp/jp2] --rename
                       [true/false]>
                       ------>   rename option, returns renamed image but original file stays saved, default false

  -t, --token=token    [REQUIRED]
                       USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN>
                       ------>   token you need to start process, find it here https://squeezeimg.com/account/api

  -t, --to=to          [default: webp] [OPTIONAL]
                       USAGE: <$ squeezeimg start -d /your/directory -t YOUR_TOKEN -m convert --to [webp/jp2]>
                       ------>   format you want to receive, default webP

  --help               show CLI help

  --version            show CLI version
```

_See code: [src/commands/start.js](https://github.com/pintawebware/squeezeimg-cli/blob/v0.0.6/src/commands/start.js)_
<!-- commandsstop -->
