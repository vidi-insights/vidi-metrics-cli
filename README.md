![Banner][]
# vidi-metrics-cli

- __Lead Maintainer:__ [Jane Quinn][Lead]
- __Sponsor:__ [nearForm][Sponsor]


A cli interface for capturing vidi metrics. It allows users to pass a JSON object from the command line to [vidi-metrics-emitter][emitter].

- __Work in progress__ This module is currently a work in progress.

## Install
To install the system locally, simply clone the repo:

```
git clone https://github.com/vidi-insights/vidi-metrics-cli
```

Next, install and build via npm:

```
npm install
```

## Demo
To run demo for the system you need:

1 in one terminal window cd to [vidi-metrics-emitter][emitter] and run:

```
npm run demo
```
This will run test.js file, which will demonstrate how emitter emitts Json object.
 
2 in another terminal window cd to vidi-metrics-cli and run command :

```
npm run demo
```
This will run vidi-metrics-cli.js file with added example Json object.

## Running
To run with your own JSON file, just add it to command line:

```
node vidi-metrics-cli.js "{name:'process.heap.used',values:{value:'239'},tags:{pid: '123456',tag: 'some-tag}}"
```

## Contributing
The [nearForm][Org] organization encourages __open__ and __safe__ participation.

- [Code of Conduct][CoC]

If you feel you can help in any way, be it with documentation, examples, extra testing, or new
features please get in touch.

## License
Copyright (c) 2016, Jane Quinn and other contributors.
Licensed under [MIT][].



[Banner]: https://raw.githubusercontent.com/vidi-insights/org/master/assets/vidi-banner.png
[Lead]: https://github.com/CodeWriterWriter
[Sponsor]: http://www.nearform.com/
[Emitter]: https://github.com/vidi-insights/vidi-metrics-emitter
[Org]: https://github.com/nearform
[CoC]: ./CoC.md
[MIT]: ./LICENSE

