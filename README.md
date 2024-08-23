# angular_bootcamp2024
bootcamp for teaching the angular properly

## How to install the angular cli

First step, you will need to install nodejs.

After that you can install the angular with npm:

`npm install -g @angular/cli`

## Starting a new application

TODO: update the readme.md file from here on

```bash

ng new project--app-name

# optional flags

--no-strict # disable strict move, avoids optimize angular, recommended mode for teaching
--standalone false # disable the standalone mode, again good for teaching
--routing false # disable rooting mode, where it's not used the routing should be disabled, good for teaching x3

```

> How to run the app

```bash
ng serve
# or
npm start # npm start actually calls ng serve command
```

## Install bootstrap on a specific verison

`npm install --save bootstrap@3`

> also after the installation you will need to add the path from bootstrap to angular.json -> styles

## Generate a new component

#### Automatically using the CLI

`ng generate component component-name`

> If you want to create a component without the spec.ts file which is for testing the component

> you need to enter the following parameter: --skip-tests true. Example:

`ng generate component component-name --skip-tests true`

#### Manually

> TODO: to be completed

> TODO: add most suitable description here
> mini tutorials and explications during the development and teaching
