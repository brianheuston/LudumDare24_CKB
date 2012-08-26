function Enemy(rect) {
    LivingObject.call(this, rect);
}

Enemy.prototype = Object.create(new LivingObject(), {
    loot: { value: null },
    
})
