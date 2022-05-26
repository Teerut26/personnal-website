import axios from 'axios';

export const get = async () => {
	let { data } = await axios.post(
		'https://api-ap-south-1.graphcms.com/v2/cl3jvgnue8p3c01xpgr57fseu/master',
		{
			query: `
            {
                pages{
                  page
                  slug
                }
                personnelApi{
                  id
                  isFemale
                }
              }`,
			variables: null
		}
	);
	return {
		body: {
			data
		}
	};
};
