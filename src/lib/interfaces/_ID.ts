import type { PersonnelApi } from "./PersonnelApi"

export interface _ID {
    data: Data
  }
  
  export interface Data {
    pages: Page[]
  }
  
  export interface Page {
    personnelApi: PersonnelApi[]
  }
  
  export interface Position {
    html: string
  }
  
  export interface Image {
    url: string
  }
  
  export interface Page2 {
    page: string
    slug: string
  }
  