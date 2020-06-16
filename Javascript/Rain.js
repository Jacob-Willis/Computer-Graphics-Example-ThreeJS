function Rain(rainCount, rainColour, rainSize) {
  var amount = rainCount;
  var radius = 280;

  var positions = new Float32Array(amount * 3);
  var colors = new Float32Array(amount * 3);
  var sizes = new Float32Array(amount);

  var vertex = new THREE.Vector3();
  var color = new THREE.Color(rainColour);

  for (var i = 0; i < amount; i++) {

    vertex.x = (Math.random() * 2 - 1) * radius;
    vertex.y = (Math.random() * (200 - -0) + 0);
    vertex.z = (Math.random() * 2 - 1) * radius;
    vertex.toArray(positions, i * 3);

    color.toArray(colors, i * 3);

    sizes[i] = rainSize;
  }

  var rainGeom = new THREE.BufferGeometry();
  rainGeom.addAttribute('position', new THREE.BufferAttribute(positions, 3));
  rainGeom.addAttribute('customColor', new THREE.BufferAttribute(colors, 3));
  rainGeom.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

  var rainShaderMaterial = new THREE.ShaderMaterial({

    uniforms: {
      color: { value: new THREE.Color(rainColour) },
      pointTexture: { value: new THREE.TextureLoader().load('/img/particle.jpg') }
    },
    vertexShader: vertexShaderSimpleSource,
    fragmentShader: fragmentShaderSimpleSource,

    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true

  });

  rainObj = new THREE.Points(rainGeom, rainShaderMaterial);
  scene.add(rainObj);
}