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

--no-strict # disable strict move, avoids optimize angular, not recommended
--standalone false # This flag disables the standalone mode, not recommended, modern angular is based and recommends to use standalone components

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

> There is also a shorter way to generate components

`ng g c <component-name>`

> If you want to create a component without the spec.ts file which is for unit testing

> needs to be added the following parameter: --skip-tests. Example:

`ng generate component component-name --skip-tests`

> TODO: to be completed
> mini tutorials and explications during the development and teaching in short words
