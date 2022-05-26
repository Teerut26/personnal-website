export interface PersonnelApi {
	id: string;
	fullname: string;
	enter_government: string;
	position: Position;
	image: Image;
	isFemale: boolean;
	isCenter: boolean;
}

export interface Position {
	html: string;
}

export interface Image {
	url: string;
}
