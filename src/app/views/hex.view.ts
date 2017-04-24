import {Component} from '@angular/core';
import {HashResult} from '../hash-result';

import * as CryptoJS from 'crypto-js';

const INPUT = 'Input';
const NA = 'N/A';
const INPUT_EMPTY = {algorithm: INPUT, hash: NA};

@Component({
  selector: 'hashee-hex',
  templateUrl: './hex.view.html'
})
export class HexViewComponent {
  hex = '';
  hashes: HashResult[] = [INPUT_EMPTY];
  hexLastSeen = this.hex;

  onHexKeyup(event: any) {
    const input = this.hex;

    event.srcElement.id = '';

    if (input.length === 0) {
      INPUT_EMPTY.hash = 'N/A';
      this.hashes = [INPUT_EMPTY];
    } else if (input !== this.hexLastSeen) {
      const hexRegex = /^[0-9A-Fa-f]+$/g;

      hexRegex.lastIndex = 0;
      if (!hexRegex.test(input)) {
        this.hashes = [
          {algorithm: INPUT, hash: 'invalid digits found'},
        ];
        event.srcElement.id = 'warn';
      } else {
        const hexEncoding = CryptoJS.enc.Hex;
        const hex = hexEncoding.parse(input);
        this.hashes = [
          {algorithm: INPUT, hash: hex},
          {algorithm: 'MD5', hash: CryptoJS.MD5(hex)},
          {algorithm: 'RIPEMD160', hash: CryptoJS.RIPEMD160(hex)},
          {algorithm: 'SHA-1', hash: CryptoJS.SHA1(hex)},
          {algorithm: 'SHA-224', hash: CryptoJS.SHA224(hex)},
          {algorithm: 'SHA-256', hash: CryptoJS.SHA256(hex)},
          {algorithm: 'SHA-384', hash: CryptoJS.SHA384(hex)},
          {algorithm: 'SHA-512', hash: CryptoJS.SHA512(hex)},
          {algorithm: 'SHA-3', hash: CryptoJS.SHA3(hex)},
        ];
      }

      this.hexLastSeen = input;
    }
  }
}
