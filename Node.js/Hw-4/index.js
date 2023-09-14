const fs = require('node:fs');

const data = { "name": "Employee 1 Name", "salary": 2000 };

/* Create */
create(data);

/* Read */
read();

/* Update */
data.salary = 3000;
update(data);

/* Delete */
deleteFile();




/* CREATE */
function create(data) {
    fs.writeFileSync('employees.json', JSON.stringify(data), 'utf8')
    console.log('Dosya oluşturuldu.');
}

/* READ */
function read() {
    const data = fs.readFileSync('employees.json', 'utf8');
    console.log(data);
}

/* UPDATE */
function update(data) {
    fs.writeFileSync('employees.json', JSON.stringify(data), 'utf8')
    console.log('Dosya güncellendi.');
    read();
}

/* DELETE */
function deleteFile() {
    fs.unlinkSync('employees.json');
    console.log('Dosya silindi');
}










