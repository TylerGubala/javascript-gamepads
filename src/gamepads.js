(
    function(exports){
        class Input{
            constructor(){
                this.Gamepad = gamepad;
                this.Type = type;
                this.Index = index;
                this.Value = new Properties.Property();
            }
        }
        class Gamepad{
            constructor(gamepad){
                const Factory = new Events.Factory();

                this.addEventListener = this.addListener = this.on = Factory.addEventListener;
                this.removeEventListener = this.removeListener = Factory.removeEventListener;
                this.once = Factory.once;
                this.dispatchEvent = this.emit = Factory.dispatchEvent;

                this.index = gamepad.index;
                this.buttons = gamepad.buttons;
                this.axes = gamepad.axes;
            }
            update(){

            }
        }
        class Factory{
            constructor(){
                this.Gamepads = new Collections.Collection();
                window.addEventListener('gamepadconnected', this.handleGamepadConnected.bind(this));
                window.addEventListener('gamepaddisconnected', this.handleGamepadDisconnected.bind(this));
            }
            update(event){
                
                this.Gamepads.Members.forEach(function(gamepad){})
            }
            handleGamepadConnected(event){
                this.Gamepads.addMembers([new Gamepad(event.gamepad)]);
            }
            handleGamepadDisconnected(event){
                // Do code
            }
        }
        
    }
)(typeof exports === 'undefined' ? this['Gamepads']={} : exports);
