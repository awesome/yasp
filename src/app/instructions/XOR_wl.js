{
  "name": "XOR",
  "description": "",
  "code": [
    {
      "value": 0x20
    },
    {
      "value": "110",
      "length": 3
    }
  ],
  "params": [
    {
      "type": "r_word"
    },
    {
      "type": "l_word"
    }
  ],
  "checkFlags": { "z": true },
  "exec": function (rword1, lword2) {
    var newVal = rword1.value ^ lword2.value;
    this.writeWordRegister(rword1.address, newVal & 0xFFFF);
  }
}