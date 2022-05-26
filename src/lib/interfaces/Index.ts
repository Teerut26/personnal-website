import type { Page } from './Page';
import type { PersonnelApi } from './PersonnelApi';

export interface Index {
	data: Data;
}

export interface Data {
	pages: Page[];
	personnelApi: PersonnelApi[];
}


