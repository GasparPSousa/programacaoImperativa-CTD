function cube(x) {
    return x * x * x;
  }
  
  const foo = Math.PI + Math.SQRT2;
  
  var graph = {
    options: {
        color:'white',
        thickness:'2px'
    },
    draw: function() {
        console.log('Da função draw de graph');
    }
  }

  
  
  export { cube, foo, graph };