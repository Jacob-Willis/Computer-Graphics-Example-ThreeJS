var gui = new dat.GUI();

function Clouds(cloudCount) {
  let loader = new THREE.TextureLoader();
  loader.load("/The Park/Resources/smoke.png", function (texture) {
    cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
    cloudMaterial = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true
    });
    for (let p = 0; p < cloudCount; p++) {
      let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
      cloud.position.set(
        Math.random() * 800 - 400,
        500,
        Math.random() * 500 - 450
      );
      cloud.position.y = 150;
      cloud.rotation.x = 1.16;
      cloud.rotation.y = -0.12;
      cloud.rotation.z = Math.random() * 360;
      cloud.position.z = 0;
      cloud.material.opacity = 0.6;
      scene.add(cloud);
      cloudParticles.push(cloud);
    }
  });
}