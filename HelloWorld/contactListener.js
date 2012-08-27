
contactListener = new Object({
	contacts:[],
	init : function () {},
    BeginContact : function (contact) {
	    this.contacts.push(contact);
    },
    EndContact : function (contact) {
    	this.remove(this.contacts.indexOf(contact));
    },
    remove : function(from, to) {
    	if(from == -1){return;}
	  var rest = this.contacts.slice((to || from) + 1 || this.length);
	  this.contacts.length = from < 0 ? this.contacts.length + from : from;
	  return this.contacts.push.apply(this.contacts,rest);
	},
    PreSolve : function (contact, oldManifold) {},
    PostSolve : function (contact, impulse) {}
})