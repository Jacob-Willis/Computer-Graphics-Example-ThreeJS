function Moon(radius) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/The Park/Resources/moon_texture_tilable.png') });
  material.color = new THREE.Color(1, 1, 1);
  material.side = THREE.DoubleSide;
  var sphere = new THREE.Mesh(geometry, material);

  // Code for the lighting of the moon
  light = new THREE.SpotLight(0xdfebff, 0.5);

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

  sphere.receiveShadow = true;
  //sphere.castShadow = true;

  var moonGroup = new THREE.Group();
  moonGroup.add(sphere);
  moonGroup.add(light);

  return moonGroup;
}