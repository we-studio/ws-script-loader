# wsScriptLoader

Dynamically load scripts in your Angular code.

Brought to life by WeStud.io

## Installation

```
bower install ws-script-loader
```

## Usage

### Inject dependency

```
var myapp = angular.module('myapp', ['wsScriptLoader']);
```

### Service 

Anywhere in your code (controller, service, ...), inject `wsScriptLoader` to your dependencies and use it as follows:

##### wsScriptLoader.insertScriptTag(url, callback)

###### Parameters
- `url`: script you want to load
- `callback`: what to do when it's loaded

###### Description

###### Return value

##### wsScriptLoader.loadScriptTag(url)

###### Parameters
- `url`: script you want to load

###### Description

###### Return value
A `$q` promise.
