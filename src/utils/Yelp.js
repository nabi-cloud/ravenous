// Information to Reach API
const yelpKey = 'm6-XfLvaJAM-MlxfvOeBZk5VJKs1wN7s747RzI_3nv0okc2HBwuGEJcygw6dWHufbznKFAuJx77MPmzoBww2YCDgQO8abRhiBkYmhuQ7U1luU81eypeoLKQ5OOxxZXYx'; // Insert your Yelp API Key here
const yelpBaseUrl = 'https://api.yelp.com/v3';
const searchParams = '/businesses/search?';

// Specific Parameters for Search Requests
const termParam = 'term=';
const locationParam = 'location=';
const sortByParam = 'sort_by=';

// Bypassing CORS Restrictions
const corsUrl = 'https://cors-anywhere.herokuapp.com/';

const GetData = (term, location, sortBy) => {
    const endpoint = yelpBaseUrl + searchParams;

    // Authorization sent to request Header
    const options = {
        headers: {
            Authorization: `Bearer ${ yelpKey }`,
        }
    };
    
    fetch(`${corsUrl}${endpoint}${termParam}${term}&${locationParam}${location}&${sortByParam}${sortBy}`, options)
    .then(response => response.json())
    .then(response => {
        return response.json().businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
        }));
    })
    .catch(err => console.error(err));

    /*
    .then(response => {
        if (response.ok) {
            console.log(response);
            const jsonResponse = response.json();

            return jsonResponse.businesses.map((business) => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
            }));
        }

        throw new Error('Request Failed');
    }, networkError => {
        console.log(networkError.message);
    });
    */
};

export default GetData;