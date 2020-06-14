//varying vec3 vColor;

//void main()
//{
//  vec3 light = vec3(0.5, 0.2, 1.0);
//  light = normalize(light);
//  vec3 ViewNormal = normalize(normalMatrix * normal);
//  float dProd = dot(ViewNormal, light);
//  dProd = clamp(dProd, 0.0, 1.0);
//  vColor = vec3(dProd);
//  vec4 ViewPosition = modelViewMatrix * vec4(position, 1.0);
//  gl_Position = projectionMatrix * ViewPosition;
//}


//// myVertextShader.glsl.js
//var vertexShaderDiffuseLight =
//  "varying vec3 vColor;" +
//  "void main() {" +
//  "   vec3 light = vec3(0.5, 0.2, 1.0);" +
//  "   light = normalize(light);" +
//  "   vec3 ViewNormal = normalize(normalMatrix * normal);" +
//  "   float dProd = dot(ViewNormal, light);" +
//  "   dProd = clamp(dProd, 0.0, 1.0);" +
//  "   vColor = vec3(dProd);" +
//  "   vec4 ViewPosition = modelViewMatrix * vec4(position, 1.0);" +
//  "   gl_Position = projectionMatrix * ViewPosition;" +
//  "}"
//  ;


var vertexShaderDiffuseLightSource = `varying vec3 vColor;
 void main() {
     vec3 light = vec3(0.5, 0.2, 1.0);
     light = normalize(light);" +
     vec3 ViewNormal = normalize(normalMatrix * normal);
     float dProd = dot(ViewNormal, light);
     dProd = clamp(dProd, 0.0, 1.0);
     vColor = vec3(dProd);
     vec4 ViewPosition = modelViewMatrix * vec4(position, 1.0);
     gl_Position = projectionMatrix * ViewPosition;
  }`
  ;
