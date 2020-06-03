function Rain(rainCount, rainColour, rainSize) {
  rainGeo = new THREE.Geometry();
  for (let i = 0; i < rainCount; i++) {
    rainDrop = new THREE.Vector3(
      Math.random() * 400 - 200,
      Math.random() * 500 - 250,
      Math.random() * 400 - 200
    );
    rainDrop.velocity = {};
    rainDrop.velocity = 0;
    rainGeo.vertices.push(rainDrop);
  }
  rainMaterial = new THREE.PointsMaterial({
    color: rainColour,
    size: rainSize,
    transparent: true
  });
  rain = new THREE.Points(rainGeo, rainMaterial);
  scene.add(rain);
  return rain;
}