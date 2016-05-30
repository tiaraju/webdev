var mycounter = angular.module("counterApp",[]);

mycounter.controller("counterCtrl", countercontroller);

countercontroller.$inject = ['$interval'];

function countercontroller($interval) {

  var STATE_STOP = 0;
  var STATE_START = 1;

  var self = this;

  self.atual = 0;
  self.final = 100;
  self.milli = 100;
  self.state = STATE_STOP;

  var intervalPromisse;

  self.init = function() {
    self.state = STATE_START;
    if (intervalPromisse) {
      $interval.cancel(intervalPromisse);
    }
    intervalPromisse = $interval(function(){
      if (self.state == STATE_START && self.atual < self.final ) {
        self.atual += 1;
      }
    }, self.milli);
  }

  self.stop = function() {
    self.state = STATE_STOP;
  }

  self.reset = function() {
    self.atual = 0;
  }

};