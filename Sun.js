function Sun(radius) {
  var geometry = new THREE.SphereGeometry(radius, 32, 32);
  var material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/The Park/Resources/sunTexture.png') });

  var sphere = new THREE.Mesh(geometry, material);

  var translation = new THREE.Matrix4();
  translation.makeTranslation(70, 0, 0);
  sphere.applyMatrix(translation);

  sphere.applyMatrix(translation);

  sphere.geometry.computeBoundingBox();

  return sphere;
}