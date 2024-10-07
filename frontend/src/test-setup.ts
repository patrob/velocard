import '@analogjs/vitest-angular/setup-zone';
import '@testing-library/jest-dom';

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';
import { configure } from '@testing-library/dom';

configure({ testIdAttribute: 'data-cy' });

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
