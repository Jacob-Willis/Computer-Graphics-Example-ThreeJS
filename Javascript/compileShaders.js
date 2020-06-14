function compileShaders() {
  var gl = renderer.getContext();

  var program = gl.createProgram();
  var glVertexShader = gl.createShader(gl.VERTEX_SHADER);
  var glFragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(glVertexShader, vertexShaderSimpleSource);
  gl.compileShader(glVertexShader);
  gl.attachShader(program, glVertexShader);

  gl.shaderSource(glFragmentShader, fragmentShaderSimpleSource);
  gl.compileShader(glFragmentShader);
  gl.attachShader(program, glFragmentShader);
}