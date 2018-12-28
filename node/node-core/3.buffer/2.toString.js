const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
    // 97 is the decimal ASCII value for 'a'
    buf1[i] = i + 97;
}
console.log(buf1);
console.log('ascii:',buf1.toString('ascii',0,5));

console.log("====================");
const buf2 = Buffer.from('tést');
console.log(buf2.toString('hex')); // 转成十六进制 74c3a97374