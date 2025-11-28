function floatToBinary(num) {
 // Check if the number is 0
 if (num === 0) return '0'.repeat(32) + ' (0)';
 
 // Create a DataView to access the binary representation
 let buffer = new ArrayBuffer(4);
 let view = new DataView(buffer);
 view.setFloat32(0, num);
 
 // Get the 32-bit integer representation
 let intRep = view.getUint32(0);
 
 // Convert to binary string and pad with leading zeros
 let binaryStr = intRep.toString(2).padStart(32, '0');
 
 // Format the output: sign | exponent | mantissa
 let signBit = binaryStr.substring(0, 1);
 let exponentBits = binaryStr.substring(1, 9);
 let mantissaBits = binaryStr.substring(9);
 
 return `${signBit} ${exponentBits} ${mantissaBits} (${binaryStr})`;
}
console.log(floatToBinary(result))