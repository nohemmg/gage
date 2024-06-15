import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { Box, Center } from '@chakra-ui/react';
import * as THREE from 'three';
const { EffectComposer } = require('three/examples/jsm/postprocessing/EffectComposer');
const { RenderPass } = require('three/examples/jsm/postprocessing/RenderPass');
const { UnrealBloomPass } = require('three/examples/jsm/postprocessing/UnrealBloomPass');

// Étendre avec les modules nécessaires
extend({ EffectComposer, RenderPass, UnrealBloomPass });

const Model = () => {
  const { scene, animations } = useGLTF('/EGG/scene.gltf');
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (scene) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixerRef.current?.clipAction(clip);
        action?.play();
      });

      return () => animations.forEach((clip) => mixerRef.current?.uncacheClip(clip));
    }
  }, [scene, animations]);

  useFrame((_, delta) => mixerRef.current?.update(delta));

  return <primitive object={scene} />;
};

const Effects = () => {
  const { gl, scene, camera } = useThree();
  const composerRef = useRef<InstanceType<typeof EffectComposer> | null>(null);

  useEffect(() => {
    // Éclairage
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    const directionalLight = new THREE.DirectionalLight(0xffa500, 50);
    directionalLight.position.set(0, 1, 1);
    const pointLight = new THREE.PointLight(0xffa500, 2, 50); // Une lumière ponctuelle orange
    pointLight.position.set(5, 3, 5);
    scene.add(ambientLight, directionalLight, pointLight);

    // Post-processing
  const composer = new EffectComposer(gl);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0.1; // Légèrement augmenté pour limiter l'effet aux zones très lumineuses
  bloomPass.strength = 1; // Augmenté pour un effet plus marqué
  bloomPass.radius = 0.5; // Ajustez selon le besoin
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composerRef.current = composer;

    return () => {
      scene.remove(ambientLight, directionalLight, pointLight);
      composer.dispose();
    };
  }, [gl, scene, camera]);

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  });

  return null;
};

const My3DModel: React.FC = () => {
  return (
    <Center height="100%" width="100%">
      <Box width="100%" height="100%">
        <Canvas gl={{ alpha: true }} style={{ background: 'transparent' }}>
          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 11]} />
          <Model />
          <Effects />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        </Canvas>
      </Box>
    </Center>
  );
};

export default My3DModel;

