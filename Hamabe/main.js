function render(){
    const d=window.scrollY/window.innerHeight;
    document.body.style.backgroundColor=`hsl(${179+50*d}, 100%, ${(0.8-d)*100}%)`;
    requestAnimationFrame(render);
}
render();