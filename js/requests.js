var URL_cats = 'https://api.thecatapi.com/v1/images/search'
var api_key = 'live_nQaV2rAWiMpU642YGwytDwMDv6t48OAUVs1PklfDv92T8r2weL68u0jcBAYFLL4y'

buildTable()

async function get_cats_request(limit) {
    return new Promise((resolve) => {
        fetch(URL_cats + '?limit=' + limit + '&api_key=' + api_key, {
                method: 'GET',
            }).then(res => res.json())
            .catch(error => console.error('Error', error))
            .then(response => resolve(response));
    });
};


async function get_cats(limit) {
    if (limit === undefined) {
        limit = 50
    }
    response = await get_cats_request(limit)

    let array = []

    for (let i = 0; i < response.length; i++) {
        array.push(response[i].url)
    }

    return array
}

async function buildTable(limit, id) {
    if (limit === undefined) {
        limit = 5
    }
    console.log('entro')
    data = await get_cats(limit)
    let table_data = document.getElementById(id);
    let index_li = 1;

    for (let i = 0; i < data.length; i++) {
        let row = `<li class="list_cats_li" id="indx_cts_li_${index_li}">
                        <div class="circle_cat">
                        <img src="${data[i]}">
                        </div>
                </li>`

        table_data.innerHTML += row;
        index_li = index_li + 1;
    }
}

async function buildTable2(limit, id) {
    if (limit === undefined) {
        limit = 5
    }
    console.log('entro en tabla 2')
    data = await get_cats(limit)
    let table_data = document.getElementById(id);

    for (let i = 0; i < data.length; i++) {
        let row = `<div>
                        <img src="${data[i]}">
                    </div>`

        table_data.innerHTML += row;
    }
}