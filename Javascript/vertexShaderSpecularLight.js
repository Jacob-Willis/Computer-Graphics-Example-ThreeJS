//varying vec3 vColor;

//void main()
//{
//  vec4 ViewPosition = modelViewMatrix * vec4(position, 1.0);
//  gl_Position = projectionMatrix * ViewPosition;

//  vec3 ViewNormal = normalize(normalMatrix * normal);
//  const vec3 Viewlight = vec3(0.5, 0.2, 1.0);
//  float diffuseComp = dot(ViewNormal, Viewlight);
//  diffuseComp = clamp(diffuseComp, 0.0, 1.0);

//  vec3 ViewDir = vec3(0.0, 0.0, 1.0);
//  vec3 halfWayVect = normalize(ViewDir + Viewlight);
//  float specularComp = dot(halfWayVect, ViewNormal);
//  specularComp = clamp(specularComp, 0.0, 1.0);
//  specularComp = pow(specularComp, 50.0);

//  const vec3 diffuseCol = vec3(0.0, 0.0, 1.0);
//  const vec3 specularCol = vec3(1.0);
//  vColor = diffuseComp * diffuseCol + specularComp * specularCol;
//}

var vertexShaderSpecularLightSource = `varying vec3 vColor;

void main()
{
  vec4 ViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * ViewPosition;

  vec3 ViewNormal = normalize(normalMatrix * normal);
  const vec3 Viewlight = vec3(0.5, 0.2, 1.0);
  float diffuseComp = dot(ViewNormal, Viewlight);
  diffuseComp = clamp(diffuseComp, 0.0, 1.0);

  vec3 ViewDir = vec3(0.0, 0.0, 1.0);
  vec3 halfWayVect = normalize(ViewDir + Viewlight);
  float specularComp = dot(halfWayVect, ViewNormal);
  specularComp = clamp(specularComp, 0.0, 1.0);
  specularComp = pow(specularComp, 50.0);

  const vec3 diffuseCol = vec3(0.0, 0.0, 1.0);
  const vec3 specularCol = vec3(1.0);
  vColor = diffuseComp * diffuseCol + specularComp * specularCol;
}`
  ;