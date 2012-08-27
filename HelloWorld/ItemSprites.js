function Item(rect, itemInfo) {
  this.rect = rect;
  this.itemInfo = itemInfo;
}

Item.prototype.init = function(layer) {
  var spriteBatchNode = new cc.SpriteBatchNode.create("Resources/oryx_lofi/" + this.itemInfo.icon.image);
  this.sprite = cc.Sprite.createWithBatchNode(spriteBatchNode, this.rect);
  this.layer = layer;
}