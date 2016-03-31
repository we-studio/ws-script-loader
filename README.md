# wsScriptTag

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

#### wsScriptTag.insertScriptTag(url, callback)

#### wsScriptTag.loadScriptTag(url)
