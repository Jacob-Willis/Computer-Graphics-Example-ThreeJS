function ParkGround(width, length, depth, widthSegments, heightSegments, depthSegments) {
  const floorGeometry = new THREE.BoxGeometry(width, length, depth, widthSegments, heightSegments, depthSegments);
  const floorMaterial = new THREE.MeshBasicMaterial();
  floorMaterial.color = new THREE.Color(0, 1, 0);
  floorMaterial.wireframe = true;
  
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.castShadow = true;
  console.log(floor);

  return floor;
}
