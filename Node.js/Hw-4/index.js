const fs = require('node:fs');

const employee = { "name": "Employee 1 Name", "salary": 2000 };

(async () => {
    /* Create */
    console.log(await create(employee));

    /* Read */
    console.log(await read());

    /* Update */
    employee.salary = 3000;
    console.log(await update(employee));

    /* Delete */
    console.log(await deleteFile());

})()



/* CREATE */
function create(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('employees.json', JSON.stringify(data), 'utf8', (err, data) => {
            if (err) reject("Dosya oluşturulamadı");

            resolve("Dosya oluşturuldu");
        })

    });

}

/* READ */
function read() {
    return new Promise((resolve, reject) => {
        fs.readFile('employees.json', 'utf8', (err, data) => {
            if (err) reject("Dosya okunamadı");
            resolve(data);
        })

    });
}


/* UPDATE */
async function update(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('employees.json', JSON.stringify(data), 'utf8', (err) => {
            if (err) reject("Dosya güncellenemedi");

            resolve(`Dosya Güncellendi`)
        })
    }).then(async (data) => {
        return `${data}: ${await read()}`
    }).catch((err) => {
        return err;
    });
}

/* DELETE */
function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink('employees.json', (err) => {
            if (err) reject("Dosya silinemedi");
            resolve("Dosya silindi");
        })

    });
}

