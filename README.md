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
First install Node.js and npm. You can do it here https://nodejs.org/ru/download/package-manager/
```sh-session
$ npm install -g @pintawebware/squeezeimg
$ squeezeimg COMMAND
running command...
$ squeezeimg (-v|--version|version)
@pintawebware/squeezeimg/0.0.1 linux-x64 node-v14.16.0
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
  -d, --dir=dir        [default: /home/pinta/Projects/SqueezeIMG/squeezeimg]
  -m, --method=method  [default: compress]
  -q, --qlt=qlt        [default: 60]
  -r, --rename=rename
  -t, --token=token
  -t, --to=to          [default: webp]
  --help               show CLI help
  --version            show CLI version
```

_See code: [src/commands/start.js](https://github.com/SqueezeIMG/squeezeimg/blob/v0.0.1/src/commands/start.js)_
<!-- commandsstop -->
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

## `squeezeimg start`

```
USAGE
  $ squeezeimg start

OPTIONS
  -d, --dir=dir        [default: /home/pinta/Projects/SqueezeIMG/squeezeimg]
  -m, --method=method  [default: compress]
  -q, --qlt=qlt        [default: 60]
  -r, --rename=rename
  -t, --token=token
  -t, --to=to          [default: webp]
  --help               show CLI help
  --version            show CLI version
```
