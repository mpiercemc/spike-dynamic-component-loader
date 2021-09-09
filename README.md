Example from angular IO
https://angular.io/guide/dynamic-component-loader

questions:
dependencies - Shared things. Where do we put these?
  * ex: where does identity put avatar component?   
  * does record config factory go in shared or record-config?
  
  * how do I ensure they created a component that will work with my factory
    - see projects\form-execution-library\src\lib\models\custom-component-type.ts

  * scrabble tiles - dynamically loaded - we don't know which ones we should be loading - what if a new defined. How do I prevent RExecution from changing their code.
    * if the domain adding the component to the registry rights checks before adding it, then only authorized scrabble tiles would appear.
      - projects\colors-library\src\lib\colors-library.module.ts
    * how do I order them
      - execution figures out how they order there stuff
        - execution registry interface requires enough information to know how/where to load (order) the scrabble tile
        - you could tag your scrabble tile you're registering in a specific way so config knows where it should be loaded (ex: specific tab) - and then config could sort them alphabetically or whatever
        - see projects\form-execution-library\src\lib\models\custom-component-type.ts

  
  * execution
    * how do I access/store data
      - make the ControlValueAccessor interface required to be implemented to components that can register to be dynamically loaded in execution (gives read/write access to component)

  * undo/redo? - how can I ask a custom control to undo a config step?
     - add undo/redo interface that must be implemented to the component return type for the register function (Yes can do)
     - like ControlValueAccessor see - \projects\form-execution-library\src\lib\models\custom-component-type.ts


  * ###Current example: You have to reload all the things every time? Can we avoid this? We don't think is necessary.
    * how do I dynamically insert a component into the list of dynamically rendered components?
    * how do I delete a component from a list of dynamically created components?
    * how do I update the properties (data) of a component that was dynamically generated?

