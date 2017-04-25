import {Component} from '@angular/core';
import {HashResult} from '../hash-result';

import * as CryptoJS from 'crypto-js';
import {current} from 'codelyzer/util/syntaxKind';

const INPUT = 'Input';
const EXPECTED = 'Expected hash';
const NA = 'N/A';
const INPUT_EMPTY = {algorithm: INPUT, hash: NA};

const ALGORITHMS = [
  'MD5', 'SHA-1', 'SHA-224', 'SHA-256', 'SHA-384', 'SHA-512', 'SHA-3'
];


@Component({
  selector: 'hashee-validate',
  templateUrl: './validate.view.html'
})
export class ValidateViewComponent {
  file;
  algorithm = '';
  algorithms = ALGORITHMS;
  expected = '';
  hashes: HashResult[] = [INPUT_EMPTY];

  onFileChange(event: any) {
    const file = event.file;
    if (file === '') {
      this.hashes = [INPUT_EMPTY];
    } else {
      this.hashes = [{algorithm: INPUT, hash: file.name}];
    }
    this.file = file;
  }

  validate() {
    let error = false;
    if (this.file === '') {
      console.log('file not set!');
      error = true;
    }
    if (this.algorithm === '') {
      console.log('algorithm not set!');
      error = true;
    }
    if (this.expected === '') {
      console.log('expected not set!');
      error = true;
    }

    if (error) {
      return;
    }

    let hashFunction = CryptoJS.SHA1;
    if (this.algorithm === 'MD5') {
      hashFunction = CryptoJS.MD5;
    } else if (this.algorithm === 'SHA-1') {
      hashFunction = CryptoJS.SHA1;
    } else if (this.algorithm === 'SHA-224') {
      hashFunction = CryptoJS.SHA224;
    } else if (this.algorithm === 'SHA-256') {
      hashFunction = CryptoJS.SHA256;
    } else if (this.algorithm === 'SHA-384') {
      hashFunction = CryptoJS.SHA384;
    } else if (this.algorithm === 'SHA-512') {
      hashFunction = CryptoJS.SHA512;
    } else if (this.algorithm === 'SHA-3') {
      hashFunction = CryptoJS.SHA3;
    }

    const file = this.file;
    const algorithm = this.algorithm;
    const expected = this.expected;
    const viewInstance = this;
    const fileReader = new FileReader();
    fileReader.onloadstart = function (e) {
      viewInstance.hashes = [
        {algorithm: INPUT, hash: file.name},
        {algorithm: EXPECTED, hash: expected},
        {algorithm: algorithm, hash: 'computing...'}
      ];
    };
    fileReader.onloadend = function (e) {
      const encoder = CryptoJS.enc.Latin1;
      const contentEncoded = encoder.parse(fileReader.result);
      const actual = hashFunction(contentEncoded);
      const valid = expected == actual;
      viewInstance.hashes = [
        {algorithm: INPUT, hash: file.name},
        {algorithm: 'Expected ' + algorithm, hash: expected},
        {algorithm: 'Actual ' + algorithm, hash: actual},
        {algorithm: 'Valid', hash: valid}
      ];
    };
    fileReader.readAsBinaryString(file);

  }
}
