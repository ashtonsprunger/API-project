let url = 'https://ergast.com/api/f1/drivers.json?limit=1000&offset=0';

fetch(url)
    .then(res => res.json())
    .then(displayResults)
    .catch(err => {
        console.log(err)
    });



function displayResults(json){
    // document.getElementById('drivers').innerHTML = '';
    console.log(json);
    let drivers = json.MRData.DriverTable.Drivers;

    let addTo = document.getElementById('drivers');
    console.log(drivers);

    for(let i = 0; i < drivers.length; i++){
        // console.log(i);
        let current = drivers[i];

        let div = document.createElement('div');
        let title = document.createElement('a');
        let nationality = document.createElement('p');
        let dob = document.createElement('p');

        div.classList.add('driver');

        title.innerText = current.givenName + ' ' + current.familyName;
        title.href = current.url;
        title.target = 'blank';
        nationality.innerText = 'Nationality: ' + current.nationality;
        dob.innerText = 'Date of birth: ' + current.dateOfBirth;


        div.appendChild(title);
        div.appendChild(dob);
        div.appendChild(nationality)
        addTo.appendChild(div);
    }
}