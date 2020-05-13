function Sun(radius) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/The Park/Resources/sunTexture.png') });
  material.color = new THREE.Color(1, 1, 0);
  material.side = THREE.DoubleSide;

  var sphere = new THREE.Mesh(geometry, material);
  sphere.castShadow = false;
  sphere.receiveShadow = false;

  //var sunLocation = new THREE.Vector3(0, 110, 0);
  //sphere.position.x = sunLocation.x;
  //sphere.position.y = sunLocation.y;
  //sphere.position.z = sunLocation.z;
  //console.log(sphere.position);

  // Code for the lighting
  spotLight = new THREE.SpotLight(new THREE.Color(1, 1, 1), 1);
  spotLight.target = parkGround;
  spotLight.castShadow = true;
  spotLight.angle = Math.PI / 2;

  //var lightLocation = new THREE.Vector3(0, 110, 0);
  //spotLight.position.x = lightLocation.x;
  //spotLight.position.y = lightLocation.y;
  //spotLight.position.z = lightLocation.z;
  //console.log(spotLight.position);
  //

  //

  //var spotlightHelper = new THREE.SpotLightHelper(spotLight);
  //scene.add(spotlightHelper);

  sphere.geometry.computeBoundingBox();

  var sunGroup = new THREE.Group();
  sunGroup.add(sphere);
  sunGroup.add(spotLight);

  return sunGroup;
}