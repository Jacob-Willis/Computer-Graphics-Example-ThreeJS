function ParkGround(width, length, depth, widthSegments, heightSegments, depthSegments) {
  const floorGeometry = new THREE.BoxGeometry(width, length, depth, widthSegments, heightSegments, depthSegments);
  const floorMaterial = new THREE.MeshLambertMaterial();
  floorMaterial.color = new THREE.Color(0, 0, 1);
  floorMaterial.wireframe = false;
  
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.castShadow = true;
  floor.receiveShadow = false;

  return floor;
}
