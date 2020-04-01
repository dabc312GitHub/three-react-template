# Three React Template/Sandbox
A sandbox for webGL projects.

This project aims to provide a template, code structure/organization, as well as a set of tools to ease WebGL apps development using Three.js and React.js.

Generated from create-react-app (react) and build on top of react-three-fiber library.

*[Live Demo](https://etienne1911.github.io/three-react-template/)*

## Goals/features
- provide a clean way to code and structure/organize a 3d web-app
- ready to code: avoid boilerplate code at maximum
- ease code reusability accross projects by sharing common components (helpers, UI,..), ressources (material catalog)
- sandbox mode: list all projects currently worked on and enable switching between them easily
- allowing data exchange between engine and components + UI through state store
- decorelate UI and 3D for sake of code clarity while providing instant refresh/update

## Embedded libraries:
- Three.js: webgl 3d graphics
- React.js: UI and browser integration
- React-Three-Fiber: ThreeJS integration with React
- Typescript support
- React Router(react-router-dom)
- State management library (Zustand)
- (Ammo.js: physics engine) soon

# Usage

## Installation

Nodejs + npm required. 
Once project cloned with git, 'npm i' in project's directory to install dependancies

## Running

- launch development server as any react app project by typing 'npm start' in project's dir
- access at 'localhost:3000' in browser

## Create new sample 

- add a new file in samples dir following code template from another sample
- add new entry in samples/index with your new sample ref
- directly access new sample with url: `localhost:3000/<SampleName>

## Usage with VSCode
if you plan on using VSCode for dev, you can benefit from debugging feature directly in the editor.
For that use `Debugger for Chrome` and modify .vscode/launch.json to adapt configuration to your machine.

# Showcase
The samples given are voluntarily basic but shows most features :
- Sandbox with sample browsing
- Animation + materials/shader/texture load (Basic Demo)
- Sample cases selection (for test samples)
- Overlay on top of graphics to display UI infos (+ control engine)
- 2 way data exchanges between UI and Engine and automatic refresh through states
(- Display of 3d model => todo)

# Source code organization and folder structure:

- /src/components/: 3D (based on react-three-fiber model) + UI (classic react components) components to be reused accross projects 
- /src/samples/: Demos and tests sample.
- /src/samples/index: Samples listing 
- /src/resources/assets/: every thing that isn't code (images, 3d models, ..)
- /src/resource/catalogs/: materials, textures, shaders, lights resources
- /src/common: some common code like global states and constants can be put here
- /src/dts: for missing typescript types def

