# Open Roberta Lab -  Circuit Visualization

This project is a repository for Circuit Visualization for use by Open Roberta Lab. This library integrates with the Open Roberta Lab server to allow viewing of circuits in the settings tab.

![image](https://github.com/santorsilas/openroberta-lab-configuration/blob/master/pictures/Screenshot%20from%202020-08-30%2004-02-18.png)

This is a project developed by Silas Ribeiro, as part of the Google Summer of Code 2020, with mentors Beate Jost and
Patrick Werner (boonto).


The integration of the library with Open Roberta Lab was done from the pull request [#882](https://github.com/OpenRoberta/openroberta-lab/pull/882).

# Prerequisites
- [Node v7.6+](http://nodejs.org/)

# Tech
- [rollup.js](https://rollupjs.org/guide/en/)
- [Babel](https://babeljs.io/)
- [Popper](https://popper.js.org/)
- [Lodash](https://lodash.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Tippy.js](https://atomiks.github.io/tippyjs/)


## Prepare

```
git clone https://github.com/santorsilas/openroberta-lab-configuration.git

cd openroberta-lab-configuration

npm install
```

#### Run

```

npm run dev

```

## Integration with Open Roberta Lab

Run the following command at the terminal.

```
npm run build

```

This will generate the files circuit_visualization.js and circuit_visualization.js.map
In the openroberta-lab clone, paste them into /OpenRobertaServer/staticResources/blockly/plugins.

Also copy the robots folder inside the media and paste in /OpenRobertaServer/staticResources/blockly/media.


## TODO
- [x] Show component wires and ports
- [x] Arduino Uno support
- [x] Arduino Nano support
- [x] Arduino Mega support 
- [x] Open Roberta Server integration
- [ ] Calliope support
- [ ] Change cable color


