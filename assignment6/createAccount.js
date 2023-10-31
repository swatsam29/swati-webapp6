const params = new URLSearchParams(window.location.search);

const mail = params.get('email');
const password = params.get('password');
const address = params.get('address');
const city = params.get('city');
const state = params.get('state');
const zip = params.get('zip');
const agree = params.get('agree');
const membership = params.get('membership');

const tableBody = document.getElementById('table-body');

const infoArray = [
    { label: 'Email', value: mail },
    { label: 'Password', value: password },
    { label: 'Address', value: address },
    { label: 'City', value: city },
    { label: 'State', value: state },
    { label: 'Zip', value: zip },
    { label: 'Agree', value: agree },
    { label: 'Membership', value: membership }
];

infoArray.forEach(function(info) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${info.label}</td>
        <td>${info.value}</td>
    `;
    tableBody.appendChild(tableRow);
});
