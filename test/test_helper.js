import jsdom from 'jsdom';
import expect from 'expect';

// no longer being used once Karma is set up
// import { expect } from 'chai';
// import sinon from 'sinon';
//
global.expect = expect;
// global.sinon = sinon;
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = {
  userAgent: 'node.js'
}
