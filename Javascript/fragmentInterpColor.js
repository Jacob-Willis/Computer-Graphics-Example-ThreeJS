//varying vec3 vColor;

//void main()
//{
//  gl_FragColor = vec4(vColor, 1.0);
//}

var fragmentInterpColorSource =
  "varying vec3 vColor;" +

  "void main() {" +
  "gl_FragColor = vec4(vColor, 1.0);" +
  "}"
  ;