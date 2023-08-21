function drawZones(zoneList) {
    var container = document.getElementById('zone-image-container');
    
    //  Remove existing circles.
    for (var i = container.children.length - 1; i > 0; i--) {
       container.removeChild(container.children[i]);
    }
    
    //  Add circles.
    for (var i = 0; i < zoneList.length; i++) {
      var zone = document.createElement('div');
      zone.className = 'zone-circle zone-' + zoneList[i];
      container.appendChild(zone);
    }
  }