CodeMirror.defineSimpleMode("gcode", {
  start: [
    {regex: /;.*$/, token: "comment"},
    {regex: /G0|G1/, token: "gcode-move"},
    {regex: /G\d+/, token: "gcode"},
    {regex: /M\d+/, token: "mcode"},
    {regex: /T\d+/, token: "toolcode"},
    {regex: /[XY]/, token: "xy-param"},
    {regex: /[Z]/, token: "z-param"},
    {regex: /[E]/, token: "extrude-param"},
    {regex: /[F]/, token: "feedrate-param"},
    {regex: /[IJKDHQSPR]/, token: "other-param"},
    {regex: /[-+]?(?:\.\d+|\d+\.?\d*)/, token: "number"},
  ],
  meta: {
    lineComment: ";"
  }
});


