// Auto-generated. Do not edit!

// (in-package pimouse_ros.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class LightSensorValues {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.right_forward = null;
      this.right_side = null;
      this.left_side = null;
      this.left_forward = null;
      this.sum_all = null;
      this.sum_forward = null;
    }
    else {
      if (initObj.hasOwnProperty('right_forward')) {
        this.right_forward = initObj.right_forward
      }
      else {
        this.right_forward = 0;
      }
      if (initObj.hasOwnProperty('right_side')) {
        this.right_side = initObj.right_side
      }
      else {
        this.right_side = 0;
      }
      if (initObj.hasOwnProperty('left_side')) {
        this.left_side = initObj.left_side
      }
      else {
        this.left_side = 0;
      }
      if (initObj.hasOwnProperty('left_forward')) {
        this.left_forward = initObj.left_forward
      }
      else {
        this.left_forward = 0;
      }
      if (initObj.hasOwnProperty('sum_all')) {
        this.sum_all = initObj.sum_all
      }
      else {
        this.sum_all = 0;
      }
      if (initObj.hasOwnProperty('sum_forward')) {
        this.sum_forward = initObj.sum_forward
      }
      else {
        this.sum_forward = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type LightSensorValues
    // Serialize message field [right_forward]
    bufferOffset = _serializer.int16(obj.right_forward, buffer, bufferOffset);
    // Serialize message field [right_side]
    bufferOffset = _serializer.int16(obj.right_side, buffer, bufferOffset);
    // Serialize message field [left_side]
    bufferOffset = _serializer.int16(obj.left_side, buffer, bufferOffset);
    // Serialize message field [left_forward]
    bufferOffset = _serializer.int16(obj.left_forward, buffer, bufferOffset);
    // Serialize message field [sum_all]
    bufferOffset = _serializer.int16(obj.sum_all, buffer, bufferOffset);
    // Serialize message field [sum_forward]
    bufferOffset = _serializer.int16(obj.sum_forward, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type LightSensorValues
    let len;
    let data = new LightSensorValues(null);
    // Deserialize message field [right_forward]
    data.right_forward = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [right_side]
    data.right_side = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [left_side]
    data.left_side = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [left_forward]
    data.left_forward = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [sum_all]
    data.sum_all = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [sum_forward]
    data.sum_forward = _deserializer.int16(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 12;
  }

  static datatype() {
    // Returns string type for a message object
    return 'pimouse_ros/LightSensorValues';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c174e6891a013b1ba6a929fcc020e0a3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int16 right_forward
    int16 right_side
    int16 left_side
    int16 left_forward
    int16 sum_all
    int16 sum_forward
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new LightSensorValues(null);
    if (msg.right_forward !== undefined) {
      resolved.right_forward = msg.right_forward;
    }
    else {
      resolved.right_forward = 0
    }

    if (msg.right_side !== undefined) {
      resolved.right_side = msg.right_side;
    }
    else {
      resolved.right_side = 0
    }

    if (msg.left_side !== undefined) {
      resolved.left_side = msg.left_side;
    }
    else {
      resolved.left_side = 0
    }

    if (msg.left_forward !== undefined) {
      resolved.left_forward = msg.left_forward;
    }
    else {
      resolved.left_forward = 0
    }

    if (msg.sum_all !== undefined) {
      resolved.sum_all = msg.sum_all;
    }
    else {
      resolved.sum_all = 0
    }

    if (msg.sum_forward !== undefined) {
      resolved.sum_forward = msg.sum_forward;
    }
    else {
      resolved.sum_forward = 0
    }

    return resolved;
    }
};

module.exports = LightSensorValues;
