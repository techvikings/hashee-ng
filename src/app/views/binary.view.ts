import {Component} from '@angular/core';
import {HashResult} from '../hash-result';

import * as CryptoJS from 'crypto-js';
import {current} from 'codelyzer/util/syntaxKind';

const INPUT = 'Input';
const NA = 'N/A';
const INPUT_EMPTY = {algorithm: INPUT, hash: NA};

@Component({
  selector: 'hashee-binary',
  templateUrl: './binary.view.html'
})
export class BinaryViewComponent {
  file = '';
  hashes: HashResult[] = [INPUT_EMPTY];

  onFileChange(event: any) {
    const file = event.file;
    if (file === '') {
      this.hashes = [INPUT_EMPTY];
    } else {
      const viewInstance = this;
      const fileReader = new FileReader();
      fileReader.onloadstart = function (e) {
        const computing = 'computing...';
        viewInstance.hashes = [
          {algorithm: INPUT, hash: event.file.name},
          {algorithm: 'MD5', hash: computing},
          {algorithm: 'RIPEMD160', hash: computing},
          {algorithm: 'SHA-1', hash: computing},
          {algorithm: 'SHA-224', hash: computing},
          {algorithm: 'SHA-256', hash: computing},
          {algorithm: 'SHA-384', hash: computing},
          {algorithm: 'SHA-512', hash: computing},
          {algorithm: 'SHA-3', hash: computing},
        ];
      };
      fileReader.onloadend = function (e) {
        const encoder = CryptoJS.enc.Latin1;
        const contentEncoded = encoder.parse(fileReader.result);
        viewInstance.hashes = [
          {algorithm: INPUT, hash: event.file.name},
          {algorithm: 'MD5', hash: CryptoJS.MD5(contentEncoded)},
          {algorithm: 'RIPEMD160', hash: CryptoJS.RIPEMD160(contentEncoded)},
          {algorithm: 'SHA-1', hash: CryptoJS.SHA1(contentEncoded)},
          {algorithm: 'SHA-224', hash: CryptoJS.SHA224(contentEncoded)},
          {algorithm: 'SHA-256', hash: CryptoJS.SHA256(contentEncoded)},
          {algorithm: 'SHA-384', hash: CryptoJS.SHA384(contentEncoded)},
          {algorithm: 'SHA-512', hash: CryptoJS.SHA512(contentEncoded)},
          {algorithm: 'SHA-3', hash: CryptoJS.SHA3(contentEncoded)},
        ];
        fileReader.abort();
      };
      fileReader.readAsBinaryString(file);
    }
  }
}
