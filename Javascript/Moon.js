function Moon(radius) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/The Park/Resources/moon_texture_tilable.png') });
  material.color = new THREE.Color(1, 1, 1);
  material.side = THREE.DoubleSide;

  var sphere = new THREE.Mesh(geometry, material);
  sphere.castShadow = false;
  sphere.receiveShadow = false;

  // Code for the lighting
  spotLight = new THREE.SpotLight(new THREE.Color(1, 1, 1), 0.4);
  spotLight.target = parkGround;
  spotLight.castShadow = true;
  spotLight.angle = Math.PI / 2;

  sphere.geometry.computeBoundingBox();

  var sunGroup = new THREE.Group();
  sunGroup.add(sphere);
  sunGroup.add(spotLight);

  return sunGroup;
}