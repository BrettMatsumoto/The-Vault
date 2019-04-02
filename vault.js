'use strict';
module.exports = function() {
  let myVault = {};

  const setValue = function(key,value){
    if (!key || !value){
      return null;
    } else {
      myVault.key = value;
    }
  }

  const getValue = function (key){
    if (myVault.key){
      return myVault.key;
    } else {
      return null;
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  }
}