squeezeimg
==========
The Squeezeimg-cli is destined to optimize unlimited images without any visible loss in quality.
Using the Squeezeimg-cli you can easily minify the size of all your images, speed up loading of your websites and applications.
You can compress your images of such formats - .png, .jpg/.jpeg, .gif, .svg, .bmp, .tiff.
Also allows you to convert your images to webP, avif and jp2 format.
Try the functions right now. To do this, go to https://squeezeimg.com/.


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
First install Node.js and npm. You can do it [here](https://nodejs.org/en/download/package-manager/).
```sh-session
$ npm install -g @pintawebware/squeezeimg
$ squeezeimg (-v|--version|version)
@pintawebware/squeezeimg/0.0.11 linux-x64 node-v14.16.0
$ squeezeimg (help|--help)
$ squeezeimg (help|--help) start
USAGE
  $ squeezeimg start [OPTIONS]
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`squeezeimg version`](#usage)
* [`squeezeimg help start`](#squeezeimg-help-start)
* [`squeezeimg start`](#squeezeimg-start)

## `squeezeimg help start`

Displays all options to start for squeezeimg.
Includes descriptions and usage examples.

```
USAGE
  $ squeezeimg help start

```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `squeezeimg start`

```
USAGE

  To start compress use this command:
  $ squeezeimg start -d /your/directory -t YOUR_TOKEN

  To start convert, use this command:
  $ squeezeimg start -d /your/directory -t YOUR_TOKEN -m convert --to webp/jp2/avif

  To get full info about options, use this command:
  $ squeezeimg help start


OPTIONS
  -d, --dir=dir        [default: installed folder]
                       [example: /your/directory/Pictures]

  -t, --token=token    [example: qWe123rTy456uPi789] - Required

  -m, --method=method  [default: compress]
                       [example: convert]

  -q, --qlt=qlt        [default: 60]
                       [example: 80]

  -r, --rename=rename  [default: false]
                       [example: true]

  --to, --to=to        [default: webp]
                       [example: jp2]
                       [example: avif]

  --help               show CLI help
  --version            show CLI version
```
_To get token, follow this [link](https://squeezeimg.com/account/api)_

_See code: [src/commands/start.js](https://gitlab.com/kirians/squeezeimg-cli/-/blob/master/src/commands/start.js)_
<!-- commandsstop -->