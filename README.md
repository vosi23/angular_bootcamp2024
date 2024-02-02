# angular_bootcamp2024
bootcamp for teaching the angular properly

## How to install the angular cli from nodejs

`npm install -g @angular/cli`

## Starting a new application

```bash

ng new project--app-name

# optional flags

--no--strict # disable strict move, avoids optimize angular, recommended for teaching mode
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

#### Manually

> TODO: to be completed

> TODO: add most suitable description here
> mini tutorials and explications during the development and teaching
