document.addEventListener('DOMContentLoaded', () => {
    const designs = document.querySelectorAll('.design');
    designs.forEach(design => {
        const viewer = design.querySelector('.viewer');
        const file = design.getAttribute('data-file');
        // Initialize 3D viewer with Three.js or any other 3D library
        // Example: init3DViewer(viewer, file);
    });
});

