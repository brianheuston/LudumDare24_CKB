function Enemy(fileName, rect) {
    LivingObject.call(this, fileName, rect);
}

Enemy.prototype = Object.create(new LivingObject(), {
    loot: { value: null }
}
