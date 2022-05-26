import type { _ID } from '$lib/interfaces/_ID';
import axios from 'axios';

export async function get({ params }) {
	let { data } = await axios.post<_ID>(
		'https://api-ap-south-1.graphcms.com/v2/cl3jvgnue8p3c01xpgr57fseu/master',
		{
			query: `query($slug:String){
                    pages(where: {slug: $slug}) {
                      personnelApi {
                        isCenter
                        fullname
                        position {
                          html
                        }
                        enter_government
                        image {
                          url
                        }
                        page {
                          page
                          slug
                        }
                      }
                    }
                  }
                  `,
			variables: { slug: params.slug }
		}
	);

	if (data.data.pages.length > 0) {
		return {
			body: { data }
		};
	}

	return {
		status: 404
	};
}
