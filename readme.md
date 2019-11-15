# Template for developing a package in typescript

This is a template project on how to develop a package in typescript.

## Features

* *Linting* support through eslint.
* *Unit-testing* support through ava with debugging support.
* *Formatting* support through prettier.
* *Compiling and building* support through tsc for umd, esm and commonjs.

## Development environment

Primary development environment is Visual Studio Code. For an optimal experience install the following extensions:

* prettier
* eslint

## Commands

* **build**: Build for esm, cjs, umd and typings.
* **build:esm**: Compile and build the source code for esm.
* **build:umd**: Compile and build the source code for umd.
* **build:cjs**: Compile and build the source code for commonjs.
* **build:typings**: Generate typings for the source code.
* **lint**: Run the linter on source code and unit tests.
* **format**: Output the formatted version of the source code.
* **test:once**: Run the unit-tests once.
* **test:watch**: Run the unit-tests and start a watcher to automatically re-run them when needed.
* **test:junit**: Run the unit-tests and output the results to `tap.xml` in a junit compatible format.
* **test:coverage**: Run the unit-tests and generate a coverage report.
