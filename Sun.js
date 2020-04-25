function Sun(radius) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32);
  var material = new THREE.MeshPhongMaterial(/*{ map: new THREE.TextureLoader().load('/The Park/Resources/sunTexture.png') }*/);
  material.color = new THREE.Color(0, 1, 0);
  material.emissive = new THREE.Color(1, 1, 0);
  material.emissiveIntensity = 0.7;

  var sphere = new THREE.Mesh(geometry, material);
  sphere.castShadow = false;
  sphere.receiveShadow = false;

  spotlight = new THREE.SpotLight(new THREE.Color(1, 1, 1), 0.7);
  spotlight.target = parkGround;
  spotlight.castShadow = true;
  spotlight.angle = Math.PI / 2;

  //var spotlightHelper = new THREE.SpotLightHelper(spotlight);
  //scene.add(spotlightHelper);

  sphere.geometry.computeBoundingBox();

  var sunGroup = new THREE.Group();
  sunGroup.add(sphere);
  sunGroup.add(spotlight);
  //sunGroup.add(spotlightHelper);

  return sunGroup;
}