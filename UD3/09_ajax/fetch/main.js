window.onload = function () {
    console.log('document loaded');

    fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let employees = response.data
            for (let i = 0; i < employees.length; i++) {
                addRow(employees[i])
            }
        })
}

function addRow(employee) {
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = employee.id
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = employee.employee_name
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = employee.employee_salary
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = employee.employee_age
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}