import CryptoJS from 'crypto-js';

// 对请求的加密 注意：key要和后端一致
export const encode = (data: any, key = 'LFcRvbDRJshQzmlv') => {
  const KEY = key;
  const keyHex = CryptoJS.enc.Utf8.parse(KEY);
  const word = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
  const option = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 };
  const encrypted = CryptoJS.DES.encrypt(word, keyHex, option);
  return encrypted.toString();
};

// 对请求的解密 注意：key要和后端一致
export const decode = (data: any, key = 'LFcRvbDRJshQzmlv') => {
  // const ivStr = key.substring(0, 16);
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const option = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 };
  const decrypted = CryptoJS.DES.decrypt(data, keyHex, option);

  return decrypted.toString(CryptoJS.enc.Utf8);
};
