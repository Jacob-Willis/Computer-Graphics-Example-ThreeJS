function Sun(radius) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/The Park/Resources/sunTexture.png') });
  material.color = new THREE.Color(1, 1, 1);
  material.side = THREE.DoubleSide;

  var sphere = new THREE.Mesh(geometry, material);

  // Code for the lighting of the sun
  light = new THREE.SpotLight(0xdfebff, 1.75);

  light.castShadow = true;
  light.shadowCameraVisible = true;

  light.shadowMapWidth = 512;
  light.shadowMapHeight = 512;

  var d = 200;

  light.shadowCameraLeft = -d;
  light.shadowCameraRight = d;
  light.shadowCameraTop = d;
  light.shadowCameraBottom = -d;

  light.shadowCameraFar = 1000;
  light.shadowDarkness = 0.2;

  sphere.geometry.computeBoundingBox();

  var sunGroup = new THREE.Group();
  sunGroup.add(sphere);
  sunGroup.add(light);

  return sunGroup;
}