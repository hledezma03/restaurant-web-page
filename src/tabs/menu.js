function menuContent () {
    const info = document.createElement('div');
    info.innerHTML = `<h2 class="title-contact">Menu</h2>
    <div class="menu-section">
        <p class="title-section">APPETIZER</p>
        <p class="description">Assorted empanadas and gazpacho with fried almonds</p>
    </div>
    <div class="menu-section">
        <p class="title-section">SALAD</p>
        <p class="description">Kale salad with spicy quinoa and jicama and mago slaw</p>
    </div>
    <div class="menu-section">
        <p class="title-section">MAIN COURSE</p>
        <p class="description">Beef short rib tacos or snapper with avocado salsa or charret street corn risotto</p>
    </div>
    <div class="menu-section">
        <p class="title-section">DESSERT</p>
        <p class="description">Gelato sundae bar and local pie and tart bar</p>
    </div>`


    return info;
}

export {menuContent}