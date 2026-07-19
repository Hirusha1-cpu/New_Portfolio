import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Fixed full-screen Three.js background: a slowly-rotating network of
 * nodes connected by lines, like a blockchain / distributed graph.
 * Sits behind all page content (z-0), pointer-events disabled.
 */
export default function BlockchainBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const NODE_COUNT = 55;
    const CONNECT_DISTANCE = 3.4;
    const AMBER = new THREE.Color("#fbbf24");
    const TEAL = new THREE.Color("#2dd4bf");

    // --- scene / camera / renderer -------------------------------------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // --- group holding the whole network, so we can rotate it as one --
    const group = new THREE.Group();
    scene.add(group);

    // --- nodes -----------------------------------------------------------
    const nodeGeometry = new THREE.OctahedronGeometry(0.09, 0);
    const nodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const color = Math.random() > 0.5 ? AMBER : TEAL;
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(nodeGeometry, material);

      // spread nodes through a rough sphere volume
      const radius = 7 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      mesh.userData.baseY = mesh.position.y;
      mesh.userData.floatSpeed = 0.3 + Math.random() * 0.5;
      mesh.userData.floatOffset = Math.random() * Math.PI * 2;

      nodes.push(mesh);
      group.add(mesh);
    }

    // --- connecting lines between nearby nodes --------------------------
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.25,
    });
    const linePositions = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < CONNECT_DISTANCE) {
          linePositions.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          );
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    // --- animation loop ---------------------------------------------------
    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.05;
      group.rotation.x = Math.sin(t * 0.03) * 0.15;

      nodes.forEach((n) => {
        n.position.y =
          n.userData.baseY +
          Math.sin(t * n.userData.floatSpeed + n.userData.floatOffset) * 0.15;
        n.rotation.x += 0.004;
        n.rotation.y += 0.004;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // --- resize handling ---------------------------------------------------
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- cleanup ---------------------------------------------------------
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      nodeGeometry.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      nodes.forEach((n) => n.material.dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
