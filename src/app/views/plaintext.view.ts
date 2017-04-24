import {Component} from '@angular/core';
import {HashResult} from '../hash-result';

import * as CryptoJS from 'crypto-js';

const INPUT = 'Input';
const NA = 'N/A';
const INPUT_EMPTY = {algorithm: INPUT, hash: NA};

@Component({
  selector: 'hashee-plaintext',
  templateUrl: './plaintext.view.html'
})
export class PlaintextViewComponent {
  plaintext = '';
  hashes: HashResult[] = [INPUT_EMPTY];
  plaintextLastSeen = this.plaintext;

  onPlaintextKeyup(event: any) {
    console.log(this.plaintext + ' (+' + event.key + ')');
    const plaintext = this.plaintext;

    if (plaintext.length === 0) {
      INPUT_EMPTY.hash = 'N/A';
      this.hashes = [INPUT_EMPTY];
    } else if (plaintext !== this.plaintextLastSeen) {
      this.hashes = [
        {algorithm: INPUT, hash: plaintext},
        {algorithm: 'MD5', hash: CryptoJS.MD5(plaintext)},
        {algorithm: 'RIPEMD160', hash: CryptoJS.RIPEMD160(plaintext)},
        {algorithm: 'SHA-1', hash: CryptoJS.SHA1(plaintext)},
        {algorithm: 'SHA-224', hash: CryptoJS.SHA224(plaintext)},
        {algorithm: 'SHA-256', hash: CryptoJS.SHA256(plaintext)},
        {algorithm: 'SHA-384', hash: CryptoJS.SHA384(plaintext)},
        {algorithm: 'SHA-512', hash: CryptoJS.SHA512(plaintext)},
        {algorithm: 'SHA-3', hash: CryptoJS.SHA3(plaintext)},
      ];
    }

    this.plaintextLastSeen = plaintext;
  }
}
