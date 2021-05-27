const rings = new Zdog.Illustration({
    element: '.ring',
    resize: 'fullscreen'
});

const ringOne = new Zdog.Ellipse({
    addTo: rings,
    diameter: 100,
    stroke: 20,
    color: '#FFD700',
})

const ringTwo = ringOne.copy({
    addTo: rings,
    diameter: 150,
    stroke: 20,
    color: '#FFD700',
})

const ringThree = ringOne.copy({
    addTo: rings,
    diameter: 200,
    stroke: 20,
    color: '#FFD700',
})


function animateRings (){
    ringOne.rotate.y += 0.06;
    ringTwo.rotate.x += 0.06;
    ringThree.rotate.z += 0.06;
    rings.rotate.x += 0.02;
    rings.rotate.y += 0.02;
    rings.updateRenderGraph();
    requestAnimationFrame(animateRings);
}

animateRings();