import Ember from 'ember';

export default Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),

  didInsertElement() {
    this._super(...arguments);
    const socket = this.get('socketIOService').socketFor('http://localhost:8080/');

    socket.on('connection', () => { socket.emit('join', 'some data'); });
    socket.on('messages', (data) => { console.log(data); });
 },
 actions: {
   submit() {
     const socket = this.get('socketIOService').socketFor('http://localhost:8080/');
     const message = this.get('message');

     socket.emit('notifyOutage', message);
   }
 }
});
