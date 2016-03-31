# wsScriptLoader

Dynamically load scripts in your Angular code.

Brought to life by WeStud.io

## Installation

```
bower install ws-script-tag
```

## Usage

### Inject dependency

```
var myapp = angular.module('myapp', ['wsScriptTag']);
```

### Service 

Anywhere in your code (controller, service, ...), inject `wsScriptTag` to your dependencies and use it as follows:

##### wsScriptTag.insertScriptTag(url, callback)

###### Parameters
- `url`: script you want to load
- `callback`: what to do when it's loaded

###### Description

###### Return value

##### wsScriptTag.loadScriptTag(url)

###### Parameters
- `url`: script you want to load

###### Description

###### Return value
A `$q` promise.
