var vertexShaderSimpleSource =
  `void main() {
      vec4 ViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * ViewPosition;
  }`
;